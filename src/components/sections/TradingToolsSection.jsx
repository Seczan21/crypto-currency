import React from 'react';
import tradingTools from '../../images/illustrations/tradingtools.png';
import SecondaryButton from '../buttons/SecondaryButton';
export default function TradingToolsSection() {
  return (
    <div className="px-6 ">
      <div className="rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#F4F9FF]  py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2">
            <div className="max-w-lg">
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                Advanced Trading <span className="text-blue-gradient">Tools</span>
              </h2>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Professional Access, Non-stop Availability</h3>
                <p className="text-gray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam molestias, assumenda aut provident ratione.</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">A Range of Powerful Apis</h3>
                <p className="text-gray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam molestias, assumenda aut provident ratione.</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Costumer Support</h3>
                <p className="text-gray ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam molestias, assumenda aut provident ratione.</p>
              </div>
              <SecondaryButton>Get Started</SecondaryButton>
              <button className="py-4 px-10 text-primary underline">Learn More</button>
            </div>
            <img src={tradingTools} alt="" />
          </div>
        </div>
        ;
      </div>
    </div>
  );
}
