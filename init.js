const mongoose = require('mongoose');
const Chat=require('./models/chat.js');

main().then(res=>{console.log(res)}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

Chat.insertMany([
    {
        from:'Manav',
        to:'Mohit',
        msg:'Exam kab hai teri?',
        created_at:new Date()
    },
    {
        from:'Nikhil',
        to:'Ansh',
        msg:'FastAPI ka code integrate karde',
        created_at:new Date()
    },
    {
        from:'Neel',
        to:'Core Team',
        msg:'Kab aa rahe ho bhai idhar?',
        created_at:new Date()
    },
    {
        from:'Manav',
        to:'Client1',
        msg:'Your website is deployed successfully',
        created_at:new Date()
    },
]);