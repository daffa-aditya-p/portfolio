/**
 * UTILS.JS
 * Utility Functions and Helper Methods
 * Reusable functions for common tasks
 */

const Utils = {
  /**
   * Debounce function to limit the rate of function execution
   * @param {Function} func - Function to debounce
   * @param {Number} wait - Wait time in milliseconds
   * @param {Boolean} immediate - Execute immediately
   * @returns {Function}
   */
  debounce(func, wait = 250, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  /**
   * Throttle function to limit function execution
   * @param {Function} func - Function to throttle
   * @param {Number} limit - Time limit in milliseconds
   * @returns {Function}
   */
  throttle(func, limit = 250) {
    let inThrottle;
    return function(...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Smooth scroll to element
   * @param {String|Element} target - Target element or selector
   * @param {Number} offset - Offset from top
   * @param {Number} duration - Animation duration
   */
  scrollTo(target, offset = 80, duration = 800) {
    const element = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = Utils.easeInOutQuart(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  },

  /**
   * Easing function for smooth animations
   */
  easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
  },

  /**
   * Get element's offset from top of document
   * @param {Element} element - Target element
   * @returns {Number}
   */
  getOffset(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  },

  /**
   * Check if element is in viewport
   * @param {Element} element - Target element
   * @param {Number} threshold - Visibility threshold (0-1)
   * @returns {Boolean}
   */
  isInViewport(element, threshold = 0.5) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = rect.height;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight >= elementHeight * threshold;
  },

  /**
   * Animate counter from start to end value
   * @param {Element} element - Target element
   * @param {Number} start - Start value
   * @param {Number} end - End value
   * @param {Number} duration - Animation duration
   * @param {Function} callback - Callback function
   */
  animateCounter(element, start, end, duration = 2000, callback = null) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timer);
        if (callback) callback();
      }
      element.textContent = Math.floor(current);
    }, 16);
  },

  /**
   * Format number with commas
   * @param {Number} number - Number to format
   * @returns {String}
   */
  formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * Truncate text with ellipsis
   * @param {String} text - Text to truncate
   * @param {Number} length - Maximum length
   * @returns {String}
   */
  truncateText(text, length = 100) {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  },

  /**
   * Generate unique ID
   * @returns {String}
   */
  generateId() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  /**
   * Get random number between min and max
   * @param {Number} min - Minimum value
   * @param {Number} max - Maximum value
   * @returns {Number}
   */
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Get random item from array
   * @param {Array} array - Source array
   * @returns {*}
   */
  randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  /**
   * Shuffle array
   * @param {Array} array - Array to shuffle
   * @returns {Array}
   */
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },

  /**
   * Deep clone object
   * @param {Object} obj - Object to clone
   * @returns {Object}
   */
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Merge objects deeply
   * @param {Object} target - Target object
   * @param {Object} source - Source object
   * @returns {Object}
   */
  deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (Utils.isObject(target) && Utils.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (Utils.isObject(source[key])) {
          if (!(key in target))
            Object.assign(output, { [key]: source[key] });
          else
            output[key] = Utils.deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  },

  /**
   * Check if value is object
   * @param {*} item - Value to check
   * @returns {Boolean}
   */
  isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  /**
   * Wait for specified time
   * @param {Number} ms - Milliseconds to wait
   * @returns {Promise}
   */
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * Load script dynamically
   * @param {String} src - Script URL
   * @returns {Promise}
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  },

  /**
   * Load CSS dynamically
   * @param {String} href - CSS URL
   * @returns {Promise}
   */
  loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  },

  /**
   * Get query parameter from URL
   * @param {String} param - Parameter name
   * @returns {String|null}
   */
  getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },

  /**
   * Set query parameter in URL
   * @param {String} param - Parameter name
   * @param {String} value - Parameter value
   */
  setQueryParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
  },

  /**
   * Local Storage Helper
   */
  storage: {
    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
      }
    },

    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error writing to localStorage:', error);
        return false;
      }
    },

    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing from localStorage:', error);
        return false;
      }
    },

    clear() {
      try {
        localStorage.clear();
        return true;
      } catch (error) {
        console.error('Error clearing localStorage:', error);
        return false;
      }
    }
  },

  /**
   * Session Storage Helper
   */
  session: {
    get(key, defaultValue = null) {
      try {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error reading from sessionStorage:', error);
        return defaultValue;
      }
    },

    set(key, value) {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error writing to sessionStorage:', error);
        return false;
      }
    },

    remove(key) {
      try {
        sessionStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing from sessionStorage:', error);
        return false;
      }
    },

    clear() {
      try {
        sessionStorage.clear();
        return true;
      } catch (error) {
        console.error('Error clearing sessionStorage:', error);
        return false;
      }
    }
  },

  /**
   * Cookie Helper
   */
  cookie: {
    get(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    },

    set(name, value, days = 7) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    },

    remove(name) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
  },

  /**
   * Device Detection
   */
  device: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    isTablet() {
      return /iPad|Android|Tablet/i.test(navigator.userAgent);
    },

    isDesktop() {
      return !this.isMobile() && !this.isTablet();
    },

    isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },

    getOS() {
      const userAgent = window.navigator.userAgent;
      const platform = window.navigator.platform;
      const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
      const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
      const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

      if (macosPlatforms.indexOf(platform) !== -1) return 'Mac OS';
      if (iosPlatforms.indexOf(platform) !== -1) return 'iOS';
      if (windowsPlatforms.indexOf(platform) !== -1) return 'Windows';
      if (/Android/.test(userAgent)) return 'Android';
      if (/Linux/.test(platform)) return 'Linux';

      return 'Unknown';
    },

    getBrowser() {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
      if (userAgent.indexOf('Safari') > -1) return 'Safari';
      if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
      if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) return 'IE';
      if (userAgent.indexOf('Edge') > -1) return 'Edge';
      return 'Unknown';
    }
  },

  /**
   * Validate email address
   * @param {String} email - Email to validate
   * @returns {Boolean}
   */
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  /**
   * Validate URL
   * @param {String} url - URL to validate
   * @returns {Boolean}
   */
  isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  },

  /**
   * Copy text to clipboard
   * @param {String} text - Text to copy
   * @returns {Promise}
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      return false;
    }
  },

  /**
   * Log message in debug mode
   * @param {String} message - Message to log
   * @param {*} data - Additional data
   */
  log(message, data = null) {
    if (CONFIG.debug) {
      console.log(`[Portfolio] ${message}`, data || '');
    }
  },

  /**
   * Log error
   * @param {String} message - Error message
   * @param {Error} error - Error object
   */
  error(message, error = null) {
    console.error(`[Portfolio Error] ${message}`, error || '');
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}
