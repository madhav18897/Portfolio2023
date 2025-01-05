function openTab(tabName) {
  // Hide all tab content
  var contents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  
  // Remove 'active' class from all buttons
  var buttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Show the current tab and mark the button as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}


/* Intersection observer API */

// Select all navigation links and sections
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const navItem = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      // Highlight the active nav item
      navItems.forEach(item => item.classList.remove('active'));
      navItem.classList.add('active');
    }
  });
}, {
  threshold: 0.5 // Adjust this value based on when you want the section to be considered "in view"
});

// Observe each section
sections.forEach(section => observer.observe(section));


/* Intersection observer API */


/*reveal animation*/

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('show');
    } else {
      reveal.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

/*reveal animation*/