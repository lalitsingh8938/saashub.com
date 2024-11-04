// import React from "react";
// import { LuMoveRight } from "react-icons/lu";

// function Register() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className=" bg-slate-100 border mt-10 mb-10 rounded-md items-center w-[780px] h-[640px]">
//         <h2 className="text-2xl text-center font-extrabold p-8 text-slate-700">
//           Register
//         </h2>
//         <form>
//           <div className="">
//             <div className="ml-28">
//               <label className="font-semibold text-slate-900" htmlFor="Email">
//                 Email
//               </label>
//               <input
//                 className="ml-7 w-[533px] h-9 border rounded-md"
//                 type="text"
//                 id="Email"
//                 name="Email"
//               />
//             </div>
//             <div className="ml-20 mt-3">
//               <label
//                 className="font-semibold text-slate-900"
//                 htmlFor="Username"
//               >
//                 Username
//               </label>
//               <input
//                 className="ml-7 w-[533px] h-9 border rounded-md"
//                 type="text"
//                 id="Username"
//                 name="Usename"
//               />
//               <p className="ml-24 text-xs font-thin mt-1 ">
//                 You can use only letters, digits and dashes{" "}
//               </p>
//             </div>
//             <div className="ml-20 mt-10">
//               <label
//                 className="font-semibold text-slate-900"
//                 htmlFor="Passsword"
//               >
//                 Password
//               </label>
//               <input
//                 className="ml-8 w-[533px] h-9 border rounded-md"
//                 type="text"
//                 id="Password"
//                 name="Password"
//               />
//               <p className="ml-24 text-xs font-thin mt-1 ">
//                 Please use a secure password that includes:
//               </p>
//               <p className="ml-24 text-xs font-bold mt-1 text-slate-900 ">
//                 letters, digits and special symbols
//               </p>
//             </div>

//             <div className="ml-8 mt-4">
//               <label
//                 className="font-semibold text-slate-900 ml-4"
//                 htmlFor="Confirmation"
//               >
//                 Confirmation
//               </label>
//               <input
//                 className=" ml-8 w-[533px] h-9 border rounded-md"
//                 type="text"
//                 id="Confirmation"
//                 name="Confirmation"
//               />
//             </div>
//             <div className="p-6">
//               <p className="ml-40 text-slate-600">
//                 Send me the SaasHub Weekly report
//               </p>
//               <p className="ml-40 mt-3 font-normal text-sm opacity-75 text-black">
//                 By clicking 'Register' you agree with the terms of service
//               </p>
//             </div>

//             <div className="mt-0">
//               <button
//                 className="w-20 h-9 ml-[185px] bg-green-500 cursor-pointer text-white font-thin rounded-sm text-md "
//                 type="button"
//               >
//                 Register
//               </button>
//             </div>
//             <div className="mb-5 mt-8 ml-[610px] flex justify-center">
//               <button className="text-md font-normal text-blue-500 flex items-center">
//                 Login
//                 <LuMoveRight className="ml-1 mt-1" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

//  export default Register;














import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate


