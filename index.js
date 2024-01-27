const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')
const passportSetup = require('./passport');
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
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

  // Set up passport strategies (e.g., GoogleStrategy) using passportSetup

// Placeholder for Google OAuth route handling
app.get('/auth/google', passport.authenticate('google', { 
     scope: ['profile', 'email'] 
 }));

// Placeholder for handling Google OAuth callback
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
   res.redirect('/'); // Redirect to home page after successful authentication
 });

 app.get('/', (req, res) => {
    // Handle the root path (e.g., send a welcome message or render a home page) i put a welcome message but need the home page here
    res.send('Welcome to the home page');
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
});
