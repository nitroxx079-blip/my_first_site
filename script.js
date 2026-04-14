// Находим кнопку по её ID
const button = document.getElementById('changeColorBtn');

// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Добавляем событие клика на кнопку
button.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
});