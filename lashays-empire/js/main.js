/**
 * Lashay's Empire - Main JavaScript
 * Handles navigation, animations, and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================================
  // NAVIGATION
  // ===========================================
  
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    
    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }
  
  // Navbar background on scroll
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Check on load
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }
  
  // ===========================================
  // SCROLL ANIMATIONS
  // ===========================================
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // ===========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const navHeight = navbar ? navbar.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ===========================================
  // FORM HANDLING
  // ===========================================
  
  const bookingForm = document.getElementById('booking-form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(bookingForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Basic validation
      if (!data.name || !data.phone) {
        alert('Please fill in your name and phone number.');
        return;
      }
      
      // For now, show a success message
      // Replace this with actual form submission (Formspree, Netlify, etc.)
      alert('Thank you for your request! I\'ll be in touch within 24 hours to confirm your appointment.');
      
      // Reset form
      bookingForm.reset();
      
      // TODO: Implement actual form submission
      // Options:
      // 1. Formspree: Set form action to https://formspree.io/f/YOUR_ID
      // 2. Netlify: Add netlify attribute to form and deploy on Netlify
      // 3. Email.js: Use emailjs.send() to send directly
      // 4. Custom backend: POST to your API endpoint
    });
  }
  
  // ===========================================
  // GALLERY FILTERING (Optional Enhancement)
  // ===========================================
  
  const filterButtons = document.querySelectorAll('[data-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item[data-category]');
  
  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
        this.classList.add('btn-primary');
        this.classList.remove('btn-outline');
        
        // Filter items
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.style.display = 'flex';
            item.style.opacity = '1';
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // ===========================================
  // DATE INPUT MIN DATE (Today)
  // ===========================================
  
  const dateInput = document.getElementById('preferred-date');
  
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
  
  // ===========================================
  // PHONE NUMBER FORMATTING
  // ===========================================
  
  const phoneInput = document.getElementById('phone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 0) {
        if (value.length <= 3) {
          value = '(' + value;
        } else if (value.length <= 6) {
          value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
        } else {
          value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
      }
      
      e.target.value = value;
    });
  }
  
  // ===========================================
  // CONSOLE MESSAGE
  // ===========================================
  
  console.log('%c👑 Lashay\'s Empire', 'font-size: 24px; font-weight: bold; color: #C9A962;');
  console.log('%cBuilt with ❤️ for beautiful hair', 'font-size: 14px; color: #6B5B4F;');
  
});

// ===========================================
// OPTIONAL: Loading Animation
// ===========================================

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});
