const express = require('express')
const cors =  require('cors')

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

const todos = [
    {
        id: 1,
        task: 'Learn JavaScript',
        completed: false
    },
    {
        id: 2,
        task: 'Learn Node.js',
        completed: false
    },
    {
        id: 3,
        task: 'Build a REST API',
        completed: false
    },
    {
        id: 4,
        task: 'Test the API',
        completed: false
    }
]   

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.post('/todos', (req, res) => {
  try {

    const { task } = req.body

    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo', details: error.message })
  }
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
} )