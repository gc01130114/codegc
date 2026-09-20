const mongoose = require('mongoose');

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});

async function main() {
    await mongoose.connect(process.env.DB_CONNECT_STRING)
}

module.exports = main;


