"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    $(".gallery-controls ul li").on("click", function () {
      $(".gallery-controls ul li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
    }

    $(".blog-gird").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  $(".header-section .nav-menu .mainmenu ul li").on("mousehover", function () {
    $(this).addClass("active");
  });
  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function () {
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  $(".show-result-select").niceSelect();

  /*------------------
       Timetable Filter
    --------------------*/
  $(".timetable-controls ul li").on("click", function () {
    var tsfilter = $(this).data("tsfilter");
    $(".timetable-controls ul li").removeClass("active");
    $(this).addClass("active");

    if (tsfilter == "all") {
      $(".classtime-table").removeClass("filtering");
      $(".ts-item").removeClass("show");
    } else {
      $(".classtime-table").addClass("filtering");
    }
    $(".ts-item").each(function () {
      $(this).removeClass("show");
      if ($(this).data("tsmeta") == tsfilter) {
        $(this).addClass("show");
      }
    });
  });
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
})(jQuery);

function send(){
  alert("Message Sent Successfully");
  return false;
}
document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById('password');
  const passwordRequirements = document.getElementById('passwordRequirements');

  function showPasswordRequirements() {
      const password = passwordInput.value;
      const requirements = [
          /[a-z]/, // At least one lowercase letter
          /[A-Z]/, // At least one uppercase letter
          /\d/,    // At least one digit
          /[@$!%*?&]/, // At least one special character
          /^.{8,}$/ // Minimum length of 8 characters
      ];

      const requirementsMet = requirements.map(req => req.test(password));

      const requirementsList = [
          'At least one lowercase letter (a-z)',
          'At least one uppercase letter (A-Z)',
          'At least one digit (0-9)',
          'At least one special character (@$!%*?&)',
          'Minimum length of 8 characters'
      ];

      const missingRequirements = requirementsList.filter((req, index) => !requirementsMet[index]);

      if (missingRequirements.length > 0) {
          passwordRequirements.style.display = 'block';
          passwordRequirements.innerHTML = '';
          missingRequirements.forEach(req => {
              const listItem = document.createElement('li');
              listItem.textContent = req;
              passwordRequirements.appendChild(listItem);
          });
      } else {
          passwordRequirements.style.display = 'none';
      }
  }

  passwordInput.addEventListener('input', showPasswordRequirements);

  // Show requirements on page load if password is initially invalid
  showPasswordRequirements();
});
function validation() {
  const email = document.getElementById("email").value;
  const patEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const pass = document.getElementById("password").value;
  const patPass = /^(?=.*[a-z])(?=.*\d).{8,}$/;
  const result = document.getElementById("result");

  if (document.formfill.Username.value == "") {
      result.innerHTML = "Enter Your Name";
      result.style.display = "block";
      return false;
  } else if (email == "") {
      result.innerHTML = "Enter Your Email";
      result.style.display = "block";
      return false;
  } else if (!patEmail.test(email)) {
      result.innerHTML = "Enter Correct Email";
      result.style.display = "block";
      return false;
  } else if (pass == "") {
      result.innerHTML = "Enter Password<br>1. At least one lowercase letter<br>2. At least one digit<br>3. Minimum length of 8 characters";
      result.style.display = "block";
      return false;
  } else if (!patPass.test(pass)) {
      result.innerHTML = "Enter Correct Password<br>1. At least one lowercase letter<br>2. At least one digit<br>3. Minimum length of 8 characters ";
      result.style.display = "block";
      return false;
  } else if (document.formfill.cPassword.value == "") {
      result.innerHTML = "Enter Confirm Password";
      result.style.display = "block";
      return false;
  } else if (document.formfill.cPassword.value != document.formfill.Password.value) {
      result.innerHTML = "Password Doesn't Match";
      result.style.display = "block";
      return false;
  }

  // If all validations pass, show the popup
  document.getElementById("popup").style.display = "block";
  return false; // Prevent form submission
}

function compare(event) {
  event.preventDefault();

  const mail = document.loginForm.mail.value;
  const passInput = document.loginForm.pass.value;
  const validMail = "van123@gmail.com";
  const validPass = "12345678v";

  if (mail !== validMail) {
      document.getElementById("result1").innerHTML = "E-mail does not exist";
      return false;
  } else if (passInput !== validPass) {
      document.getElementById("result1").innerHTML = "Incorrect Password";
      return false;
  }

  document.getElementById("popup").style.display = "block";
  return false;
}
const videoThumbs = document.querySelectorAll('.video-thumb');

    // Add click event listener to each video thumbnail
    videoThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const videoSrc = thumb.getAttribute('data-video');
            // Set the video source and display the modal
            const videoModal = document.getElementById('video-modal');
            videoModal.querySelector('video').src = videoSrc;
            videoModal.style.display = 'block';
        });
    });

    // Close the modal when clicking outside the video
    document.getElementById('video-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });