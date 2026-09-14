import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [products, setProducts] = useState([])
  const [loadingMembers, setLoadingMembers] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(true)

  // Fetch API - Get user data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const names = [
          'Aditya Patel',
          'Rahul Mehta',
          'Neha Shah',
          'Yash Desai'
        ]

        const roles = [
          'React Developer',
          'UI/UX Designer',
          'Node.js Developer',
          'Software Tester'
        ]

        const emails = [
          'aditya.dev@outlook.com',
          'rahul.web@outlook.com',
          'neha.design@outlook.com',
          'yash.tech@outlook.com'
        ]

        const members = data
          .slice(0, 4)
          .map((user, index) => ({
            ...user,
            name: names[index],
            role: roles[index],
            email: emails[index]
          }))

        setTeamMembers(members)
        setLoadingMembers(false)
      })
      .catch((error) => {
        console.error('Fetch API error:', error)
        setLoadingMembers(false)
      })
  }, [])

  // Axios - Get product data
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=4')
      .then((response) => {
        const productNames = [
          'Laptop Backpack',
          'Wireless Keyboard',
          'Smartphone Stand',
          'USB-C Hub'
        ]

        const categories = [
          'Accessories',
          'Computer',
          'Mobile',
          'Electronics'
        ]

        const prices = [1299, 1799, 699, 1499]
        const ratings = [4.4, 4.6, 4.3, 4.5]

        const updatedProducts = response.data.products.map(
          (item, index) => ({
            ...item,
            title: productNames[index],
            category: categories[index],
            price: prices[index],
            rating: ratings[index]
          })
        )

        setProducts(updatedProducts)
        setLoadingProducts(false)
      })
      .catch((error) => {
        console.error('Axios error:', error)
        setLoadingProducts(false)
      })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <header>
        <p className="eyebrow">
          REST API • FETCH API • AXIOS
        </p>

        <h1>API Data Explorer</h1>

        <p className="subtitle">
          Retrieve team information using Fetch API and
          product information using Axios.
        </p>

        <p className="prepared-by">
          Prepared by Aditya
        </p>
      </header>

      {/* Team Members Section */}
      <section className="api-section">

        <div className="section-title">
          <h2>Development Team</h2>
          <span>Fetch API</span>
        </div>

        {loadingMembers ? (
          <p className="loading">
            Loading team members...
          </p>
        ) : (
          <div className="card-container">

            {teamMembers.map((member) => (
              <div className="card" key={member.id}>

                <div className="avatar">
                  {member.name.charAt(0)}
                </div>

                <h3>{member.name}</h3>

                <p>
                  <strong>Role:</strong> {member.role}
                </p>

                <p>
                  <strong>Email:</strong> {member.email}
                </p>

              </div>
            ))}

          </div>
        )}

      </section>

      {/* Products Section */}
      <section className="api-section">

        <div className="section-title">
          <h2>Tech Products</h2>
          <span>Axios</span>
        </div>

        {loadingProducts ? (
          <p className="loading">
            Loading products...
          </p>
        ) : (
          <div className="card-container">

            {products.map((item) => (
              <div className="card" key={item.id}>

                <h3>{item.title}</h3>

                <p className="price">
                  ₹{item.price}
                </p>

                <p>
                  <strong>Category:</strong> {item.category}
                </p>

                <p>
                  <strong>Rating:</strong> {item.rating}
                </p>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  )
}

export default App