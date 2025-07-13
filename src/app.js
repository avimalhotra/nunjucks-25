import express from "express";
const app=express();
import nunjucks from "nunjucks";


const port=process.env.PORT || 5000;

import path from "node:path";


app.use(express.static(path.resolve("src/public")));

nunjucks.configure( path.resolve("src/public/views"),{
    express:app,
    watch:true,
    noCache:false,
    autoescape:true,
})

const data=[
    {"name": "swift", "type": "hatchback", "price":870000},
    {"name": "dzire", "type": "sedan", "price":980000},
    {"name": "ciaz", "type": "sedan", "price":1100000},
    {"name": "baleno", "type": "hatchback", "price":880000},
    {"name": "fronx", "type": "hatchback", "price":1150000},
    {"name": "brezza", "type": "suv", "price":1250000},
    {"name": "grand vitara", "type": "suv", "price":1990000},
    {"name": "alto", "type": "hatchback", "price":400000},
    {"name": "wagon r", "type": "hatchback", "price":500000},
    {"name": "jimny", "type": "suv", "price":1400000}
];

app.get("/",(req,res)=>{
    res.status(200).render("index.html", {
        title:"Nunjucks", 
        cars:["swift","polo","verna",'thar','baleno'],
        city:{ name:"noida", pin:201301, state:"uttar pradesh"}, 
        data:data,
        age:33,
        // o1:1,
        // o2:2,
        o3:3,
    })
});

app.get("/contact",(req,res)=>{
    res.status(200).render("contact.html",{title:"Contact Us",city:{ name:"delhi", pin:110022} })
});

app.get('/*splat',(req,res)=>{
    res.status(404).render("error.html",{title:"404, page not found"});
});


app.listen(port,()=>console.log(`App running at http://localhost:${port}`));
