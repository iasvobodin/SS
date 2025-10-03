import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export function initAnimations() {
    if (typeof window === 'undefined') return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Initialize ScrollSmoother for smooth page scrolling
    let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true
    });

    // Hero animations with gradient
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .to('.hero-title', {
            duration: 1, 
            opacity: 1, 
            y: 0, 
            ease: 'power3.out'
        })
        .call(() => {
            const gradientWrapper = document.querySelector('.hero-title .gradient-wrapper');
            if (gradientWrapper) {
                gradientWrapper.classList.add('gradient-show');
            }
        }, null, '-=0.5')
        .to('.hero-subtitle', {
            duration: 0.8, 
            opacity: 1, 
            y: 0, 
            ease: 'power3.out'
        }, '-=0.5')
        .to('.hero .cta-button', {
            duration: 0.6, 
            opacity: 1, 
            y: 0, 
            ease: 'power3.out'
        }, '-=0.3');

    // Generic animation function for elements with classes
    function animateElements(selector, animationType = 'fadeUp', options = {}) {
        const elements = gsap.utils.toArray(selector);
        
        elements.forEach((elem, i) => {
            const config = {
                duration: options.duration || 0.8,
                ease: options.ease || 'power3.out',
                delay: options.stagger ? i * options.stagger : 0,
                scrollTrigger: {
                    trigger: elem,
                    start: options.start || 'top 80%',
                    end: options.end || 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            };

            // Set initial state and animation properties based on type
            switch (animationType) {
                case 'fadeUp':
                    gsap.set(elem, { opacity: 0, y: 30 });
                    gsap.to(elem, { ...config, opacity: 1, y: 0 });
                    break;
                case 'fadeLeft':
                    gsap.set(elem, { opacity: 0, x: -30 });
                    gsap.to(elem, { ...config, opacity: 1, x: 0 });
                    break;
                case 'scale':
                    gsap.set(elem, { opacity: 0, scale: 0.9 });
                    gsap.to(elem, { ...config, opacity: 1, scale: 1 });
                    break;
            }

            // Handle gradient animations
            if (options.hasGradient) {
                config.onComplete = () => {
                    const gradientWrapper = elem.querySelector('.gradient-wrapper');
                    if (gradientWrapper) {
                        gradientWrapper.classList.add('gradient-show');
                    }
                };
            }
        });
    }

    // About section animations
    animateElements('.about-text h2, .about-mobile h2', 'fadeUp', { 
        hasGradient: true, 
        stagger: 0.1 
    });
    animateElements('.about-text p, .about-text-mobile p', 'fadeUp', { 
        stagger: 0.1 
    });
    animateElements('.about-image', 'scale');

    // Section headers with gradients
    animateElements('.section-header', 'fadeUp', { 
        hasGradient: true 
    });

    // Gallery animations
    animateElements('.gallery-item', 'fadeUp', { 
        start: 'top 90%',
        stagger: 0.1 
    });
    animateElements('.gallery-caption', 'fadeUp');

    // Process animations
    animateElements('.process-item', 'fadeLeft', { 
        start: 'top 85%',
        stagger: 0.1 
    });

    // Testimonials animations
    animateElements('.testimonial', 'fadeUp', { 
        start: 'top 85%',
        stagger: 0.2 
    });

    // Packages animations
    animateElements('.package', 'fadeUp', { 
        start: 'top 85%',
        stagger: 0.2 
    });

    // Contact animations
    animateElements('.contact-form', 'fadeUp');
    animateElements('.contact-note', 'fadeUp');

    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"], button[data-scroll-to]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href') || e.target.getAttribute('data-scroll-to');
            const target = document.querySelector(targetId);
            if (target && smoother) {
                smoother.scrollTo(target, true, 'top top');
            }
        }
    });

    return { smoother, gsap, ScrollTrigger };
}