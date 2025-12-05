const track = document.getElementById("track");
const albums = document.querySelectorAll(".album");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const albumName = document.getElementById("albumName");

const albumsData = [
  { name: "SQUARE ONE (2016)", link: "https://www.youtube.com/watch?v=bwmSjveL3Lc" },
  { name: "SQUARE TWO (2016)", link: "https://www.youtube.com/watch?v=9pdj4iJD08s" },
  { name: "AS IF IT'S YOUR LAST (2017)", link: "https://www.youtube.com/watch?v=Amq-qlqbjYA" },
  { name: "SQUARE UP (2018)", link: "https://www.youtube.com/watch?v=IHNzOHi8sJs" },
  { name: "KILL THIS LOVE (2019)", link: "https://www.youtube.com/watch?v=2S24-y0Ij3Y" },
  { name: "HOW YOU LIKE THAT (2020)", link: "https://www.youtube.com/watch?v=ioNng23DkIM" },
  { name: "ICE CREAM (2020)", link: "https://www.youtube.com/watch?v=vRXZj0DzXIA" },
  { name: "THE ALBUM (2020)", link: "https://www.youtube.com/watch?v=dyRsYk0LyA8" },
  { name: "Pink Venom (2022)", link: "https://www.youtube.com/watch?v=gQlMMD8auMs" },
  { name: "BORN PINK (2022)", link: "https://www.youtube.com/watch?v=POe9SOEKotk" }
];

let index = 0;

function updateCarousel() {
  const albumWidth = 210;
  const containerWidth = document.querySelector(".carousel-container").offsetWidth;
  const centerOffset = (containerWidth / 2) - (albumWidth / 2);
  const offset = (index * albumWidth) - centerOffset;

  track.style.transform = `translateX(${-offset}px)`;

  albums.forEach(a => a.classList.remove("active"));
  albums[index].classList.add("active");

  albumName.textContent = albumsData[index].name;
}

next.addEventListener("click", () => {
  index = (index + 1) % albums.length;
  updateCarousel();
});

prev.addEventListener("click", () => {
  index = (index - 1 + albums.length) % albums.length;
  updateCarousel();
});

albums.forEach((alb, i) => {
  alb.addEventListener("click", () => {
    index = i;
    updateCarousel();

    const link = albumsData[i].link;
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Esse álbum ainda não tem MV oficial.");
    }
  });
});

window.addEventListener("resize", updateCarousel);
updateCarousel();
