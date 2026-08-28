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


/* =========================================
   ORACLIME WEBSITE
   MAIN JAVASCRIPT
========================================= */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================
       GOOGLE APPS SCRIPT
    ===================================== */

    /*
      IMPORTANT:

      Yahan apna deployed Google Apps Script
      Web App URL paste karo.

      Example:

      https://script.google.com/macros/s/XXXXXXXX/exec
    */

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbx9Jb9dyHGSFsB9gtzBxW5RXywCRGFO9-REhj1dJl0k8njPVBQffpSRdqmpmGUtxjfq/exec";



    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileMenuButton =
      document.getElementById(
        "mobileMenuButton"
      );


    const mobileMenu =
      document.getElementById(
        "mobileMenu"
      );


    if (
      mobileMenuButton &&
      mobileMenu
    ) {

      mobileMenuButton.addEventListener(
        "click",
        function () {

          mobileMenu.classList.toggle(
            "active"
          );

        }
      );


      const mobileLinks =
        mobileMenu.querySelectorAll("a");


      mobileLinks.forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              mobileMenu.classList.remove(
                "active"
              );

            }
          );

        }
      );

    }



    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar =
      document.getElementById(
        "navbar"
      );


    window.addEventListener(
      "scroll",
      function () {

        if (!navbar) {
          return;
        }


        if (window.scrollY > 30) {

          navbar.classList.add(
            "scrolled"
          );

        } else {

          navbar.classList.remove(
            "scrolled"
          );

        }

      }
    );



    /* =====================================
       CURRENT YEAR
    ===================================== */

    const currentYear =
      document.getElementById(
        "currentYear"
      );


    if (currentYear) {

      currentYear.textContent =
        new Date().getFullYear();

    }



    /* =====================================
       PARTNER FORM
    ===================================== */

    const partnerForm =
      document.getElementById(
        "partnerForm"
      );


    const formMessage =
      document.getElementById(
        "formMessage"
      );


    if (partnerForm) {


      partnerForm.addEventListener(
        "submit",
        async function (event) {

          event.preventDefault();



          /* ===============================
             CHECK GOOGLE SCRIPT URL
          =============================== */

          if (
            GOOGLE_SCRIPT_URL ===
            "https://script.google.com/macros/s/AKfycbx9Jb9dyHGSFsB9gtzBxW5RXywCRGFO9-REhj1dJl0k8njPVBQffpSRdqmpmGUtxjfq/exec"
          ) {

            if (formMessage) {

              formMessage.textContent =
                "Form is not connected to the server yet.";

            }

            console.error(
              "Google Apps Script URL is missing."
            );

            return;

          }



          /* ===============================
             GET FORM DATA
          =============================== */

          const formData =
            new FormData(
              partnerForm
            );


          const data = {};


          formData.forEach(
            function (value, key) {

              data[key] =
                String(value).trim();

            }
          );



          /* ===============================
             REQUIRED FIELDS
          =============================== */

          const businessName =
            data.businessName || "";


          const contactName =
            data.contactName || "";


          const phone =
            data.phone || "";


          const email =
            data.email || "";


          const partnerType =
            data.partnerType || "";


          const state =
            data.state || "";


          const city =
            data.city || "";


          const pinCode =
            data.pinCode || "";


          const message =
            data.message || "";



          if (
            !businessName ||
            !contactName ||
            !phone ||
            !email ||
            !partnerType ||
            !state ||
            !city ||
            !pinCode
          ) {

            if (formMessage) {

              formMessage.textContent =
                "Please fill in all required fields.";

            }

            return;

          }



          /* ===============================
             BUTTON STATE
          =============================== */

          const submitButton =
            partnerForm.querySelector(
              'button[type="submit"]'
            );


          const originalButtonText =
            submitButton
              ? submitButton.textContent
              : "";


          if (submitButton) {

            submitButton.disabled =
              true;

            submitButton.textContent =
              "Submitting...";

          }



          if (formMessage) {

            formMessage.textContent =
              "Submitting your partnership request...";

          }



          /* ===============================
             PAYLOAD
          =============================== */

          const payload = {

            action:
              "submitPartner",

            businessName:
              businessName,

            contactName:
              contactName,

            phone:
              phone,

            email:
              email,

            partnerType:
              partnerType,

            state:
              state,

            city:
              city,

            pinCode:
              pinCode,

            message:
              message

          };



          /* ===============================
             SEND TO GOOGLE APPS SCRIPT
          =============================== */

          try {


            const response =
              await fetch(
                GOOGLE_SCRIPT_URL,
                {
                  method: "POST",

                  body:
                    JSON.stringify(
                      payload
                    )
                }
              );


            const result =
              await response.json();



            /* ==========================
               SUCCESS
            ========================== */

            if (
              result &&
              result.success === true &&
              result.srn
            ) {


              /*
                Google Apps Script ne jo SRN
                generate kiya hai wahi use hoga.
              */


              const successUrl =
                "partner-success.html?srn=" +
                encodeURIComponent(
                  result.srn
                );


              window.location.href =
                successUrl;


              return;

            }



            /* ==========================
               SERVER ERROR
            ========================== */

            throw new Error(
              result &&
              result.message
                ? result.message
                : "Unable to submit application."
            );


          } catch (error) {


            console.error(
              "Partner form error:",
              error
            );


            if (formMessage) {

              formMessage.textContent =
                "Something went wrong while submitting your application. Please try again.";

            }


            if (submitButton) {

              submitButton.disabled =
                false;

              submitButton.textContent =
                originalButtonText;

            }

          }

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


    anchorLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {


            const targetId =
              this.getAttribute(
                "href"
              );


            if (
              !targetId ||
              targetId === "#"
            ) {

              return;

            }


            const target =
              document.querySelector(
                targetId
              );


            if (!target) {

              return;

            }


            event.preventDefault();


            target.scrollIntoView(
              {
                behavior: "smooth",
                block: "start"
              }
            );

          }
        );

      }
    );



    /* =====================================
       REVEAL ANIMATION
    ===================================== */

    const revealElements =
      document.querySelectorAll(
        ".service-card, .business-point, .how-card"
      );


    if (
      "IntersectionObserver"
      in window
    ) {


      const observer =
        new IntersectionObserver(
          function (entries) {


            entries.forEach(
              function (entry) {


                if (
                  entry.isIntersecting
                ) {


                  entry.target.classList.add(
                    "visible"
                  );


                  observer.unobserve(
                    entry.target
                  );

                }

              }
            );

          },
          {
            threshold: 0.12
          }
        );


      revealElements.forEach(
        function (element) {

          observer.observe(
            element
          );

        }
      );

    }

  }
);
