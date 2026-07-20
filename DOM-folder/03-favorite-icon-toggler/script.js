const heartbtn = document.querySelectorAll('.favorite-icon');


 heartbtn.forEach(hebtn => hebtn.addEventListener('click', () => {
      if(!hebtn.classList.contains('filled')){
          hebtn.classList.add('filled');
          hebtn.innerHTML = '&#10084;'
      }else{
         hebtn.classList.remove('filled');
         hebtn.innerHTML = '&#9825;' 
      }
 }))