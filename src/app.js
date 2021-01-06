import express  from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './route/index.js';

// Create an object of the express module
const app = express();

// Invoke an instance of morgan
app.use(morgan('tiny'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', routes);

dotenv.config();
const port = process.env.PORT || 9000;

app.listen(port, () => {
 console.log(`App is running on ${port}`);
});

app.get('/', (req, res) => {
 res.status(200).json({
  status: 200,
  message: 'Welcome To My App'
 });
});

app.all('*', (req, res) => {
 res.status(404).json({
  status: 404,
  message: 'Page Not Found'
 });
});

export default app;

