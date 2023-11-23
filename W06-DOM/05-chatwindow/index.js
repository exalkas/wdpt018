function addMessage(message, me = true) {
  const template = `<div class="message">
      <div class="${
        me ? "myMessage" : "fromThem"
      }" data-date="${new Date().toLocaleTimeString()}">
        <p>${message}</p>
        <date> ${new Date().toLocaleTimeString()} </date>
      </div>
    </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}

typing();
addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Code here
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default action for form submission
  const input = document.querySelector("[type=text]");
  addMessage(input.value);
  // input.value = ""; // Clear text field after submitting
  form.reset();
  console.log("🚀 ~ input:", input);
  console.log("form clicked");
});
/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Code here

const messages = document.querySelector(".messages");

messages.addEventListener("click", (event) => {
  const message = event.target.closest(".message");

  const dataElement = message.querySelector("[data-date]");
  console.log("🚀 ~ dataElement:", dataElement);

  // const myMessage = event.target.closest(".myMessage");

  // const fromThem = event.target.closest(".fromThem");

  // myMessage.dataset.date

  const data = dataElement.dataset.date;

  alert(data);
});

/**
 * Listen to every Keydown (from the keyboard) in the input and call
 * the function typing()
 */

// Code here
const input = document.querySelector("[type=text]");
input.addEventListener("keydown", () => {
  typing();
});
