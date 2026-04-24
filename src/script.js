// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  moonIcon?.classList.add('hidden');
  sunIcon?.classList.remove('hidden');
}

themeToggle?.addEventListener('click', function() {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
  } else {
    localStorage.setItem('theme', 'light');
    moonIcon?.classList.remove('hidden');
    sunIcon?.classList.add('hidden');
  }
});

// Smooth Scrolling
window.scrollToSection = function(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
        break;
      }
    }
  }
}

window.addEventListener('scroll', updateActiveLink);

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('data-section');
    scrollToSection(sectionId);
  });
});

// Skills Data with Emojis
const skills = [
  { name: 'C Language', level: 69, emoji: '💻' },
  { name: 'C++', level: 27, emoji: '⚡' },
  { name: 'Python', level: 35, emoji: '🐍' },
  { name: 'JavaScript', level: 29, emoji: '🌐' },
  { name: 'CSS', level: 30, emoji: '🎨' },
  { name: 'Java', level: 25, emoji: '☕' }
];

// Render Skills
const skillsGrid = document.getElementById('skillsGrid');

skills.forEach(skill => {
  const skillCard = document.createElement('div');
  skillCard.className = 'skill-card';

  skillCard.innerHTML = `
    <div class="skill-header">
      <div class="skill-name-container">
        <span class="skill-emoji">${skill.emoji}</span>
        <span class="skill-name">${skill.name}</span>
      </div>
      <span class="skill-percentage">${skill.level}%</span>
    </div>
    <div class="skill-bar-container">
      <div class="skill-bar" style="width: 0%"></div>
    </div>
  `;

  skillsGrid.appendChild(skillCard);

  // Animate skill bar
  setTimeout(() => {
    const skillBar = skillCard.querySelector('.skill-bar');
    skillBar.style.width = skill.level + '%';
  }, 100);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const submitButton = contactForm?.querySelector('.submit-button');



// Initialise once at load time
window.addEventListener('load', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
});

contactForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  if (typeof emailjs === 'undefined') {
    alert('Email service not loaded. Check your internet connection.');
    return;
  }

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name:    name,
    email:   email,
    message: message,
  })
  .then(() => {
    submitButton.textContent = 'Message Sent ✓';
    submitButton.style.background = 'linear-gradient(to right, #10b981, #059669)';
    contactForm.reset();
    setTimeout(() => {
      submitButton.textContent = 'Send Message';
      submitButton.style.background = '';
      submitButton.disabled = false;
    }, 3000);
  })
  .catch((err) => {
    console.error('EmailJS error:', JSON.stringify(err));
    submitButton.textContent = 'Failed — Try Again';
    submitButton.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
    submitButton.disabled = false;
    setTimeout(() => {
      submitButton.textContent = 'Send Message';
      submitButton.style.background = '';
    }, 3000);
  });
});

// Initialize
updateActiveLink();
