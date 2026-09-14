const express = require('express')

const app = express()

const PORT = 5000


app.use(express.json())


const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

app.use(requestLogger)


app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Student Management API'
  })
})


app.get('/api/students', (req, res) => {
  const students = [
    {
      id: 1,
      name: 'Aditya Parmar',
      course: 'M.Sc. CA & IT'
    },
    {
      id: 2,
      name: 'Pranjal Patel',
      course: 'BCA'
    },
    {
      id: 3,
      name: 'Jay Patel',
      course: 'MCA'
    }
  ]

  res.json(students)
})


app.get('/api/students/:id', (req, res) => {
  const studentId = req.params.id

  res.json({
    message: 'Student requested successfully',
    studentId: studentId
  })
})


app.post('/api/students', (req, res) => {
  const student = req.body

  res.status(201).json({
    message: 'Student added successfully',
    student: student
  })
})


app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  })
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})