function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Пример использования
function handleResize() {
  console.log("Window resized");
}

window.addEventListener("resize", debounce(handleResize, 200));
