function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem-box", {
      strings: "Here is the poem!",
      autoStart: true,
      delay: 10,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);