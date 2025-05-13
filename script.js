// JavaScript for interactivity across all portfolio pages

// Wait for DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality for dark/light mode
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  // Scroll-triggered animations for sections
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class for fade-in
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Project data for projects.html
  const projects = [
    // Technical project: Unity-based 2D platformer
    {
      title: 'Intro to Computer Science Game',
      description: 'A 2D platformer built with Unity and C# for an NYUAD course.',
      image: 'Media/game_design.jpg',
      code: `public class Player : MonoBehaviour {
  public float jumpForce = 5f;
  private Rigidbody2D rb;

  void Start() {
    rb = GetComponent<Rigidbody2D>();
  }

  void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
      Jump();
    }
  }

  void Jump() {
    rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
  }
}`,
      preview: 'https://darkstone007.github.io/game-demo/', // Verify this URL
      link: 'https://github.com/darkstone007/game-design', // Verify GitHub repo
      category: 'technical'
    },
    // Technical project: Arduino-based interactive installation
    {
      title: 'Physical Computing',
      description: 'An interactive LED installation using Arduino.',
      image: 'Media/physical_computing.jpg',
      code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
      link: 'https://github.com/darkstone007/physical-computing', // Verify GitHub repo
      category: 'technical'
    },
    // Technical project: CAD design for FSAE
    {
      title: 'FSAE Chassis Design',
      description: 'Designed chassis components using Fusion 360.',
      image: 'Media/chassis_design.jpg',
      link: 'https://github.com/darkstone007/fsae-chassis', // Verify GitHub repo
      category: 'technical'
    },
    // Creative project: Poetry collection
    {
      title: 'Poetry Portfolio',
      description: 'A collection of original poems.',
      image: 'Media/poetry.jpg',
      link: 'https://www.tumblr.com/communities/nocturnus-poetry-from-the-soul',
      category: 'creative'
    },
    // Creative project: Video editing
    {
      title: 'Video Editing',
      description: 'A video editing project showcasing storytelling.',
      image: 'Media/Im movie.jpg',
      youtube: 'https://www.youtube.com/watch?v=7Cle2RsJGl8',
      link: 'https://github.com/darkstone007/video-editing', // Verify GitHub repo
      category: 'creative'
    },
    // Technical project: Interactive media webpage
    {
      title: 'Interactive Media',
      description: 'An interactive webpage built with HTML, CSS, and JavaScript.',
      image: 'Media/project1.jpg',
      preview: 'https://darkstone007.github.io/Assignment1/',
      link: 'https://github.com/darkstone007/Assignment1',
      code: `function init() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#C7B198';
  ctx.fillRect(50, 50, 100, 100);
}`,
      category: 'technical'
    },
    // Creative project: Collaborative digital comic
    {
      title: 'Digital Comic',
      description: 'A digital comic created in collaboration.',
      image: 'Media/project2.jpg',
      preview: 'https://iam-agyenim.github.io/Comic/',
      link: 'https://github.com/iam-agyenim/Comic',
      category: 'creative'
    },
    // Creative project: Video design webpage
    {
      title: 'Video Design',
      description: 'A project focused on video design and presentation.',
      image: 'Media/project3.jpg',
      preview: 'https://tadilbek11kz.github.io/video-page/',
      link: 'https://github.com/tadilbek11kz/video-page',
      category: 'creative'
    },
    // Creative project: Audio-focused webpage
    {
      title: 'Audio Page',
      description: 'An audio-focused project with interactive elements.',
      image: 'Media/project4.jpg',
      preview: 'https://tadilbek11kz.github.io/audio-page/',
      link: 'https://github.com/tadilbek11kz/audio-page',
      category: 'creative'
    },
    // Creative project: NYUADIM profile
    {
      title: 'NYUADIM Profile',
      description: 'My interactive media profile at NYU Abu Dhabi.',
      image: 'Media/nyuadim-icon.png',
      preview: 'https://intro.nyuadim.com/author/dzf3361/',
      link: 'https://intro.nyuadim.com/author/dzf3361/',
      category: 'creative'
    }
  ];

  // Photo data for media.html
  const photos = [
    { title: 'India Trip', src: 'Media/india.jpg' },
    { title: 'Park with Friends', src: 'Media/Park.jpg' },
    { title: 'Podcast', src: 'Media/podcast.jpg' }
  ];

  // Video data for media.html
  const videos = [
    {
      title: 'Website Creation Process',
      src: 'https://www.youtube.com/embed/P02uKRqClg0?si=U2xBHH0yb2vCsSLb',
      type: 'iframe'
    },
    {
      title: 'Camera Setup for Portfolio',
      src: 'https://www.youtube.com/embed/5WCMzXnJwiM?si=XDYKQowcTNiH-9BS',
      type: 'iframe'
    }
  ];

  // Render projects on projects.html
  const projectGallery = document.getElementById('project-gallery');
  if (projectGallery) {
    // Function to render projects based on filter
    function renderProjects(filter = 'all') {
      projectGallery.innerHTML = '';
      projects
        .filter(project => filter === 'all' || project.category === filter)
        .forEach(project => {
          const card = document.createElement('div');
          card.className = `project-card ${project.category}`;
          card.innerHTML = `
            <h3>${project.title}</h3>
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : ''}
            ${project.video ? `<video src="${project.video}" controls></video>` : ''}
          `;
          // Handle click to show confirmation dialog and redirect in new tab
          card.addEventListener('click', () => {
            // Determine the primary URL (preview > youtube > link)
            const url = project.preview || project.youtube || project.link || null;
            if (url) {
              // Show confirmation dialog
              const confirmRedirect = window.confirm(`Do you want to stay or be redirected to the project "${project.title}"?`);
              if (confirmRedirect) {
                // Open the project URL in a new tab
                window.open(url, '_blank');
              }
              // If user cancels, stay on the page
            } else {
              console.log(`No URL available for ${project.title}`);
            }
          });
          projectGallery.appendChild(card);
        });
    }
    renderProjects();

    // Add event listeners for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });
  }

  // Render photos on media.html
  const photoGallery = document.getElementById('photo-gallery');
  if (photoGallery) {
    photos.forEach(photo => {
      const card = document.createElement('div');
      card.className = 'media-card';
      card.innerHTML = `<img src="${photo.src}" alt="${photo.title}">`;
      photoGallery.appendChild(card);
    });
  }

  // Render videos on media.html
  const videoGallery = document.getElementById('video-gallery');
  if (videoGallery) {
    videos.forEach(video => {
      const card = document.createElement('div');
      card.className = 'media-card';
      card.innerHTML = `<iframe src="${video.src}" title="${video.title}" frameborder="0" allowfullscreen></iframe>`;
      videoGallery.appendChild(card);
    });
  }

  // Modal functionality for projects (retained but unused for card clicks)
  const modal = document.getElementById('project-modal');
  if (modal) {
    const modalTitle = document.getElementById('modal-title');
    const modalMedia = document.getElementById('modal-media');
    const modalDescription = document.getElementById('modal-description');
    const modalCode = document.getElementById('modal-code');
    const modalLink = document.getElementById('modal-link');
    const modalYoutube = document.getElementById('modal-youtube');
    const modalPreview = document.getElementById('modal-preview');
    const modalClose = document.getElementById('modal-close');

    // Open modal with project details (not triggered by card clicks)
    function openModal(project) {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalMedia.innerHTML = '';
      if (project.image) {
        modalMedia.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
      } else if (project.video) {
        modalMedia.innerHTML = `<video src="${project.video}" controls></video>`;
      } else if (project.youtube) {
        // Embed YouTube video in modal if available
        const videoId = project.youtube.match(/(?:v=|youtu\.be\/)([^&?]+)/)?.[1];
        if (videoId) {
          modalMedia.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" title="${project.title}" frameborder="0" allowfullscreen></iframe>`;
        }
      }
      if (project.code) {
        modalCode.textContent = project.code;
        modalCode.style.display = 'block';
      } else {
        modalCode.style.display = 'none';
      }
      // Handle project link
      if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = 'inline-block';
      } else {
        modalLink.style.display = 'none';
      }
      // Handle YouTube link
      if (project.youtube) {
        modalYoutube.href = project.youtube;
        modalYoutube.style.display = 'inline-block';
      } else {
        modalYoutube.style.display = 'none';
      }
      // Handle preview link
      if (project.preview) {
        modalPreview.href = project.preview;
        modalPreview.style.display = 'inline-block';
      } else {
        modalPreview.style.display = 'none';
      }
      modal.style.display = 'flex';
    }

    // Close modal on button click
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
      // Stop any playing YouTube video
      const iframe = modalMedia.querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src; // Reset iframe to stop video
      }
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        const iframe = modalMedia.querySelector('iframe');
        if (iframe) {
          iframe.src = iframe.src; // Reset iframe to stop video
        }
      }
    });
  }
});
