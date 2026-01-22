
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(253, 253, 253, 0.4)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.2)';
    }
    
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});


const serviceModal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');

const serviceData = {
    residential: {
        title: 'Residential Painting Services',
        content: `
            <h3 style="color: #ffd700; margin-bottom: 1rem;">Transform Your Home</h3>
            <p style="margin-bottom: 1rem;">Our residential painting services include:</p>
            <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Interior wall painting with premium paints</li>
                <li>Exterior house painting and protection</li>
                <li>Ceiling and trim painting</li>
                <li>Color consultation and design advice</li>
                <li>Surface preparation and repair</li>
                <li>Clean-up and final inspection</li>
            </ul>
            <p style="font-size: 1.2rem; color: #ffd700; margin-bottom: 1.5rem;"><strong>Starting from SAR 15 per square meter</strong></p>
            <button class="cta-btn" onclick="scrollToSection('contact'); closeModal();">Get Quote</button>
        `
    },
    commercial: {
        title: 'Commercial Painting Services',
        content: `
            <h3 style="color: #ffd700; margin-bottom: 1rem;">Professional Business Solutions</h3>
            <p style="margin-bottom: 1rem;">Our commercial painting services include:</p>
            <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Office and retail space painting</li>
                <li>Industrial facility coating</li>
                <li>Warehouse and storage painting</li>
                <li>Scheduled maintenance programs</li>
                <li>Minimal business disruption</li>
                <li>Professional project management</li>
            </ul>
            <p style="font-size: 1.2rem; color: #ffd700; margin-bottom: 1.5rem;"><strong>Custom pricing based on project scope</strong></p>
            <button class="cta-btn" onclick="scrollToSection('contact'); closeModal();">Get Quote</button>
        `
    },
    decorative: {
        title: 'Decorative Painting Services',
        content: `
            <h3 style="color: #ffd700; margin-bottom: 1rem;">Artistic Finishes & Techniques</h3>
            <p style="margin-bottom: 1rem;">Our decorative painting services include:</p>
            <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Textured wall finishes</li>
                <li>Faux painting techniques</li>
                <li>Accent walls and feature painting</li>
                <li>Stenciling and murals</li>
                <li>Metallic and specialty finishes</li>
                <li>Custom color matching</li>
            </ul>
            <p style="font-size: 1.2rem; color: #ffd700; margin-bottom: 1.5rem;"><strong>Starting from SAR 25 per square meter</strong></p>
            <button class="cta-btn" onclick="scrollToSection('contact'); closeModal();">Get Quote</button>
        `
    },
    preparation: {
        title: 'Wall Preparation Services',
        content: `
            <h3 style="color: #ffd700; margin-bottom: 1rem;">Perfect Surface Preparation</h3>
            <p style="margin-bottom: 1rem;">Our wall preparation services include:</p>
            <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Surface cleaning and degreasing</li>
                <li>Crack filling and repair</li>
                <li>Sanding and smoothing</li>
                <li>Primer application</li>
                <li>Hole patching and restoration</li>
                <li>Moisture treatment</li>
            </ul>
            <p style="font-size: 1.2rem; color: #ffd700; margin-bottom: 1.5rem;"><strong>Starting from SAR 8 per square meter</strong></p>
            <button class="cta-btn" onclick="scrollToSection('contact'); closeModal();">Get Quote</button>
        `
    }
};

