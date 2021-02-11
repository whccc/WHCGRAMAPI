import express from 'express';
import cors from 'cors';
import Routers = require('./Routes');
const ConnectionDB = require('./ConectionBD/MongoDB.ts');
const app = express();
//
app.use(express.json({ limit: '10mb' }));
app.use(cors());

//ROTES
app.use('/api', Routers);
//DB
ConnectionDB();
//SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log('Server run for the port 5000');
});
