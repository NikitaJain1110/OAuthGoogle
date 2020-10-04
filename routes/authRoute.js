var passport       = require('passport')
module.exports = (app)=> {  
   
    
    app.get('/auth/google', passport.authenticate( 'google', { scope:['profile', 'email']}
    ))
    
    app.get('/auth/google/callback',passport.authenticate('google'))
    
    app.get('api/current_user',(req, res)=>{
        res.send(req.user);  //req.user will exist only after getting logged in
    })

    app.get('/api/logout',(req, res)=>{
        req.logout(); //logout() is built-in
        res.send(req.user);
    })
}

