function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3bfca328927aedo94ct2bc3eb0f193b8";
  let prompt = `Generate a short but beautiful Scottish Gaelic poem about ${instructionsInput.value}`;
  let context = `User Instructions: Generate a Scottish Gaelic poem about ${instructionsInput.value}.You are a talented poet and you love to write short poems that honor a scottish heritage. Your mission is to generate a short four line poem formatted in basic HTML - do NOT start the poem with 'html'. Please include a <br /> between each line, and sign with 'SheCodes AI' inside a <strong> element.Make sure to follow the user instructions`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⏳ Generating a Scottish Gaelic poem about ${instructionsInput.value}, please wait...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
