// Price Section
$(".sworks").on("click", function () {
  $("#price").removeClass("display");
});

// SHOW AND HIDE PASSWORD
function tooglePassword() {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", (e) => {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle("ri-eye-off-fill");
  });

  const anotherTogglePassword = document.querySelector(
    "#anotherTogglePassword"
  );
  const anotherPassword = document.querySelector("#anotherPassword");

  anotherTogglePassword.addEventListener("click", (e) => {
    const type =
      anotherPassword.getAttribute("type") === "password" ? "text" : "password";
    anotherPassword.setAttribute("type", type);
    anotherTogglePassword.classList.toggle("ri-eye-off-fill");
  });
}
tooglePassword();

// TogglePage
function togglePage() {
  $("#show").click(() => {
    $("#form-1").slideDown(100).addClass("display");
    $("#form-2").toggleClass("display");
  });
}
togglePage();

// SWITCH PAGES

$("#switch").click(() => {
  $("#login").removeClass("display");
  $("#register").addClass("display");
});

$("#switch2").click(() => {
  $("#login").addClass("display");
  $("#register").removeClass("display");
});

$("#switch3").click(() => {
  $("#login").addClass("display");
  $("#forgot-password").removeClass("display");
});

// PRICE

function changePrice() {
  course = document.getElementById("courses").value;
  switch (course) {
    case "nil":
      document.getElementById("price").value = 0;
      break;
    case "excel":
      document.getElementById("price").value = 10000;
      break;
    case "solidworks":
      document.getElementById("price").value = 30000;
      break;
    case "autocad":
      document.getElementById("price").value = 25000;
      break;
    case "revit":
      document.getElementById("price").value = 25000;
      break;
    case "pythonDS":
      document.getElementById("price").value = 40000;
      break;
    case "java":
      document.getElementById("price").value = 40000;
      break;
    case "cyber":
      document.getElementById("price").value = 100000;
      break;
    case "aDmarketing":
      document.getElementById("price").value = 100000;
      break;
    case "itc":
      document.getElementById("price").value = 15000;
      break;
    case "adobe":
      document.getElementById("price").value = 25000;
      break;
    case "engineering":
      document.getElementById("price").value = 25000;
      break;
    case "coreldraw":
      document.getElementById("price").value = 15000;
      break;
    case "python":
      document.getElementById("price").value = 25000;
      break;
    case "dmarketing":
      document.getElementById("price").value = 30000;
      break;
    case "motion":
      document.getElementById("price").value = 30000;
      break;
    case "ccna":
      document.getElementById("price").value = 40000;
      break;
    case "ccnp":
      document.getElementById("price").value = 40000;
      break;
    case "spss":
      document.getElementById("price").value = 20000;
      break;
    case "mini":
      document.getElementById("price").value = 20000;
      break;
    case "mobile":
      document.getElementById("price").value = 50000;
      break;
    case "ui/ux":
      document.getElementById("price").value = 30000;
      break;
    case "frontend":
      document.getElementById("price").value = 25000;
      break;
    case "fullstack":
      document.getElementById("price").value = 50000;
      break;
    case "siwes":
      document.getElementById("price").value = 5000;
      break;
    default:
      console.log(course);
      break;
  }
}