function openModal(serviceType) {
    const service = serviceData[serviceType];
    if (service) {
        modalContent.innerHTML = `
            <h2 style="color: #ffd700; margin-bottom: 1.5rem;">${service.title}</h2>
            ${service.content}
        `;
        serviceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    serviceModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


const galleryModal = document.getElementById('galleryModal');
const galleryModalContent = document.getElementById('galleryModalContent');

const galleryData = {
    project1: {
        title: 'Modern Living Room',
        description: 'Complete interior painting with accent wall feature',
        details: 'This project involved transforming a traditional living space into a modern, vibrant area using contemporary color schemes and professional painting techniques.'
    },
    project2: {
        title: 'Commercial Office Space',
        description: 'Professional office painting with corporate colors',
        details: 'A complete office renovation featuring neutral tones and professional finishes that create a productive work environment.'
    },
    project3: {
        title: 'Exterior House Painting',
        description: 'Full exterior house painting with weather protection',
        details: 'Complete exterior makeover using weather-resistant paints and proper surface preparation for long-lasting results.'
    },
    project4: {
        title: 'Decorative Wall Art',
        description: 'Custom decorative painting with artistic elements',
        details: 'Unique decorative painting project featuring custom designs and artistic elements to create a stunning focal point.'
    },
    project5: {
        title: 'Kitchen Cabinet Refinishing',
        description: 'Cabinet painting and refinishing service',
        details: 'Professional cabinet refinishing that transformed an outdated kitchen into a modern, fresh space.'
    },
    project6: {
        title: 'Bedroom Makeover',
        description: 'Complete bedroom painting with color consultation',
        details: 'A complete bedroom transformation using calming colors and professional techniques for a relaxing atmosphere.'
    }
};

function openGalleryModal(projectId) {
    const project = galleryData[projectId];
    if (project) {
        galleryModalContent.innerHTML = `
            <h2 style="color: #ffd700; margin-bottom: 1rem;">${project.title}</h2>
            <div style="height: 300px; background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460); border-radius: 15px; margin: 1.5rem 0; display: flex; align-items: center; justify-content: center; border: 2px solid #ffd700;">
                <i class="fas fa-image" style="font-size: 4rem; color: #ffd700; opacity: 0.7;"></i>
            </div>
            <h4 style="color: #00bfff; margin-bottom: 1rem;">${project.description}</h4>
            <p style="margin-top: 1rem; line-height: 1.6; color: #cccccc;">${project.details}</p>
            <button class="cta-btn" style="margin-top: 2rem;" onclick="scrollToSection('contact'); closeGalleryModal();">Request Similar Work</button>
        `;
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeGalleryModal() {
    galleryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


window.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        closeModal();
    }
    if (e.target === galleryModal) {
        closeGalleryModal();
    }
});


function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.background = 'linear-gradient(45deg, #00bfff, #0099cc)';
    
    
    setTimeout(() => {
        alert('Thank you for your message! We will contact you within 24 hours.');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
    }, 2000);
}

function openSocial(platform) {
    const socialLinks = {
        facebook: 'https://facebook.com/elitepainting',
        instagram: 'https://instagram.com/elitepainting',
        twitter: 'https://twitter.com/elitepainting',
        whatsapp: 'https://wa.me/966501234567'
    };
    
    if (socialLinks[platform]) {
        window.open(socialLinks[platform], '_blank');
    }
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .contact-item, .stat');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (counter.textContent.includes('+')) {
                    counter.textContent = Math.ceil(current) + '+';
                } else if (counter.textContent.includes('%')) {
                    counter.textContent = Math.ceil(current) + '%';
                } else {
                    counter.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent.includes('+') ? target + '+' : 
                                   counter.textContent.includes('%') ? target + '%' : target;
            }
        };
        
        updateCounter();
    });
}


const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .service-btn, .cta-btn, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'brightness(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (serviceModal.style.display === 'block') {
            closeModal();
        }
        if (galleryModal.style.display === 'block') {
            closeGalleryModal();
        }
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    
    createFloatingParticles();
});

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 15;
    
    particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.3), rgba(0, 191, 255, 0.1));
        border-radius: 50%;
        animation: particleFloat ${duration}s linear infinite;
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, duration * 1000);
}

console.log('🎨 Elite Painting Website Loaded Successfully! ✨');

let currentSlideIndex = 0;
const totalSlides = 4; 

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const dots = document.querySelectorAll('.dot');
    
    
    dots.forEach(dot => dot.classList.remove('active'));

    
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    if (sliderWrapper) {
        sliderWrapper.style.transform = `translateX(-${index * 25}%)`;
    }
    
    
    const currentSlide = document.querySelectorAll('.slide')[index];
    if (currentSlide) {
        const slideText = currentSlide.querySelector('.slide-text');
        if (slideText) {
            slideText.style.animation = 'none';
            setTimeout(() => {
                slideText.style.animation = 'slideTextIn 1s ease-out';
            }, 50);
        }
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}


function autoPlaySlider() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}


document.addEventListener('DOMContentLoaded', () => {
    
    showSlide(0);
    
    
    let startX = 0;
    let endX = 0;
    
    const sliderContainer = document.querySelector('.slider-container');
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    
                    changeSlide(1);
                } else {
            
                    changeSlide(-1);
                }
            }
        }
        
        
        let autoPlayInterval = setInterval(autoPlaySlider, 5000);
        
    
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(autoPlaySlider, 5000);
        });
    }
});

const imageModal = document.getElementById('imageModal');
const imageModalContent = document.getElementById('imageModalContent');

function openImageModal(imageSrc, title, description) {
    imageModalContent.innerHTML = `
        <img src="${imageSrc}" alt="Store Image">
    `;
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
        closeImageModal();
    }
});