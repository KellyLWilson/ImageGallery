const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
    function displayThumb(clickedImage) {
        var imageThumb = clickedImage.target.getAttribute('src');
        displayedImage.setAttribute('src', imageThumb);
    };
    newImage.addEventListener('click', displayThumb);
}
  
    /* Wiring up the Darken/Lighten button */
    btn.onclick = function() {
        const btnClass = btn.getAttribute('class');
        if(btnClass === 'dark') {
          btn.setAttribute('class','light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
        } else {
          btn.setAttribute('class','dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      }


      
