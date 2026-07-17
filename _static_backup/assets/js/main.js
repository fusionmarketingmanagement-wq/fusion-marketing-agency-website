/* Fusion Marketing Management — shared site behavior */
(function () {
  "use strict";

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var panel = document.querySelector(".mobile-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.classList.toggle("is-open");
      panel.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("is-open");
        panel.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Active nav link ---------- */
  var currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a[href]").forEach(function (link) {
    var href = link.getAttribute("href").toLowerCase();
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-counter"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toFixed(decimals) + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window && counters.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ---------- Accordion (FAQ) ---------- */
  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panelEl = item.querySelector(".accordion-panel");
    if (!trigger || !panelEl) return;
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".accordion-item").forEach(function (sibling) {
        sibling.classList.remove("is-open");
        sibling.querySelector(".accordion-panel").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        panelEl.style.maxHeight = panelEl.scrollHeight + "px";
      }
    });
  });

  /* ---------- Case study filter ---------- */
  var filterChips = document.querySelectorAll("[data-filter]");
  var caseCards = document.querySelectorAll("[data-industry]");
  if (filterChips.length && caseCards.length) {
    filterChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        filterChips.forEach(function (c) {
          c.classList.remove("is-active");
        });
        chip.classList.add("is-active");
        var filter = chip.getAttribute("data-filter");
        caseCards.forEach(function (card) {
          var match = filter === "all" || card.getAttribute("data-industry") === filter;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        backToTop.classList.toggle("is-visible", window.scrollY > 600);
      },
      { passive: true }
    );
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var successBox = document.getElementById("form-success");

    function setError(fieldWrap, message) {
      fieldWrap.classList.add("has-error");
      var errorEl = fieldWrap.querySelector(".field-error");
      if (errorEl) errorEl.textContent = message;
    }

    function clearError(fieldWrap) {
      fieldWrap.classList.remove("has-error");
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPhone(value) {
      return value.trim() === "" || /^[0-9+()\-\s]{7,20}$/.test(value);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var requiredFields = form.querySelectorAll("[data-required]");
      requiredFields.forEach(function (input) {
        var wrap = input.closest(".field");
        if (!wrap) return;
        if (!input.value || input.value.trim() === "") {
          setError(wrap, "This field is required.");
          valid = false;
        } else {
          clearError(wrap);
        }
      });

      var emailInput = form.querySelector('[name="email"]');
      if (emailInput) {
        var emailWrap = emailInput.closest(".field");
        if (emailInput.value && !isValidEmail(emailInput.value)) {
          setError(emailWrap, "Enter a valid email address.");
          valid = false;
        }
      }

      var phoneInput = form.querySelector('[name="phone"]');
      if (phoneInput) {
        var phoneWrap = phoneInput.closest(".field");
        if (!isValidPhone(phoneInput.value)) {
          setError(phoneWrap, "Enter a valid phone number.");
          valid = false;
        }
      }

      if (!valid) {
        var firstError = form.querySelector(".has-error");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      if (successBox) {
        successBox.classList.add("is-visible");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });

    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        var wrap = input.closest(".field");
        if (wrap) clearError(wrap);
      });
    });
  }

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
