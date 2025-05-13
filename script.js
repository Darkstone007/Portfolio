// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // Scroll-triggered animations
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Project data from CV and previous site
  const projects = [
    {
      title: 'Game Design (Unity)',
      description: 'A 2D platformer built with Unity and C#, featuring custom mechanics and storytelling.',
      image: 'Media/game_design.jpg',
      code: `public class Player : MonoBehaviour {
  void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
      Jump();
    }
  }
}`,
      category: 'technical',
    },
    {
      title: 'Physical Computing',
      description: 'An interactive installation using Arduino, LEDs, and sensors.',
      image: 'Media/physical_computing.jpg',
      code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
}`,
      category: 'technical',
    },
    {
      title: 'FSAE Chassis Design',
      description: 'Designed chassis components using Fusion 360 for NYUAD’s FSAE team.',
      image: 'Media/chassis_design.jpg',
      category: 'technical',
    },
    {
      title: 'Poetry Portfolio',
      description: 'A collection of original poems exploring identity and philosophy.',
      image: 'Media/poetry.jpg',
      category: 'creative',
    },
    {
      title: 'Film Project',
      description: 'A short film with scriptwriting, acting, and editing using Adobe Premiere.',
      video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      category: 'creative',
    },
    {
      title: 'Video Editing',
      description: 'A video editing project showcasing storytelling through visuals.',
      image: 'Media/Im movie.jpg',
      link: 'https://youtu.be/7Cle2RsJGl8?si=QmBFutBJ1Ju2ccX3',
      category: 'creative',
    },
    {
      title: 'Interactive Media',
      description: 'An interactive media project built with HTML, CSS, and JavaScript.',
      image: 'Media/project1.jpg',
      link: 'https://darkstone007.github.io/Assignment1/',
      code: `function init() {
  console.log('Interactive media loaded');
}`,
      category: 'technical',
    },
    {
      title: 'Digital Comic',
      description: 'A digital comic created in collaboration.',
      image: 'Media/project2.jpg',
      link: 'https://iam-agyenim.github.io/Comic/',
      category: 'creative',
    },
    {
      title: 'Video Design',
      description: 'A project focused on video design and production.',
      image: 'Media/project3.jpg',
      link: 'https://tadilbek11kz.github.io/video-page/',
      category: 'creative',
    },
    {
      title: 'Audio Page',
      description: 'An audio-focused project with creative sound design.',
      image: 'Media/project4.jpg',
      link: 'https://tadilbek11kz.github.io/audio-page/',
      category: 'creative',
    },
    {
      title: 'NYUADIM Profile',
      description: 'My profile showcasing interactive media work.',
      link: 'https://intro.nyuadim.com/author/dzf3361/',
      category: 'creative',
    },
  ];

  // Media data
  const photos = [
    { title: 'India Trip', src: 'Media/india.jpg' },
    { title: 'Park with Friends', src: 'Media/Park.jpg' },
    { title: 'Podcast', src: 'Media/podcast.jpg' },
  ];

  const videos = [
    {
      title: 'Website Creation Process',
      src: 'https://www.youtube.com/embed/P02uKRqClg0?si=U2xBHH0yb2vCsSLb',
      type: 'iframe',
    },
    {
      title: 'Camera Setup for Portfolio',
      src: 'https://www.youtube.com/embed/nDTWKTSzp40?si=XDYKQowcTNiH-9BS',
      type: 'iframe',
    },
  ];

  // Render projects
  const projectGallery = document.getElementById('project-gallery');
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

  // Project filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Render photos
  const photoGallery = document.getElementById('photo-gallery');
  photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `<img src="${photo.src}" alt="${photo.title}">`;
    photoGallery.appendChild(card);
  });

  // Render videos
  const videoGallery = document.getElementById('video-gallery');
  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `<iframe src="${video.src}" title="${video.title}" frameborder="0" allowfullscreen></iframe>`;
    videoGallery.appendChild(card);
  });

  // Modal functionality
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMedia = document.getElementById('modal-media');
  const modalDescription = document.getElementById('modal-description');
  const modalCode = document.getElementById('modal-code');
  const modalLink = document.getElementById('modal-link');
  const modalClose = document.getElementById('modal-close');

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
    modal.style.display = 'flex';
  }

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Upload form
  const uploadForm = document.getElementById('upload-form');
  const uploadPreview = document.getElementById('upload-preview');

  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const files = document.getElementById('file-upload').files;
    uploadPreview.innerHTML = '';
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('image/')) {
          uploadPreview.innerHTML += `<img src="${e.target.result}" alt="${file.name}">`;
        } else if (file.type.startsWith('video/')) {
          uploadPreview.innerHTML += `<video src="${e.target.result}" controls></video>`;
        } else {
          uploadPreview.innerHTML += `<p>Uploaded: ${file.name}</p>`;
        }
      };
      reader.readAsDataURL(file);
    });
    alert('Files uploaded (simulated)! Contact me for backend integration.');
  });
});
