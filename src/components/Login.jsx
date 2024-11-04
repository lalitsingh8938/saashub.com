import React, { useState } from "react";
import { RxBox } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://142.93.100.226:8000/api/login/",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Check for successful login
        console.log("Login successful:", response.data);
        alert("Login successful!");

        // Reset form data
        setFormData({
          email: "",
          password: "",
        });

        setErrorMessage(""); // Clear any error messages

        // Navigate to home page (where Navbar is included)
        navigate("/"); // Redirect to the route that includes <Navbar />
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );

      // Handle different error responses
      if (error.response) {
        const errorMessage =
          error.response.data?.message || "Login failed. Please try again.";
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <div
      style={{
        background: `
          radial-gradient(68.44% 68.44% at 11.68% 128.28%, rgba(31, 228, 160, 0.38) 0%, rgba(32, 228, 157, 0) 100%),
          radial-gradient(62.06% 62.06% at 56.94% 1.01%, rgba(33, 159, 248, 0.2) 0%, rgba(30, 159, 252, 0) 100%),
          radial-gradient(25.75% 98.99% at 94.13% 88.82%, rgba(181, 44, 232, 0.2) 0%, rgba(176, 36, 227, 0) 100%),
          linear-gradient(256.1deg, #f8f5f5, #d5ebf9 22.92%, #d5e9f5 38.54%, #fbf9e8 73.96%, #f0eded),
          radial-gradient(112% 112% at 50% -8.08%, #fff 0%, #e4f1fe 100%)`,
      }}
    >
      <div className="flex justify-center items-center h-[540px]">
        <div className="bg-slate-100 border p-3 rounded-md w-[340px] h-[430px]">
          <h2 className="text-2xl text-center font-extrabold p-6 text-slate-700">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="ml-10">
              <label className="font-semibold text-slate-900" htmlFor="email">
                Email
              </label>
              <input
                className="w-60 h-9 mt-1 border rounded-md"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="ml-10 mt-1">
              <label
                className="font-semibold text-slate-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-60 h-9 mt-1 border rounded-md"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <p className="ml-11 mt-3 gap-1 items-center font-normal text-sm flex opacity-65">
              <RxBox className="w-3 h-4" />
              Remember me
            </p>

            {/* Submit Button */}
            <div className="mt-5 ml-1 flex justify-center">
              <button
                className="w-60 h-9 items-center bg-green-500 cursor-pointer text-white font-thin rounded-md text-md"
                type="submit"
              >
                Log in
              </button>
            </div>
            <div className="mt-3 ml-40 flex justify-center">
              <button className="text-thin font-normal text-blue-500 flex items-center"
                onClick={() => navigate("/Register")}>
                <p>Register</p>
                <CgArrowLongRight className="ml-1 mt-1" />
              </button>
            </div>

            <div className="mb-20 ml-[74px] flex justify-center">
              <button className="text-thin font-normal text-blue-500 flex items-center">
                Forgotten Password
                <CgArrowLongRight className="ml-1 mt-1" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="text-red-500 text-center mt-4">{errorMessage}</div>
      )}
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { RxBox } from "react-icons/rx";
// import { CgArrowLongRight } from "react-icons/cg";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.email || !formData.password) {
//       setErrorMessage("Email and password are required.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://142.93.100.226:8000/api/login/",
//         {
//           email: formData.email,
//           password: formData.password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         // Check for successful login
//         console.log("Login successful:", response.data);
//         alert("Login successful!");

//         // Reset form data
//         setFormData({
//           email: "",
//           password: "",
//         });

//         setErrorMessage(""); // Clear any error messages

//         // Navigate to home page (where Navbar is included)
//         navigate("/"); // Redirect to the route that includes <Navbar />
//       }
//     } catch (error) {
//       console.error(
//         "Error during login:",
//         error.response?.data || error.message
//       );

//       // Handle different error responses
//       if (error.response) {
//         const errorMessage =
//           error.response.data?.message || "Login failed. Please try again.";
//         setErrorMessage(errorMessage);
//       } else {
//         setErrorMessage(
//           "An unexpected error occurred. Please try again later."
//         );
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         background: `
//           radial-gradient(68.44% 68.44% at 11.68% 128.28%, rgba(31, 228, 160, 0.38) 0%, rgba(32, 228, 157, 0) 100%),
//           radial-gradient(62.06% 62.06% at 56.94% 1.01%, rgba(33, 159, 248, 0.2) 0%, rgba(30, 159, 252, 0) 100%),
//           radial-gradient(25.75% 98.99% at 94.13% 88.82%, rgba(181, 44, 232, 0.2) 0%, rgba(176, 36, 227, 0) 100%),
//           linear-gradient(256.1deg, #f8f5f5, #d5ebf9 22.92%, #d5e9f5 38.54%, #fbf9e8 73.96%, #f0eded),
//           radial-gradient(112% 112% at 50% -8.08%, #fff 0%, #e4f1fe 100%)`,
//       }}
//     >
//       <div className="flex justify-center items-center h-[540px]">
//         <div className="bg-slate-100 border p-3 rounded-md w-[340px] h-[430px]">
//           <h2 className="text-2xl text-center font-extrabold p-6 text-slate-700">
//             Login
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="ml-10">
//               <label className="font-semibold text-slate-900" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="w-60 h-9 mt-1 border rounded-md"
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="ml-10 mt-1">
//               <label
//                 className="font-semibold text-slate-900"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="w-60 h-9 mt-1 border rounded-md"
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <p className="ml-11 mt-3 gap-1 items-center font-normal text-sm flex opacity-65">
//               <RxBox className="w-3 h-4" />
//               Remember me
//             </p>

//             {/* Submit Button */}
//             <div className="mt-5 ml-1 flex justify-center">
//               <button
//                 className="w-60 h-9 items-center bg-green-500 cursor-pointer text-white font-thin rounded-md text-md"
//                 type="submit"
//               >
//                 Log in
//               </button>
//             </div>
//             <div className="mt-3 ml-40 flex justify-center">
//               <button className="text-thin font-normal text-blue-500 flex items-center">
//                 {/* Register */}
//                 <Link to="/Register"><p>Register</p></Link>
//                 <CgArrowLongRight className="ml-1 mt-1" />
//               </button>
//             </div>

//             <div className="mb-20 ml-[74px] flex justify-center">
//               <button className="text-thin font-normal text-blue-500 flex items-center">
//                 Forgotten Password
//                 <CgArrowLongRight className="ml-1 mt-1" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Error Message */}
//       {errorMessage && (
//         <div className="text-red-500 text-center mt-4">{errorMessage}</div>
//       )}
//     </div>
//   );
// }

// export default Login;
