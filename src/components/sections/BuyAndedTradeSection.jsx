import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import buyIcon from '../../images/illustrations/buy.png';
import PrimaryButton from '../buttons/PrimaryButton';

export default function BuyAndTradeSection() {
  return (
    <div className="container py-32 mx-auto">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center ">
          <div className="max-w-lg">
            <h2 className="mb-6 text-4xl font-bold leading-normal ">
              Buy & trade on the <br /> original crypto exchange
            </h2>
            <p className="mb-4 text-gray">Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept</p>
            <div className="flex justify-between gap-6 mb-6">
              <div className="flex items-center px-6 py-4 border border-primary rounded-2xl">
                <div className="pr-6 border-r border-primary">
                  <small className="text-primary">Amount</small>
                </div>
                <input type="text" value="5,000" className="text-right outline-none w-full" />
              </div>
              <div className="flex items-center px-6 py-8  border border-primary rounded-2xl">
                <img src="/cryptocurrencies/bitcoin.png" alt="bitcoin" className="inline mr-2" />
                <span className="mr-4">BTC</span>
                <span>
                  <BsChevronDown className="mr-2 inline" />
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-6 mb-6">
              <div className="flex items-center px-6 py-4 border border-primary rounded-2xl">
                <div className="pr-6 border-r border-primary">
                  <small className="text-primary">Amount</small>
                </div>
                <input type="text" value="0,124000" className="text-right outline-none w-full" />
              </div>
              <div className="flex items-center px-6 py-8  border border-primary rounded-2xl">
                <img src="/cryptocurrencies/usd.svg" alt="bitcoin" className="inline mr-2" />
                <span className="mr-4">USD</span>
                <span>
                  <BsChevronDown className="mr-2 inline" />
                </span>
              </div>
            </div>
            <PrimaryButton className="w-full">Buy Now</PrimaryButton>
          </div>
        </div>
        <div>
          <img src={buyIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
