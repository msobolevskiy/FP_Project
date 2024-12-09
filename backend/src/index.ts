import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle data collection
app.post('/api/collect', (req: Request, res: Response) => {
    console.log('Data received:', req.body);

    // Respond with success
    res.status(200).json({ message: 'Data collected successfully', data: req.body});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});