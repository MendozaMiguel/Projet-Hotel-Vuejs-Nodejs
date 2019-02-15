const express=require('express');

const app=express();
const cookieSession=require("cookie-session");
const bodyParser=require("body-parser");
const passport=require("passport");

const localStrategy=require("passport-local").Strategy;

const ControllerContact = require('./controller/controllerContact');

// app.use(function(req,res,next){
//   console.log(req.originalUrl)
//   next()
// })

app.use(bodyParser.json());

app.use(cookieSession({
  name:'mysession',
  keys:['vueauthrandomkey'],
  maxAge: 24*60*60*1000
}))

app.use(passport.initialize());
app.use(passport.session());


let users=[
  {
    id:1,
    name:"Miguel",
    email:"Mendozamiguel@outlook.fr",
    password:"password"
  },
  {
    id:2,
    name:"test",
    email:"test@hotmail.fr",
    password:"password2"
  }
]

app.get('/api/contact', ControllerContact.getContact);

app.post("/api/login",(req,res,next)=>{
  passport.authenticate("local", (err, user, info)=>{
    if (err){
      return next(err);
    }

    if(!user){
      return res.status(400).send([user,"Cannot login in", info]);
    }

    req.login(user,err=>{
      res.send("logged in");
    });
  })(req,res,next)
})

app.get('/api/logout',function(req,res){
  req.logout();
  console.log("loggged out");
  return res.send();
})


const authMiddleware = (req,res,next)=>{
  if(!req.isAuthenticated()){
    res.status(401).send('You are not authenticated')
  } else{
    return next()
  }
}

app.get('/api/user',authMiddleware,(req,res)=>{
  let user= users.find(user =>{
    return user.id === req.session.passport.user
  })
  // console.log([user,req.session]);
  res.send({user:user})
})




passport.use(  
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },

    (username, password, done) => {
      let user = users.find((user) => {
        return user.email === username && user.password === password
      })

      // console.log(user)

      if (user) {
        done(null, user)
      } else {
        done(null, false, { message: 'Incorrect username or password'})
      }
    }
  )
)

passport.serializeUser((user, done) => {  
  done(null, user.id)
})

passport.deserializeUser((id, done) => {  
  let user = users.find((user) => {
    return user.id === id
  })

  done(null, user)
})

const publicRoot = 'C:/Users/admin/Desktop/VueJS tuto/authentification-vuejs-nodejs-mysql/vueauthclient/dist'

app.use(express.static(publicRoot))  


app.get("/", (req, res, next) => {  
  res.sendFile("index.html", { root: publicRoot })
})



app.listen(3000,()=>{
  console.log("port 3000...")
})