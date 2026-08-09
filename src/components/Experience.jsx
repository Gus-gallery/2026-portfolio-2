import { X } from 'lucide-react'

const Experience = ({ blueIsOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 bottom-12 md:bottom-28 h-100 w-72 md:w-102 md:h-86 bg-square-blue saturate-300 text-primary rounded-r-md shadow-lg transition-all duration-400 ease-in-out ${
        blueIsOpen
          ? 'translate-x-0 pointer-events-auto visible'
          : '-translate-x-full pointer-events-none invisible'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
        <h1 className="text-md md:text-xl font-semibold">Experience</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
      </div>

      <div className="p-4 flex flex-col items-left justify-left text-primary-2">
          <h2 className="text-sm md:text-md text-primary font-medium">
            Website Development (2026)
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Freelance website development. 
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Minor Gallery (2023-2025)
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Co-founder and co-owner of Minor Gallery, an art gallery in Nørrebro, Copenhagen.          
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Hermés (2020 and 2022)
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Assistant working for the designer at Hermés.
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            gw.læder (2020-2023)
          </h2>
          <p className="text-sm md:text-md font-light">
            Created my own leather goods brand, which makes bespoke & made to order leather products.
          </p>
      </div>
    </div>
  )
}

export default Experience