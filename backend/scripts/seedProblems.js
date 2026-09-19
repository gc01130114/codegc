require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Problem = require('../src/models/problem');

async function seed() {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log('Connected to DB');

    const filePath = path.join(__dirname, 'leetcode-problems-batch-1.json');
    const problems = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const result = await Problem.insertMany(problems);
    console.log(`Inserted ${result.length} problems successfully.`);
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
