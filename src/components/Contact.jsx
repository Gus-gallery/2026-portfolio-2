import { X } from 'lucide-react'

const Contact = ({ yellowIsOpen, onClose }) => {
  return (
    <div
      className={`fixed right-0 top-68 md:right-8 md:top-0 h-34 w-48 md:h-56 md:w-60 saturate-300 bg-square-yellow text-primary rounded-l-md md:rounded-l-none md:rounded-b-md shadow-lg transition-all duration-400 ease-in-out ${
        yellowIsOpen
          ? 'translate-x-0 md:translate-y-0 pointer-events-auto visible'
          : 'translate-x-full md:translate-x-0 md:-translate-y-full pointer-events-none invisible'
      }`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="p-4 flex flex-row items-start justify-between w-full border-b border-primary-2">
          <h1 className="text-md md:text-xl font-semibold">Contact</h1>
          <X onClick={onClose} className="text-primary hover:cursor-pointer transition-all rounded-full hover:text-stone-800 hover:rotate-90 ease-in-out duration-200 hover:scale-110 md:translate-y-1"/>
        </div>

        <div className="p-4 flex flex-row gap-2 md:gap-4 justify-around items-end text-primary-2 mt-auto">
            <div className="p-1 md:p-0 w-12 h-12 invert brightness-0
            hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer">
              <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
                <img src="/socials/git.png" alt="Github"/>
              </a>
            </div>
            <div className="p-1 md:p-0 w-12 h-12 invert brightness-0
            hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer">
              <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
                <img src="/socials/mail.png" alt="E-mail"/>
              </a>
            </div>    
            <div className="p-1 md:p-0 w-12 h-12 invert brightness-0
            hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer">
              <a href="https://www.linkedin.com/in/gustav-werdelin-677785394/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/link.png" alt="LinkedIn"/>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact