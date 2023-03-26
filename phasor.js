//darw circle and axes for phase 1
let canvas = document.getElementById("phasorCanvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 154, 0, 2 * Math.PI);
ctx.lineWidth = 3;
ctx.stroke();

//darw circle and axes for phase 2 
let canvas1 = document.getElementById("phasorCanvas2");
let ctx2 = canvas1.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(canvas1.width / 2, 0);
ctx2.lineTo(canvas1.width / 2, canvas1.height);
ctx2.strokeStyle = "black";
ctx2.stroke();
ctx2.beginPath();
ctx2.moveTo(0, canvas1.height / 2);
ctx2.lineTo(canvas1.width, canvas1.height / 2);
ctx2.strokeStyle = "black";
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(canvas1.width/2, canvas1.height/2, 154, 0, 2 * Math.PI);
ctx.lineWidth = 3;
ctx2.stroke();

function draw1() { //function for length angle values

  let length1 = 1 + Math.floor(Math.random() * 100)/1000;
  let angle1 = 0 + (Math.floor(Math.random() * 100 )/10000)  ;
  let length2 =   1 + Math.floor(Math.random() * 100)/1000;
  let angle2 =  2*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000 )  ;
  let length3 =  1 + Math.floor(Math.random() * 100)/1000;
  let angle3 =  4*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000)  ;


  let canvas = document.getElementById("phasorCanvas");
  let ctx1 = canvas.getContext("2d");

  ctx1.clearRect(0, 0, canvas.width, canvas.height);

  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  
  const ctx = canvas.getContext("2d");
  // Draw axes
  
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 155, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();

  let g = 153/Math.max(length1,length2,length3) ;

  let length11 =g*length1;
  let length12 =g*length2;
  let length13 =g*length3;

  
  // Draw first line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length11 * Math.cos(angle1), centerY - length11 * Math.sin(angle1));
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
  
  // Draw second line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length12 * Math.cos(angle2), centerY - length12 * Math.sin(angle2));
  ctx.strokeStyle = "#00ff00";
  ctx.stroke();
  
  // Draw third line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length13 * Math.cos(angle3), centerY - length13 * Math.sin(angle3));
  ctx.strokeStyle = "#0000ff";
  ctx.stroke();
  
  let phasorTableBody = document.getElementById("m1");

  phasorTableBody.innerHTML = "";
    let phasors = [
      {name: "Phasor 1", length: length1, angle: angle1},
      {name: "Phasor 2", length: length2, angle: angle2},
      {name: "Phasor 3", length: length3, angle: angle3}
    ];
    
  phasors.forEach(function(phasor) {

    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let lengthCell = document.createElement("td");
    let angleCell = document.createElement("td");
    
    nameCell.innerText = phasor.name;
    lengthCell.innerText = phasor.length.toFixed(2);
    angleCell.innerText = phasor.angle.toFixed(2);
    
    row.appendChild(nameCell);
    row.appendChild(lengthCell);
    row.appendChild(angleCell);
    
    phasorTableBody.appendChild(row);
  
  });

  return  length1 ,length2 ,length3 , angle1,angle2,angle3

}
 
function draw2() { //function for length angle values
  let length1  = 1 + Math.floor(Math.random() * 100)/1000;
  let angle1 = 0 + (Math.floor(Math.random() * 100 )/10000)  ;
  let length2 =   1 + Math.floor(Math.random() * 100)/1000;
  let angle2 =  2*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000 )  ;
  let length3 =  1 + Math.floor(Math.random() * 100)/1000;
  let angle3 =  4*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000)  ;

  let canvas = document.getElementById("phasorCanvas2");
  let ctx2 = canvas.getContext("2d");

  ctx2.clearRect(0, 0, canvas.width, canvas.height);

  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;

  const ctx = canvas.getContext("2d");

  // Draw axes
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 155, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();

  let g = 153/Math.max(length1,length2,length3);
  let length11 =g*length1;
  let length12 =g*length2;
  let length13 =g*length3;

  // Draw first line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length11 * Math.cos(angle1), centerY - length11 * Math.sin(angle1));
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();

  // Draw second line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length12 * Math.cos(angle2), centerY - length12 * Math.sin(angle2));
  ctx.strokeStyle = "#00ff00";
  ctx.stroke();

  // Draw third line
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + length13 * Math.cos(angle3), centerY - length13 * Math.sin(angle3));
  ctx.strokeStyle = "#0000ff";
  ctx.stroke();




  let phasorTableBody = document.getElementById("m2");
phasorTableBody.innerHTML = "";
  let phasors = [
    {name: "Phasor 1", length: length1, angle: angle1},
    {name: "Phasor 2", length: length2, angle: angle2},
    {name: "Phasor 3", length: length3, angle: angle3}
  ];
  
  phasors.forEach(function(phasor) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let lengthCell = document.createElement("td");
    let angleCell = document.createElement("td");
    
    nameCell.innerText = phasor.name;
    lengthCell.innerText = phasor.length.toFixed(2);
    angleCell.innerText = phasor.angle.toFixed(2);
    
    row.appendChild(nameCell);
    row.appendChild(lengthCell);
    row.appendChild(angleCell);
    
    phasorTableBody.appendChild(row);
  });
}

let isPaused = false;

function loop() {
  if (!isPaused) {
    // code for the loop goes here
    draw1();
    draw2();
    // repeat the loop after a delay
    setTimeout(loop, 100);
  }else {
    // the loop is paused  
  }
}

// start the loop
loop();

// pause/unpause the loop when a button is clicked
document.getElementById("pauseButton").addEventListener("click", function() {
  if (isPaused) {
    // unpause the loop
    isPaused = false;
    loop();
  } else {
    // pause the loop
    isPaused = true;
  }
});

var ctx5 = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx5, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Dataset 2",
        data: [20, 30, 40, 50, 60, 70],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Dataset 3",
        data: [30, 40, 50, 60, 70, 80],
        borderColor: "green",
        fill: false,
      },
    ],
  },
  options: {},
});

// Update chart every second
let intervalId; // keep track of the interval ID to stop it later

function startChart() {
  // check if the chart is already running
  if (intervalId) {
    return;
  }

  intervalId = setInterval(function () {
    // Add new data point
    var time = new Date().toLocaleTimeString();
    myChart.data.labels.push(time);
    
    // Remove oldest data point if chart has more than 50 data points
    if (myChart.data.labels.length > 50) {
      myChart.data.labels.shift();
      myChart.data.datasets[0].data.shift();
      myChart.data.datasets[1].data.shift();
      myChart.data.datasets[2].data.shift();
    }

    // Update chart
    myChart.update();
  }, 1000);
}

function stopChart() {
  clearInterval(intervalId);
  intervalId = null; // reset the interval ID
}

// Get references to the start and stop buttons
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Add event listeners to the buttons
startButton.addEventListener('click', startChart);
stopButton.addEventListener('click', stopChart);


function refresh(){
  window.location.reload("Refresh")
}