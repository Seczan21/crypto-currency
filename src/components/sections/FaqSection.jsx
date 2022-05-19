import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import faq from '../../images/illustrations/faq.png';
import SecondaryButton from '../buttons/SecondaryButton';
export default function FaqSection() {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-2 ">
        <img src={faq} alt="" />
        <div className="flex justify-center">
          <div className="">
            <span className=" text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">Frequently asked questions</h2>
            <ul className="my-6">
              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">why should I choose CrewTechno?</div>
                <BsChevronUp />
              </li>
              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">How secure is CrewTechno?</div>
                <BsChevronDown />
              </li>
              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">Do I have to buy a whole Bitcoin?</div>
                <BsChevronDown />
              </li>
              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">How do I actually buy Bitcoin?</div>
                <BsChevronDown />
              </li>
            </ul>
            <SecondaryButton className="mt-10">Join the waitlist</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
