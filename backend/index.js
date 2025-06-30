import express from 'express';

const PORT = 3001;
const app = express();
app.get("EVIL ENDPOINT")
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


// im evil and im also editing!