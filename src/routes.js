const routes = require('express').Router();
const uploadConfig = require('./config/upload');
const multer = require('multer');

const upload = multer(uploadConfig);

routes.get('/teste', (req, res) => {
    return res.send(`Olá ${req.query.name}`);
});


const PostController = require('./controllers/PostController');
routes.get('/posts', PostController.index);
routes.post('/post', upload.single('image'), PostController.store);

const LikeController = require('./controllers/LikeController');
routes.post('/post/:id/like', LikeController.store);

module.exports = routes;