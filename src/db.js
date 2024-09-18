const mongoose = require('mongoose');

const mongoDB = 'pet';

async function main() {
    await mongoose.connect(mongoDB);
};

main().then(() => console.log('Conexão realizada com sucesso.')).catch((erro => console.log(erro)));

module.exports = mongoose;
