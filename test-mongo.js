const mongoose = require('mongoose');
async function test() {
  await mongoose.connect('mongodb://localhost:27017/petgift');
  const db = mongoose.connection.db;
  const pets = await db.collection('pets').find({}).toArray();
  console.log('Pets', pets.map(p => ({
    name: p.name,
    status: p.status,
    protector: p.protector
  })));
  process.exit(0);
}
test();
