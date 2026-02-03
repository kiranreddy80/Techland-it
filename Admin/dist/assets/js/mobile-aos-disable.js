/**
 * Mobile AOS Disable Script
 * Disables AOS (Animate On Scroll) animations on mobile devices
 * to prevent content from being hidden
 */

(function () {
  "use strict";

  // Check if device is mobile or tablet (width <= 991px)
  function isMobileOrTablet() {
    return window.innerWidth <= 991;
  }

  // Disable AOS on mobile devices
  function disableAOSOnMobile() {
    if (isMobileOrTablet()) {
      // Remove all AOS attributes to prevent initialization
      const aosElements = document.querySelectorAll("[data-aos]");

      aosElements.forEach(function (element) {
        // Remove AOS data attributes
        element.removeAttribute("data-aos");
        element.removeAttribute("data-aos-duration");
        element.removeAttribute("data-aos-delay");
        element.removeAttribute("data-aos-easing");
        element.removeAttribute("data-aos-offset");
        element.removeAttribute("data-aos-anchor");
        element.removeAttribute("data-aos-anchor-placement");
        element.removeAttribute("data-aos-once");

        // Ensure element is visible
        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.transition = "none";

        // Remove AOS classes
        element.classList.remove("aos-init");
        element.classList.remove("aos-animate");
      });

      // Disable AOS library if it exists
      if (window.AOS) {
        try {
          window.AOS.refresh();
        } catch (e) {
          console.log("AOS refresh skipped on mobile");
        }
      }

      console.log("AOS animations disabled for mobile devices");
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", disableAOSOnMobile);
  } else {
    disableAOSOnMobile();
  }

  // Re-run on window resize (if user rotates device or resizes browser)
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      disableAOSOnMobile();
    }, 250);
  });

  // Run after a short delay to catch dynamically loaded content
  setTimeout(disableAOSOnMobile, 500);
  setTimeout(disableAOSOnMobile, 1000);
  setTimeout(disableAOSOnMobile, 2000);
})();
