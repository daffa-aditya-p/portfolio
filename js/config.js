/**
 * CONFIG.JS
 * Global Configuration and Settings
 * Contains all configuration options for the portfolio website
 */

const CONFIG = {
  // Site Information
  site: {
    title: 'Daffa Aditya Pratama - Portfolio',
    description: 'Full Stack Developer & AI Enthusiast',
    url: 'https://daffadev.my.id',
    author: 'Daffa Aditya Pratama',
    email: 'daffaaditya@daffadev.my.id'
  },

  // Personal Information
  personal: {
    name: 'Daffa Aditya Pratama',
    role: 'Full Stack Developer',
    location: 'Jakarta, Indonesia',
    availability: 'Available for work'
  },

  // Social Media Links
  social: {
    github: 'https://github.com/daffaaditya',
    linkedin: 'https://linkedin.com/in/daffaaditya',
    youtube: 'https://youtube.com/@daffaaditya',
    instagram: 'https://instagram.com/daffaaditya',
    tiktok: 'https://tiktok.com/@daffaaditya',
    email: 'mailto:daffaaditya@daffadev.my.id'
  },

  // Typed.js Configuration
  typed: {
    strings: [
      'Full Stack Developer',
      'AI Enthusiast',
      'Creative Problem Solver',
      'Tech Innovator',
      'Software Engineer',
      'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: false
  },

  // AOS (Animate On Scroll) Configuration
  aos: {
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    offset: 120,
    delay: 0,
    disable: false
  },

  // Particles.js Configuration
  particles: {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#10b981'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#10b981',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  },

  // Vanilla Tilt Configuration
  tilt: {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
    scale: 1.05,
    perspective: 1000,
    transition: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)'
  },

  // Animation Timings
  animation: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
      slower: 700
    },
    delay: {
      none: 0,
      short: 100,
      medium: 200,
      long: 300
    }
  },

  // Scroll Configuration
  scroll: {
    offset: 80, // Navbar height offset
    duration: 800,
    easing: 'easeInOutQuart',
    threshold: 0.5 // Intersection Observer threshold
  },

  // Skills Data with Progress
  skills: [
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      category: 'frontend',
      progress: 90,
      description: 'Modern ES6+ JavaScript for building dynamic web applications'
    },
    {
      name: 'Python',
      icon: 'fab fa-python',
      category: 'backend ai',
      progress: 85,
      description: 'Backend development, data science, and AI/ML projects'
    },
    {
      name: 'HTML & CSS',
      icon: 'fab fa-html5',
      category: 'frontend',
      progress: 95,
      description: 'Semantic HTML5 and modern CSS3 with animations'
    },
    {
      name: 'AI & ML',
      icon: 'fas fa-brain',
      category: 'ai',
      progress: 75,
      description: 'Building intelligent systems with machine learning'
    },
    {
      name: 'Arduino',
      icon: 'fas fa-microchip',
      category: 'hardware',
      progress: 80,
      description: 'IoT and hardware programming with Arduino'
    }
  ],

  // Projects Data
  projects: [
    {
      id: 1,
      title: 'Website Ligazone 3 SMP Negeri 109 Jakarta',
      description: 'Comprehensive website for annual school event, built with WordPress CMS providing easy content management.',
      technologies: ['WordPress', 'CMS', 'PHP', 'MySQL'],
      category: 'web cms',
      featured: false,
      links: {
        live: null,
        github: null
      }
    },
    {
      id: 2,
      title: 'Website OSPK47 SMP Negeri 109 Jakarta',
      description: 'Official website for OSIS MPK Angkatan 47 with modern tech stack and real-time features powered by Firebase.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      category: 'web frontend',
      featured: true,
      links: {
        live: 'https://ospk47.my.id',
        github: null
      }
    },
    {
      id: 3,
      title: 'Website Ligazone 3 (Modern Stack)',
      description: 'Redesigned with modern frameworks including Bootstrap and Tailwind CSS for enhanced UI/UX experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'Font Awesome'],
      category: 'web frontend',
      featured: false,
      links: {
        live: null,
        github: null
      }
    }
  ],

  // Counter Animation Configuration
  counter: {
    duration: 2000,
    easingFn: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    }
  },

  // Form Validation Rules
  form: {
    validation: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 50
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 500
      }
    },
    messages: {
      success: 'Message sent successfully! I\'ll get back to you soon.',
      error: 'Oops! Something went wrong. Please try again later.',
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
      minLength: 'This field is too short.',
      maxLength: 'This field is too long.'
    }
  },

  // Loading Screen Duration
  loading: {
    minDuration: 1500, // Minimum loading time in ms
    fakeDuration: 2000 // Simulated loading time
  },

  // Intersection Observer Options
  observer: {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  },

  // Local Storage Keys
  storage: {
    theme: 'portfolio_theme',
    visited: 'portfolio_visited',
    preferences: 'portfolio_preferences'
  },

  // Debug Mode
  debug: false
};

// Freeze the config object to prevent modifications
Object.freeze(CONFIG);

// Log configuration in debug mode
if (CONFIG.debug) {
  console.log('Portfolio Configuration:', CONFIG);
}
