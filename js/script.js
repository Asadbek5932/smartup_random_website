/**
 * Smartup Random Landing Page - JavaScript
 * Handles navigation, scroll effects, and interactivity
 */

// ==================== //
// Navigation Menu Toggle
// ==================== //
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== //
// Navbar Scroll Effect
// ==================== //
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==================== //
// Smooth Scroll for Anchor Links
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== //
// Scroll to Top Button
// ==================== //
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== //
// Intersection Observer for Animations
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.feature-card, .platform-card, .bot-card, .use-case-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== //
// Active Navigation Link
// ==================== //
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==================== //
// Stats Counter Animation
// ==================== //
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Trigger counter animation when stats are visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsSection.classList.contains('animated')) {
                statsSection.classList.add('animated');

                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    animateCounter(stat, target, 1500);
                });
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ==================== //
// Form Validation (if forms are added)
// ==================== //
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==================== //
// Download Button Analytics
// ==================== //
const downloadButtons = document.querySelectorAll('[href*="download"]');

downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Track download button clicks
        console.log('Download button clicked:', button.textContent);

        // Add analytics tracking here
        // Example: gtag('event', 'download_click', { button_text: button.textContent });
    });
});

// ==================== //
// Bot Links
// ==================== //
const telegramBtn = document.querySelector('.telegram-btn');
const whatsappBtn = document.querySelector('.whatsapp-btn');

if (telegramBtn) {
    telegramBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual Telegram bot link
        const botUsername = 'smartup_random_bot'; // Replace with your bot username
        window.open(`https://t.me/${botUsername}`, '_blank');
    });
}

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual WhatsApp number
        const phoneNumber = '1234567890'; // Replace with your WhatsApp number
        const message = 'Hi! I want to use Smartup Random bot';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// ==================== //
// Lazy Loading Images
// ==================== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== //
// Parallax Effect for Hero Background
// ==================== //
const heroShapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== //
// Copy to Clipboard Function
// ==================== //
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}

// ==================== //
// Show Notification
// ==================== //
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==================== //
// Dark Mode Toggle (Optional)
// ==================== //
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// ==================== //
// Performance Optimization
// ==================== //

// Debounce function for scroll events
function debounce(func, wait = 10) {
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

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
}, 10));

// ==================== //
// Preload Critical Resources
// ==================== //
function preloadImages() {
    const images = [
        'assets/google-play-badge.svg',
        'assets/app-store-badge.svg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Run preload on page load
window.addEventListener('load', preloadImages);

// ==================== //
// Console Message
// ==================== //
console.log('%c🎲 Smartup Random', 'font-size: 24px; font-weight: bold; color: #383899;');
console.log('%cWelcome to Smartup Random landing page!', 'font-size: 14px; color: #6b7280;');
console.log('%cInterested in contributing? Check out our GitHub!', 'font-size: 12px; color: #6b7280;');

// ==================== //
// Analytics (if needed)
// ==================== //

// Track page views
function trackPageView() {
    // Add your analytics code here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: window.location.pathname });
    console.log('Page view tracked:', window.location.pathname);
}

// Track button clicks
function trackEvent(category, action, label) {
    // Add your analytics code here
    // Example: gtag('event', action, { event_category: category, event_label: label });
    console.log('Event tracked:', { category, action, label });
}

// Initialize analytics on page load
window.addEventListener('load', () => {
    trackPageView();
});

// ==================== //
// Error Handling
// ==================== //
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You can send errors to a logging service here
});

// ==================== //
// Page Initialization
// ==================== //
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully');

    // Initialize all features
    highlightNavigation();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Log page load time
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
});

// ==================== //
// Export functions for testing
// ==================== //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        copyToClipboard,
        showNotification,
        debounce
    };
}
