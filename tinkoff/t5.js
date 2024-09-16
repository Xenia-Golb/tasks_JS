const readline = require('readline');

// Функция для преобразования времени в секунды, с учетом 24-часового периода
function timeToSeconds(time, startTime) {
    let [hh, mm, ss] = time.split(':').map(Number);
    const [startHh, startMm, startSs] = startTime.split(':').map(Number);

    // Если время после полуночи, добавляем 24 часа (86400 секунд)
    if (hh < startHh || (hh === startHh && mm < startMm) || (hh === startHh && mm === startMm && ss < startSs)) {
        hh += 24;
    }

    return hh * 3600 + mm * 60 + ss;
}

// Используем readline для чтения ввода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let startTimeInSeconds;
let startTime;
let n;
const teams = {};

// Функция для обработки запросов
function processRequest(teamName, requestTime, serverId, result) {
    // Если команда еще не в списке, добавляем ее
    if (!teams[teamName]) {
        teams[teamName] = {
            accessed: 0,
            penalty: 0,
            servers: {}  // Для отслеживания неудачных попыток
        };
    }

    const team = teams[teamName];
    const timeInSeconds = timeToSeconds(requestTime, startTime);
    const minutesPassed = Math.floor((timeInSeconds - startTimeInSeconds) / 60);

    // Обработка запроса
    if (result === 'ACCESSED') {
        if (!team.servers[serverId]) {
            team.servers[serverId] = { failedAttempts: 0, accessed: false };
        }

        // Если сервер уже взломан, игнорируем повторные взломы
        if (team.servers[serverId].accessed) return;

        // Увеличиваем количество взломанных серверов
        team.accessed += 1;
        // Добавляем штрафное время: время с момента начала + штраф за неудачные попытки
        team.penalty += minutesPassed + team.servers[serverId].failedAttempts * 20;
        // Отмечаем, что сервер взломан
        team.servers[serverId].accessed = true;
    } else if (result === 'DENIED' || result === 'FORBIDEN') {
        if (!team.servers[serverId]) {
            team.servers[serverId] = { failedAttempts: 0, accessed: false };
        }
        // Увеличиваем количество неудачных попыток
        team.servers[serverId].failedAttempts += 1;
    }
}

// Чтение данных с подписями
const inputLines = [];

console.log("Введите время начала хакатона (формат hh:mm:ss):");

rl.on('line', (line) => {
    inputLines.push(line);

    // Когда вводятся все данные (время начала, количество запросов и запросы)
    if (inputLines.length === 1) {
        console.log("Введите количество запросов:");
    } else if (inputLines.length === 2) {
        n = parseInt(inputLines[1], 10);
        console.log(`Введите описание запросов (${n} строк):`);
    } else if (inputLines.length === 2 + n) {
        rl.close();
    }
});

rl.on('close', () => {
    startTime = inputLines[0];  // Сохраняем время начала как строку
    startTimeInSeconds = timeToSeconds(startTime, startTime);  // Начало в секундах
    n = parseInt(inputLines[1], 10);

    // Обрабатываем запросы
    for (let i = 2; i < 2 + n; i++) {
        const [teamName, requestTime, serverId, result] = inputLines[i].match(/"([^"]+)" (\d{2}:\d{2}:\d{2}) ([A-Z]) ([A-Z]+)/).slice(1);
        processRequest(teamName, requestTime, serverId, result);
    }

    // Преобразуем объект команд в массив и сортируем
    const sortedTeams = Object.entries(teams).sort((a, b) => {
        const [teamA, dataA] = a;
        const [teamB, dataB] = b;

        // Сортировка по количеству взломанных серверов (по убыванию)
        if (dataA.accessed !== dataB.accessed) {
            return dataB.accessed - dataA.accessed;
        }

        // Сортировка по штрафному времени (по возрастанию)
        if (dataA.penalty !== dataB.penalty) {
            return dataA.penalty - dataB.penalty;
        }

        // Лексикографическая сортировка по названию команды
        return teamA.localeCompare(teamB);
    });

    // Вывод результатов с местами
    let rank = 1;
    for (let i = 0; i < sortedTeams.length; i++) {
        const [teamName, data] = sortedTeams[i];
        console.log(`${rank} "${teamName}" ${data.accessed} ${data.penalty}`);

        // Если у следующей команды результаты будут хуже, увеличиваем ранг
        if (i < sortedTeams.length - 1) {
            const nextTeamData = sortedTeams[i + 1][1];
            if (nextTeamData.accessed < data.accessed || nextTeamData.penalty > data.penalty) {
                rank = i + 2;
            }
        }
    }
});
