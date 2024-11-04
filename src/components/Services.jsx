import React from 'react';

function Services() {
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
      <div className='hero-body is-primary p-10'>
        <div className='container'>
          <p className='text-center ml-20 text-slate-700 font-extrabold text-4xl'>
            Software Alternative, Accelerators & Startups
          </p>
          <p className='text-center font-semibold text-slate-700 text-xl mt-1 subtitle'>
            195,424 products and growing - is yours here?
          </p>
          <div className='relative mt-9 ml-16 flex-wrap flex flex-cols-3 md:flex-cols-4 lg:flex-col-6'>
            {['CRM', 'Help Desk', 'Productivity', 'Marketing', 'Accounting', 'eCommerce', 'HR', 'Writing Tools', 'Project Management', 'Monitoring Tools', 'Finance', 'Education'].map((service, index) => (
              <button
                key={index}
                className='w-[192px] h-9 ml-2 p-3 flex text-slate-500 text-md shadow-white font-semibold bg-white cursor-pointer items-center rounded-md mt-2'
                type='button'
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

export default Services;
