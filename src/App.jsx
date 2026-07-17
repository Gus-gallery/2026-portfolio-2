
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
        <h1 className="text-3xl font-light">Gustav Campbell Werdelin</h1>
        <h2 className="text-lg font-light text-gray-400">Stud.Cand.it at IT University of Copenhagen</h2>
          <div className="flex flex-row items-center justify-center mt-4 gap-4">
            <button className="bg-red-900 text-white w-40 h-12 font-light text-md px-4 py-2 rounded-sm">
              Projects
            </button>
            <button className="bg-blue-900 text-white w-40 h-12 font-light text-md px-4 py-2 rounded-sm">
              Experience
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-4 gap-4">
            <button className="bg-yellow-900 text-white w-40 h-12 font-light text-md px-4 py-2 rounded-sm">
              Education
            </button>
            <button className="bg-green-900 text-white w-40 h-12 font-light text-md px-4 py-2 rounded-sm">
              Contact
            </button>
          </div>
        </div>
    </>
  )
}

export default App
