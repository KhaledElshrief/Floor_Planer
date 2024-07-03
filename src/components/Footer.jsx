/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#c29525]">
            Ai-Architect
          </h1>
          <p>AI Architecture: 24 Floor Plans for Modern Houses</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="https://github.com/KhaledElshrief" rel="_blank">
              <FaGithubSquare className="cursor-pointer" size={30} />
            </a>
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className=" font-bold text-xl text-[#fff]">Product</h6>
            <ul>
              <li className="py-2 text-lg text-[#9b9b9b]">Pricing</li>
              <li className="py-2 text-lg text-[#9b9b9b]">About</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Privacy</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Terms of services</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-xl text-[#fff]">Developers</h6>
            <ul>
              <li className="py-2 text-lg text-[#9b9b9b]">Developers Site</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Beta Version</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Contribute</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Work with us</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-xl text-[#fff]">Support</h6>
            <ul>
              <li className="py-2 text-lg text-[#9b9b9b]">Contact Us</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Hosting Guide</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Security</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Forums</li>
            </ul>
          </div>
          <div>
            <h6 className="font-lg text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-lg text-[#9b9b9b]">New York</li>
              <li className="py-2 text-lg text-[#9b9b9b]">USA</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Egypt</li>
              <li className="py-2 text-lg text-[#9b9b9b]">Canada</li>
            </ul>
          </div>
          <a href="#" class="scroll-btn">
            <i class="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
