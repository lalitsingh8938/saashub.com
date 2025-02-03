// import React, { useState, useEffect } from "react";

// const Experts = () => {
//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   useEffect(() => {
//     // Fetch data from both data.json and data2.json
//     Promise.all([
//       fetch("/data.json").then((response) => response.json()),
//       fetch("/data2.json").then((response) => response.json()),
//     ])
//       .then(([dataJson, data2Json]) => {
//         setData(dataJson); // Store data from data.json
//         setData2(data2Json.companies); // Store companies array from data2.json
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//     // Set target date and time for countdown (for example, the next day)
//     const targetTime = new Date("2024-10-17T00:00:00").getTime();

  

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = targetTime - now;

//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ hours, minutes, seconds });

//       // Stop the countdown if the time is up
//       if (difference < 0) {
//         clearInterval(interval);
//         setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Clear interval when component unmounts
//   }, []);

//   return (
//     <div className="section">
   
//       <div className="container relative">    {/* Added relative position */}
//         <div className="flex flex-col lg:flex-row space-x-6 w-96">
//           <main className="flex-1"> 
//             <div className="flex flex-col lg:flex-row mb-2 relative"> {/* Ensure relative positioning */}
//               <div className="flex-1 flex-row mt-6 lg:ml-28">
//                 <p className="text-2xl lg:text-3xl text-slate-700 font-extrabold border-b-2 w-64">
//                   SaasHub Experts
//                 </p>
//                 <div className="mt-1">
//                   <p className="text-lg lg:text-xl opacity-70 font-thin">
//                     The ongoing tournament that rewards the best products.
//                   </p>
//                 </div>

//                 {/* Timer placed absolutely in the top-right */}
//                 <div className="absolute top-0 ml-5 right-0 w-56 h-20 flex items-center border-2  border-black space-x-2 bg-white p-6 mt-7 shadow-md rounded-md">
//                   <div className="text-center">
//                     <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.hours}</p>
//                     <p className="text-sm font-thin">HOURS</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.minutes}</p>
//                     <p className="text-sm font-thin">MINUTES</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.seconds}</p>
//                     <p className="text-sm font-thin">SECONDS</p>
//                   </div>
//                 </div>

//                 {/* Join button */}
//                 <div className="flex items-center font-thin opacity-80 mt-6">
//                   <button className="relative w-full lg:w-56 h-6 text-sm text-white bg-blue-600 rounded-md">
//                     Join us & Select tomorrow's Top 5
//                   </button>

//                   {/* Buttons */}
//                   <div className="flex ml-0 lg:ml-72 text-sm mt-1">
//                     <button className="relative ml-28 lg:w-24 h-6 text-black bg-slate-200 border-2 rounded-md">
//                       Round Details
//                     </button>
//                     <button className="relative ml-3 w-full lg:w-20 h-6 bg-slate-200 text-black border-2 rounded-md">
//                       Learn more
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex ml-0 lg:ml-28">
//               <p className="font-extrabold mt-4 text-xl lg:text-2xl border-b-2 text-slate-700">
//                 Top 15 AI Content Creation Products of Oct 16
//               </p>
//             </div>

//             {/* Cards */}
//             {data.map((item) => (
//               <div key={item.id} className="flex flex-col mt-8 ml-0 lg:ml-28">
//                 <div className="Cards flex items-center">
//                   <img
//                     src={`logo-${item.id}.png`}
//                     className="w-14 h-14 border-2 cursor-pointer"
//                     alt="logo"
//                   />
//                   <div className="flex-1 ml-5 flex items-center">
//                     <h3 className="font-medium text-lg text-slate-700 mr-5">
//                       {item.id}. {item.name}
//                     </h3>
//                     <p className="text-md font-thin opacity-50">
//                       {item.category}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="ml-0 lg:ml-20 font-normal mt-[-10px] text-lg opacity-55">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </main>
//          <div className='container'>
//          <p className=" relatives mt-6  ml-8 font-extrabold text-xl text-slate-800">
//          Featured 
//           </p>

//           <div className=" relative rounded-md ml-8 bg-blue-500 text-white p-5 w-96 h-52 rounded-e-md mt-5 text-center "> 
//             <p className="text-center font-medium text-md "> Trending products & news 
            
//             <p  className="text-center font-medium text-md p-1 ">The FREE weekly report
//             <p className="text-center font-medium text-md p-1">Curated by a human 
//             </p>
//             </p>
//             </p>
//             <div className='flex ml-2 items-center'>
//             <input className= "w-56 h-9 mt-2 text-md bg-slate-50 rounded-md font-md" type='search' placeholder='   Your email'
//             /> 
//               <button className="bg-green-500 mt-2 ml-2 font-medium text-white rounded-md w-24 h-9">
//               Subscribe
//             </button>
//             </div>

//             <p className="font-thin mt-3 text-white"> Join 15,300+ subscribed experts

//             </p>

//           </div>

//            {/* Cards from data2.json */}
//            {data2.map((company, index) => (
//               <div key={index} className="flex flex-col mt-8 ml-0 lg:ml-8">
//                 <div className="Cards flex items-center">
//                   <img
//                     src={company.logo}
//                     className="w-14 h-14 border-2 cursor-pointer"
//                     alt="logo"
//                   />
//                   <div className="flex-1 ml-5 items-center">
//                     <h3 className="font-semibold text-md text-black mr-5">
//                       {index + 1}. {company.name}
//                     </h3>
//                     <p className="text-md font-thin text-black opacity-85">{company.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//          </div>
//         </div>
      
