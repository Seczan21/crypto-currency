import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import creditCard from '../../images/illustrations/credit-card.png';
import SecondaryButton from '../buttons/SecondaryButton';
export default function CreditCardSection() {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-2 ">
        <img src={creditCard} alt="" />
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className="text-blue-gradient">CrewTechno</span> <br /> Credit Card
            </h2>
            <p>
              Subject to cardholder and rewards terms which will be available <br /> at application
            </p>
            <ul className="my-6">
              <li className=" mb-2">
                <BsCheckCircleFill className="text-primary inline mr-3" />
                up to 30% back on purchases
              </li>
              <li className=" mb-2">
                <BsCheckCircleFill className="text-primary inline mr-3" />
                Earn rewards in bitcoin or any crypto on CrewTechno
              </li>
              <li className=" mb-2">
                <BsCheckCircleFill className="text-primary inline mr-3" />
                up to 30% back on purchases
              </li>
            </ul>
            <SecondaryButton className="mt-10">Join the waitlist</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
