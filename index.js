/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) { 

  const hour_min = parseInt(timeString); 

  if(hour_min < 12) { 
    return "Good Morning"; 
  } else if(hour_min < 17) { 
    return "Good Afternoon";
  } else { 
    return "Good Evening";
  };

}

function displayMessage(testContent) {
  document.getElementById("greeting").innerText = testContent; 
}
