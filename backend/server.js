import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());  //Enable Cross Origin
app.use(express.json()); //Enable JSON for transactions

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

//Testing Service
app.get("/", async (req, res)=>{
    res.status(200).json("Hello World from Express JS");
});

//POST End Point
app.post("/", async (req, res)=>{
    res.status(200).json("Response from POST end point");
});