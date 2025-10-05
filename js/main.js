/**
 * MAIN.JS
 * Main Application Controller
 * Initializes and coordinates all components
 */

class PortfolioApp {
  constructor() {
    this.initialized = false;
    this.loading = true;
  }

  /**
   * Initialize the application
   */
  async init() {
    if (this.initialized) return;

    Utils.log('Initializing Portfolio Application...');

    try {
      // Show loading screen
      this.showLoading();

      // Wait for DOM to be fully loaded
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Initialize all modules
      await this.initializeModules();

      // Wait minimum loading time for smooth experience
      await Utils.wait(CONFIG.loading.minDuration);

      // Hide loading screen
      this.hideLoading();

      // Mark as initialized
      this.initialized = true;
      this.loading = false;

      Utils.log('Portfolio Application initialized successfully');

      // Run post-initialization tasks
      this.postInit();

    } catch (error) {
      Utils.error('Failed to initialize application', error);
      this.hideLoading();
    }
  }

  /**
   * Initialize all modules
   */
  async initializeModules() {
    // Initialize interactions first (includes navigation, forms, etc.)
    Interactions.init();

    // Initialize animations (requires DOM elements to be ready)
    Animations.init();

    // Additional initializations
    this.initPerformanceOptimizations();
    this.initServiceWorker();
    this.initAnalytics();
  }

  /**
   * Show loading screen
   */
  showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'flex';
    }
  }

  /**
   * Hide loading screen
   */
  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('loaded');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }

  /**
   * Post-initialization tasks
   */
  postInit() {
    // Check if this is first visit
    this.checkFirstVisit();

    // Setup keyboard shortcuts
    this.setupKeyboardShortcuts();

    // Setup performance monitoring
    this.setupPerformanceMonitoring();

    // Log visitor info in debug mode
    if (CONFIG.debug) {
      this.logVisitorInfo();
    }
  }

  /**
   * Check if this is user's first visit
   */
  checkFirstVisit() {
    const hasVisited = Utils.storage.get(CONFIG.storage.visited);
    
    if (!hasVisited) {
      Utils.storage.set(CONFIG.storage.visited, {
        firstVisit: new Date().toISOString(),
        count: 1
      });
      Utils.log('First visit detected');
    } else {
      hasVisited.count++;
      hasVisited.lastVisit = new Date().toISOString();
      Utils.storage.set(CONFIG.storage.visited, hasVisited);
      Utils.log(`Visit count: ${hasVisited.count}`);
    }
  }

  /**
   * Setup keyboard shortcuts
   */
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K: Focus search (if implemented)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        Utils.log('Search shortcut triggered');
      }

      // Escape: Close modals
      if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.active');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }

      // Ctrl/Cmd + /: Toggle debug mode
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        this.toggleDebugMode();
      }
    });

    Utils.log('Keyboard shortcuts initialized');
  }

  /**
   * Toggle debug mode
   */
  toggleDebugMode() {
    const currentDebug = Utils.storage.get('debug_mode', false);
    Utils.storage.set('debug_mode', !currentDebug);
    console.log(`Debug mode: ${!currentDebug ? 'ON' : 'OFF'}`);
    location.reload();
  }

  /**
   * Setup performance monitoring
   */
  setupPerformanceMonitoring() {
    if (!window.performance) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        Utils.log('Performance Metrics', {
          pageLoadTime: pageLoadTime + 'ms',
          connectTime: connectTime + 'ms',
          renderTime: renderTime + 'ms'
        });

        // Store performance data
        Utils.session.set('performance', {
          pageLoadTime,
          connectTime,
          renderTime,
          timestamp: new Date().toISOString()
        });
      }, 0);
    });
  }

  /**
   * Log visitor information
   */
  logVisitorInfo() {
    const info = {
      device: {
        type: Utils.device.isMobile() ? 'Mobile' : Utils.device.isTablet() ? 'Tablet' : 'Desktop',
        touch: Utils.device.isTouchDevice(),
        os: Utils.device.getOS(),
        browser: Utils.device.getBrowser()
      },
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      } : 'Not available',
      language: navigator.language,
      languages: navigator.languages,
      userAgent: navigator.userAgent
    };

    console.table(info.device);
    console.table(info.screen);
    console.table(info.viewport);
    console.log('Connection:', info.connection);
  }

  /**
   * Initialize performance optimizations
   */
  initPerformanceOptimizations() {
    // Lazy load images
    this.lazyLoadImages();

    // Preload critical resources
    this.preloadCriticalResources();

    // Setup connection-aware loading
    this.setupConnectionAwareLoading();

    Utils.log('Performance optimizations initialized');
  }

  /**
   * Lazy load images
   */
  lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources() {
    const criticalResources = [
      // Add paths to critical resources here
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = this.getResourceType(resource);
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  /**
   * Get resource type from URL
   */
  getResourceType(url) {
    if (url.endsWith('.css')) return 'style';
    if (url.endsWith('.js')) return 'script';
    if (url.match(/\.(jpg|jpeg|png|gif|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|otf)$/)) return 'font';
    return 'fetch';
  }

  /**
   * Setup connection-aware loading
   */
  setupConnectionAwareLoading() {
    if (!navigator.connection) return;

    const connection = navigator.connection;
    
    // Reduce quality on slow connections
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      document.body.classList.add('low-quality');
      
      // Disable particles on slow connections
      if (window.pJSDom && window.pJSDom.length > 0) {
        ParticlesConfig.destroy();
      }
      
      Utils.log('Low quality mode enabled due to slow connection');
    }

    // Listen for connection changes
    connection.addEventListener('change', () => {
      Utils.log('Connection changed:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    });
  }

  /**
   * Initialize Service Worker
   */
  initServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          Utils.log('Service Worker registered:', registration);
        })
        .catch(error => {
          Utils.error('Service Worker registration failed', error);
        });
    }
  }

  /**
   * Initialize Analytics (placeholder)
   */
  initAnalytics() {
    // Add your analytics initialization here
    // Example: Google Analytics, Plausible, etc.
    Utils.log('Analytics placeholder - add your analytics code here');
  }

  /**
   * Handle visibility change
   */
  handleVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Page is hidden
        Utils.log('Page hidden');
        
        // Pause particles animation to save resources
        if (window.pJSDom && window.pJSDom.length > 0) {
          ParticlesConfig.pause();
        }
      } else {
        // Page is visible
        Utils.log('Page visible');
        
        // Resume particles animation
        if (window.pJSDom && window.pJSDom.length > 0) {
          ParticlesConfig.resume();
        }
      }
    });
  }

  /**
   * Handle online/offline status
   */
  handleConnectionStatus() {
    window.addEventListener('online', () => {
      Utils.log('Connection restored');
      this.showNotification('Connection restored', 'success');
    });

    window.addEventListener('offline', () => {
      Utils.log('Connection lost');
      this.showNotification('No internet connection', 'error');
    });
  }

  /**
   * Show notification (simple implementation)
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  /**
   * Cleanup and destroy
   */
  destroy() {
    // Remove event listeners
    // Clear intervals
    // Cleanup resources
    
    if (window.pJSDom && window.pJSDom.length > 0) {
      ParticlesConfig.destroy();
    }

    this.initialized = false;
    Utils.log('Portfolio Application destroyed');
  }
}

// Create global app instance
const app = new PortfolioApp();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Handle page visibility changes
app.handleVisibilityChange();

// Handle connection status
app.handleConnectionStatus();

// Export for use in other modules or console
if (typeof window !== 'undefined') {
  window.PortfolioApp = app;
}
