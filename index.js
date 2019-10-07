/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hour = parseInt(time.slice(0,2));
  switch(true){
    case hour < 12:
       return "Good Morning";
    case hour >= 17:
      return "Good Evening";
    default:
      return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById('greeting').innerText = str;
}