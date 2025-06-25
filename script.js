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

/*navbar component*/

class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="top-nav" id="navbar"> 
          <div>
              <!-- <a class="case-nav-links" href="#hero"><h1 style="font-size: large; color: #121212;" >Madhav Varma</h1></a>    -->
              <a class="case-nav-links" href="index.html"><img src="assets/2025logo.svg" style="padding: 0 ; margin: 0;"></a> 
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
          </label>
          <ul class="menu">
          <!-- <li><a class="case-nav-links" href="index.html">Home</a></li> -->
          <li><a class="case-nav-links" href="#hero">About</a></li>
          <li><a class="case-nav-links" href="resume.html" target="_blank"></i>Resume <span style="font-family: 'beautiful freak';">↗</span></a></li>
          <li><a class="case-nav-links" href="#projects">Design Work</a></li>
          <li><a class="case-nav-links" href="freelance.html">Freelance Work</a></li>
          <li><a class="case-nav-links" href="mailto:madhav18897@utexas.edu">Contact</a></li>
          <li style="margin: 0rem;"><a class="social-icons" href="https://www.linkedin.com/in/madhav-varma/" target="_blank"><i class="fa-brands fa-linkedin fa-l"></i></a></li>
          </ul>
      </section>  
    `;
  }
}
customElements.define('my-navbar', MyNavbar);

/*navbar component*/


/*footer component*/


class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="footer" style="margin-top: 120px;">
        <div class="footer">
            <div class="footertext">
                <h1 style="font-size: 1rem; letter-spacing: 1.6px; color: #666666;">FOOTER. BECAUSE EVERY WEBSITE NEEDS ONE... RIGHT? </h1>
                <h1 style="font-size: 1.5rem;">If you like my work and are interested in <br>hiring me or working with me...</h1>
                <p>You can contact me at <span style="color: #5F50CC; font-weight: 800;"><a href="mailto:madhav18897@utexas.edu">madhav18897@utexas.edu</a></span></p>
                <div class="socials">
                    <a class="social-icons" href="https://www.linkedin.com/in/madhav-varma/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                    <a class="social-icons" href="https://www.instagram.com/madhav18897/" target="_blank"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                </div>
                <p style="margin-top: 2rem;">© Designed and developed by Madhav Varma in Austin,TX, United States; all rights reserved.</p>
            </div>
            
            <a href="#section-1" style="text-decoration: none;">
            <div class="backtotop">
                <!-- <img src="assets/backtotop.svg" alt="">
                <h1 style="font-size: 1rem; letter-spacing: 1.6px; color: #121212;">BACK TO TOP</h1> -->
                <h1 class="secondarybtn"><i class="fa-solid fa-arrow-up"></i>Back to Top</h1> 
            </div>
            </a>

        </div> 
        </section>
    `;
  }
}
customElements.define('my-footer', MyFooter);

/*footer component*/




/*navbar scroll*/

window.onscroll = function() {
  let navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {  // Trigger shadow after scrolling 10px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

/*sidebar-active*/
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("div[id]"); // Select all divs with an id
  const menuLinks = document.querySelectorAll(".side-nav-list-item");

  let currentActive = menuLinks[0]; // Start by highlighting the first item

  const observer = new IntersectionObserver(
      (entries) => {
          let visibleSections = entries
              .filter(entry => entry.isIntersecting)
              .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

          if (visibleSections.length > 0) {
              const firstVisible = visibleSections[0].target.id;
              const activeLink = document.querySelector(`a[href="#${firstVisible}"]`);

              if (activeLink && currentActive !== activeLink) {
                  currentActive.classList.remove("active");
                  activeLink.classList.add("active");
                  currentActive = activeLink;
              }
          }
      },
      { threshold: 0.2 } // Adjust this threshold as needed
  );

  sections.forEach((section) => {
      observer.observe(section);
  });
});



/*sidebar-active*/

/*scroll reveal */
document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.reveal', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    delay: 200
  });
});


ScrollReveal().reveal('.fade-in', { opacity: 0, duration: 1000 });
ScrollReveal().reveal('.slide-left', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.zoom-in', { scale: 0.85, duration: 1000 });

/*scroll reveal */


//Carousel

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dotsContainer = document.getElementById('indicators');
    const dots = Array.from(dotsContainer.children);
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    
    slides.forEach(setSlidePosition);
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
        const targetIndex = slides.findIndex(slide => slide === targetSlide);
        track.style.transform = 'translateX(-' + targetIndex * slideWidth + 'px)';
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[targetIndex].classList.add('active');
        
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };
    
    // Next button click
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        let nextSlide = currentSlide.nextElementSibling;
        
        if (!nextSlide) {
            nextSlide = slides[0];
        }
        
        moveToSlide(track, currentSlide, nextSlide);
    });
    
    // Previous button click
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        let prevSlide = currentSlide.previousElementSibling;
        
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
        }
        
        moveToSlide(track, currentSlide, prevSlide);
    });
    
    // Dot indicators click
    dotsContainer.addEventListener('click', e => {
        const targetDot = e.target.closest('div.carousel-dot');
        
        if (!targetDot) return;
        
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        
        moveToSlide(track, currentSlide, targetSlide);
    });
    
    // Initialize first slide as current
    slides[0].classList.add('current-slide');
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        let nextSlide = currentSlide.nextElementSibling;
        
        if (!nextSlide) {
            nextSlide = slides[0];
        }
        
        moveToSlide(track, currentSlide, nextSlide);
    }, 3000);
});

// Add this at the bottom of your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

