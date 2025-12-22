// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    }
}

// Language Switcher
function changeLanguage() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;
    
    const lang = langSelect.value;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll(`[data-${lang}]`).forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    document.querySelectorAll(`[data-placeholder-${lang}]`).forEach(element => {
        const placeholder = element.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
}

// Load saved preferences
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    const langSelect = document.getElementById('languageSelect');
    
    if (langSelect) {
        langSelect.value = savedLang;
        changeLanguage();
    }
}

// Modal functionality
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showSubscribeModal() {
    showModal('subscribeModal');
}

function showAmbassadorModal() {
    showModal('ambassadorModal');
}

function showScoutModal() {
    showModal('scoutModal');
}

function showPartnerModal() {
    showModal('partnerModal');
}

function showSponsorModal() {
    showModal('sponsorModal');
}

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Toggle functions
function toggleMentors() {
    const hiddenMentors = document.querySelectorAll('.mentor-card.hidden-mentor');
    const button = document.getElementById('showMoreMentors');
    const currentLang = localStorage.getItem('language') || 'en';
    
    const translations = {
        en: { more: 'See More Mentors', less: 'Show Less' },
        fr: { more: 'Voir Plus de Mentors', less: 'Voir Moins' },
        de: { more: 'Mehr Mentoren Sehen', less: 'Weniger Zeigen' },
        zh: { more: '查看更多导师', less: '显示更少' },
        es: { more: 'Ver Más Mentores', less: 'Mostrar Menos' }
    };
    
    if (button.textContent.includes('See More') || button.textContent.includes('Voir Plus') || button.textContent.includes('Mehr') || button.textContent.includes('查看') || button.textContent.includes('Ver Más')) {
        hiddenMentors.forEach(mentor => {
            mentor.style.display = 'block';
        });
        button.textContent = translations[currentLang].less;
    } else {
        hiddenMentors.forEach(mentor => {
            mentor.style.display = 'none';
        });
        button.textContent = translations[currentLang].more;
    }
}

function toggleTeam() {
    const hiddenTeam = document.querySelectorAll('.team-member.hidden-team');
    const button = document.getElementById('showMoreTeam');
    const currentLang = localStorage.getItem('language') || 'en';
    
    const translations = {
        en: { more: 'See More Team', less: 'Show Less' },
        fr: { more: 'Voir Plus d\'Équipe', less: 'Voir Moins' },
        de: { more: 'Mehr Team Sehen', less: 'Weniger Zeigen' },
        zh: { more: '查看更多团队', less: '显示更少' },
        es: { more: 'Ver Más Equipo', less: 'Mostrar Menos' }
    };
    
    if (button.textContent.includes('See More') || button.textContent.includes('Voir Plus') || button.textContent.includes('Mehr') || button.textContent.includes('查看') || button.textContent.includes('Ver Más')) {
        hiddenTeam.forEach(member => {
            member.style.display = 'block';
        });
        button.textContent = translations[currentLang].less;
    } else {
        hiddenTeam.forEach(member => {
            member.style.display = 'none';
        });
        button.textContent = translations[currentLang].more;
    }
}

function toggleStory() {
    const fullStory = document.getElementById('fullStory');
    const button = document.querySelector('.read-more-btn');
    const currentLang = localStorage.getItem('language') || 'en';
    
    const translations = {
        en: { more: 'Read More', less: 'Read Less' },
        fr: { more: 'Lire Plus', less: 'Lire Moins' },
        de: { more: 'Mehr Lesen', less: 'Weniger Lesen' },
        zh: { more: '阅读更多', less: '阅读更少' },
        es: { more: 'Leer Más', less: 'Leer Menos' }
    };
    
    if (fullStory.style.display === 'none') {
        fullStory.style.display = 'block';
        button.textContent = translations[currentLang].less;
    } else {
        fullStory.style.display = 'none';
        button.textContent = translations[currentLang].more;
    }
}

// Blog Subscribe Form
function setupBlogSubscription() {
    const blogForm = document.getElementById('blogSubscribeForm');
    if (blogForm) {
        blogForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            if (typeof emailjs !== 'undefined' && typeof EMAILJS_CONFIG !== 'undefined') {
                console.log('Sending email with config:', EMAILJS_CONFIG);
                const templateParams = {
                    to_email: email,
                    subscriber_email: email,
                    subscription_type: 'Blog Updates',
                    from_name: 'LaunchPad Community'
                };
                
                if (typeof grecaptcha !== 'undefined') {
                    grecaptcha.execute().then(token => {
                        templateParams['g-recaptcha-response'] = token;
                        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.BLOG, templateParams).then(() => {
                            alert('Welcome to LaunchPad Community! Check your email for confirmation.');
                            e.target.reset();
                        }).catch((error) => {
                            console.error('EmailJS Error Details:', error);
                            alert('Error: ' + (error.text || error.message || 'Please check EmailJS configuration'));
                        });
                    });
                } else {
                    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.BLOG, templateParams).then(() => {
                        alert('Welcome to LaunchPad Community! Check your email for confirmation.');
                        e.target.reset();
                    }).catch((error) => {
                        console.error('EmailJS Error Details:', error);
                        alert('Error: ' + (error.text || error.message || 'Please check EmailJS configuration'));
                    });
                }
            } else {
                alert('EmailJS not configured. Check emailjs-config.js file.');
            }
        });
    }
}



