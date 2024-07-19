document
  .getElementById("first-step-btn")
  .addEventListener("click", function () {
    document.querySelector(".form-step-1").style.display = "block";
    document.querySelector(".form-step-2").style.display = "none";
  });

document
  .getElementById("second-step-btn")
  .addEventListener("click", function () {
    document.querySelector(".form-step-1").style.display = "none";
    document.querySelector(".form-step-2").style.display = "block";
  });

document.querySelectorAll(".destination-info").forEach((info) => {
  info.addEventListener("mouseover", function () {
    const card = this.closest(".destination-card").querySelector("img");
    card.style.transform = "scale(1.1)";
    card.style.transition = "all 0.5s";
    card.style.zIndex = "1";
    card.style.cursor = "pointer";
  });

  info.addEventListener("mouseout", function () {
    const card = this.closest(".destination-card").querySelector("img");
    card.style.transform = "scale(1)";
    card.style.zIndex = "0";
  });
});

document.querySelectorAll(".destination-card > img").forEach((info) => {
  info.addEventListener("mouseover", function () {
    const card = this.closest(".destination-card").querySelector("img");
    card.style.transform = "scale(1.1)";
    card.style.transition = "all 0.5s";
    card.style.zIndex = "1";
    card.style.cursor = "pointer";
  });

  info.addEventListener("mouseout", function () {
    const card = this.closest(".destination-card").querySelector("img");
    card.style.transform = "scale(1)";
    card.style.zIndex = "0";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.querySelector(".answer");
      if (answer.style.display === "block") {
        answer.style.display = "none";
        answer.style.transition = "all 0.8s";
      } else {
        answer.style.display = "block";
        answer.style.transition = "all 0.8s";
      }
    });
  });
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cards = document.querySelectorAll(".destination-card");

let currentIndex = 0;

function updateCards() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.display = "block";
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = `translateX(0)`;
        card.style.transition = "all 0.5s";
      }, 100);
    } else {
      card.style.opacity = 0;
      card.style.transform = `translateX(${
        index < currentIndex ? "-100%" : "100%"
      })`;

      setTimeout(() => {
        card.style.display = "none";
      }, 100);
    }
  });
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCards();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards();
});

updateCards();

function countUp(element, start, end, duration) {
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(element);
  let timer = setInterval(function () {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
//           ############################################

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

//           ############################################

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

//           ###########################################

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

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid.");
    $result.css("color", "green");
    $result.css("font-size", "1rem");
    $result.css("font-weight", "bold");
    $result.css("transition", "all 0.5s");
  } else {
    $result.text(email + " is invalid.");
    $result.css("color", "red");
  }
  return false;
};

$("#email").on("input", validate);

//           ############################################

const validateName = (name) => {
  const namePattern = /^[a-zA-Z\s]*$/; // Only letters and spaces
  return namePattern.test(name);
};

const validateNameInput = () => {
  const $nameResult = $("#name_result");
  const name = $("#Full-name").val();
  $nameResult.text("");

  if (!validateName(name)) {
    $nameResult.text(name + " is invalid.  Only letters are allowed.");
    $nameResult.css("color", "red");
  }
  return false;
};

$("#Full-name").on("input", validateNameInput);

//           ############################################

document.addEventListener("DOMContentLoaded", (event) => {
  const tickets = document.querySelectorAll(".ticket");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  let currentIndex = 0;

  function updateDisplay() {
    tickets.forEach((ticket, index) => {
      ticket.style.display = index === currentIndex ? "block" : "none";
      ticket.style.transition = "all 0.5s";
    });
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? tickets.length - 1 : currentIndex - 1;
    updateDisplay();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = currentIndex === tickets.length - 1 ? 0 : currentIndex + 1;
    updateDisplay();
  });

  updateDisplay(); // Initial call to display the first ticket
});

//           ############################################
