const mongoose = require('mongoose');
const Chat=require('./models/chat.js');

main().then(res=>{console.log(res)}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat_manager_api');

}

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