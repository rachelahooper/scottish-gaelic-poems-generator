function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Seann sgìrean bha pròiseil làn shràidean len còsan",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
