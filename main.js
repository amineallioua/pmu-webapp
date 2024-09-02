// main.js

const NNGSubscriber = require('./Classes/NNGSubscriber');
const Frame = require('./models/frame.js'); 
const Queue = require('./Classes/queue.js');
const socketIo = require('socket.io');
const http = require('http');

// Create an instance of NNGSubscriber and Queue
const subscriber1 = new NNGSubscriber('tcp://127.0.0.1:5555');
const queue1 = new Queue(500);

const subscriber2 = new NNGSubscriber('tcp://127.0.0.1:5556');
const queue2 = new Queue(500);
let isPaused = false;

// Start the subscriber
subscriber1.start();
subscriber2.start();

// Listen for the 'frame' event from NNGSubscriber
subscriber1.on('frame', (frame) => {
  // Insert frame into the database immediately
  Frame.insertFrame1(frame, (err, frameId) => {
    if (err) {
      console.error('Error inserting frame:', err);
      return; // Handle error accordingly
    }
    console.log('Frame inserted with ID:', frameId);
  });

  // Push frame into Queue for processing and sharing
  queue1.push(frame);

  // Emit the new frame to all connected clients
  io.emit('frame1', frame);
});

subscriber2.on('frame', (frame) => {
  // Insert frame into the database immediately
  Frame.insertFrame2(frame, (err, frameId) => {
    if (err) {
      console.error('Error inserting frame:', err);
      return; // Handle error accordingly
    }
    console.log('Frame inserted with ID:', frameId);
  });

  // Push frame into Queue for processing and sharing
  queue2.push(frame);

  // Emit the new frame to all connected clients
  io.emit('frame2', frame);
});


const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins for testing, but specify exact origin in production
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  // Send the current front of the queue to the newly connected client
  if  (!isPaused && queue1.peek())  {
    socket.emit('frame1', queue1.peek());
  }
  if (!isPaused && queue2.peek())  {
    socket.emit('frame2', queue2.peek());
  }

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });


  socket.on('pause', () => {
    isPaused = true;
    console.log('Pausing frames');
  });


  socket.on('start', () => {
    isPaused = false;
    console.log('Pausing frames');
  });
});

server.listen(3000, () => {
  console.log(`Socket server is running on port 3000`);
});
