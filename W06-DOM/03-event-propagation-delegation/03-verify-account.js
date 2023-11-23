const codeContainer = document.querySelector(".code-container");

codeContainer.firstElementChild.focus();

codeContainer.addEventListener("input", (e) => {
  console.log("🚀 ~ codeContainer:", codeContainer);

  if (e.target === codeContainer.lastElementChild) {
    e.target.blur(); // loose focus
  } else {
    e.target.nextElementSibling.focus();
  }
});