//       </div>
    
    
//     </div>
//   );
// };

// export default Experts;











import React, { useState, useEffect } from "react";

const Experts = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fetch data from both data.json and data2.json
    Promise.all([
      fetch("/data.json").then((response) => response.json()),
      fetch("/data2.json").then((response) => response.json()),
    ])
      .then(([dataJson, data2Json]) => {
        setData(dataJson); // Store data from data.json
        setData2(data2Json.companies); // Store companies array from data2.json
      })
      .catch((error) => console.error("Error fetching data:", error));

    // Set target time for the countdown (next midnight)
    const getNextMidnight = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0); // Set time to midnight (00:00:00)
      return midnight.getTime();
    };

    const targetTime = getNextMidnight();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      // Calculate hours, minutes, and seconds
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });

      // Stop the countdown if the time is up
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="section">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row space-x-6 w-96">
          <main className="flex-1">
            <div className="flex flex-col lg:flex-row mb-2 relative">
              <div className="flex-1 flex-row mt-6 lg:ml-28">
                <p className="text-2xl lg:text-3xl text-slate-700 font-extrabold border-b-2 w-64">
                  SaasHub Experts
                </p>
                <div className="mt-1">
                  <p className="text-lg lg:text-xl opacity-70 font-thin">
                    The ongoing tournament that rewards the best products.
                  </p>
                </div>

                {/* Timer */}
                <div className="absolute top-0 ml-5 right-0 w-56 h-20 flex items-center border-2 border-black space-x-2 bg-white p-6 mt-7 shadow-md rounded-md">
                  <div className="text-center">
                    <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.hours}</p>
                    <p className="text-sm font-thin">HOURS</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.minutes}</p>
                    <p className="text-sm font-thin">MINUTES</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-normal mb-1 text-slate-700">{timeLeft.seconds}</p>
                    <p className="text-sm font-thin">SECONDS</p>
                  </div>
                </div>

                {/* Join button */}
                <div className="flex items-center font-thin opacity-80 mt-6">
                  <button className="relative w-full lg:w-56 h-6 text-sm text-white bg-blue-600 rounded-md">
                    Join us & Select tomorrow's Top 5
                  </button>

                  {/* Buttons */}
                  <div className="flex ml-0 lg:ml-72 text-sm mt-1">
                    <button className="relative ml-28 lg:w-24 h-6 text-black bg-slate-200 border-2 rounded-md">
                      Round Details
                    </button>
                    <button className="relative ml-3 w-full lg:w-20 h-6 bg-slate-200 text-black border-2 rounded-md">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ml-0 lg:ml-28">
              <p className="font-extrabold mt-4 text-xl lg:text-2xl border-b-2 text-slate-700">
                Top 15 AI Content Creation Products of Oct 16
              </p>
            </div>

            {/* Cards */}
            {data.map((item) => (
              <div key={item.id} className="flex flex-col mt-8 ml-0 lg:ml-28">
                <div className="Cards flex items-center">
                  <img
                    src={`logo-${item.id}.png`}
                    className="w-14 h-14 border-2 cursor-pointer"
                    alt="logo"
                  />
                  <div className="flex-1 ml-5 flex items-center">
                    <h3 className="font-medium text-lg text-slate-700 mr-5">
                      {item.id}. {item.name}
                    </h3>
                    <p className="text-md font-thin opacity-50">
                      {item.category}
                    </p>
                  </div>
                </div>
                <p className="ml-0 lg:ml-20 font-normal mt-[-10px] text-lg opacity-55">
                  {item.description}
                </p>
              </div>
            ))}
          </main>
         <div className='container'>
         <p className=" relatives mt-6  ml-8 font-extrabold text-xl text-slate-800">
         Featured 
          </p>

          <div className=" relative rounded-md ml-8 bg-blue-500 text-white p-5 w-96 h-52 rounded-e-md mt-5 text-center "> 
            <p className="text-center font-medium text-md "> Trending products & news 
            
            <p  className="text-center font-medium text-md p-1 ">The FREE weekly report
            <p className="text-center font-medium text-md p-1">Curated by a human 
            </p>
            </p>
            </p>
            <div className='flex ml-2 items-center'>
            <input className= "w-56 h-9 mt-2 text-md text-black bg-slate-50 rounded-md font-md" type='search' placeholder='   Your email'
            /> 
              <button className="bg-green-500 mt-2 ml-2 font-medium text-ehiterounded-md w-24 h-9">
              Subscribe
            </button>
            </div>

            <p className="font-thin mt-3 text-white"> Join 15,300+ subscribed experts

            </p>

          </div>

           {/* Cards from data2.json */}
           {data2.map((company, index) => (
              <div key={index} className="flex flex-col mt-8 ml-0 lg:ml-8">
                <div className="Cards flex items-center">
                  <img
                    src={company.logo}
                    className="w-14 h-14 border-2 cursor-pointer"
                    alt="logo"
                  />
                  <div className="flex-1 ml-5 items-center">
                    <h3 className="font-semibold text-md text-black mr-5">
                      {index + 1}. {company.name}
                    </h3>
                    <p className="text-md font-thin text-black opacity-85">{company.description}</p>
                  </div>
                </div>
              </div>
            ))}
         </div>
        </div>
      
      </div>
    </div>
  );
};

export default Experts;








