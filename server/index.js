const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB (replace 'mongodb://localhost/yourdb' with your MongoDB URI)
// mongoose.connect('mongodb://localhost/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});