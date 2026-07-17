import { X } from 'lucide-react'

const Contact = ({ greenIsOpen, onClose }) => {
  return (
    <div
      className={`absolute right-8 bottom-0 h-60 w-44 md:h-80 md:w-60 saturate-300 md:saturate-100 bg-square-green text-primary rounded-t-md shadow-lg shadow-square-green/50 transition-all hover:saturate-300 duration-400 ease-in-out ${
        greenIsOpen
          ? 'translate-y-0 pointer-events-auto'
          : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="p-4 flex flex-row items-start justify-between w-full">
        <h1 className="text-md md:text-xl font-bold">Contact</h1>
        <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110"/>
      </div>

      <div className="p-4 flex flex-row items-center justify-center gap-2 -mt-4 ">
          <div className="h-8 w-8 md:w-12 md:h-12 justify-around invert brightness-0 items-center
          hover:scale-110 transition-all ease-in-out duration-400 cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/git.png" alt="Github"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-12 md:h-12 justify-around invert brightness-0 items-center
          hover:scale-110 transition-all ease-in-out duration-400 cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/mail.png" alt="E-mail"/>
            </a>
          </div>    
          <div className="h-8 w-8 md:w-12 md:h-12 justify-around invert brightness-0 items-center
          hover:scale-110 transition-all ease-in-out duration-400 cursor-pointer">
            <a href="https://www.linkedin.com/in/gustav-werdelin-677785394/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/link.png" alt="LinkedIn"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-12 md:h-12 justify-around invert brightness-0 items-center
          hover:scale-110 transition-all ease-in-out duration-400 cursor-pointer">
            <a href="https://www.instagram.com/gustavwerdelin/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/insta.png" alt="Instagram"/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Contact