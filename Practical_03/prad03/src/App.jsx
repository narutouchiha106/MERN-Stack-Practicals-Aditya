import { useState } from 'react'
import './App.css'

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: '',
    age: ''
  })

  const [students, setStudents] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!student.name.trim()) {
      newErrors.name = 'Student name is required.'
    }

    if (!student.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!student.email.includes('@')) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!student.course) {
      newErrors.course = 'Please select a course.'
    }

    if (!student.age) {
      newErrors.age = 'Age is required.'
    } else if (student.age < 17 || student.age > 40) {
      newErrors.age = 'Age must be between 17 and 40.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) return

    setStudents([
      ...students,
      {
        id: Date.now(),
        ...student
      }
    ])

    setStudent({
      name: '',
      email: '',
      course: '',
      age: ''
    })

    setErrors({})

    alert('Student added successfully!')
  }

  const deleteStudent = (id) => {
    setStudents(students.filter((item) => item.id !== id))
  }

  return (
    <div className="app">

      <header>
        <p className="eyebrow">
          REACT FORMS • CONTROLLED COMPONENTS • VALIDATION
        </p>

        <h1>Student Management System</h1>

        <p>
          Register students using a validated React form.
        </p>

        <p className="prepared-by">
          Prepared by Aditya
        </p>
      </header>

      <div className="layout">

        <section className="form-container">
          <h2>Student Registration</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Student Name</label>

              <input
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="e.g. Aditya Patel"
              />

              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                placeholder="student@example.com"
              />

              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label>Course</label>

              <select
                name="course"
                value={student.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option>B.Sc. CA & IT</option>
                <option>M.Sc. CA & IT</option>
                <option>BCA</option>
                <option>MCA</option>
              </select>

              {errors.course && (
                <p className="error">{errors.course}</p>
              )}
            </div>

            <div className="form-group">
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={student.age}
                onChange={handleChange}
                placeholder="17 - 40"
              />

              {errors.age && (
                <p className="error">{errors.age}</p>
              )}
            </div>

            <button className="add-button">
              Add Student
            </button>

          </form>
        </section>

        <section className="student-list">

          <div className="list-heading">
            <h2>Student List</h2>
            <span>{students.length} registered</span>
          </div>

          {students.length === 0 ? (
            <p className="empty-message">
              No students added yet.
            </p>
          ) : (
            <div className="table-container">

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.name}</td>
                      <td>{s.email}</td>
                      <td>{s.course}</td>
                      <td>{s.age}</td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={() => deleteStudent(s.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          )}

        </section>

      </div>
    </div>
  )
}

export default App