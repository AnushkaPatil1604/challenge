
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const userId = 'Anushka_Patil_16012004'; 
  const email = 'patil.anushka1604@gmail.com'; 
  const rollNumber = '21BCE11254'; 

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid input data',
    });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const lowercaseAlphabets = alphabets.filter((item) => /^[a-z]$/.test(item));
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? [lowercaseAlphabets.sort().pop()]
    : [];

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

