// portfolio - section

(() => {
  const filterContainer = document.querySelector(".portfolio-filter");
  const portfolioItemConatiner = document.querySelector(".portfolio-items");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const popup = document.querySelector(".portfolio-popup");
  const prevBtn = popup.querySelector(".pp-prev");
  const nextBtn = popup.querySelector(".pp-next");
  const closeBtn = popup.querySelector(".pp-close");
  const projectDetailsContainer = popup.querySelector(".pp-details");
  const projectdetailsBtn = popup.querySelector(".pp-project-details-btn");

  let itemIndex, slideIndex, screenshoots;

  filterContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("filter-item") &&
      !e.target.classList.contains("active")
    ) {
      filterContainer
        .querySelector(".active")
        .classList.remove("outline-shadow", "active");
      e.target.classList.add("active", "outline-shadow");

      const target = e.target.getAttribute("data-target");
      portfolioItems.forEach((item) => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });

  portfolioItemConatiner.addEventListener("click", (e) => {
    if (e.target.closest(".portfolio-item-inner")) {
      const portfolioItem = e.target.closest(
        ".portfolio-item-inner"
      ).parentElement;
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
        portfolioItem
      );
      screenshoots = portfolioItems[itemIndex]
        .querySelector(".portfolio-item-img img")
        .getAttribute("data-screenshots");
      screenshoots = screenshoots.split(",");
      if (screenshoots.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      popupToggle();
      slideIndex = 0;
      popupSlideshow();
      popupDetails();
    }
  });

  closeBtn.addEventListener("click", () => {
    popupToggle();
    if (projectDetailsContainer.classList.contains("active")) {
      popupDetailToggle();
    }
  });

  function popupToggle() {
    bodyScrollingToggle();
    popup.classList.toggle("open");
  }

  function popupSlideshow() {
    const imgSrc = screenshoots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      popup.querySelector(".pp-loader").classList.remove("active");
    };
    popup.querySelector(".pp-counter").innerHTML =
      slideIndex + 1 + " of " + screenshoots.length;
  }

  projectdetailsBtn.addEventListener("click", () => {
    popupDetailToggle();
  });

  function popupDetails() {
    if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
      projectdetailsBtn.style.display = "none";
      return;
    }
    projectdetailsBtn.style.display = "block";

    const details = portfolioItems[itemIndex].querySelector(
      ".portfolio-item-details"
    ).innerHTML;
    // console.log(details);
    popup.querySelector(".pp-project-details").innerHTML = details;
    const title = portfolioItems[itemIndex].querySelector(
      ".portfolio-item-title"
    ).innerHTML;
    // console.log(title);
    popup.querySelector(".pp-title h2").innerHTML = title;
    const category = portfolioItems[itemIndex].getAttribute("data-category");
    // console.log(category);
    popup.querySelector(".pp-project-category").innerHTML = category
      .split("-")
      .join(" ");
  }

  function popupDetailToggle() {
    if (projectDetailsContainer.classList.contains("active")) {
      projectdetailsBtn.querySelector("i").classList.add("fa-plus");
      projectdetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsContainer.classList.remove("active");
      projectDetailsContainer.style.maxHeight = "0";
    } else {
      projectdetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectdetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.classList.add("active");
      projectDetailsContainer.style.maxHeight =
        projectDetailsContainer.scrollHeight + "px";
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }

  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshoots.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    popupSlideshow();
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = screenshoots.length - 1;
    } else {
      slideIndex--;
    }
    popupSlideshow();
  });
})();

// testimonial - section

(() => {
  // console.log("helo");
  const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = document.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
  let slideIndex = 0;
  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });
  sliderContainer.style.width = slideWidth * slides.length + "px";

  nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
  });
  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
  });
})();
