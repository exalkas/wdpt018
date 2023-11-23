/**
 * 07
 * Mars Exploration: Our spaceship in Mars is in trouble and transmits back to us SOS
 * There are cosmic rays interfering though and the signal arrives distorted.
 * Write a function that accepts the message from our spaceship and returns
 * the number of characters that are distorted.
 * For example:
 * SOSSOSSOS = 0 (no distorted characters)
 * SOSSOT = 1 (one character has been distorted)
 * SOSOOSOSOSOSOSSOSOSOSOSOSOS = 12
 * SOSSPSSQSSOR = 3
 */

function messageCheck(message) {
  let total = 0;
  for (let i = 0; i < message.length; i += 3) {
    console.log("🚀 ~ i:", i);

    if (message[i] !== "S") total++;
    if (message[i + 1] !== "O") total++;
    if (message[i + 2] !== "S") total++;
  }
  console.log("total is", total);
}

messageCheck("SOSSOSSOS");
messageCheck("SOSSOT");
messageCheck("SOSOOSOSOSOSOSSOSOSOSOSOSOS");
messageCheck("SOSSPSSQSSOR");
