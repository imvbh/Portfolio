
let menuIcon = document.querySelector(".nav__toggle");
let navbar = document.querySelector(".nav__menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("show-menu");
};

// scroll section active
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("Id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active-link");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active-link");
      });
    }
  });
};

// Show skills description
// Get all "View More" buttons
const viewMoreButtons = document.querySelectorAll(".services__button");

// Get all modal containers
const modalContainers = document.querySelectorAll(".services__modal");

// Add a click event listener to each "View More" button
viewMoreButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Display the corresponding modal container
    modalContainers[index].classList.add("active-modal");
  });
});

// Add click event listener to close modal when the close button is clicked
const closeButtons = document.querySelectorAll(".services__modal-close");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hide the modal container
    modalContainers.forEach((modal) => {
      modal.classList.remove("active-modal");
    });
  });
});


const serviceButtons = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

serviceButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const modal = document.querySelectorAll(".services__modal")[index];
    modal.classList.add("active-modal");
  });
});

modalCloses.forEach(function (close) {
  close.addEventListener("click", function () {
    const modals = document.querySelectorAll(".services__modal");
    modals.forEach(function (modal) {
      modal.classList.remove("active-modal");
    });
  });
});



// dark light mode
let lightModeIcon = document.querySelector("#lightMode-icon");

lightModeIcon.onclick = () => {
  lightModeIcon.classList.toggle("bxs-moon");
  document.body.classList.toggle("dark-mode");
};



const scrollupButton = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the home section (adjust this value as needed)
  const scrollThreshold = 200; // Adjust this value as needed

  if (window.scrollY > scrollThreshold) {
    scrollupButton.classList.add('show-scroll');
  } else {
    scrollupButton.classList.remove('show-scroll');
  }
});

scrollupButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})