function Register() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: "", // Default to Male
    password: "",
    confirm_password: "",
    country_code: "IN", // Default country code
    dial_code: "+91", // Default dial code
    country: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const options = [
    { label: "-----", value: "" },
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
    { label: "Others", value: "O" },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    const usernamePattern = /^[a-z0-9]{6,}$/;
    if (!usernamePattern.test(formData.username)) {
      alert("Username must be at least 6 characters long and can include only lowercase letters and numbers.");
      return;
    }

    try {
      const response = await axios.post(
        "http://142.93.100.226:8000/api/register/",
        {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          phone_number: formData.phone_number,
          date_of_birth: formData.date_of_birth,  // YYYY-MM-DD format
          gender: formData.gender,
          password: formData.password,
          confirm_password: formData.confirm_password,
          country_code: formData.country_code,
          dial_code: formData.dial_code,
          country: formData.country,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        const data = response.data
        const access_token = data.access
        // console.log(access_token)
        localStorage.setItem('acc_token', access_token);
        // const some = localStorage.getItem('acc_token')
        // console.log(some);
        
        alert("Registration successful!");

         // Navigate to OTP authentication page after successful registration
         navigate("/OTP_authentication"); // Redirect to OTP authentication page

         // Reset form data
         setFormData({
          name: "",
          username: "",
          email: "",
          phone_number: "",
          date_of_birth: "",
          gender: "",
          password: "",
          confirm_password: "",
          country_code: "IN",
          dial_code: "+91",
          country: "",
        });

        setErrorMessage(""); // Clear any error messages
        
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setErrorMessage(`Registration failed: ${JSON.stringify(error.response?.data || error.message)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center mt-20 items-center h-screen">
        <div className="bg-slate-100 border mt-10 mb-28 rounded-md items-center w-[780px] h-[750px]">
          <h2 className="text-2xl text-center font-extrabold p-8 text-slate-700">
            Register
          </h2>

          {/* Name */}
          <div className="ml-28">
            <label className="font-semibold text-slate-900" htmlFor="name">
              Name
            </label>
            <input
              className="ml-6 w-[533px] h-9 border rounded-md"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="ml-20 mt-3">
            <label className="font-semibold text-slate-900" htmlFor="username">
              Username
            </label>
            <input
              className="ml-7 w-[533px] h-9 border rounded-md"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="ml-28 mt-3">
            <label className="font-semibold text-slate-900" htmlFor="email">
              Email
            </label>
            <input
              className="ml-8 w-[533px] h-9 border rounded-md"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="ml-11 mt-3">
            <label className="font-semibold text-slate-900" htmlFor="phone_number">
              Phone number
            </label>
            <input
              className="ml-8 w-[533px] h-9 border rounded-md"
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          {/* Date of Birth */}
          <div className="ml-14 mt-3">
            <label className="font-semibold text-slate-900" htmlFor="date_of_birth">
              Date of birth
            </label>
            <input
              className="ml-9 w-[533px] h-9 border rounded-md"
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="ml-24 mt-3">
            <label className="font-semibold text-slate-900" htmlFor="gender">
              Gender
            </label>
            <select
              className="ml-9 w-[533px] h-9 border rounded-md"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div className="ml-16 mt-4">
            <label className="font-semibold text-slate-900 ml-4" htmlFor="password">
              Password
            </label>
            <input
              className="ml-9 w-[533px] h-9 border rounded-md"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div className="ml-4 mt-4">
            <label className="font-semibold text-slate-900" htmlFor="confirm_password">
              Confirm password
            </label>
            <input
              className="ml-10 w-[533px] h-9 border rounded-md"
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>

          {/* Country Code */}
          <div className="ml-12 mt-4">
            <label className="font-semibold text-slate-900" htmlFor="country_code">
              Country code
            </label>
            <input
              className="ml-11 w-[533px] h-9 border rounded-md"
              type="text"
              id="country_code"
              name="country_code"
              value={formData.country_code}
              onChange={handleChange}
            />
          </div>

          {/* Dial Code */}
          <div className="ml-20 mt-4">
            <label className="font-semibold text-slate-900" htmlFor="dial_code">
              Dial code
            </label>
            <input
              className="ml-11 w-[533px] h-9 border rounded-md"
              type="text"
              id="dial_code"
              name="dial_code"
              value={formData.dial_code}
              onChange={handleChange}
            />
          </div>

          {/* Country */}
          <div className="ml-20 mt-4 mb-10">
            <label className="font-semibold text-slate-900" htmlFor="country">
              Country
            </label>
            <input
              className="ml-14 w-[533px] h-9 border rounded-md"
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-0">
            <button
              className="w-[70px] h-9 ml-[656px] bg-sky-700 opacity-85 cursor-pointer text-white font-medium rounded-md text-md"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="text-red-500 text-center mt-4">{errorMessage}</div>
      )}
    </form>
  );
}

export default Register;













