const inputs = document.querySelectorAll("input");
console.log("🚀 ~ inputs:", inputs);

inputs[0].focus();

inputs.forEach((input, idx) => {
  input.addEventListener("input", (e) => {
    console.log("typed sth");

    if (idx >= inputs.length - 1) {
      // this is the last element
      e.target.blur(); // loose focus
    } else {
      e.target.nextElementSibling.focus();
    }
  });
});
