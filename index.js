const textEl = document.querySelector(".text");
const btnSay = document.querySelector(".btn-say");
const input = document.querySelector(".input");
const img = document.querySelector(".img");

// img default
const getNumberRandomDataImg = Math.floor(
  Math.random() * dataImgDefault.length
);
img.src = dataImgDefault[getNumberRandomDataImg].src;

function converImgToText(imgLink) {
  Tesseract.recognize(imgLink, "eng").then((out) => {
    textEl.innerHTML = out.text;
    machineSpeak(out.text);
  });
}

btnSay.addEventListener("click", async () => {
  machineSpeak(textEl.innerHTML);
});

function machineSpeak(text) {
  responsiveVoice.speak(text);
}

window.addEventListener("paste", (e) => {
  if (e.clipboardData.files.length > 0) {
    input.files = e.clipboardData.files;
    if (e.clipboardData.files[0].type.startsWith("image/")) {
      setPreviewImage(e.clipboardData.files[0]);
    }
  }
  converImgToText(e.clipboardData.files[0]);
});

function setPreviewImage(file) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    img.src = fileReader.result;
  };
}
