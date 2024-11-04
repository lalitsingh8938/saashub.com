import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="text-xs">
      <div className="w-full">
        {/* Navbar container */}
        <div className="flex flex-col items-center lg:flex-row justify-between bg-blue-600">
          {/* Left section - Title */}
          <div className="lg:ml-44 font-bold text-white text-center lg:text-left lg:mb-0">
            Software Alternatives, Accelerators & Startups
          </div>
          {/* Right section - Buttons */}
          <div className="flex justify-center mr-28 lg:justify-end items-center space-x-3 font-sm text-white cursor-pointer">
           

            {/* Register button */}
            <div
              className="text-white rounded py-1 hover:text-white transition"
              onClick={() => navigate("/Register")}
            >
              Register 
            </div>
            <p>|</p>

            {/* Login button */}
            <div
              className="text-white rounded py-1 hover:text-white transition"
              onClick={() => navigate("/Login")}
            >
             Login
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <section className="text-xs">
//       <div className="w-full">
//         {/* Navbar container */}
//         <div className="flex flex-col items-center lg:flex-row justify-between bg-blue-600">
//           {/* Left section - Title */}
//           <div className="lg:ml-44 font-bold text-white text-center lg:text-left lg:mb-0">
//             Software Alternatives, Accelerators & Startups
//           </div>
//           {/* Right section - Buttons */}
//           <div className="flex justify-center mr-28 lg:justify-end items-center space-x-3 font-sm text-white cursor-pointer">
//             <Link to="/Register"><button className="text-white rounded py-1 hover:text-white transition">Register</button></Link>
//             <button>|</button>

//             <Link to="/login"><button className="text-white rounded py-1 hover:text-white transition">Login</button></Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Navbar;
