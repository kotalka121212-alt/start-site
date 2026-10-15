    const button = document.getElementById('myButton');
    
    // Находим заголовок по id
    const title = document.getElementById('title');
    
    // Вешаем обработчик клика
    button.onclick = function() {
      title.textContent = 'Ты нажал кнопку! 🎉';
      title.style.color = 'blue';
    };