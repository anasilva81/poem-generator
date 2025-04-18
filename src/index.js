function displayPoem(response) {

    let loader = document.querySelector("#loader");
    loader.style.display = "none";

    new Typewriter("#poem-box", {
        strings: response.data.answer,
        autoStart: true,
        delay: 10,
        cursor: "",
      });

}

function generatePoem(event) {
    event.preventDefault();

    let instructionsElement = document.querySelector("#user-instructions");

    let loader = document.querySelector("#loader");
    let poemBox = document.querySelector("#poem-box");
  
    poemBox.innerHTML = "";
    loader.style.display = "block";

    let apiKey = "91b1f0t782317c69da4ae1170bo049f3";
    let prompt = `Instructions: Generate a poem about ${instructionsElement.value}`;
    let context = "You are a classical poet who loves to write. When the user gives you an instruction you know right away how to construct a beautiful poem and you will provide with 2 stanzas, each stanza having 4 lines. You will not provide any other information or text, just the poem. Sign SheCodes AI at the end of the poem and it shoulb be in a smaller size letter and bold in HTML";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemBoxElement = document.querySelector("#poem-box");
    poemBoxElement.classList.remove("hidden");

    axios.get(apiURL).then(displayPoem);

  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);