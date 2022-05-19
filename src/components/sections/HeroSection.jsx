import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Globecrypto from '../../images/illustrations/globe.png';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

export default function HeroSection() {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div className="">
            <p className="text-primary">SIGN UP TODAY!</p>
            <h1 className="text-5xl font-bold leading-normal">The World's</h1>
            <h1 className="text-5xl font-bold leading-normal text-blue-gradient">Fastest Growing</h1>
            <h1 className="text-5xl font-bold leading-normal">Crypto Web App</h1>
            <div className="my-4 mb-8">
              <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, provident.</p>
            </div>
            <div className="flex ">
              <PrimaryButton className="mr-4">Get Started</PrimaryButton>
              <SecondaryButton>
                Download App
                <BsChevronDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Globecrypto} alt="globe" />
        </div>
      </div>
    </section>
  );
}
