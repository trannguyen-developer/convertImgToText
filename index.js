const textEl = document.querySelector(".text");
const btnSay = document.querySelector(".btn-say");
const input = document.querySelector(".input");
const img = document.querySelector(".img");
const inputEdit = document.querySelector(".input-edit");
const selectVoice = document.querySelector("#voice");
const selectSpeed = document.querySelector("#speed-voice");
const inputVolume = document.querySelector(".input-volume");

// img default
const getNumberRandomDataImg = Math.floor(
  Math.random() * dataImgDefault.length
);
img.src = dataImgDefault[getNumberRandomDataImg].src;

function converImgToText(imgLink) {
  Tesseract.recognize(imgLink, "eng").then(({ data: { text } }) => {
    const textT = text.replace(/\n/g, " ");
    textEl.textContent = textT;
    machineSpeak(textT);
    inputEdit.value = textT;
  });
}

inputEdit.addEventListener("input", (e) => {
  textEl.textContent = e.target.value;
});

btnSay.addEventListener("click", async () => {
  machineSpeak(textEl.textContent);
});

// voice machine
function machineSpeak(text) {
  responsiveVoice.speak(text, selectVoice.value, {
    volume: inputVolume.value,
    rate: selectSpeed.value,
  });
}

// paste img
window.addEventListener("paste", (e) => {
  if (e.clipboardData.files.length > 0) {
    input.files = e.clipboardData.files;
    if (e.clipboardData.files[0].type.startsWith("image/")) {
      setPreviewImage(e.clipboardData.files[0]);
    }
  }
  converImgToText(e.clipboardData.files[0]);
});

// load img
function setPreviewImage(file) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    img.src = fileReader.result;
  };
}
