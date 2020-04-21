/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
const greet = (string) => {
  let array = string.split(":")
  let hour = array[0]
  if (hour <= 11) {
    return "Good Morning"
  } else if (hour >= 12 && hour <= 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

const displayMessage = (string) => {
  document.getElementById("greeting").innerText = (string)
}