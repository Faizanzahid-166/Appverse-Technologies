// got toggle small devices
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

    const toggle = menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      console.log("01_toggle",toggle);
      
    });

// scroll
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
   // console.log("02_navbar",navbar);
    
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#4b4a4aff'; // Light gray or your preferred color

    } else {
      navbar.style.backgroundColor = 'white';
    }
  });


// go to top
    
  const goTopBtn = document.getElementById("goTopBtn");
  console.log("03_go to top",goTopBtn);
  

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
