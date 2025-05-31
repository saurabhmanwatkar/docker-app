const express = require('express');
const app = express();
const PORT = process.env.FRONTEND_PORT || 3000;

app.use(express.static(__dirname));

app.get('/api', async (req, res) => {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000/api';
  try {
    const response = await fetch(backendUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect to backend' });
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
