const express = require('express');
const app = express();
const PORT = 5408;
app.use(express.json());
app.use((req,res,next)=>{ res.set('X-Tournament-API','Aditya-Cup'); console.log(`${req.method} ${req.url}`); next(); });
let events = [
 {id:1,team:'River Hawks',sport:'Cricket',players:11,registered:true},
 {id:2,team:'North Strikers',sport:'Football',players:7,registered:false}
];
app.get('/',(_req,res)=>res.json({app:'Campus Cup API',routes:['GET /api/entries','GET /api/entries/:id','GET /api/entries?sport=Cricket','POST /api/entries']}));
app.get('/api/entries',(req,res)=>{const sport=String(req.query.sport||'').toLowerCase();res.json(sport?events.filter(e=>e.sport.toLowerCase()===sport):events)});
app.get('/api/entries/:id',(req,res)=>{const item=events.find(e=>e.id===Number(req.params.id));res.status(item?200:404).json(item||{error:'Entry not found'})});
app.post('/api/entries',(req,res)=>{const {team,sport,players}=req.body;if(!team||!sport||!Number.isInteger(Number(players))||Number(players)<1)return res.status(400).json({error:'team, sport and positive players count are required'});const item={id:Math.max(0,...events.map(e=>e.id))+1,team:String(team).trim(),sport:String(sport).trim(),players:Number(players),registered:true};events.push(item);res.status(201).json(item)});
app.use((_req,res)=>res.status(404).json({error:'Route not found'}));
app.listen(PORT,()=>console.log(`Campus Cup API running at http://localhost:${PORT}`));
