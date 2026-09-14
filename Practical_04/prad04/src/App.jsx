import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <span className="badge">HOME</span>

      <h1>Explore Incredible India</h1>

      <p>
        Discover famous monuments, beautiful regions and the rich cultural
        heritage of India using this React single-page application.
      </p>

      <p className="prepared-by">Prepared by Aditya</p>

      <div className="info-strip">
        <span>🏛️ Monuments</span>
        <span>🗺️ Regions</span>
        <span>🇮🇳 Culture</span>
      </div>
    </div>
  )
}

function Monuments() {
  const monumentsList = [
    {
      name: 'Red Fort',
      state: 'Delhi',
      year: '1639'
    },
    {
      name: 'Qutub Minar',
      state: 'Delhi',
      year: '1193'
    },
    {
      name: 'Konark Sun Temple',
      state: 'Odisha',
      year: '1250'
    }
  ]

  return (
    <div className="page">
      <span className="badge">MONUMENTS</span>

      <h1>Indian Heritage Monuments</h1>

      <div className="card-container">
        {monumentsList.map((item) => (
          <div className="card" key={item.name}>
            <h3>{item.name}</h3>

            <p>State: {item.state}</p>

            <small>Built: {item.year}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

function Regions() {
  return (
    <div className="page">
      <span className="badge">REGIONS</span>

      <h1>Explore Indian Regions</h1>

      <div className="card-container">

        <div className="card">
          <h3>Gujarat</h3>
          <p>
            Famous for heritage sites, handicrafts and diverse traditions.
          </p>
        </div>

        <div className="card">
          <h3>Kerala</h3>
          <p>
            Known for backwaters, temples and beautiful natural landscapes.
          </p>
        </div>

        <div className="card">
          <h3>Rajasthan</h3>
          <p>
            Famous for royal forts, palaces and colourful cultural heritage.
          </p>
        </div>

      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <span className="badge">ABOUT</span>

      <h1>About This Application</h1>

      <p>
        This single-page application is created using React Router.
        BrowserRouter provides routing, while Routes and Route display
        different pages without refreshing the browser.
      </p>

      <p>
        NavLink is used for navigation and highlights the currently selected
        page.
      </p>

      <p className="prepared-by">Prepared by Aditya</p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <h2>India Heritage Explorer</h2>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/monuments">Monuments</NavLink>
            <NavLink to="/regions">Regions</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monuments" element={<Monuments />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App