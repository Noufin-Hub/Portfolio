// ==========================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initLoader();
    initScrollProgress();
    initBackToTop();
    initDarkMode();
    initMobileNav();
    initSmoothScroll();
    initTypingAnimation();
    initScrollAnimations();
    initSkillBars();
    initStatsCounter();
    initContactForm();
    initActiveNavLink();
    initCertificateModal();
});

// ==========================================
// LOADING ANIMATION
// ==========================================
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 500);
    });
}

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// DARK MODE TOGGLE
// ==========================================
function initDarkMode() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==========================================
// TYPING ANIMATION
// ==========================================
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    const texts = [
        'Data Scientist',
        'MCA Graduate',
        'Bsc Mathematics with Statistics and Physics',
        'Software Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
}

// ==========================================
// SCROLL ANIMATIONS (FADE IN)
// ==========================================
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .certification-card, .stat-card, .about-text, .contact-item, .resume-card, .volunteering-card, .publication-card');
    
    // Add fade-in class to elements
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(function() {
        current += increment;
        
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const formData = new FormData(form);
        
        // Validate name
        const name = formData.get('name');
        const nameGroup = form.querySelector('[name="name"]').parentElement;
        
        if (name.trim().length < 2) {
            showError(nameGroup, 'Name must be at least 2 characters');
            isValid = false;
        } else {
            clearError(nameGroup);
        }
        
        // Validate email
        const email = formData.get('email');
        const emailGroup = form.querySelector('[name="email"]').parentElement;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            showError(emailGroup, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailGroup);
        }
        
        // Validate subject
        const subject = formData.get('subject');
        const subjectGroup = form.querySelector('[name="subject"]').parentElement;
        
        if (subject.trim().length < 3) {
            showError(subjectGroup, 'Subject must be at least 3 characters');
            isValid = false;
        } else {
            clearError(subjectGroup);
        }
        
        // Validate message
        const message = formData.get('message');
        const messageGroup = form.querySelector('[name="message"]').parentElement;
        
        if (message.trim().length < 10) {
            showError(messageGroup, 'Message must be at least 10 characters');
            isValid = false;
        } else {
            clearError(messageGroup);
        }
        
        if (isValid) {
            // Form is valid - you can add your form submission logic here
            // For now, just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            const group = this.parentElement;
            if (group.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(input) {
    const group = input.parentElement;
    const value = input.value.trim();
    const name = input.name;
    
    switch(name) {
        case 'name':
            if (value.length < 2) {
                showError(group, 'Name must be at least 2 characters');
            } else {
                clearError(group);
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(group, 'Please enter a valid email address');
            } else {
                clearError(group);
            }
            break;
            
        case 'subject':
            if (value.length < 3) {
                showError(group, 'Subject must be at least 3 characters');
            } else {
                clearError(group);
            }
            break;
            
        case 'message':
            if (value.length < 10) {
                showError(group, 'Message must be at least 10 characters');
            } else {
                clearError(group);
            }
            break;
    }
}

function showError(group, message) {
    group.classList.add('error');
    const errorElement = group.querySelector('.error-message');
    errorElement.textContent = message;
}

function clearError(group) {
    group.classList.remove('error');
    const errorElement = group.querySelector('.error-message');
    errorElement.textContent = '';
}

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// CERTIFICATE MODAL/LIGHTBOX
// ==========================================
function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const zoomInBtn = modal.querySelector('.modal-zoom-in');
    const zoomOutBtn = modal.querySelector('.modal-zoom-out');
    const resetBtn = modal.querySelector('.modal-reset');
    const viewButtons = document.querySelectorAll('.view-certificate-btn');
    
    let currentZoom = 1;
    
    // Open modal when view certificate button is clicked
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imagePath = this.getAttribute('data-image');
            modalImage.src = imagePath;
            modalImage.style.transform = 'scale(1)';
            modalImage.classList.remove('zoomed-in', 'zoomed-out');
            currentZoom = 1;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus on close button for accessibility
            setTimeout(() => modalClose.focus(), 100);
        });
    });
    
    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentZoom = 1;
        modalImage.style.transform = 'scale(1)';
        modalImage.classList.remove('zoomed-in', 'zoomed-out');
        setTimeout(() => {
            modalImage.src = '';
        }, 300);
    }
    
    // Close on close button click
    modalClose.addEventListener('click', closeModal);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Zoom in
    zoomInBtn.addEventListener('click', function() {
        if (currentZoom < 3) {
            currentZoom += 0.25;
            modalImage.style.transform = `scale(${currentZoom})`;
        }
    });
    
    // Zoom out
    zoomOutBtn.addEventListener('click', function() {
        if (currentZoom > 0.5) {
            currentZoom -= 0.25;
            modalImage.style.transform = `scale(${currentZoom})`;
        }
    });
    
    // Reset zoom
    resetBtn.addEventListener('click', function() {
        currentZoom = 1;
        modalImage.style.transform = 'scale(1)';
        modalImage.classList.remove('zoomed-in', 'zoomed-out');
    });
    
    // Mouse wheel zoom
    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        
        if (currentZoom + delta >= 0.5 && currentZoom + delta <= 3) {
            currentZoom += delta;
            modalImage.style.transform = `scale(${currentZoom})`;
        }
    });
    
    // Keyboard navigation for zoom
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === '+' || e.key === '=') {
            if (currentZoom < 3) {
                currentZoom += 0.25;
                modalImage.style.transform = `scale(${currentZoom})`;
            }
        } else if (e.key === '-' || e.key === '_') {
            if (currentZoom > 0.5) {
                currentZoom -= 0.25;
                modalImage.style.transform = `scale(${currentZoom})`;
            }
        } else if (e.key === '0') {
            currentZoom = 1;
            modalImage.style.transform = 'scale(1)';
        }
    });
    
    // Trap focus within modal for accessibility
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
