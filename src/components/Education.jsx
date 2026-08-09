import { X } from 'lucide-react'

const Education = ({ greenIsOpen, onClose }) => {
  return (
    <div
      className={`fixed right-0 bottom-8 h-81 w-92 md:w-96 md:h-82 saturate-300 bg-square-green text-primary rounded-l-md shadow-lg transition-all duration-400 ease-in-out ${
        greenIsOpen
          ? 'translate-x-0 pointer-events-auto visible'
          : 'translate-x-full pointer-events-none invisible'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
        <h1 className="text-md md:text-xl font-semibold">Education</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
      </div>

      <div className="p-4 flex flex-col items-left justify-left text-primary-2">
          <h2 className="text-sm md:text-md text-primary font-medium">
            Cand.It Software Design (2026-2028)
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Currently pursuing a Master's degree in Software Design, specializing in technical interaction design, IT University of Copenhagen.
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Digital Design & Communication (2025)
          </h2>
          <p className="text-sm md:text-md font-light mb-4">
            Course in Digital Design with a focus on user experience, University of Copenhagen.
          </p>
          <h2 className="text-sm md:text-md text-primary font-medium">
            Bachelor of Arts in Art History (2022-2025)
          </h2>
          <p className="text-sm md:text-md font-light">
            Specialized in Minimalism, Contemporary Art and post-colonial studies, University of Copenhagen.
          </p>
      </div>
    </div>
  )
}

export default Education