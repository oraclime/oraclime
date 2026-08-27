/* =========================================
   ORACLIME WEBSITE
   MAIN JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


  /* =====================================
     MOBILE MENU
  ===================================== */

  const mobileMenuButton =
    document.getElementById("mobileMenuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");


  if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener(
      "click",
      function () {

        mobileMenu.classList.toggle("active");

      }
    );


    const mobileLinks =
      mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          mobileMenu.classList.remove("active");

        }
      );

    });

  }



  /* =====================================
     NAVBAR SCROLL EFFECT
  ===================================== */

  const navbar =
    document.getElementById("navbar");


  window.addEventListener(
    "scroll",
    function () {

      if (!navbar) return;


      if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

      } else {

        navbar.classList.remove("scrolled");

      }

    }
  );



  /* =====================================
     CURRENT YEAR
  ===================================== */

  const currentYear =
    document.getElementById("currentYear");


  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }



  /* =====================================
     SERVICE REQUEST FORM
  ===================================== */

  const serviceForm =
    document.getElementById("serviceForm");

  const formMessage =
    document.getElementById("formMessage");


  if (serviceForm) {

    serviceForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const name =
          document.getElementById("name").value.trim();

        const phone =
          document.getElementById("phone").value.trim();

        const service =
          document.getElementById("service").value;

        const message =
          document.getElementById("message").value.trim();


        if (!name || !phone || !service) {

          formMessage.textContent =
            "Please fill in the required fields.";

          return;

        }


        /*
          IMPORTANT:

          Abhi form backend se connected nahi hai.

          Isliye hum fake "request submitted"
          claim nahi karenge.

          Filhaal user ko clearly batayenge
          ki form demo mode mein hai.
        */


        formMessage.textContent =
          "Your details are ready. Connect this form to your business WhatsApp or backend to receive requests.";


        console.log(
          "ORACLIME Service Request:",
          {
            name: name,
            phone: phone,
            service: service,
            message: message
          }
        );


      }
    );

  }



  /* =====================================
     SMOOTH SCROLL
  ===================================== */

  const anchorLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  anchorLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });



  /* =====================================
     SIMPLE REVEAL ANIMATION
  ===================================== */

  const revealElements =
    document.querySelectorAll(
      ".service-card, .business-point, .how-card"
    );


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(function (element) {

      observer.observe(element);

    });

  }

});
