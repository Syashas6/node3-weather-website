// const express = require('express');
// const path = require('path');

// const app = express();


// // SERVING STATIC ASSETS
// //console.log(__dirname);
// const publicDir = path.join(__dirname, "../public");

// //Setup hbs
// app.set('view engine', 'hbs');

// //console.log(path.join(__dirname, "../public"));
// app.use(express.static(publicDir));




// app.get("/help",function(req,res){
//     res.send("<h1>Help</h1>")
// })

// app.get("/about",function(req,res){
//     res.send({
        
//         name: "yashas",
//         age:18
//     });

// });

// app.get("/weather",function(req,res){
//     res.send({
//         temp: 56,
//         location: "Bengaluru",
//         condition: "chances of rain"
//     });

// });

// // Starting the server
// // SYNTEX: app.listen(port address, callback function);
// app.listen(3000, function(){
//     console.log("server is up at port 3000");
// });


//this let's us config what the server should do when someone trys to get the resource at a 
//specific url, then this may send html or any other response(like JSON).

// SYNTEX app.get(route,function)
// function tells what we want to do when someone visits that perticular route 
// 'req' :- it is an object containing information about the incoming request 
//          to the server commonly used as 'req' or 'request'
// 'res' :- it is object containing buncch of methods allowing us to 
//           customize the info which we send back to the 'request'.Commonly used 'res' or 'response'

// app.get('/',function(req,res){
//     res.send("<h1>Hello Express!</h1>");
// });