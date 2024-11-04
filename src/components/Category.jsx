import React from "react";

function Category() {
  return (
    <section
      style={{
        background: `
          radial-gradient(68.44% 68.44% at 11.68% 128.28%, rgba(31, 228, 160, 0.38) 0%, rgba(32, 228, 157, 0) 100%),
          radial-gradient(62.06% 62.06% at 56.94% 1.01%, rgba(33, 159, 248, 0.2) 0%, rgba(30, 159, 252, 0) 100%),
          radial-gradient(25.75% 98.99% at 94.13% 88.82%, rgba(181, 44, 232, 0.2) 0%, rgba(176, 36, 227, 0) 100%),
          linear-gradient(256.1deg, #f8f5f5, #d5ebf9 22.92%, #d5e9f5 38.54%, #fbf9e8 73.96%, #f0eded),
          radial-gradient(112% 112% at 50% -8.08%, #fff 0%, #e4f1fe 100%)`,
      }}
    >
      <div className="hero-body is-primary p-10 ml-7">
        <div className="container">
          <p className="text-center ml-20 text-slate-700 font-extrabold text-4xl">
            Top Category
          </p>
          <p className="text-center ml-14 font-thin text-slate-700 text-xl mt-1 subtitle">
            Browse SaaSHub's verticals and top categories to find your best
            software options.
          </p>

          <div className="flex  flex-wrap justify-center mt-11 ml-28 gap-2 cursor-pointer">
            <button className="bg-white font-medium text-slate-500 rounded-md w-56 h-12">
              🧠 AI
            </button>
            <button className="bg-white font-medium text-slate-500 rounded-md w-56 h-12">
              ⚙️ No Code
            </button>
            <button className="bg-white font-medium text-slate-500 rounded-md w-56 h-12">
              💻 Developer Tools
            </button>
            <button className="bg-white font-medium text-slate-500 rounded-md w-56 h-12">
              👨‍🎨Design Tools
            </button>
            <button className="bg-white font-medium text-slate-500 rounded-md w-56 h-12">
              💻 API
            </button>
          </div>

          <div className="relative mt-9 ml-28 flex-wrap flex flex-cols-3 md:flex-cols-4 lg:flex-col-6">
            {[
              "CRM",
              "Help Desk",
              "Productivity",
              "Marketing",
              "Accounting",
              "eCommerce",
              "HR",
              "Writing Tools",
              "Project Management",
              "Monitoring Tools",
              "Finance",
              "Education",
            ].map((service, index) => (
              <button
                key={index}
                className="w-[185px] h-8 ml-2 p-3 flex text-slate-500 text-md shadow-white font-semibold bg-white cursor-pointer items-center rounded-md mt-2"
                type="button"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Category;

