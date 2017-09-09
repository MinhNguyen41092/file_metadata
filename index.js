const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));
app.route('/').get((req, res) => {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send({"size":req.file.size});
});

app.listen(port)
