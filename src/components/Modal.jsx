import React from "react";
import { IoClose } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

export const Modal = ({ onClose }) => {

  const modalRef = React.useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
     <div className="flex flex-col items-center justify-center gap-3 text-white">
       <button onClick={onClose} className="place-self-end text-3xl cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
        <IoClose />
      </button>
      <div className="bg-linear-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold">DOWNLOAD FREE EBOOK</h1>
        <p>Want to learn, how to develop MERN Projects like a Pro!</p>
        <form className="flex flex-col gap-3 mt-4">
          <input className="bg-gray-100 text-gray-500 px-3 py-2  rounded-md" type="email" placeholder="enter your email" required/>
          <button className="flex justify-center items-center gap-2 bg-stone-600 rounded-md py-2 text-stone-100 font-semibold cursor-pointer"><FaDownload /> Download eBook</button>
        </form>
      </div>
     </div>
    </div>
  );
};
