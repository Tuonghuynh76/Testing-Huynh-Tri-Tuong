const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");

const images = [
  "./assets/images/slider/image1.jpeg",
  "./assets/images/slider/image2.png",
  "./assets/images/slider/image3.jpeg",
  "./assets/images/slider/image4.jpeg",
  "./assets/images/slider/image5.png",
];

const contents = [
  {
    title: "GO-KARRTS",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
  },
  {
    title: "JUMPARENA",
    description:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
  },
  {
    title: "Virtuální realita",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
  },
  {
    title: "MULTIBALL",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
  },
  {
    title: "Laserová střelnice",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
  },
];

slider.style.background = `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 100%), url('${images[0]}')`;
slider.style.backgroundSize = "cover";
dots[0].classList.add("active");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (dot.classList.contains("active")) return;

    slider.classList.add("fade-out");

    setTimeout(() => {
      slider.style.background = `linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 100%), url('${images[index]}')`;
      slider.style.backgroundSize = "cover";

      title.textContent = contents[index].title;
      description.textContent = contents[index].description;

      title.classList.remove("fade-in");
      description.classList.remove("fade-in");
      void title.offsetWidth;
      title.classList.add("fade-in");
      description.classList.add("fade-in");

      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      slider.classList.remove("fade-out");
    }, 300);
  });
});

const imgContainer = document.querySelector(".img1");
changeBackground("/assets/images/tabs/tab1.png");

function changeBackground(imageUrl) {
  imgContainer.classList.add("fade-out");

  setTimeout(() => {
    imgContainer.style.setProperty("--bg-image", `url('${imageUrl}')`);
    imgContainer.classList.remove("fade-out");
  }, 300);
}

const tabItems = document.querySelectorAll(".tab-item");
tabItems.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabItems.forEach((item) =>
      item.classList.remove("scale-x-[1.125]", "tab-active")
    );
    tab.classList.add("scale-x-[1.125]", "tab-active");
    changeBackground(`/assets/images/tabs/tab${index + 1}.png`);
  });
});
