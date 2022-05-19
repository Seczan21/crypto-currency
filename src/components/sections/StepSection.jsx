import React from 'react';
import signupImage from '../../images/illustrations/signup.png';
import walletImage from '../../images/illustrations/wallet.png';
import okayImage from '../../images/illustrations/okay.png';
import arrow from '../../images/arrow.svg';
export default function StepSection() {
  return (
    <div className="px-6 ">
      <div className="rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#F4F9FF]  py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-3xl mb-6 leading-normal">Get Started in just a few minutes</h2>
          <div className="flex justify-center gap-20">
            <div className="text-center relative px-4">
              <div className="relative">
                <img src={signupImage} alt="" className="mb-4 mx-auto" />
                <img src={arrow} alt="" className="absolute -right-1/3 top-1/2" />
              </div>
              <h3 className="font-bold text-2xl">Sign Up</h3>
              <p className="text-gray max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum.</p>
            </div>
            <div className="text-center relative px-4">
              <div className="relative">
                <img src={walletImage} alt="" className="mb-4 mx-auto" />
                <img src={arrow} alt="" className="absolute -right-1/3 top-1/2" />
              </div>

              <h3 className="font-bold text-2xl">Fund</h3>
              <p className="text-gray max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum.</p>
            </div>
            <div className="text-center relative px-4">
              <img src={okayImage} alt="" className="mb-4 mx-auto" />
              <h3 className="text-2xl font-bold">Buy Crypto</h3>
              <p className="text-gray max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum.</p>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
}
