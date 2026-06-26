const soundToggle = document.querySelector("#soundToggle");
const soundState = soundToggle.querySelector("small");
const beginLesson = document.querySelector("#beginLesson");
const closeLesson = document.querySelector("#closeLesson");
const lessonDrawer = document.querySelector("#lessonDrawer");
const toast = document.querySelector("#toast");
const greeting = document.querySelector("#greeting");
const leaves = document.querySelector("#leaves");
const fireflies = document.querySelector("#fireflies");

let audioContext;
let masterGain;
let soundOn = false;
let birdTimer;
let bellTimer;
let toastTimer;

function setGreeting() {
  const hour = new Date().getHours();
  const labels = [
    [5, "Before sunrise"],
    [9, "A quiet morning"],
    [12, "Morning light"],
    [16, "Under the midday sun"],
    [19, "The evening hush"],
    [24, "Beneath the stars"],
  ];
  greeting.textContent = labels.find(([limit]) => hour < limit)?.[1] ?? "Before sunrise";
}

function createLeaves() {
  for (let index = 0; index < 10; index += 1) {
    const leaf = document.createElement("i");
    leaf.className = "leaf";
    leaf.style.left = `${8 + Math.random() * 84}%`;
    leaf.style.setProperty("--duration", `${14 + Math.random() * 10}s`);
    leaf.style.setProperty("--delay", `${Math.random() * 24}s`);
    leaf.style.transform = `scale(${0.5 + Math.random()})`;
    leaves.appendChild(leaf);
  }
}

function createFireflies() {
  for (let index = 0; index < 14; index += 1) {
    const light = document.createElement("i");
    light.className = "firefly";
    light.style.left = `${4 + Math.random() * 45}%`;
    light.style.top = `${45 + Math.random() * 45}%`;
    light.style.setProperty("--duration", `${4 + Math.random() * 5}s`);
    light.style.setProperty("--delay", `${Math.random() * 7}s`);
    fireflies.appendChild(light);
  }
}

function makeNoiseBuffer(context) {
  const length = context.sampleRate * 2;
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;

  for (let index = 0; index < length; index += 1) {
    const white = Math.random() * 2 - 1;
    last = last * 0.985 + white * 0.015;
    data[index] = last * 3.2;
  }
  return buffer;
}

function createAmbience() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.0001;
  masterGain.connect(audioContext.destination);

  const river = audioContext.createBufferSource();
  river.buffer = makeNoiseBuffer(audioContext);
  river.loop = true;

  const riverFilter = audioContext.createBiquadFilter();
  riverFilter.type = "lowpass";
  riverFilter.frequency.value = 760;

  const riverGain = audioContext.createGain();
  riverGain.gain.value = 0.16;
  river.connect(riverFilter).connect(riverGain).connect(masterGain);
  river.start();

  const breeze = audioContext.createBufferSource();
  breeze.buffer = makeNoiseBuffer(audioContext);
  breeze.loop = true;

  const breezeFilter = audioContext.createBiquadFilter();
  breezeFilter.type = "bandpass";
  breezeFilter.frequency.value = 1250;
  breezeFilter.Q.value = 0.5;

  const breezeGain = audioContext.createGain();
  breezeGain.gain.value = 0.035;
  breeze.connect(breezeFilter).connect(breezeGain).connect(masterGain);
  breeze.start();

  scheduleBird();
  scheduleBell();
}

function birdCall() {
  if (!soundOn || !audioContext) return;
  const start = audioContext.currentTime;

  [0, 0.16, 0.33].forEach((offset, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1500 + index * 130, start + offset);
    oscillator.frequency.exponentialRampToValueAtTime(2200 + index * 180, start + offset + 0.11);
    gain.gain.setValueAtTime(0.0001, start + offset);
    gain.gain.exponentialRampToValueAtTime(0.025, start + offset + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + offset + 0.15);
    oscillator.connect(gain).connect(masterGain);
    oscillator.start(start + offset);
    oscillator.stop(start + offset + 0.16);
  });
}

function bellCall() {
  if (!soundOn || !audioContext) return;
  const start = audioContext.currentTime;
  [220, 440, 660].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.026 / (index + 1), start + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 4.2);
    oscillator.connect(gain).connect(masterGain);
    oscillator.start(start);
    oscillator.stop(start + 4.3);
  });
}

function scheduleBird() {
  window.clearTimeout(birdTimer);
  birdTimer = window.setTimeout(() => {
    birdCall();
    scheduleBird();
  }, 9000 + Math.random() * 14000);
}

function scheduleBell() {
  window.clearTimeout(bellTimer);
  bellTimer = window.setTimeout(() => {
    bellCall();
    scheduleBell();
  }, 38000 + Math.random() * 26000);
}

soundToggle.addEventListener("click", async () => {
  if (!audioContext) createAmbience();
  if (audioContext.state === "suspended") await audioContext.resume();

  soundOn = !soundOn;
  soundToggle.setAttribute("aria-pressed", String(soundOn));
  soundState.textContent = soundOn ? "On" : "Off";
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.exponentialRampToValueAtTime(
    soundOn ? 0.7 : 0.0001,
    audioContext.currentTime + 1.5,
  );

  if (soundOn) window.setTimeout(birdCall, 1200);
});

function openLesson() {
  lessonDrawer.classList.add("is-open");
  lessonDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => closeLesson.focus(), 650);
}

function closeLessonDrawer() {
  lessonDrawer.classList.remove("is-open");
  lessonDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  beginLesson.focus();
}

beginLesson.addEventListener("click", openLesson);
closeLesson.addEventListener("click", closeLessonDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lessonDrawer.classList.contains("is-open")) {
    closeLessonDrawer();
  }
});

document.querySelector(".enter-lesson").addEventListener("click", () => {
  window.location.href = "./journey.html";
});

document.querySelectorAll(".place").forEach((place) => {
  place.addEventListener("click", () => {
    const names = {
      journey: "Today’s journey is waiting.",
      library: "The ancient library will open in a coming chapter.",
      reflection: "Your private reflection space is being prepared.",
      map: "The Gurukul map will grow with your learning.",
    };

    if (place.dataset.place === "journey") {
      window.location.href = "./journey.html";
      return;
    }
    if (place.dataset.place === "library") {
      window.location.href = "./library.html";
      return;
    }
    showToast(names[place.dataset.place]);
  });
});

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

setGreeting();
createLeaves();
createFireflies();
