import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";

function Footer() {
  return (
    <div className="section">
      <div className="bg-sky-900 text-white p-12">
        {/* Grid Layout for Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}

          <div className="ml-16">
            <h2 className="font-medium">About</h2>
            <p className="text-sm opacity-80 w-[615px] mt-5">
              SaaSHub is an independent software marketplace. Our goal is to be
              objective, simple, and your first stop when researching for a new
              service to help you grow your business. We will help you find
              alternatives and reviews of the products you already use.
            </p>
            <p className="text-sm opacity-80 w-72 mt-4">
              Helping Software professionals since 2014.
            </p>
          </div>

          {/* Sitemap Section */}
          <div className=" ml-[338px]">
            <h2 className=" flex ml-4 font-medium">Sitemap</h2>
            <div className="flex flex-col ml-4 w-36 gap-2 mt-5 cursor-pointer text-blue-300">
              <p>Browse Categories</p>
              <p>Compare Software</p>
              <p>Chrome Extension</p>
              <p>Status Pages!</p>
              <p>Funding News</p>
              <p>Submit List</p>
              <p>Newsletter</p>
            </div>
          </div>

          {/* Big Tech Alternatives Section */}
          <div className="ml-[302px]">
            <h2 className="flex font-medium ml-3 w-44">
              Big Tech Alternatives
            </h2>
            <div className="flex flex-col w-48 ml-3 gap-2 mt-5 cursor-pointer text-blue-300">
              <p>Tech Radar</p>
              <p>Replace Facebook</p>
              <p>Google Alternatives</p>
              <p>Atlassian Alternatives</p>
              <p>Product Graveyard</p>
              <p>Google Graveyard</p>
              <p>Replace Google Domains</p>
            </div>
          </div>
        </div>

        {/* Company Section (Correct Position) */}
        <div className="ml-16 mt-[-80px] flex-wrap">
          <h2 className="font-medium">Company</h2>
          <div className="flex gap-4 cursor-pointer mt-5 text-blue-300">
            <p className="font-bold">Product Promotion</p>
            <p>Contacts</p>
            <p>Discuss</p>
            <p>About</p>
            <p>API</p>
          </div>
        </div>

        {/* Verticals & Popular Categories Section */}
        <div className="ml-16">
          <h2 className="font-medium mt-12">Verticals & Popular Categories</h2>
          <div className="flex gap-2 mt-4 cursor-pointer flex-wrap text-blue-300">
            <p>AI</p>
            <p>No-Code</p>
            <p>Developer Tools</p>
            <p>Design Tools</p>
            <p>API</p>
            <p className="w-full flex cursor-pointer"></p>
            <p>CRM</p>
            <p>Help Desk</p>
            <p>Productivity</p>
            <p>Marketing</p>
            <p>Accounting</p>
            <p>eCommerce</p>
            <p>HR</p>
            <p>Writing Tools</p>
            <p>Project Management</p>
            <p>Monitoring Tools</p>
            <p>Finance</p>
            <p>Education</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex ml-16 gap-2 mt-8">
          <h2 className="font-medium">SaaSHub</h2>
          <h2 className="text-slate-400">|</h2>
          <h2 className="text-blue-300 cursor-pointer ">Privacy Policy</h2>
          <h2 className="text-slate-400">|</h2>
          <h2 className="text-blue-300 cursor-pointer">Terms</h2>
          <h2 className="text-slate-400">|</h2>
          <h2 className="text-white font-thin opacity-90 text-md">
            Accelerated by
          </h2>
          <h2 className="text-orange-500 font-thin cursor-pointer ">
            Bunny.net
          </h2>
        </div>
        <div className="ml-[1310px] items-center">
          <button
            className="w-32 p-1 h-9 flex bg-blue-500 cursor-pointer text-center text-white font-bold rounded-md text-md "
            type="button"
          >
            {" "}
            <BiMessageAltDetail className="items-center h-5 w-8 mt-1" />
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
