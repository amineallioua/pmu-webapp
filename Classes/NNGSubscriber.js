// NNGSubscriber.js

const nanomsg = require('nanomsg');
const fs = require('fs');
const protobuf = require('protobufjs');
const EventEmitter = require('events');


class NNGSubscriber extends EventEmitter {
  constructor(address ) {
    super();
    this.address = address;
    this.socket = nanomsg.socket('sub');
    this.setupSocket();
  }

  setupSocket() {
    this.socket.connect(this.address);
    this.socket.on('data', (data) => {
      try {
        const root = protobuf.loadSync('./est.proto');
        const MyMessageType = root.lookupType('estimator.Frame');
        const frame = MyMessageType.decode(data);
        this.emit('frame', frame); // Emit frame event when new data is available
      } catch (error) {
        console.error('Error decoding frame:', error);
      }
    });

    this.socket.on('error', (err) => {
      console.error('Socket error:', err);
    });

    this.socket.on('close', () => {
      console.log('Socket closed.');
    });
  }

  start() {
    console.log('Subscriber started.');
  }

  stop() {
    this.socket.close();
    console.log('Subscriber stopped.');
  }
}


module.exports = NNGSubscriber;

