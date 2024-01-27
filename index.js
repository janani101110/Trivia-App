const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')
const authRoutes = require('./routes/auth');
require('dotenv').config();
const cookieParser = require('cookie-parser')

const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const commentRoute=require('./routes/comments');

const app = express();
app.use(session({ secret: 'cats'}))
app.use(passport.initialize())
app.use(passport.session())


//database connection

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.db);
        console.log('Database connected successfully');
    }catch(err){
        console.log(err.message);
    }
}
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
});