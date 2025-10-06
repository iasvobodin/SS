import { gsap, TimelineLite, TweenLite, Power3, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Интерфейс для настройки анимации
interface AnimationOptions {
    duration?: number;
    ease?: string;
    stagger?: number;
    start?: string;
    end?: string;
    hasGradient?: boolean;
}

// Интерфейс для возвращаемого объекта
interface AnimationResult {
    smoother: ScrollSmoother;
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}

export function initAnimations(): AnimationResult | undefined {
    // Проверка, что код выполняется в браузере
    if (typeof window === 'undefined') {
        console.warn('initAnimations called in a non-browser environment.');
        return undefined;
    }

    // Регистрация GSAP плагинов
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Инициализация ScrollSmoother
    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true
    });

    // Анимации Hero-секции с градиентом
    const heroTimeline: gsap.core.Timeline = gsap.timeline();

    heroTimeline
        .to('.hero-title', {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'power3.out'
        })
        .call(() => {
            const gradientWrapper = document.querySelector<HTMLElement>('.gradient-wrapper');
            if (gradientWrapper) {
                gradientWrapper.classList.add('gradient-show');
            }
        }, undefined, '-=0.5') // Используем undefined вместо null
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

    // Универсальная функция анимации
    function animateElements(selector: string, animationType: 'fadeUp' | 'fadeLeft' | 'scale' = 'fadeUp', options: AnimationOptions = {}): void {
        // Указываем, что элементы в массиве — это HTMLElement
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        elements.forEach((elem, i) => {
            const config: gsap.TweenVars = {
                duration: options.duration ?? 0.8, // Используем оператор объединения с null (??)
                ease: options.ease ?? 'power3.out',
                delay: options.stagger ? i * options.stagger : 0,
                scrollTrigger: {
                    trigger: elem,
                    start: options.start ?? 'top 80%',
                    end: options.end ?? 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            };

            // Установка начального состояния и свойств анимации
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

            // Обработка градиентных анимаций
            if (options.hasGradient) {
                // Добавляем onComplete для активации градиента после завершения анимации
                config.onComplete = () => {
                    const gradientWrapper = elem.querySelector<HTMLElement>('.gradient-wrapper');
                    if (gradientWrapper) {
                        gradientWrapper.classList.add('gradient-show');
                    }
                };
            }
        });
    }

    // --- Анимации секций ---

    // Секция About
    animateElements('.about-text h2, .about-mobile h2', 'fadeUp', {
        hasGradient: true,
        // stagger: 0.1
    });
    animateElements('.about-text p, .about-text-mobile p', 'fadeUp', {
        stagger: 0.1
    });
    animateElements('.about-image', 'scale');

    // Заголовки секций с градиентами
    animateElements('.section-header', 'fadeUp', {
        hasGradient: true
    });

    // Галерея
    animateElements('.gallery-item', 'fadeUp', {
        start: 'top 90%',
        stagger: 0.1
    });
    animateElements('.gallery-caption', 'fadeUp');

    // Процесс
    animateElements('.process-item', 'fadeLeft', {
        start: 'top 85%',
        stagger: 0.1
    });

    // Отзывы
    animateElements('.testimonial', 'fadeUp', {
        start: 'top 85%',
        stagger: 0.2
    });

    // Пакеты
    animateElements('.package', 'fadeUp', {
        start: 'top 85%',
        stagger: 0.2
    });

    // Контакты
    animateElements('.contact-form', 'fadeUp');
    animateElements('.contact-note', 'fadeUp');

    // Обновление ScrollTrigger после добавления всех элементов
    ScrollTrigger.refresh();

    // --- Плавная прокрутка для якорных ссылок ---
    document.addEventListener('click', (e: MouseEvent) => {
        // Убеждаемся, что e.target существует и является HTMLElement
        const target = e.target as HTMLElement | null;

        if (target && (target.matches('a[href^="#"]') || target.matches('button[data-scroll-to]'))) {
            e.preventDefault();

            // Получаем атрибуты
            const targetId = target.getAttribute('href') || target.getAttribute('data-scroll-to');
            
            if (targetId) {
                 // Указываем тип для document.querySelector
                const targetElement = document.querySelector<HTMLElement>(targetId);
                
                if (targetElement) {
                    smoother.scrollTo(targetElement, true, 'top top');
                }
            }
        }
    });

    // Возвращаем ключевые объекты
    return { smoother, gsap, ScrollTrigger };
}