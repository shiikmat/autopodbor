  // Получаем ссылки на элементы: иконка бургера и мобильное меню
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Переменная состояния: открыто меню или нет
  let menuOpen = false;

  // Назначаем обработчик клика по бургеру
  burger.addEventListener('click', () => {
    // Меняем состояние на противоположное
    menuOpen = !menuOpen;

    // Если меню должно открыться
    if (menuOpen) {
      mobileMenu.style.height = "100vh"; // Растягиваем меню на весь экран
      burger.textContent = "✖"; // Меняем иконку на крестик
    } else {
      mobileMenu.style.height = "0"; // Скрываем меню
      burger.textContent = "☰"; // Меняем обратно на бургер
    }
  });