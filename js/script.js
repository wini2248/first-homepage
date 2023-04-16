// komentarz

console.log("Cześć Wam tu zaglądającym!!! :D");

let button = document.querySelector(".button");
let picture = document.querySelector(".picture");
let downloadText = document.querySelector(".downloadText");

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

button.addEventListener("click", () => {
  picture.classList.toggle("hidePic");
  downloadText.classList.toggle("hideDownloadText");

  if (picture.classList.contains("hidePic")) {
    button.innerText = "Pokaż zdjęcie";
  } else {
    button.innerText = "Ukryj zdjęcie";
  }
});

formElement.addEventListener("submit", (event) => {         // input zamiast submit (event)
  event.preventDefault();                          // liczy na bieżąco bez użycia przycisku

  let height = heightElement.value;
  let weight = weightElement.value;
  
  let bmi = weight / ((height / 100) ** 2);

  bmiElement.innerText = bmi.toFixed(2);
});
