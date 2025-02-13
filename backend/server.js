import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/games', async (req, res) => {
    
    try {
        
        const index=Math.floor(Math.random()*5+1)
        const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40&page=${index}`);
        const data = await response.json();
        
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Game List' });
    }
    
});

app.get('/developers/:id',async(req,res)=>{
    const id=parseInt(req.params.id);
    try{
        const response= await fetch (`https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`)
        const data=await response.json()
        res.json(data);
        
    }catch(error){
        res.status(500).json({error:'Error Fetching Developers Of The Game'})
    }
})



app.get('/rated',async(req,res)=>{
    try{
        const response=await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=-added&dates=2020-01-01,2025-12-31&page_size=50`)
        const data= await response.json();
        res.json(data);
    }catch(error){
        res.status(500).json({error:"Error fetching Rated Games"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


app.get('/quotes',async(req,res)=>{
    const options={
        method:'GET',
        headers:{
            'Authorization':`Token token="${process.env.API_KEY_QUOTES}"`
        }
    };
    const url = 'https://favqs.com/api/quotes';
    
    try{
        const response= await fetch(url,options);
        const data= await response.json();
        
        res.json(data)
    }catch (error){
        res.status(500).json({error:"Error fetching Quotes"})
    }
});

app.get('/search/:query',async(req,res)=>{
    const query=req.params.query
    try{
        const response=await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${query}&page_size=8`)
        const data= await response.json();
        res.json(data);
        
    }catch(error){
        res.status(500).json({error:"Error fetching Rated Games"})
    }

})

app.get('/screenshot/:id',async (req,res)=>{
    const id=(req.params.id)

    try{
        const response=await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.API_KEY}`)
        const data= await response.json()
        console.log(data)
        res.json(data)
    }catch(error){
        res.status(500).json({error:"Error fetching ScreenShot"})
    }
})

