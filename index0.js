// const http = require("http");
import http from "http";
// import gfName from "./features.js";        // const gfName = require("./features")
// import {gfName2, gfName3} from "./features.js"

import {generateLovePercent} from "./features.js"
import fs from "fs";
// import path from "path";

// console.log(path.extname("/home/random/index.js"))


// const home = fs.readFileSync("./index.html");



// console.log(gfName2);
// console.log(gfName);
// console.log(myObj.gfName2);

const server = http.createServer((req,res)=>{

   console.log(req.method);

    if(req.url === "/about") {
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
    }
     else  if(req.url === "/") {
        
             res.end("home");
                
       
    }
     else if(req.url === "/contact") {
        res.end("<h1>Contact Page</h1>");
    }
    else{
        res.end("<h1>Page Not Found</h1>")
    }
});

server.listen(5000,()=>{
    console.log("Server is working");
});