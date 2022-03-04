const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keypress", (event) => {
    if (event.key == "a" || event.key === "A") {
		audioBoom.src = "sounds/boom.wav";
	}
});
boom.addEventListener("click", () => {
	audioBoom.src = "sounds/boom.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "s" || event.key === "S") {
		audioClap.src = "sounds/clap.wav";
	}
});
clap.addEventListener("click", () => {
	audioClap.src = "sounds/clap.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "d" || event.key === "D") {
		audioHiHat.src = "sounds/hihat.wav";
	}
});
hihat.addEventListener("click", () => {
	audioHiHat.src = "sounds/hihat.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "f" || event.key === "F") {
		audioKick.src = "sounds/kick.wav";
	}
});
kick.addEventListener("click", () => {
	audioKick.src = "sounds/kick.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "g" || event.key === "G") {
		audioOpenHat.src = "sounds/openhat.wav";
	}
});
openhat.addEventListener("click", () => {
	audioOpenHat.src = "sounds/openhat.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "h" || event.key === "H") {
		audioRide.src = "sounds/ride.wav";
	}
});
ride.addEventListener("click", () => {
	audioRide.src = "sounds/ride.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "j" || event.key === "J") {
		audioSnare.src = "sounds/snare.wav";
	}
});
snare.addEventListener("click", () => {
	audioSnare.src = "sounds/snare.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "k" || event.key === "K") {
		audioTink.src = "sounds/tink.wav";
	}
});
tink.addEventListener("click", () => {
	audioTink.src = "sounds/tink.wav";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "l" || event.key === "L") {
		audioTom.src = "sounds/tom.wav";
	}
});
tom.addEventListener("click", () => {
	audioTom.src = "sounds/tom.wav";
});