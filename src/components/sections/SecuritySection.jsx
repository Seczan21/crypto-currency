import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import banks from '../../images/illustrations/banks.png';
import SecondaryButton from '../buttons/SecondaryButton';
export default function SecuritySection() {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-2 ">
        <img src={banks} alt="" />
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-3xl mb-6 leading-normal">Industry-leading security from day one</h2>

            <ul className="my-6">
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-3" />
                  Safety, security and compliance
                </span>

                <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, incidunt!</p>
              </li>
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-3" />
                  Hardware security keys
                </span>

                <p className="text-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ducimus.</p>
              </li>
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-3" />
                  SOC Certifications
                </span>

                <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero.</p>
              </li>
            </ul>
            <SecondaryButton className="mt-10">Join the waitlist</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
