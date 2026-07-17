const Contact = ({ isOpen }) => {
  return (
    <div
      className={`absolute right-8 bottom-0 h-60 w-44 md:h-80 md:w-60 bg-square-green text-primary rounded-t-md shadow-lg shadow-square-green/50 transition-all hover:saturate-300 duration-400 ease-in-out ${
        isOpen
          ? 'translate-y-0 pointer-events-auto'
          : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="p-4 flex flex-col items-left justify-left h-full w-full">
        <h1 className="text-md md:text-xl font-light">Contact</h1>
      </div>
    </div>
  )
}

export default Contact