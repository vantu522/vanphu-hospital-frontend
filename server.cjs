const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Nếu build ra dist/renderer thì để như dưới.
// Nếu index.html nằm ở dist/ thì đổi lại cho khớp.
const distPath = path.join(__dirname, 'dist', 'renderer');

app.use(express.static(distPath));

// SPA fallback cho mọi route còn lại
app.get('/*', (_, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
  // hoặc: res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log('[web] started on port', port);
});
