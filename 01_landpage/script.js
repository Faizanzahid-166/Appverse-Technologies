 const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    
     function showTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-section').forEach(section => {
      section.classList.add('hidden');
    });

    // Show the selected tab section
    document.getElementById(tabId).classList.remove('hidden');

    // Reset tab button active classes
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Set correct button as active
    if (tabId === 'projects') {
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
    } else {
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
    }
  }

  // Navbar click handlers
  document.getElementById('nav-project').addEventListener('click', function (e) {
    showTab('projects');
  });

  document.getElementById('nav-skill').addEventListener('click', function (e) {
    showTab('skills');
  });