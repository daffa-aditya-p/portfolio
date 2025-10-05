/**
 * ANIMATIONS.JS
 * Scroll Animations, Reveals, and Motion Effects
 */

const Animations = {
  /**
   * Initialize all animations
   */
  init() {
    this.initAOS();
    this.initScrollReveal();
    this.initCounterAnimations();
    this.initProgressBars();
    this.initTimelineAnimation();
    Utils.log('Animations initialized');
  },

  /**
   * Initialize AOS (Animate On Scroll)
   */
  initAOS() {
    if (typeof AOS === 'undefined') {
      Utils.error('AOS library not loaded');
      return;
    }

    try {
      AOS.init(CONFIG.aos);
      Utils.log('AOS initialized');
    } catch (error) {
      Utils.error('Failed to initialize AOS', error);
    }
  },

  /**
   * Initialize custom scroll reveal animations
   */
  initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-fade');
    
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, CONFIG.observer);

    revealElements.forEach(el => observer.observe(el));
    Utils.log(`Scroll reveal initialized for ${revealElements.length} elements`);
  },

  /**
   * Initialize counter animations
   */
  initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          const target = parseInt(entry.target.dataset.count);
          const start = 0;
          const duration = CONFIG.counter.duration;
          
          this.animateCounter(entry.target, start, target, duration);
          entry.target.dataset.counted = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, CONFIG.observer);

    counters.forEach(counter => observer.observe(counter));
    Utils.log(`Counter animations initialized for ${counters.length} counters`);
  },

  /**
   * Animate counter
   */
  animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  },

  /**
   * Initialize progress bars (circular)
   */
  initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar[data-progress]');
    
    if (progressBars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const progress = parseInt(entry.target.dataset.progress);
          this.animateProgressBar(entry.target, progress);
          entry.target.dataset.animated = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, CONFIG.observer);

    progressBars.forEach(bar => observer.observe(bar));
    Utils.log(`Progress bars initialized for ${progressBars.length} bars`);
  },

  /**
   * Animate circular progress bar
   */
  animateProgressBar(element, progress) {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    
    // Animate from full offset to target offset
    element.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
      element.style.strokeDashoffset = offset;
    }, 100);
  },

  /**
   * Initialize timeline animation
   */
  initTimelineAnimation() {
    const timelineLine = document.getElementById('timeline-line');
    
    if (!timelineLine) return;

    const timeline = document.querySelector('.timeline');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const scrollPercentage = (window.scrollY - timeline.offsetTop) / timeline.offsetHeight;
          const height = Math.min(Math.max(scrollPercentage * 100, 0), 100);
          this.updateTimelineLine(height);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(timeline);

    // Update on scroll
    window.addEventListener('scroll', Utils.throttle(() => {
      if (Utils.isInViewport(timeline, 0.1)) {
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const scrolled = window.scrollY - timelineTop + window.innerHeight / 2;
        const percentage = Math.min(Math.max((scrolled / timelineHeight) * 100, 0), 100);
        this.updateTimelineLine(percentage);
      }
    }, 50));

    Utils.log('Timeline animation initialized');
  },

  /**
   * Update timeline line progress
   */
  updateTimelineLine(percentage) {
    const timelineLine = document.getElementById('timeline-line');
    if (timelineLine) {
      timelineLine.style.height = `${percentage}%`;
    }
  },

  /**
   * Parallax effect on mouse move
   */
  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;

    document.addEventListener('mousemove', Utils.throttle((e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    }, 50));

    Utils.log('Parallax effect initialized');
  },

  /**
   * Create confetti effect
   */
  createConfetti(element) {
    const colors = ['#10b981', '#34d399', '#6ee7b7', '#5eead4', '#84cc16'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = Utils.randomItem(colors);
      confetti.style.left = element.offsetLeft + element.offsetWidth / 2 + 'px';
      confetti.style.top = element.offsetTop + element.offsetHeight / 2 + 'px';
      confetti.style.opacity = '1';
      confetti.style.pointerEvents = 'none';
      confetti.style.borderRadius = '50%';
      confetti.style.zIndex = '9999';
      
      document.body.appendChild(confetti);

      const angle = (Math.PI * 2 * i) / confettiCount;
      const velocity = Utils.randomNumber(100, 300);
      const velocityX = Math.cos(angle) * velocity;
      const velocityY = Math.sin(angle) * velocity;

      confetti.style.animation = `confetti 2s ease-out forwards`;
      confetti.style.setProperty('--tx', velocityX + 'px');
      confetti.style.setProperty('--ty', velocityY + 'px');

      setTimeout(() => {
        confetti.remove();
      }, 2000);
    }
  },

  /**
   * Create ripple effect
   */
  createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  },

  /**
   * Magnetic button effect
   */
  initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });

    Utils.log(`Magnetic effect initialized for ${magneticElements.length} elements`);
  },

  /**
   * Text reveal animation
   */
  revealText(element, delay = 0) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        element.textContent += text[i];
      }, delay + i * 50);
    }
  },

  /**
   * Shake element
   */
  shake(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
      element.style.animation = '';
    }, 500);
  },

  /**
   * Pulse element
   */
  pulse(element) {
    element.style.animation = 'pulse 0.5s';
    setTimeout(() => {
      element.style.animation = '';
    }, 500);
  },

  /**
   * Bounce element
   */
  bounce(element) {
    element.style.animation = 'bounce 1s';
    setTimeout(() => {
      element.style.animation = '';
    }, 1000);
  },

  /**
   * Refresh AOS
   */
  refresh() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Animations;
}
