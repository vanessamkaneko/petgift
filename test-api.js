const axios = require('axios');
const http = require('http');

async function test() {
  try {
    const loginRes = await axios.post('http://localhost:3333/auth/login', {
      email: 'test@test.com', // wait I don't know the exact email
      password: '123'
    });
  } catch(e) {}
}
test();
