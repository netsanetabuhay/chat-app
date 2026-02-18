import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Message routes
import messageRoutes from './routes/message.route.js';

app.use('/api/message', messageRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server is running 123 on http://localhost:${PORT}`);
});