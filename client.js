#!/usr/bin/env node
const net = require('net');
const { prepareResponse } = require('./utils/prepareResponse');
const { getNextMove } = require('./utils/getNextMove');

const defaultPort = 1337;
const defaultHost = 'localhost';
const args = process.argv.slice(2);

const client = new net.Socket();
client.connect(args[0] || defaultPort, args[1] || defaultHost, () => {
  console.log('Connected');
});

client.on('close', () => {
  console.log('Connection closed.');
});

client.on('error', (error) => {
  console.log(`Error: ${error.toString()}`);
});

client.on('data', (data) => {
  console.log(`Received ${data}`);
  const jsonData = JSON.parse(data);
  const move = getNextMove(jsonData.player, jsonData.board);
  const response = prepareResponse(move);
  client.write(response);
});


