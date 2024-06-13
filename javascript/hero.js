const heroItems = document.querySelectorAll(".hero-list-item");
const heroImage = document.getElementById("heroImage");

heroItems.forEach((heroItem) => {
  heroItem.addEventListener("click", (e) => {
    // Changing active status for list elements in hero section
    document
      .querySelector(".hero-right li.hero-active")
      .classList.remove("hero-active");
    e.target.classList.add("hero-active");
    // Changing hero image
    if (heroItems[0].classList.contains("hero-active")) {
      heroImage.src = "../images/hero0.jpg";
    } else if (heroItems[1].classList.contains("hero-active")) {
      heroImage.src = "../images/hero1.jpg";
    } else if (heroItems[2].classList.contains("hero-active")) {
      heroImage.src = "../images/hero2.jpg";
    } else if (heroItems[3].classList.contains("hero-active")) {
      heroImage.src = "../images/hero3.jpg";
    } else if (heroItems[4].classList.contains("hero-active")) {
      heroImage.src = "../images/hero4.jpg";
    } else console.log("Something Went Wrong");
  });
});

function changeImage() {
  if (heroItems[1].classList.contains("hero-active")) {
    heroImage.src = "../images/hero1.jpg";
  }
}
