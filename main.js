onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  runAudio();
};

function runAudio() {
  const audio = new Audio("background.mp3");
  audio.loop = true;
  audio
    .play()
    .then(() => {
      toggleMarquee(false);
    })
    .catch(() => {
      document.getElementById("body").addEventListener("click", function () {
        audio.play();
        toggleMarquee(false);
      });
    });
}

function toggleMarquee(isShow) {
  const el = document.getElementById("marquee");
  if (isShow) {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}
