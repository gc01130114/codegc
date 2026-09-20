const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'flavor-example-microcozy-73684.db.redis.io',
        port: 14441
    }
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err.message);
});

module.exports = redisClient;