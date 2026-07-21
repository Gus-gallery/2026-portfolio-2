import { X } from 'lucide-react'
import ProjectPictures from './ProjectPictures'

const Projects = ({ redIsOpen, onClose }) => {
  return (
    <div
      className={`fixed bottom-0 left-5 right-5 md:left-40 h-84 w-88 md:w-lg md:h-98  overflow-scroll bg-[#954d4d] text-primary rounded-t-md shadow-lg transition-all duration-400 ease-in-out ${
        redIsOpen
          ? 'translate-y-0 pointer-events-auto visible'
          : 'translate-y-full pointer-events-none invisible'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
        <h1 className="text-md md:text-xl font-semibold">Projects</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
      </div>

      <div className="p-4 flex flex-col items-left justify-left text-primary-2">
          <ProjectPictures />
      </div>
      <div onClick={onClose} className="p-4 text-center bg-black/50 text-primary-2 cursor-pointer hover:font-bold hover:bg-black/60 transition-all duration-200 ease-in-out">
        <p className="underline">Close</p>
      </div>
    </div>
  )
}

export default Projects