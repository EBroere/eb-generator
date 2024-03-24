function displayQuotes(response) {
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuotes(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bd30oafc2f7e9f6a35bab68ba504ft6c";
  let prompt = `Generate 5 quotes about ${instructionsInput.value} attributed to well-known individuals, along with proper attributions`;
  let context = `Generate 5 short quotes in basic HTML, each following this format: 
1. "Quote text." - Attribution
Ensure each quote is preceded by a number from 1 to 5 for consistency. These quotes should reflect various perspectives on ${instructionsInput.value}, ranging from personal philosophy to worldly wisdom. Sign every quote with proper attributions in bold inside a <strong> element at the end of the quote. Separate each quote with a <br /> <br /> for clarity.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quotesElement = document.querySelector("#quotes");
  quotesElement.classList.remove("hidden");
  quotesElement.innerHTML = `<div class="generating">⏳ Generating quotes about ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayQuotes);
}

let quotesFormElement = document.querySelector("#quotes-generator-form");
quotesFormElement.addEventListener("submit", generateQuotes);
