const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://fabiostorer19:NianMongowo42490@cluster0.s8t9u.mongodb.net/pet';

async function main() {
    await mongoose.connect(mongoDB);
};

main().then(() => console.log('Conexão realizada com sucesso.')).catch((erro => console.log(erro)));

module.exports = mongoose;