import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Binding to 0.0.0.0 allows local connections and container deployment compatibility

app.listen(PORT, HOST, () => {
  console.log(`===========================================`);
  console.log(`🚀 Library Management Backend Listening`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`Books Endpoint: http://localhost:${PORT}/api/books`);
  console.log(`===========================================`);
});
