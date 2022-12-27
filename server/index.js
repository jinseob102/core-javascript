

const liveServer = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  root: './client'
};

liveServer.start(params)