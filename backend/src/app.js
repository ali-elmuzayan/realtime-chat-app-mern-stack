import express from 'express';


const app = express();


// middleware 
app.use(express.json()); // for the parsing application/json


// global error handling middleware: 
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500; 
    err.status = err.status || "error"; 

    return res.status(err.statusCode).json({
        status: err.status, 
        message: err.message
    })
})



app.get('/', (req, res) => {
    res.status(200).send('API is running...');
});




export default app;