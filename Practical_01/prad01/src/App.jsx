import './App.css'
import projectVisual from './assets/project-visual.svg'

function MonumentCard({ name, state, builtBy, era }) {
  return (
    <article className="monument-card">
      <span className="tag">HERITAGE</span>
      <h2>{name}</h2>
      <p><strong>Location:</strong> {state}</p>
      <p><strong>Built By:</strong> {builtBy}</p>
      <p><strong>Era:</strong> {era}</p>
    </article>
  )
}

function App() {
  return (
    <div className="app">
      <header className="hero">
        <img className="project-visual" src={projectVisual} alt="Indian heritage illustration" />
        <p className="eyebrow">REACT • JSX • COMPONENTS</p>
        <h1>India's Historic Landmarks</h1>
        <p>Reusable React components displaying famous Indian monuments.</p><p className="prepared-by">Prepared by Aditya</p>
      </header>

      <div className="monument-container">
        <MonumentCard
  name="Red Fort"
  state="Delhi, India"
  builtBy="Shah Jahan"
  era="Mughal Period"
/>

<MonumentCard
  name="Sanchi Stupa"
  state="Sanchi, Madhya Pradesh"
  builtBy="Emperor Ashoka"
  era="Mauryan Period"
/>

<MonumentCard
  name="Konark Sun Temple"
  state="Konark, Odisha"
  builtBy="King Narasimhadeva I"
  era="13th Century"
/>q
      </div>
    </div>
  )
}

export default App
