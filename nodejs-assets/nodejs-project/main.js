// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
rn_bridge.channel.on('message', msg => {
  rn_bridge.channel.send(msg);
});

// Inform react-native node is initialized.
rn_bridge.channel.send('Node was initialized.');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8870, () => {
  rn_bridge.channel.send('Server is running on port 8870');
});
