const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const Chat=require('./models/chat.js');
const methodOverride=require('method-override');

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


app.listen(3000,()=>{
    console.log('app is listening on port 3000');
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.send('Server Working !!');
});


app.get('/chats',async (req,res)=>{
    let chats= await Chat.find();
    res.render('index.ejs',{chats});
})

app.get('/chats/new',(req,res)=>{
    res.render('new.ejs');
})

app.post('/chats',async (req,res)=>{
    let date=new Date();
    let {from:sender,to:reciever,msg:message}=req.body;
    await Chat.insertOne({from:sender,to:reciever,msg:message,created_at:date});
    res.redirect('/chats');
})

app.get('/chats/:id/edit',async (req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render('edit.ejs',{id,chat});
})

app.patch('/chats/:id',async (req,res)=>{
    let {id}=req.params;
    let {msg:newMessage}=req.body;
    await Chat.updateOne({_id:id},{msg:newMessage});
    res.redirect('/chats');
})

app.get('/chats/:id/delete',async (req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render('delete.ejs',{id,chat});
})

app.delete('/chats/:id',async (req,res)=>{
    let {id}=req.params;
    await Chat.deleteOne({_id:id});
    res.redirect('/chats');
})