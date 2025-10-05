/**
 * PARTICLES-CONFIG.JS
 * Particles.js Configuration and Initialization
 */

const ParticlesConfig = {
  /**
   * Initialize particles.js
   */
  init() {
    if (typeof particlesJS === 'undefined') {
      Utils.error('particles.js library not loaded');
      return;
    }

    try {
      particlesJS('particles-js', CONFIG.particles);
      Utils.log('Particles initialized successfully');
    } catch (error) {
      Utils.error('Failed to initialize particles', error);
    }
  },

  /**
   * Update particles color
   * @param {String} color - New color value
   */
  updateColor(color) {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.particles.color.value = color;
      window.pJSDom[0].pJS.particles.line_linked.color = color;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  },

  /**
   * Update particles count
   * @param {Number} count - Number of particles
   */
  updateCount(count) {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.particles.number.value = count;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  },

  /**
   * Pause particles animation
   */
  pause() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.pause();
    }
  },

  /**
   * Resume particles animation
   */
  resume() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.play();
    }
  },

  /**
   * Destroy particles
   */
  destroy() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
  }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for particles.js to load
    setTimeout(() => ParticlesConfig.init(), 100);
  });
} else {
  setTimeout(() => ParticlesConfig.init(), 100);
}
