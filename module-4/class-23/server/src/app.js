const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB } = require('./config/database');
const { Blog } = require('./model/blogs');
app.use(cors());
app.use(express.json())


app.get('/blogs', async (req, res) => {
    try {
           const blog = await Blog.find();
            res.json(blog)
    } catch (error) {
     res.status(400).json({message: error.message})
    }
})

app.get('/blogs/:id', async (req, res) => {
     try {
          const {id} = req.params;    

          const blog = await Blog.findById(id);

          if(!blog){
                return res.status(404).json({message: 'Blog not found'})
          }

          res.json(blog);
     } catch (error) {
          res.status(400).json({message: error.message});
     }
});

app.post('/blogs', async (req, res) => {
     try {
          const {title, content, author}  = req.body;

          console.log("DATA RECEIVED FROM CLIENT ", {title, content, author});

          if(!title || !content || !author){
                return  res.status(400).json({message: 'All fields are required: title, content, author'});
          }

          const newBlog = {
                title,
                content,
                author,
                createdAt: new Date()
          };

          const blog = await Blog.create(newBlog);
          res.status(201).json(blog);

     } catch (error) {
          res.status(400).json({message: error.message});
     }
})

app.put('/blogs/:id', async (req, res) => {
     try {
          const {id} = req.params;

          const {title, content, author} = req.body;

          const blog = await Blog.findById(id);

          if(!blog){
                return res.status(404).json({message: 'Blog not found'});
          }

          const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, author }, { new: true });

          res.json({
                message: 'Blog updated successfully',
                blog: updatedBlog
          });
     } catch (error) {
          res.status(400).json({message: error.message});
     }
})

app.delete('/blogs/:id', async (req, res) => {
     try {
        const {id} = req.params;

       const blog = await Blog.findByIdAndDelete(id);

          res.json({message: 'Blog deleted successfully', blog});
     } catch (error) {
          res.status(400).json({message: error.message});
     }
})

connectDB().then(() => {
    console.log('Database connected');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}).catch((error) => {
    console.log('Database connection error:', error)
});
