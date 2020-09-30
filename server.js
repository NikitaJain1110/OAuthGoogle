const express        = require ('express');
const app            = express();
const mongoose       = require('mongoose');
const keys           = require('./config/keys')
const passport       = require('passport');
const PORT           = process.env.PORT || 4000;
const cookieSession  = require('cookie-session');
const dev            = require('./config/dev');

//PASSPORT OAUTH20
require('./models/User')          //Always needed to be "required" prior to "passport"
require('./services/passport')

//MONGODB CONNECTIVITY
mongoose.connect(keys.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
    console.log("MongoDB connected")
);
//CREATE COOKIE
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,       //30 days in milliseconds
        keys: [keys.cookieKey],
    })
)

//LINK COOKIE TO PASSPORT
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app)

app.listen(PORT, ()=>{
    console.log("Server started at port "+PORT);
})