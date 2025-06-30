import express from 'express';

const PORT = 3001;
const app = express();


// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
