// script.js

document.addEventListener("DOMContentLoaded", function () {
  // --- Smooth Scrolling for Navigation Links ---
  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor jump

      const targetId = this.getAttribute("href"); // #home, #about, etc.
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calculate position of target section
        // The offset accounts for the sticky header height if any
        // let headerOffset = document.querySelector('header').offsetHeight;
        // let elementPosition = targetSection.getBoundingClientRect().top;
        // let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Simpler scrollIntoView (works well with html {scroll-behavior: smooth})
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start", // Aligns the top of the target to the top of the viewport
        });
      }
    });
  });

  // --- Contact Form Submission ---
  // This provides a basic client-side alert.
  // For a real form, you'd typically send data to a server or use a service like Formspree.
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      // Get form data (optional, if you were to do more with it)
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Basic validation example (can be expanded)
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      // In a real scenario, you might use fetch() to send data to a backend
      // or construct a mailto: link dynamically.
      // For this example, just an alert.

      // Option 1: Simple Alert
      alert(
        "Thank you for your message, " +
          name +
          "! I will get back to you soon. (This is a demo - no email was actually sent)."
      );

      // Option 2: Construct and open a mailto link (less user-friendly UX for "sending")
      /*
            const subject = "Portfolio Contact from " + name;
            const body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;
            const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            // EDIT THIS: Replace 'your.email@example.com' with your actual email address
            // window.location.href = mailtoLink;
            // alert('Your email client should open. Please send the message.');
            */

      contactForm.reset(); // Clear the form fields
    });
  }

  // --- Optional: Active Navigation Link Highlighting on Scroll ---
  // This is a bit more advanced but good for UX.
  // It requires careful checking of section visibility.
  const sections = document.querySelectorAll("main section"); // All content sections
  // const headerHeight = document.querySelector('header').offsetHeight; // If header is fixed

  // window.addEventListener('scroll', () => {
  //     let current = '';
  //     sections.forEach(section => {
  //         const sectionTop = section.offsetTop - (headerHeight + 50) ; // Add a little offset
  //         if (pageYOffset >= sectionTop) {
  //             current = section.getAttribute('id');
  //         }
  //     });

  //     navLinks.forEach(link => {
  //         link.classList.remove('active');
  //         if (link.getAttribute('href').substring(1) === current) {
  //             link.classList.add('active');
  //         }
  //     });
  //     // Special case for top of page (home)
  //     if (pageYOffset < sections[0].offsetTop - (headerHeight + 50)) {
  //         navLinks.forEach(link => link.classList.remove('active'));
  //         const homeLink = document.querySelector('header nav ul li a[href="#home"]');
  //         if(homeLink) homeLink.classList.add('active');
  //     }
  // });
  // The active link highlighting above is commented out as it can be finicky
  // without more precise calculations and can be an enhancement rather than core.
  // The CSS `html { scroll-behavior: smooth; }` handles smooth scrolling for anchors simply.
  // The JS smooth scroll above provides more control if CSS `scroll-behavior` is not desired
  // or if offsets for fixed headers are complex.

  // --- Placeholder for future JS enhancements ---
  // Example: Animate elements on scroll (Intersection Observer API)
  // Example: Project filter/tabs
  // Example: Light/Dark mode toggle

  console.log("Portfolio script loaded and running.");
});
