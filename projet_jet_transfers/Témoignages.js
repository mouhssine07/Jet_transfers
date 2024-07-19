let firstlist = document.getElementById("first_list");

function showMenu() {
  firstlist.classList.toggle("open");
}

function hideMenu() {
  firstlist.classList.remove("open");
}
let plane_return = document.getElementById("plane_return");
let Plane_flight = document.querySelector("#plane_return > a > span");

plane_return.addEventListener("mouseover", function () {
  Plane_flight.style.transform = "translateY(-10px)";
  Plane_flight.style.transition = "all 0.5s";
});

plane_return.addEventListener("mouseout", function () {
  Plane_flight.style.transform = "translateY(0)";
});

//           ############################################

window.addEventListener("scroll", function () {
  const plane_return = document.getElementById("plane_return");
  if (window.scrollY > 10) {
    plane_return.style.opacity = "1";
    plane_return.style.pointerEvents = "auto";
  } else {
    plane_return.style.opacity = "0";
    plane_return.style.pointerEvents = "none";
  }
});

document.getElementById("plane_return").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
