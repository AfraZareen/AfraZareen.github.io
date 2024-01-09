//dropdown menu
function toggleMenu(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    var dropdown = document.getElementById("dropdown");
    var currentOpacity = parseFloat(window.getComputedStyle(dropdown).opacity);

    if (currentOpacity === 1) {
      // If the dropdown is visible, hide it
      dropdown.style.opacity = 0;
      dropdown.style.top = "35px";
      dropdown.style.visibility = "hidden";
    } else {
      // If the dropdown is hidden, show it
      dropdown.style.opacity = 1;
      dropdown.style.top = "60px";
      dropdown.style.visibility = "visible";
}}
let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
          });
        };
      });
    };



//booking system
function bookingMessage() {
    document.getElementById("bookingDone").style.display = "block";
    return false;
}


//menu slider
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".containers .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const imageList = document.querySelector('.image-list');
  const cards = document.querySelectorAll('.card');

  let currentIndex = 0;

  function showSlide(index) {
      const newLeft = -index * 100 + '%';
      imageList.style.left = newLeft;
  }

  function handlePrevSlide() {
      if (currentIndex > 0) {
          currentIndex--;
          showSlide(currentIndex);
      }
  }

  function handleNextSlide() {
      if (currentIndex < cards.length - 1) {
          currentIndex++;
          showSlide(currentIndex);
      }
  }

  document.getElementById('prev-slide').addEventListener('click', handlePrevSlide);
  document.getElementById('next-slide').addEventListener('click', handleNextSlide);
});
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


//review slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.getElementById('slide-container');
const dotContainer = document.getElementById('dot-container');

function showSlide(index) {
    const transformValue = -index * 100;
    slideContainer.style.transform = `translateX(${transformValue}%)`;
}

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            updateDots();
        });
        dotContainer.appendChild(dot);
    }
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

createDots();
showSlide(currentSlide); 

//sendMessage for contacting
function sendMessage() {
      document.getElementById('messageSent').style.display = 'block';
      document.getElementById('contactForm').reset();
}







      



