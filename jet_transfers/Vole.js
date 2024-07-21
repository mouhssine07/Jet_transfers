let global = document.querySelector(".global");
let flech_2 = document.querySelector("#flech-2");
let flech_1 = document.querySelector("#flech-1");

window.addEventListener("scroll", function () {
  const flech1 = document.getElementById("flech-1");
  const flech2 = document.getElementById("flech-2");
  if (window.scrollY > 100) {
    flech1.style.display = "none";
    flech2.style.display = "none";
  } else {
    flech1.style.display = "block";
    flech2.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let images = [
    "url('./images/pilot_with_women.jpg')",
    "url('./images/women_in_plane.jpg')",
    "url('./images/chair.jpg')",
  ];
  let index = 1;

  setInterval(() => {
    global.style.backgroundImage = images[index];
    global.style.transition = "all 0.3s linear ";
    index = (index + 1) % images.length;
    if (index > 2) {
      index = 0;
    }
  }, 4000);
});

//   ############################################
let currentRow = 1;
const totalRows = 3;

document.getElementById("flech-1").addEventListener("click", function () {
  // Scroll left

  currentRow = currentRow === totalRows ? 1 : currentRow + 1;
  updateRows();
});

document.getElementById("flech-2").addEventListener("click", function () {
  // Scroll right

  currentRow = currentRow === 1 ? totalRows : currentRow - 1;
  updateRows();
});

function updateRows() {
  for (let i = 1; i <= totalRows; i++) {
    const row = document.getElementById(`row-${i}`);
    if (i === currentRow) {
      row.style.display = "flex";
      row.style.transition = "all 0.5s";
    } else {
      row.style.display = "none";
      row.style.transition = "all 0.5s";
    }
  }
}

// Initialize the first row

updateRows();

// ############################################

let firstlist = document.getElementById("first_list");

function showMenu() {
  firstlist.classList.toggle("open");
}

function hideMenu() {
  firstlist.classList.remove("open");
}

//           ############################################
document.addEventListener("DOMContentLoaded", (event) => {
  let currentIndex = 0;
  const sections = document.querySelectorAll("#container-2 > div");
  const arrow = document.getElementById("flech-11");

  arrow.addEventListener("click", () => {
    sections[currentIndex].style.display = "none";

    currentIndex = (currentIndex + 1) % sections.length;

    sections[currentIndex].style.display = "flex";
  });
});

// ############################################

document
  .querySelectorAll(".carousel-container")
  .forEach((carouselContainer) => {
    const carousel = carouselContainer;
    const prevBtn = carousel.querySelector(".prevBtn");
    const nextBtn = carousel.querySelector(".nextBtn");
    const contents = carousel.getElementsByClassName("carousel-content");
    const dots = carousel.getElementsByClassName("dot");
    let currentIndex = 0;

    function showContent(index) {
      for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        dots[i].classList.remove("active");
      }
      contents[index].style.display = "block";
      dots[index].classList.add("active");
    }

    function nextContent() {
      currentIndex = (currentIndex + 1) % contents.length;
      showContent(currentIndex);
    }

    function prevContent() {
      currentIndex = (currentIndex - 1 + contents.length) % contents.length;
      showContent(currentIndex);
    }

    function setCurrentContent(index) {
      currentIndex = index;
      showContent(currentIndex);
    }

    nextBtn.addEventListener("click", nextContent);
    prevBtn.addEventListener("click", prevContent);
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => setCurrentContent(i));
    }

    // Auto slide
    setInterval(nextContent, 3000);

    // Show the first content initially
    showContent(currentIndex);
  });
