import express from 'express';
import { sampleController } from './controllers/sampleController';

const app = express();
const port = 3000;

app.use('/sample', sampleController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
