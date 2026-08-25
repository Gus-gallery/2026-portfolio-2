import './index.css'
import { useState } from 'react'
import { X, ArrowDown} from 'lucide-react'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  const [greenIsOpen, setGreenIsOpen] = useState(false)
  const [redIsOpen, setRedIsOpen] = useState(false)
  const [blueIsOpen, setBlueIsOpen] = useState(false)
  const [yellowIsOpen, setYellowIsOpen] = useState(false)

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <main>
      <div className={`flex flex-col items-center justify-center min-h-dvh transition-all ease-in-out duration-400 
      ${ blueIsOpen 
      ? 'pb-120 md:pb-80 xl:pb-0'
      : 'pt-0 md:pt-0'}
      ${ greenIsOpen
       ? 'pb-92 md:pb-80 xl:pb-0'
      : 'pt-0 md:pt-0'}
      ${ redIsOpen
       ? 'pb-80 md:pb-80 xl:pb-80'
      : 'pt-0 md:pt-0'}
      ${ yellowIsOpen
       ? 'pb-88 md:pb-0 xl:pb-0'
      : 'pt-0 md:pt-0'}
      `}>
        <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer group flex flex-col items-center transition-all duration-200">
          <div className="flex items-center md:pl-9.5 transition-all duration-200">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-medium">Gustav Campbell Werdelin</h1>
              <h2 className="text-sm md:text-lg font-medium text-gray-400">
                stud.cand.it at IT University of Copenhagen
              </h2>
            </div>

          <button
              className="hidden md:flex p-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              aria-label={isExpanded ? 'hide info' : 'show info'}
            >
              <ArrowDown
                className={`text-gray-300 transition-transform duration-400 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <div
            className={`overflow-hidden cursor-pointer transition-all ease-in-out duration-400 ${
              isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="max-w-72 md:max-w-88 mx-auto mt-1 text-gray-600 text-xs md:text-sm font-regular text-left">
              MSc student in Software Design at IT University of Copenhagen with a
              bachelor's degree in art history. Lover of functionalist
              design and minimalism in art. I specialize in interactive programming
              and full-stack development. Based in Copenhagen, Denmark.
            </p>
          </div>
        </div>
        
        
          
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


        { greenIsOpen && yellowIsOpen && redIsOpen && blueIsOpen && (
          <div>
            <button onClick={() => {
              setGreenIsOpen(!greenIsOpen)
              setRedIsOpen(!redIsOpen)
              setBlueIsOpen(!blueIsOpen)
              setYellowIsOpen(!yellowIsOpen)
            }} className="hidden md:block md:fixed top-61 md:top-4 md:left-4 md:translate-x-0 left-1/2 -translate-x-1/2 w-34 md:items-center justify-center bg-gray-400 text-primary px-4 py-2.5 rounded-sm font-light hover:bg-gray-800 transition-colors duration-200">
              <X className="inline-block" />
            </button>
          </div>
        )}

        </div>
        <Education className="overflow-hidden" greenIsOpen={greenIsOpen} onClose={() => setGreenIsOpen(false)}/>
        <Experience className="overflow-hidden" blueIsOpen={blueIsOpen} onClose={() => setBlueIsOpen(false)}/>
        <Projects className="overflow-hidden" redIsOpen={redIsOpen} onClose={() => setRedIsOpen(false)}/>
        <Contact className="overflow-hidden" yellowIsOpen={yellowIsOpen} onClose={() => setYellowIsOpen(false)}/>
    </main>
  )
}

export default App
