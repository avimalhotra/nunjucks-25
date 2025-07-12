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

app.get("/",(req,res)=>{
    res.status(200).render("index.html", {title:"Nunjucks", city:{ name:"noida", pin:201301}, cars:["swift","polo","verna"]  })
});

app.get("/contact",(req,res)=>{
    res.status(200).render("contact.html",{title:"Contact Us",city:{ name:"delhi", pin:110022} })
});

app.get('/*splat',(req,res)=>{
    res.status(404).render("error.html",{title:"404, page not found"});
});


app.listen(port,()=>console.log(`App running at http://localhost:${port}`));
