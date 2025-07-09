import { Modal } from "./components/Modal"
import React, { useState } from "react";


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-10 gap-5">
          <h1 className="text-3xl font-bold text-blue-600">Hello, Let's build a React component for a pop-up modal!</h1>
          <button onClick={()=> setShowModal(true)} className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
            Say Hello
          </button>

          {showModal && <Modal onClose={()=>setShowModal(false)} />}

      </div>
    </>
  )
}

export default App
