import express from 'express';
import connectDB from './config/db.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as quotesRouter } from './routes/quotesRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to DB

// Routes
app.use('/api/users', userRouter);  // User routes
app.use('/api/quotes', quotesRouter);  // Quotes routes

// Simple test route
app.get('/api/hello', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Active on Port ${port}`);
});
