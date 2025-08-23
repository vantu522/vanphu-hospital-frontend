// server.cjs
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Nếu build ra dist/renderer (như log của bạn), dùng đường dẫn này.
// Nếu index.html nằm trực tiếp ở dist/, đổi lại ['dist'].
const distPath = path.join(__dirname, 'dist', 'renderer');

app.use(express.static(distPath));

// SPA fallback cho mọi route còn lại (KHÔNG dùng '*')
app.get(/.*/, (_, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log('[web] started on port', port);
});
