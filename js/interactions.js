/**
 * INTERACTIONS.JS
 * User Interactions, Events, and Dynamic Features
 */

const Interactions = {
  /**
   * Initialize all interactions
   */
  init() {
    this.initNavigation();
    this.initTyped();
    this.initTilt();
    this.initFilters();
    this.initCustomCursor();
    this.initScrollToTop();
    this.initContactForm();
    this.initModal();
    this.initSmoothScroll();
    Utils.log('Interactions initialized');
  },

  /**
   * Initialize navigation
   */
  initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect on navbar
    window.addEventListener('scroll', Utils.throttle(() => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, 100));

    // Hamburger menu toggle
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
      });
    }

    // Active link on scroll
    window.addEventListener('scroll', Utils.throttle(() => {
      let current = '';
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, 100));

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    Utils.log('Navigation initialized');
  },

  /**
   * Initialize Typed.js
   */
  initTyped() {
    const typedElement = document.getElementById('typed-text');
    
    if (!typedElement || typeof Typed === 'undefined') {
      return;
    }

    try {
      new Typed('#typed-text', CONFIG.typed);
      Utils.log('Typed.js initialized');
    } catch (error) {
      Utils.error('Failed to initialize Typed.js', error);
    }
  },

  /**
   * Initialize Vanilla Tilt
   */
  initTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    if (tiltElements.length === 0 || typeof VanillaTilt === 'undefined') {
      return;
    }

    try {
      VanillaTilt.init(tiltElements, CONFIG.tilt);
      Utils.log(`Tilt effect initialized for ${tiltElements.length} elements`);
    } catch (error) {
      Utils.error('Failed to initialize Tilt effect', error);
    }
  },

  /**
   * Initialize filter functionality
   */
  initFilters() {
    // Skills filter
    const skillsFilter = document.querySelectorAll('.skills-filter .filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    this.setupFilter(skillsFilter, skillCards, 'category');

    // Projects filter
    const projectsFilter = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    this.setupFilter(projectsFilter, projectCards, 'category');

    Utils.log('Filters initialized');
  },

  /**
   * Setup filter functionality
   */
  setupFilter(filterButtons, items, dataAttribute) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.dataset.filter;

        items.forEach(item => {
          if (filterValue === 'all') {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            const itemCategories = item.dataset[dataAttribute];
            if (itemCategories && itemCategories.includes(filterValue)) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 10);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          }
        });

        // Refresh AOS after filter
        setTimeout(() => {
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        }, 350);
      });
    });
  },

  /**
   * Initialize custom cursor
   */
  initCustomCursor() {
    if (Utils.device.isMobile() || Utils.device.isTablet()) {
      return;
    }

    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      // Smooth follow for dot
      dotX += (mouseX - dotX) * 0.9;
      dotY += (mouseY - dotY) * 0.9;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';

      // Slower follow for outline
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';

      requestAnimationFrame(animate);
    };

    animate();

    // Active state on clickable elements
    const clickableElements = document.querySelectorAll('a, button, [data-clickable]');
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
      });
    });

    Utils.log('Custom cursor initialized');
  },

  /**
   * Initialize scroll to top button
   */
  initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) return;

    window.addEventListener('scroll', Utils.throttle(() => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, 100));

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    Utils.log('Scroll to top initialized');
  },

  /**
   * Initialize contact form
   */
  initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      // Validate form
      if (!this.validateForm(formData)) {
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';

      // Simulate form submission (replace with actual API call)
      await Utils.wait(2000);

      // Show success message
      this.showFormMessage(form, 'success', CONFIG.form.messages.success);
      form.reset();

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      Utils.log('Form submitted', formData);
    });

    Utils.log('Contact form initialized');
  },

  /**
   * Validate contact form
   */
  validateForm(data) {
    let isValid = true;

    // Validate name
    if (!data.name || data.name.length < CONFIG.form.validation.name.minLength) {
      this.showFieldError('name', CONFIG.form.messages.required);
      isValid = false;
    } else {
      this.clearFieldError('name');
    }

    // Validate email
    if (!data.email || !Utils.isValidEmail(data.email)) {
      this.showFieldError('email', CONFIG.form.messages.email);
      isValid = false;
    } else {
      this.clearFieldError('email');
    }

    // Validate message
    if (!data.message || data.message.length < CONFIG.form.validation.message.minLength) {
      this.showFieldError('message', CONFIG.form.messages.required);
      isValid = false;
    } else {
      this.clearFieldError('message');
    }

    return isValid;
  },

  /**
   * Show field error
   */
  showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = field.parentElement.querySelector('.form-error');
    
    if (field && errorElement) {
      field.style.borderColor = '#ef4444';
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  },

  /**
   * Clear field error
   */
  clearFieldError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = field.parentElement.querySelector('.form-error');
    
    if (field && errorElement) {
      field.style.borderColor = '';
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  },

  /**
   * Show form message
   */
  showFormMessage(form, type, message) {
    const messageElement = form.querySelector('.form-message');
    
    if (messageElement) {
      messageElement.textContent = message;
      messageElement.className = `form-message ${type}`;
      messageElement.style.display = 'block';

      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 5000);
    }
  },

  /**
   * Initialize modal
   */
  initModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const modalBody = document.getElementById('modal-body');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');

    // Open modal on project card click
    const projectButtons = document.querySelectorAll('[data-project]');
    projectButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.dataset.project;
        this.openModal(modal, modalBody, projectId);
      });
    });

    // Close modal
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    Utils.log('Modal initialized');
  },

  /**
   * Open modal with project details
   */
  openModal(modal, modalBody, projectId) {
    const project = CONFIG.projects.find(p => p.id === parseInt(projectId));
    
    if (!project) return;

    modalBody.innerHTML = `
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-description">${project.description}</p>
      <div class="modal-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      ${project.links.live ? `
        <div class="modal-actions">
          <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i>
            <span>Visit Website</span>
          </a>
        </div>
      ` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  /**
   * Initialize smooth scroll for anchor links
   */
  initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        if (targetId === '#' || !targetId) return;

        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          Utils.scrollTo(targetElement, CONFIG.scroll.offset, CONFIG.scroll.duration);
        }
      });
    });

    Utils.log('Smooth scroll initialized');
  },

  /**
   * Initialize tooltips
   */
  initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
      });

      el.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Interactions;
}
