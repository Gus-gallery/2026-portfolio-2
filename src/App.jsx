import './index.css'
import { useState } from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  const [greenIsOpen, setGreenIsOpen] = useState(false)
  const [redIsOpen, setRedIsOpen] = useState(false)
  const [blueIsOpen, setBlueIsOpen] = useState(false)
  const [yellowIsOpen, setYellowIsOpen] = useState(false)

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl md:text-3xl font-medium">Gustav Campbell Werdelin</h1>
        <h2 className="text-sm md:text-lg font-medium tracking-normal text-gray-400">stud.cand.it at IT University of Copenhagen</h2>
          <div className="flex flex-row items-center justify-center pt-4 gap-4">
            <button onClick={() => setRedIsOpen(!redIsOpen)} className="bg-square-red text-md nav-button">
              Projects
            </button>
            <button onClick={() => setBlueIsOpen(!blueIsOpen)} className="bg-square-blue text-md nav-button">
              Experience
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-4 gap-4">
            <button onClick={() => setGreenIsOpen(!greenIsOpen)} className="bg-square-green text-md nav-button">
              Education
            </button>
            <button onClick={() => setYellowIsOpen(!yellowIsOpen)} className="bg-square-yellow text-md nav-button">
              Contact
            </button>
          </div>

        <div>
          <button onClick={() => {
            setGreenIsOpen(!greenIsOpen)
            setRedIsOpen(!redIsOpen)
            setBlueIsOpen(!blueIsOpen)
            setYellowIsOpen(!yellowIsOpen)
          }} className="fixed bottom-4 right-32 left-32 md:right-92 md:left-92 bg-primary-2/50 md:bg-primary text-primary px-4 py-2 rounded-sm font-light hover:bg-gray-800 transition-colors duration-200 mt-20">
            Toggle All
          </button>
        </div>

        </div>
        <Education className="overflow-hidden" greenIsOpen={greenIsOpen} onClose={() => setGreenIsOpen(false)}/>
        <Experience className="overflow-hidden" blueIsOpen={blueIsOpen} onClose={() => setBlueIsOpen(false)}/>
        <Projects className="overflow-hidden" redIsOpen={redIsOpen} onClose={() => setRedIsOpen(false)}/>
        <Contact className="overflow-hidden" yellowIsOpen={yellowIsOpen} onClose={() => setYellowIsOpen(false)}/>
    </main>
  )
}

export default App
