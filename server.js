const express=require("express")
const app =express()
const ejs=require('ejs')
const bodyParser = require("body-parser")
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//!-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let storageForMiniMarket=[] //~ this shall be changed later , as a database shall be used 
//!-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let somethingLol={ //! remember to delete this  
    email:"baggaaadit017@gmail.com",
    name:"oxygen_only"
}

storageForMiniMarket.push(somethingLol)

//!-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let checkForPassword=[]
//!-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let demoName={
    name:"baggaaadit@gmail.com",
    password:"helloworld"
}

checkForPassword.push(demoName)
let demoName2={
    name:"singh",
    password:"fd"
}

checkForPassword.push(demoName2)


app.get('/',function(req,res){
    res.render("home")
}) 


app.get('/make', function(req,res){
    res.render("make")
})


app.post('/make',function(req,res){
    let miniMarket={ 
        email:req.body.email,
        name:req.body.name,
        number:req.body.number,
        fname:req.body.fname,
        passw:req.body.password
    }
    let forPasswordCheck={ 
        name:req.body.email,
        password:req.body.password
    }
    checkForPassword.push(forPasswordCheck)
    storageForMiniMarket.unshift(miniMarket)
    res.redirect('/')
})


app.get('/all/:marketsname',function(req,res){
    for(let i=0;i<storageForMiniMarket.length;i++){ 
        if(req.params.marketsname==storageForMiniMarket[i].name){
            res.render("creatorPage",{cpEmail:storageForMiniMarket[i].email,cpName:storageForMiniMarket[i].name,cpfname:storageForMiniMarket[i].fname,cpnumber:storageForMiniMarket[i].number})
        }
    }
})


app.get('/dashboard',function(req,res){
    res.render("dashboard")
})


app.listen(3000,function(){
    console.log(" server has started ");
})