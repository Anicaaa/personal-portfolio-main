//STICKY NAVBAR
const navbarEl = document.querySelector(".navbar");
const subSectionEl = document.querySelector(".sub-section");
const logoEl = document.querySelector(".logo-black");

window.addEventListener("scroll", () => {
  if (window.scrollY > subSectionEl.offsetTop - navbarEl.offsetHeight) {
    navbarEl.classList.add("active");
    logoEl.setAttribute("src", "images/logoWhite.svg");
  } else {
    navbarEl.classList.remove("active");
    logoEl.setAttribute("src", "images/logoBlack.svg");
  }
});

//CONTACT FORM

//https://github.com/jamiewilson/form-to-google-sheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyrF67Wd686cA3yGA_rfN6EdTUWTHBL74fI91aIGQtfTLtBYKNES3uP2kEUk6Y-UDSk/exec";
const form = document.forms["submit-to-google-sheet"];
const msgEl = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msgEl.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msgEl.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
