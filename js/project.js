window.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.header__burger'),
      header = document.querySelector('.header'),
      actions = document.querySelector('.header__actions'),
      listBody = document.querySelector('.header__body'),
      body = document.querySelector('body'),
      wrapper = document.querySelector('.header__wrapper');

   const listParent = document.createElement('div');
   listParent.classList.add('header__wrapper');

   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      header.classList.toggle('active');
      listParent.classList.toggle('active');
      actions.remove(); listBody.remove();
      listParent.append(listBody); listParent.append(actions);
      document.querySelector('.header__logo').after(listParent);

      if (burger.classList.contains('active')) {
         listParent.style.display = 'block';
         body.style.overflow = 'hidden';
         listBody.style.cssText = `display: flex; flex-direction: column;`
         actions.style.cssText = `
            display: flex; 
            flex-direction: column;
         `
      } else {
         listParent.style.display = 'hidden';
         body.style.overflow = 'auto';
         actions.style.display = 'none';
         listBody.style.cssText = `display: none;`
      }
   })


   /*..................................CIRCLE............................................... */

   const circleBlock = document.querySelector('.prices__circle'),
      circle = document.querySelector('.prices__circle p'),
      items = document.querySelectorAll('.prices__value');

   let isMoved = false;

   circleBlock.addEventListener('click', (e) => {
      if (isMoved) {
         isMoved = false;
         circle.style.left = '0px';
         items[0].innerHTML = '<span>$8</span>/Month'
         items[1].innerHTML = '<span>$20</span>/Month'
         items[2].innerHTML = '<span>$48</span>/Month'
      } else {
         isMoved = true;
         circle.style.left = '50px';
         items[0].innerHTML = '<span>$86</span>/Month'
         items[1].innerHTML = '<span>$216</span>/Month'
         items[2].innerHTML = '<span>$519</span>/Month'
      }
   })
   if (window.innerWidth < 451) {
      document.querySelector('.prices__block').innerHTML = `
         Save 10% per month
         <img src="img/Findtrend/white-arrow.svg" alt="">
      `
      document.querySelector('.prices__period').innerHTML = `
      <span>Monthly</span>
      <div class="prices__circle">
         <p></p>
      </div>
      <span>Yearly</span>
      `;
   }

})