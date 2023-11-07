const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

const words = ["React", "Tech-Savvy", "Creative", "Junior"];
let index = 0;

const change = () => {
  document.getElementById("text").innerHTML = words[index];
  index = ++index % words.length;
  setTimeout(change, 1500);
};

change();

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
