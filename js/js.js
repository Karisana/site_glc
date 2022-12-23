$('.carousel').carouselExampleControls_my()


// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const hamburger__menu = document.querySelector(`.${params.hamburger__menuClass}`);
  
    hamburger__menu.addEventListener('animationend', function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
  
    btn.addEventListener('click', function () {
      this.classList.toggle(params.activeClass);
  
      if (!hamburger__menu.classList.contains(params.activeClass) && !hamburger__menu.classList.contains(params.hiddenClass)) {
        hamburger__menu.classList.add(params.activeClass);
      } else {
        hamburger__menu.classList.add(params.hiddenClass);
      }
    });
  }
  
  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: 'burger', // класс бургера
    hamburger__menuClass: 'hamburger__menu', // класс меню
    activeClass: 'is-opened', // класс открытого состояния
    hiddenClass: 'is-closed' // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
  