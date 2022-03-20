const textEl = document.querySelector(".text");
const btnSay = document.querySelector(".btn-say");
const input = document.querySelector(".input");
const img = document.querySelector(".img");
const inputEdit = document.querySelector(".edit");

// img default
const getNumberRandomDataImg = Math.floor(
  Math.random() * dataImgDefault.length
);
img.src = dataImgDefault[getNumberRandomDataImg].src;

function converImgToText(imgLink) {
  Tesseract.recognize(imgLink, { lang: "eng", oem: 1, psm: 3 }).then((out) => {
    const text = out.text.replace(/\n/g, " ").toLowerCase();
    textEl.textContent = text;
    machineSpeak(text);
    inputEdit.value = text;
  });
}

inputEdit.addEventListener("input", (e) => {
  textEl.textContent = e.target.value;
});

btnSay.addEventListener("click", async () => {
  machineSpeak(textEl.textContent);
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
