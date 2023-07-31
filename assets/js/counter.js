// const pageviewsCount = document.getElementById('pageviews-count');
// const visitsCount = document.getElementById('visits-count');

// if (sessionStorage.getItem('visit') === null) {
//   // New visit and pageview
//   updateCounter('type=visit-pageview');
// } else {
//   // Pageview
//   updateCounter('type=pageview');
// }

// function updateCounter(type) {

//   fetch('http://127.0.0.1:3002/api?'+type) // Dynamic request with URL parameter
//     .then(res => res.json())
//     .then(data => {
//       pageviewsCount.textContent = data.pageviews; // Display pageviews to user
//       visitsCount.textContent = data.visits; // Display visits to user
//     })

// }

// sessionStorage.setItem('visit', 'x');
// 'visit' item persists in storage for the remainder of the user session


const todaysDate = new Date();
const hoursDate = todaysDate.getHours();

if(hoursDate <= 11.999999){
  document.getElementById('greetings').innerHTML = "Good Morning";
  console.log("Good Morning")
}else if(hoursDate >= 12 && hoursDate <= 18.99999){
  document.getElementById('greetings').innerHTML = "Good afternoon";
  console.log("Good afternoon")
}else{
  console.log("Good Evening")
  document.getElementById('greetings').innerHTML = "Good Evening";
}