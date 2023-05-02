/*
 https://dev.to/thormeier/fully-responsive-html-css-sticky-note-4okl
https://codepen.io/JoshuaDraxten/pen/AaQvWr

Attenzione creare un front end di post it come desiderate con tecnologia bs5 

*/
const express = require('express'); // assegna all' oggetto express i metodi della libreria 'express'
const ejs = require("ejs"); // assegna all' oggetto express i metodi della libreria 'express'
const bodyParser = require("body-parser"); // assegna all' oggetto body-parser i metodi della libreria 'body-parser'
const path = require("path"); // assegna all' oggetto path i metodi della libreria 'path'
const fs = require("fs"); // assegna all' oggetto fs i metodi della libreria 'fs'
let data = require('./data/person.json'); 
const mialibreria=require('./Biasini.js');
const app = express(); 

//imposta ejs per i template
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views/pages'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

let page_date = new Date().toLocaleString(); //ottiene e salva la data

app.get('/', (req, res) =>{
  res.render("home", { page_date: page_date, jsonData: data });
});
app.get('/scrivi',(req,res)=>{
  res.render("scrivi")
})
app.post('/scrivi',(req, res) =>{ // funzione che ci permette di inserire i dati nel json

  let postit = {
      comment: req.body.Comment,
      date: page_date
  }
  
  mialibreria.addElementToJSON(data,postit);
  mialibreria.writeFileJSON("./data/person.json",data);
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('server started');
});

/* #PROBLEMATICHE DEL CODICE#

IL CODICE IN LINEA GENERALE FUNZIONA BENE SAREBBE DA MIGLIORARE LO STILE DEL FORM E LA VISUALIZZAZIONE DEI POSTIT ALL'INTERNO DELLA PAGINA */