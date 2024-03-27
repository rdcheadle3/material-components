const cors = require('cors');
const express = require('express');
const productRoutes = require('./routes/products'); 

const app = express();
const port = 3001;

app.use(cors());

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});