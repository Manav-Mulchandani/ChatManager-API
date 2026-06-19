const mongoose = require('mongoose');
const Chat=require('./models/chat.js');

require('dotenv').config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
}

connectDB();

Chat.insertMany([
    {
        from:'Neha',
        to:'Karan',
        msg:'Send me the project report and schedule a meeting today for further discussions',
        created_at:new Date()
    },
    {
        from:'Manav',
        to:'Nikhil',
        msg:'I have made the landing page of the project, do check it out once and let me know if any correction or update is required',
        created_at:new Date()
    },
    {
        from:'Nikhil',
        to:'Manav',
        msg:'I have seen the landing page, it looks perfect and there is no need for correction. Good job!',
        created_at:new Date()
    },
]);