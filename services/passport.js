var passport       = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys           = require('../config/keys')
const mongoose     = require('mongoose')
const User         = mongoose.model('users') 

//takes mongo unique id
passport.serializeUser((user, callBack)=>{
    callBack(null, user.id)
})
//decodes id into user info
passport.deserializeUser((id,callBack)=>{
    User.findById(id).then((user)=>{
        callBack(null, user)
    })
})
passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,         
        clientSecret:keys.googleClientSecret, 
        callbackURL: "/auth/google/callback"          
    }, (accessToken, refreshToken, profile, callBack)=>{
        User.findOne({googleID: profile.id}) //if User already exists
        .then((existingUser)=>{
            if(existingUser){
                callBack(null, existingUser) //null here is for no error
            }
            else{
                new User({googleID: profile.id}).save()//adds to db if not existing
                .then((user)=>{
                    callBack(null, user)
                })
            }
        })    
    })
)