// server.cjs
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

// SPA fallback cho React Router
app.get('*', (_, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log('[web] started on port', port);
});
