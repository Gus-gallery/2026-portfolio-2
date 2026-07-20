import { X } from 'lucide-react'

const Projects = ({ redIsOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-4 md:left-16 h-100 w-88 md:w-120 md:h-95  overflow-scroll bg-square-red saturate-300 text-primary rounded-b-md shadow-lg transition-all duration-400 ease-in-out ${
        redIsOpen
          ? 'translate-y-0 pointer-events-auto visible'
          : '-translate-y-full pointer-events-none invisible'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
        <h1 className="text-md md:text-xl font-semibold">Projects</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
      </div>

      <div className="p-4 flex flex-col items-left justify-left text-primary-2">
          <h2 className="text-sm md:text-md text-primary font-medium">
            Retshjælpen Rusk
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Developed website for Retshjælpen Rusk, a non-profit organization that helps people with legal issues. 2026.
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Minor Gallery
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Co-founder and co-owner of Minor Gallery, an art gallery in Nørrebro, Copenhagen. 2023-2025.          
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Hermés
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Assistant working for the designer at Hermés in Amsterdam 2020 and Barcelona 2022.
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            gw.læder
          </h2>
          <p className="text-sm md:text-md font-light">
            Created my own leather goods brand, which makes bespoke & made to order goods. Created in 2020.
          </p>
      </div>
    </div>
  )
}

export default Projects