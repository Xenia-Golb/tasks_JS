module.exports = function getCache(maxSize) {
    const cache = new Map();
    let totalItems = 0;

    return {
        setCacheChunk: function (data) {
            if (Array.isArray(data)) {
                data.forEach(item => this.setCacheChunk(item));
            } else {
                if (totalItems >= maxSize) {
                    // Находим элемент с наименьшим временем последнего использования
                    const leastRecentlyUsedItem = getLeastRecentlyUsedItem(cache);
                    cache.delete(leastRecentlyUsedItem.key);
                }

                cache.set(data.id, { timestamp: Date.now(), ...data });
                totalItems++;
            }
        },

        changeItem: function (newData) {
            if (Array.isArray(newData)) {
                newData.forEach(item => this.changeItem(item));
            } else {
                const oldData = cache.get(newData.id);
                if (oldData) {
                    // Обновляем время последнего использования
                    cache.set(newData.id, { timestamp: Date.now(), ...newData });
                }
            }
        },

        getCacheItemById: function (id) {
            const item = cache.get(id);
            if (item) {
                // Обновляем время последнего использования
                cache.set(id, { timestamp: Date.now(), ...item });
            }
            return item ? item.value : undefined;
        },

        getData: function () {
            return [...cache.values()].map(item => item.value);
        }
    };

    function getLeastRecentlyUsedItem(cache) {
        let leastRecentTimestamp = Infinity;
        let leastRecentlyUsedKey;
        cache.forEach((value, key) => {
            if (value.timestamp < leastRecentTimestamp) {
                leastRecentTimestamp = value.timestamp;
                leastRecentlyUsedKey = key;
            }
        });
        return { key: leastRecentlyUsedKey, value: cache.get(leastRecentlyUsedKey) };
    }
}