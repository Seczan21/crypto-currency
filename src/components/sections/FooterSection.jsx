import React from 'react';
import logo from '../../images/logo.svg';
import PrimaryButton from '../buttons/PrimaryButton';
import { BsArrowRight } from 'react-icons/bs';

export default function FooterSection() {
  return (
    <footer>
      <div className="container mx-auto border-y border-lightgray py-6"></div>
      <div className="grid grid-cols-4">
        <div className="flex justify-between p-6 border-r border-lightgray">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Buy Crypto
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Exchange
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Watchlist
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Portfolio
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                NFT
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-center border-r border-lightgray">
          <ul>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Products
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                About Us
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Blog
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Security
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-center border-r border-lightgray">
          <ul>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Help Center
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Contact Us
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                System Status
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Area of Availability
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="text-gray">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6">
          <span className="text-gray">Newsletter</span>
          <p className="text-gray font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <div className="flex gap-4 my-4">
            <input type="email" className="border border-lightgray rounded-xl p-4 outline-none ring focus:border-primary" placeholder="Enter Your Email" />
            <PrimaryButton className="px-6 aspect-square rounded-md">
              <BsArrowRight colors="white" />
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">Copyright 2022 CrewTechno. ALL Rights Reserved</p>
      </div>
    </footer>
  );
}
