const track = document.getElementById("track");
const albums = document.querySelectorAll(".album");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const albumName = document.getElementById("albumName");

const albumsData = [
  {
    name: "SQUARE ONE (2016)",
    link: "https://www.youtube.com/watch?v=bwmSjveL3Lc" // BOOMBAYAH (OFICIAL)
  },
  {
    name: "SQUARE TWO (2016)",
    link: "https://www.youtube.com/watch?v=9pdj4iJD08s" // PLAYING WITH FIRE (OFICIAL)
  },
  {
    name: "AS IF IT'S YOUR LAST (2017)",
    link: "https://www.youtube.com/watch?v=Amq-qlqbjYA" // AS IF IT'S YOUR LAST (OFICIAL)
  },
  {
    name: "SQUARE UP (2018)",
    link: "https://www.youtube.com/watch?v=IHNzOHi8sJs" // DDU-DU DDU-DU (OFICIAL)
  },
  {
    name: "KILL THIS LOVE (2019)",
    link: "https://www.youtube.com/watch?v=2S24-y0Ij3Y" // KILL THIS LOVE (OFICIAL)
  },
  {
    name: "HOW YOU LIKE THAT (2020)",
    link: "https://www.youtube.com/watch?v=ioNng23DkIM" // HOW YOU LIKE THAT (OFICIAL)
  },
  {
    name: "ICE CREAM (2020)",
    link: "https://www.youtube.com/watch?v=vRXZj0DzXIA" // ICE CREAM ft. Selena (OFICIAL)
  },
  {
    name: "THE ALBUM (2020)",
    link: "https://www.youtube.com/watch?v=dyRsYk0LyA8" // LOVESICK GIRLS (OFICIAL)
  },
  {
    name: "Pink Venom (2022)",
    link: "https://www.youtube.com/watch?v=gQlMMD8auMs" // PINK VENOM (OFICIAL)
  },
  {
    name: "BORN PINK (2022)",
    link: "https://www.youtube.com/watch?v=POe9SOEKotk" // SHUT DOWN (OFICIAL)
  },
  {
    name: "JUMP (2025)",
    link: null // ❌ Ainda não existe MV oficial
  }
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

// ✅ CLICOU → CENTRALIZA E ABRE O MV OFICIAL
albums.forEach((alb, i) => {
  alb.addEventListener("click", () => {
    index = i;
    updateCarousel();

    const link = albumsData[i].link;

    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Este álbum ainda não possui MV oficial.");
    }
  });
});

window.addEventListener("resize", updateCarousel);
updateCarousel();
