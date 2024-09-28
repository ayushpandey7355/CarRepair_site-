

const hoveredClassName = 'hover_element';
const hiddenElementClassName = 'hidden_element';

const hoveredElements = document.querySelectorAll(`.${hoveredClassName}`);
const hiddenElements = document.querySelectorAll(`.${hiddenElementClassName}`);

hoveredElements.forEach((hoveredElement, index) => {

  hoveredElement.addEventListener('mouseenter', () => {

    hiddenElements[index].style.display = 'block';
  });

  hoveredElement.addEventListener('mouseleave', () => {

    hiddenElements[index].style.display = 'none';
  });
});





const hoveredClassName1 = 'hover_element1';
const hiddenElementClassName1 = 'hidden_element1';

const hoveredElements1 = document.querySelectorAll(`.${hoveredClassName1}`);
const hiddenElements1 = document.querySelectorAll(`.${hiddenElementClassName1}`);

hoveredElements1.forEach((hoveredElement1, index) => {

  hoveredElement1.addEventListener('mouseenter', () => {

    hiddenElements1[index].style.display = 'block';
  });

  hoveredElement1.addEventListener('mouseleave', () => {

    hiddenElements1[index].style.display = 'none';
  });
});




const hoveredClassName2 = 'hover_element2';
const hiddenElementClassName2 = 'hidden_element2';

const hoveredElements2 = document.querySelectorAll(`.${hoveredClassName2}`);
const hiddenElements2 = document.querySelectorAll(`.${hiddenElementClassName2}`);

hoveredElements2.forEach((hoveredElement2, index) => {

  hoveredElement2.addEventListener('mouseenter', () => {

    hiddenElements2[index].style.display = 'block';
  });

  hoveredElement2.addEventListener('mouseleave', () => {

    hiddenElements2[index].style.display = 'none';
  });
});



const hoveredClassName3 = 'hover_element3';
const hiddenElementClassName3 = 'hidden_element3';


const hoveredElements3 = document.querySelectorAll(`.${hoveredClassName3}`);
const hiddenElements3 = document.querySelectorAll(`.${hiddenElementClassName3}`);


hoveredElements3.forEach((hoveredElement3, index) => {

  hoveredElement3.addEventListener('mouseenter', () => {

    hiddenElements3[index].style.display = 'block';
  });

  hoveredElement3.addEventListener('mouseleave', () => {

    hiddenElements3[index].style.display = 'none';
  });
});



// // navbar  js code ----->

const menuToggle  = document.querySelector('#menu-toggle');
const menulist  = document.querySelector('#menu-list');

menuToggle.addEventListener('click', function(){
    menulist.classList.toggle('active');
    menulist.classList.toggle('color');
})
