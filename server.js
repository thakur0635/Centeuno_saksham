import express from 'express';
import productRoutes from './product.route.js';

const app = express();
app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use('/api', productRoutes);
app.use((err, req, res, next) => {
    res.status(err.statusCode).json({
        success: false,
        error: err.message,
        statusCode: err.statusCode
    });
});

app.get('/', (req, res) => {
    res.send('Server up and running!');
});

app.listen(3000, () => {
    console.log(`listening on http://localhost:3000`);
});

