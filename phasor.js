
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

let max_length_queue = 50; // max length of queue
let phasors_diagram_refresh_rate = 100; // refresh rate of phasors diagram (ms)

// global queue variables
let mag_v1_queue   =  new Queue(max_length_queue);
let angle_v1_queue =  new Queue(max_length_queue);
let mag_v2_queue   =  new Queue(max_length_queue);
let angle_v2_queue =  new Queue(max_length_queue);
let mag_v3_queue   =  new Queue(max_length_queue);
let angle_v3_queue =  new Queue(max_length_queue);
let mag_i1_queue   =  new Queue(max_length_queue);
let angle_i1_queue =  new Queue(max_length_queue);
let mag_i2_queue   =  new Queue(max_length_queue);
let angle_i2_queue =  new Queue(max_length_queue);
let mag_i3_queue   =  new Queue(max_length_queue);
let angle_i3_queue =  new Queue(max_length_queue);
let freq_queue     =  new Queue(max_length_queue);
let rocof_queue    =  new Queue(max_length_queue);


function generate_random_values() {
    // voltage phasors
    let mag_v1 = 1 + Math.floor(Math.random() * 100)/1000;
    let angle_v1 = 0 + (Math.floor(Math.random() * 100 )/10000)  ;
    let mag_v2 =   1 + Math.floor(Math.random() * 100)/1000;
    let angle_v2 =  2*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000 )  ;
    let mag_v3 =  1 + Math.floor(Math.random() * 100)/1000;
    let angle_v3 =  4*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000)  ;
  
    // current phasors
    let mag_i1 = 1 + Math.floor(Math.random() * 100)/1000;
    let angle_i1 = 0 + (Math.floor(Math.random() * 100 )/10000)  ;
    let mag_i2 =   1 + Math.floor(Math.random() * 100)/1000;
    let angle_i2 =  2*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000 )  ;
    let mag_i3 =  1 + Math.floor(Math.random() * 100)/1000;
    let angle_i3 =  4*Math.PI/3 + (Math.floor(Math.random() * 100 )/10000)  ;
  
    // frequency value
    let freq = 50 + Math.floor(Math.random() * 100)/1000;
  
    //rocof value
    let rocof = 0 + Math.floor(Math.random() * 100)/1000;

    return [mag_v1, angle_v1, mag_v2, angle_v2, mag_v3, angle_v3, mag_i1, angle_i1, mag_i2, angle_i2, mag_i3, angle_i3, freq, rocof];
}

function buffering() {

  let [mag_v1, angle_v1, mag_v2, angle_v2, mag_v3, angle_v3, mag_i1, angle_i1, mag_i2, angle_i2, mag_i3, angle_i3, freq, rocof] = generate_random_values();

  // push values to queue
  mag_v1_queue.enqueue(mag_v1);
  angle_v1_queue.enqueue(angle_v1);
  mag_v2_queue.enqueue(mag_v2);
  angle_v2_queue.enqueue(angle_v2);
  mag_v3_queue.enqueue(mag_v3);
  angle_v3_queue.enqueue(angle_v3);
  mag_i1_queue.enqueue(mag_i1);
  angle_i1_queue.enqueue(angle_i1);
  mag_i2_queue.enqueue(mag_i2);
  angle_i2_queue.enqueue(angle_i2);
  mag_i3_queue.enqueue(mag_i3);
  angle_i3_queue.enqueue(angle_i3);
  freq_queue.enqueue(freq);
  rocof_queue.enqueue(rocof);

}

function draw_voltages() { //function for length angle values

  let length1 = mag_v1_queue.rear();
  let angle1 = angle_v1_queue.rear();
  let length2 = mag_v2_queue.rear();
  let angle2 = angle_v2_queue.rear();
  let length3 = mag_v3_queue.rear();
  let angle3 = angle_v3_queue.rear();

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

}
 
function draw_currents() { //function for length angle values

  let length1 = mag_i1_queue.rear();
  let angle1 = angle_i1_queue.rear();
  let length2 = mag_i2_queue.rear();
  let angle2 = angle_i2_queue.rear();
  let length3 = mag_i3_queue.rear();
  let angle3 = angle_i3_queue.rear();

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

  buffering();
  if (!isPaused) {
    // code for the loop goes here
    draw_voltages();
    draw_currents();
    // repeat the loop after a delay
  }else {
    // the loop is paused nothing to be done  
  }
}

const draw_phasors_loop = setTimeout(loop, phasors_diagram_refresh_rate);

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
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Dataset 2",
        data: [],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Dataset 3",
        data: [],
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
    myChart.data.datasets.data = freq_queue.get_elements();
    
    // Remove oldest data point if chart has more than 50 data points
    // if (myChart.data.labels.length > 50) {
    //   myChart.data.labels.shift();
    //   myChart.data.datasets[0].data.shift();
    //   myChart.data.datasets[1].data.shift();
    //   myChart.data.datasets[2].data.shift();
    // }

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