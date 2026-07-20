import { X } from 'lucide-react'
import ProjectPictures from './ProjectPictures'

const Projects = ({ redIsOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-5 right-5 md:left-16 h-120 w-88 md:w-140 md:h-100  overflow-scroll bg-[#954d4d] text-primary rounded-b-md shadow-lg transition-all duration-400 ease-in-out ${
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
          <ProjectPictures />
      </div>
      <div onClick={onClose} className="p-4 text-right w-full text-primary-2 -mt-4">
        <p className="underline cursor-pointer hover:text-stone-800">Close</p>
      </div>
    </div>
  )
}

export default Projects