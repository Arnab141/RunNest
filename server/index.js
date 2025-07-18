const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=3000;
const app=express();
const UserROute=require('./Routes/UserRoute.js');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('uploads'));
app.use(express.json());

//external routes

app.use('/api/user', UserROute);







app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    text-align: center;
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Welcome to the Backend Server</h1>
                <p>This is a dummy HTML response from the <code>/</code> route.</p>
            </div>
        </body>
        </html>
    `);
});





app.listen(port,(err)=>{
    if(err){
        console.log("Error starting server:", err);
    }else{
        console.log(`Server is running on port ${port}`);
    }
})