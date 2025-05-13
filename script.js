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

  // Project data (manually update this array to add new projects)
  const projects = [
    {
      title: 'Intro to Computer Science Game', // Renamed from "Game Design (Unity)" to reflect course context
      description: 'A 2D platformer built with Unity and C#.',
      image: 'Media/game_design.jpg',
      code: `public class Player : MonoBehaviour {
  void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
      Jump();
    }
  }
}`,
      youtube: 'https://www.youtube.com/watch?v=sample_game', // Placeholder, needs real URL
      preview: 'https://darkstone007.github.io/game-demo/', // Needs verification
      link: 'https://github.com/darkstone007/game-design', // GitHub repo link
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
      link: 'https://github.com/darkstone007/physical-computing', // GitHub repo link
      category: 'technical'
    },
    {
      title: 'FSAE Chassis Design',
      description: 'Designed chassis components using Fusion 360.',
      image: 'Media/chassis_design.jpg',
      link: 'https://github.com/darkstone007/fsae-chassis', // GitHub repo link
      category: 'technical'
    },
    {
      title: 'Poetry Portfolio',
      description: 'A collection of original poems.',
      image: 'Media/poetry.jpg',
      link: 'https://www.tumblr.com/communities/nocturnus-poetry-from-the-soul', // Tumblr URL
      category: 'creative'
    },
    {
      title: 'Video Editing',
      description: 'A video editing project.',
      image: 'Media/Im movie.jpg',
      youtube: 'https://www.youtube.com/watch?v=7Cle2RsJGl8', // YouTube URL
      link: 'https://github.com/darkstone007/video-editing', // GitHub repo link
      category: 'creative'
    },
    {
      title: 'Interactive Media',
      description: 'An interactive media project.',
      image: 'Media/project1.jpg',
      preview: 'https://darkstone007.github.io/Assignment1/', // GitHub Pages URL
      link: 'https://github.com/darkstone007/Assignment1', // GitHub repo link
      code: `function init() {
  console.log('Interactive media loaded');
}`,
      category: 'technical'
    },
    {
      title: 'Digital Comic',
      description: 'A digital comic created in collaboration.',
      image: 'Media/project2.jpg',
      preview: 'https://iam-agyenim.github.io/Comic/', // GitHub Pages URL
      link: 'https://github.com/iam-agyenim/Comic', // GitHub repo link
      category: 'creative'
    },
    {
      title: 'Video Design',
      description: 'A project focused on video design.',
      image: 'Media/project3.jpg',
      preview: 'https://tadilbek11kz.github.io/video-page/', // GitHub Pages URL
      link: 'https://github.com/tadilbek11kz/video-page', // GitHub repo link
      category: 'creative'
    },
    {
      title: 'Audio Page',
      description: 'An audio-focused project.',
      image: 'Media/project4.jpg',
      preview: 'https://tadilbek11kz.github.io/audio-page/', // GitHub Pages URL
      link: 'https://github.com/tadilbek11kz/audio-page', // GitHub repo link
      category: 'creative'
    },
    {
      title: 'NYUADIM Profile',
      description: 'My interactive media profile.',
      image: 'Media/nyuadim-icon.png', // NYUADIM icon as project image
      preview: 'https://intro.nyuadim.com/author/dzf3361/', // NYUADIM URL
      link: 'https://intro.nyuadim.com/author/dzf3361/', // NYUADIM profile link
      category: 'creative'
    }
  ];

  // Photo data (manually update this array for media.html)
  const photos = [
    { title: 'India Trip', src: 'Media/india.jpg' },
    { title: 'Park with Friends', src: 'Media/Park.jpg' },
    { title: 'Podcast', src: 'Media/podcast.jpg' }
  ];

  // Video data (manually update this array for media.html)
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
          // Handle click to show confirmation dialog and redirect
          card.addEventListener('click', () => {
            // Determine the primary URL (preview > youtube > link)
            const url = project.preview || project.youtube || project.link || null;
            if (url) {
              // Show confirmation dialog
              const confirmRedirect = window.confirm(`Do you want to stay or be redirected to the project "${project.title}"?`);
              if (confirmRedirect) {
                // Redirect to the project URL in the same tab
                window.location.href = url;
              }
              // If user cancels, stay on the page (no action needed)
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
      card.innerHTML = `<img src="${photo.src}" alt="${project.title}">`;
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
        console.log(`Project link set to: ${project.link}`); // Debug
      } else {
        modalLink.style.display = 'none';
        console.log(`No project link for ${project.title}`);
      }
      // Handle YouTube link
      if (project.youtube) {
        modalYoutube.href = project.youtube;
        modalYoutube.style.display = 'inline-block';
        console.log(`YouTube link set to: ${project.youtube}`);
      } else {
        modalYoutube.style.display = 'none';
        console.log(`No YouTube link for ${project.title}`);
      }
      // Handle preview link
      if (project.preview) {
        modalPreview.href = project.preview;
        modalPreview.style.display = 'inline-block';
        console.log(`Preview link set to: ${project.preview}`);
      } else {
        modalPreview.style.display = 'none';
        console.log(`No preview link for ${project.title}`);
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
