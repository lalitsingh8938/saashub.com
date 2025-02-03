import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="items-center rounded-xl">
      {/* Header Section */}
      <header className=" flex p-2 w-full items-center">
        <div className=" ml-10 items-center">
          <div className="items-center ml-32 flex justify-center">
            <img
              src="saashub-logo.png"
              className="w-[160px] h-[35px] cursor-pointer"
              alt="logo"
            ></img>
          </div>
        </div>

        <div className="flex ml-5">
          <input
            className="w-[395px] h-[35px] font-thin text-md opacity-80 rounded-md bg-slate-100"
            type="search"
            placeholder="       Find the best products"
          />
        </div>

        <div className="items-center opacity-50 ml-[-395px]">
          <button className="flex w-5 h-3 opacity-85 items-center rounded-e-lg justify-center bg-slate-100  ">
            <IoSearch className="w-6 text-black h-6" />
          </button>
        </div>

        <div className="items-center opacity-80 ml-[350px]">
          <button className="flex ml-9 opacity-85 items-center rounded-e-lg justify-center bg-slate-100  ">
            <FaRegStar className="w-5 text-black h-5" />
          </button>
        </div>

        <div className="items-center opacity-80 ml-4">
          <button className="flex   opacity-85 items-center rounded-e-lg justify-center  ">
            <FaRegMessage className="w-4 mt-1 text-black h-5" />
          </button>
        </div>

        <div className="ml-4 font-semibold opacity-75 cursor-pointer">
          <p>Community</p>
        </div>

        {/* Add onClick to navigate to the Category page */}
        <div
          className="ml-4 font-semibold opacity-75 cursor-pointer"
          onClick={() => navigate("/Category")}
        >
          <p>Category</p>
        </div>

        <div className="ml-4 font-semibold opacity-75 cursor-pointer">
          <p>About</p>
        </div>

        <div className="ml-5 font-semibold text-primary-alt text-blue-700 cursor-pointer ">
          <p>✨ Get Featured</p>
        </div>

        <div className="ml-3 ">
          <button
            className="w-36 h-10 bg-blue-500 cursor-pointer text-white font-semibold rounded-md text-md "
            type="button"
          >
            Submit a Product
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;










// import React from 'react';
// import { IoSearch } from "react-icons/io5";
// import { FaRegStar } from "react-icons/fa";
// import { FaRegMessage } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return(
//     <div className='items-center rounded-xl'>
//     {/* Header Section */}
//     <header className=' flex p-2 w-full items-center'>
//     <div className=" ml-10 items-center">

//     <div className="items-center ml-32 flex justify-center">

//       <img src='saashub-logo.png' className='w-[160px] h-[35px] cursor-pointer' alt='logo' >
//         </img>
//     </div>

//     </div>

// <div className='flex ml-5'>

// <input className= "w-[395px] h-[35px] font-thin text-md opacity-80 rounded-md bg-slate-100" type='search'placeholder='       Find the best products'
//    />
// </div>

// <div className='items-center opacity-50 ml-[-395px]'>
// <button className='flex w-5 h-3 opacity-85 items-center rounded-e-lg justify-center bg-slate-100  '><IoSearch
// className="w-6 text-black h-6"/></button>
// </div>

// <div className='items-center opacity-80 ml-[350px]'>
// <button className='flex ml-9 opacity-85 items-center rounded-e-lg justify-center bg-slate-100  '><FaRegStar
// className="w-5 text-black h-5"/></button>
// </div>

// <div className='items-center opacity-80 ml-4'>
// <button className='flex   opacity-85 items-center rounded-e-lg justify-center  '><FaRegMessage
// className="w-4 mt-1 text-black h-5"/></button>
// </div>

// <div className='ml-4 font-semibold opacity-75 cursor-pointer'>
// <p>Community</p>
// </div>

// <div className='ml-4 font-semibold opacity-75 cursor-pointer'>
// <Link to="/Category"><p>Categories</p></Link>
// </div>

// <div className='ml-4 font-semibold opacity-75 cursor-pointer'>
// <p>About</p>
// </div>

// <div className='ml-5 font-semibold text-primary-alt text-blue-700 cursor-pointer '>
// <p>✨ Get Featured</p>
// </div>

// <div className='ml-3 '>

// <button className= "w-36 h-10 bg-blue-500 cursor-pointer text-white font-semibold rounded-md text-md " type="button">Submit a Product
//    </button>

// </div>

//     </header>
//     </div>
//   );
// }

// export default Header;