// Fire Sparks Rain Animation
function createSparkRain() {
    const flamePositions = [20, 30, 40, 50, 60, 70, 80];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            const isBlue = Math.random() < 0.3;
            spark.className = `fire-spark ${isBlue ? 'blue' : 'orange'}`;
            
            const flamePos = flamePositions[Math.floor(Math.random() * flamePositions.length)];
            spark.style.position = 'fixed';
            spark.style.left = `calc(${flamePos}% - 10px)`;
            spark.style.bottom = '80px';
            spark.style.setProperty('--drift', (Math.random() - 0.5) * 100 + 'px');
            spark.style.animationDuration = (Math.random() * 2 + 5) + 's';
            spark.style.zIndex = '1';
            
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) spark.remove();
            }, 8000);
        }, i * 100);
    }
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    document.querySelectorAll('.team-member').forEach((el, i) => {
        el.classList.add(i % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
        observer.observe(el);
    });
    
    document.querySelectorAll('.mentor-card').forEach((el, i) => {
        el.classList.add(i % 3 === 0 ? 'fade-in-left' : i % 3 === 1 ? 'fade-in-up' : 'fade-in-right');
        observer.observe(el);
    });
    
    document.querySelectorAll('.apply-option, .objective, .story, .purpose-item').forEach((el, i) => {
        el.classList.add(i % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
        observer.observe(el);
    });
    
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    loadLanguage();
    setupBlogSubscription();
    initScrollAnimations();
    
    // Start fire spark rain immediately and continuously
    createSparkRain();
    setInterval(createSparkRain, 800);
    
    // Existing form handlers...
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive updates about opportunities and events.');
            hideModal('subscribeModal');
            e.target.reset();
        });
    }
    
    const ambassadorForm = document.getElementById('ambassadorForm');
    if (ambassadorForm) {
        ambassadorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your ambassador application! We will review it and get back to you within 48 hours.');
            hideModal('ambassadorModal');
            e.target.reset();
        });
    }
    
    const scoutForm = document.getElementById('scoutForm');
    if (scoutForm) {
        scoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your scout application! We will review it and contact you soon.');
            hideModal('scoutModal');
            e.target.reset();
        });
    }
    
    const partnerForm = document.getElementById('partnerForm');
    if (partnerForm) {
        partnerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your partnership inquiry! Our team will contact you within 24 hours.');
            hideModal('partnerModal');
            e.target.reset();
        });
    }
    
    const sponsorForm = document.getElementById('sponsorForm');
    if (sponsorForm) {
        sponsorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (typeof emailjs !== 'undefined' && typeof EMAILJS_CONFIG !== 'undefined') {
                const formData = new FormData(e.target);
                const templateParams = {
                    to_email: 'LaunchPadCommunity00@gmail.com',
                    org_name: formData.get('org_name') || e.target.querySelector('input[placeholder*="Organization"]').value,
                    contact_person: e.target.querySelector('input[placeholder*="Contact"]').value,
                    from_email: e.target.querySelector('input[type="email"]').value,
                    phone: e.target.querySelector('input[type="tel"]').value,
                    sponsorship_type: e.target.querySelector('select').value,
                    message: e.target.querySelector('textarea').value
                };
                
                emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.SPONSORSHIP, templateParams)
                    .then(() => {
                        alert('Thank you for your sponsorship inquiry! We appreciate your interest in supporting our mission.');
                        hideModal('sponsorModal');
                        e.target.reset();
                    })
                    .catch((error) => {
                        console.error('EmailJS Error:', error);
                        alert('Failed to send sponsorship inquiry. Please try again or contact us directly.');
                    });
            } else {
                alert('Thank you for your sponsorship inquiry! We appreciate your interest in supporting our mission.');
                hideModal('sponsorModal');
                e.target.reset();
            }
        });
    }
    
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your feedback! We value your input and will use it to improve our community.');
            hideModal('feedbackModal');
            e.target.reset();
        });
    }
    
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reporting this issue. Our team will investigate and take appropriate action.');
            hideModal('reportModal');
            e.target.reset();
        });
    }
});

// Make functions globally accessible
window.toggleTheme = toggleTheme;
window.changeLanguage = changeLanguage;
window.showModal = showModal;
window.hideModal = hideModal;
window.showSubscribeModal = showSubscribeModal;
window.showAmbassadorModal = showAmbassadorModal;
window.showScoutModal = showScoutModal;
window.showPartnerModal = showPartnerModal;
window.showSponsorModal = showSponsorModal;
window.scrollToSection = scrollToSection;
window.toggleMentors = toggleMentors;
window.toggleTeam = toggleTeam;
window.toggleStory = toggleStory;