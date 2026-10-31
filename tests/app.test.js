const assert = require('assert');
const server = require('../src/app');

assert.ok(server, 'O servidor deve ser definido');
console.log('Teste unitario executado com sucesso!');
