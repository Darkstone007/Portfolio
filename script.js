// JavaScript for interactivity across all pages

// Wait for DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
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

  // Project data (manually update this array to add new projects)
  const projects = [
    {
      title: 'Game Design (Unity)',
      description: 'A 2D platformer built with Unity and C#.',
      image: 'Media/game_design.jpg',
      code: `public class Player : MonoBehaviour {
  void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
      Jump();
    }
  }
}`,
      youtube: 'https://youtu.be/sample_game',
      preview: 'https://darkstone007.github.io/game-demo/',
      category: 'technical'
    },
    {
      title: 'Physical Computing',
      description: 'An interactive installation using Arduino.',
      image: 'Media/physical_computing.jpg',
      code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
}`,
      category: 'technical'
    },
    {
      title: 'FSAE Chassis Design',
      description: 'Designed chassis components using Fusion 360.',
      image: 'Media/chassis_design.jpg',
      category: 'technical'
    },
    {
      title: 'Poetry Portfolio',
      description: 'A collection of original poems.',
      image: 'Media/poetry.jpg',
      category: 'creative'
    },
    {
      title: 'Film Project',
      description: 'A short film with scriptwriting and editing.',
      video: 'Media/film_project.mp4',
      youtube: 'https://youtu.be/sample_film',
      category: 'creative'
    },
    {
      title: 'Video Editing',
      description: 'A video editing project.',
      image: 'Media/Im movie.jpg',
      youtube: 'https://youtu.be/7Cle2RsJGl8?si=QmBFutBJ1Ju2ccX3',
      category: 'creative'
    },
    {
      title: 'Interactive Media',
      description: 'An interactive media project.',
      image: 'Media/project1.jpg',
      preview: 'https://darkstone007.github.io/Assignment1/',
      code: `function init() {
  console.log('Interactive media loaded');
}`,
      category: 'technical'
    },
    {
      title: 'Digital Comic',
      description: 'A digital comic created in collaboration.',
      image: 'Media/project2.jpg',
      preview: 'https://iam-agyenim.github.io/Comic/',
      category: 'creative'
    },
    {
      title: 'Video Design',
      description: 'A project focused on video design.',
      image: 'Media/project3.jpg',
      preview: 'https://tadilbek11kz.github.io/video-page/',
      category: 'creative'
    },
    {
      title: 'Audio Page',
      description: 'An audio-focused project.',
      image: 'Media/project4.jpg',
      preview: 'https://tadilbek11kz.github.io/audio-page/',
      category: 'creative'
    },
    {
      title: 'NYUADIM Profile',
      description: 'My interactive media profile.',
      preview: 'https://intro.nyuadim.com/author/dzf3361/',
      category: 'creative'
    }
  ];

  // Photo data (manually update this array)
  const photos = [
    { title: 'India Trip', src: 'Media/india.jpg' },
    { title: 'Park with Friends', src: 'Media/Park.jpg' },
    { title: 'Podcast', src: 'Media/podcast.jpg' }
  ];

  // Video data (manually update this array)
  const videos = [
    {
      title: 'Website Creation Process',
      src: 'https://www.youtube.com/embed/P02uKRqClg0?si=U2xBHH0yb2vCsSLb',
      type: 'iframe'
    },
    {
      title: 'Camera Setup for Portfolio',
      src: 'https://www.youtube.com/embed/nDTWKTSzp40?si=XDYKQowcTNiH-9BS',
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
          card.addEventListener('click', () => openModal(project));
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

  // Modal functionality for projects
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

    // Open modal with project details
    function openModal(project) {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalMedia.innerHTML = '';
      if (project.image) {
        modalMedia.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
      } else if (project.video) {
        modalMedia.innerHTML = `<video src="${project.video}" controls></video>`;
      }
      if (project.code) {
        modalCode.textContent = project.code;
        modalCode.style.display = 'block';
      } else {
        modalCode.style.display = 'none';
      }
      if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = 'inline-block';
      } else {
        modalLink.style.display = 'none';
      }
      if (project.youtube) {
        modalYoutube.href = project.youtube;
        modalYoutube.style.display = 'inline-block';
      } else {
        modalYoutube.style.display = 'none';
      }
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
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
