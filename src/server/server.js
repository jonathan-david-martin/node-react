import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.resolve(__dirname, '../build')));


app.get("/api",(req,res)=>{
    res.json({message:"hello there"})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
  });

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})


