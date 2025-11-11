import express from 'express';
import AppError from './utils/appError.js';
import authRoutes from './routes/auth.route.js';


const app = express();
const routesPrefix = '/api/v1';


// middleware
app.use(express.json()); // for the parsing application/json


// --------------  global error handling middleware: -------
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})




// ------------------  App Routes  ----------------------
app.use(`${routesPrefix}/auth`, authRoutes)
app.get('/', (req, res) => {
    res.status(200).send('API is running...');
});



// ----------------- Catch all unknow routes ------------
app.use( (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} this page`, 404))
})




export default app;