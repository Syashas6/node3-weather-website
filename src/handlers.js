const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
const port = process.env.PORT || 3000

// This is the path where '.hbs' partials file are present
const partialsPath = path.join(__dirname, "../templet/partials")

// This is the path where '.hbs' view file are present
const viewsPath = path.join(__dirname, '../templet/views');


//SetUp handle-bars
app.set('view engine', 'hbs');
//By default 'hbs' will search for views directory ,since we have renamed it as "templets", we 
// have to set the path, this is done in the below line
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);


//Always make sure that static file is setup to link 'css','img' to 'hbs' file rendered 
//SetUp static directory to serve
const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));


app.get('/',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Yashas'
    });
});

app.get('/about',(req,res) => {
    res.render('about',{
        title:"About from HBS",
        name: "Yashas"
    });
})

app.get('/help', (req,res) => {
    res.render('help',{
        helpText: "This is helpful text",
        title:'"help" from hbs',
        name:'yashas'
    })
});

app.get('/weather',(req,res) => {
    
    // console.log(req.query.search);
    if(!req.query.address){
        res.send({
            error:"Please Enter Proper address"
        })
        console.log("Please Enter The Address");
    }
    else {
        const loc = req.query.address;

        geocode(loc,(error, data) => {
            if(error)
            {
                res.send({
                    error: "You Must Send a proper address"
                })
            }
            else{
                const { latitude,logitude } = data;

                forecast(latitude,logitude,(error,data)=> {

                    if(error){
                        res.send({
                            error: "error"
                        })
                    }
                    else{
                        const {temp, we, hu} = data;
                        res.send({
                            temp : "Current Temperature is "+ temp,
                            we: "Current Weather is "+ we,
                            hu: "Current Humidity is "+hu
                        });
                    
                    }
                })
            }
            
        })
        
        

    }
})


app.get('/help/*',(req,res) => {
    res.render('errorpage',{
        errorMessage :"No article found"
    })
})

app.get('*',(req,res) => {
    res.render('errorpage', {
        errorMessage :"404 ERROR Page Not Found"
    })
})

app.listen(port, function(){
    console.log("server is up at port "+port);
});



// ============================================================================  
//                      Important NOTE
// ============================================================================
//Always make sure that while running terminal ur out of :- 'src' directory
// so the command should be  :-  "nodemon src/handlers.js"