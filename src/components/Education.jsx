import { X } from 'lucide-react'

const Education = ({ greenIsOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 bottom-12 h-85 w-80 md:w-92 md:h-77 saturate-300 bg-square-green text-primary rounded-r-md shadow-lg transition-all duration-400 ease-in-out ${
        greenIsOpen
          ? 'translate-x-0 pointer-events-auto visible'
          : '-translate-x-full pointer-events-none invisible'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
        <h1 className="text-md md:text-xl font-semibold">Education</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
      </div>

      <div className="p-4 flex flex-col items-left justify-left text-primary-2">
          <h2 className="text-sm md:text-md text-primary font-medium">
            Master's degree
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Currently pursuing a Master's degree in Software Design, IT University of Copenhagen (2026-2028)
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Bachelor's degree
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Bachelor's degree in Art history, University of Copenhagen (2022-2025)
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Digital Design
          </h2>
          <p className="text-sm md:text-md font-light">
            Course in Digital Design at University of Copenhagen during my bachelor's degree, (2025)
          </p>
      </div>
    </div>
  )
}

export default Education