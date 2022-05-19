import React from 'react';
import upChart from '../../images/charts/up.svg';
import downChart from '../../images/charts/down.svg';
export default function coinRow({ image, coinName, coinPrice, coinUpTrend }) {
  return (
    <div className="grid grid-cols-3 py-2 mb-2 border-b border-lightgray last:border-none">
      <div className="flex items-center">
        <img src={image} className="inline h-[1em] mr-2 " draggable="false" />
        {coinName}
      </div>
      <div className="flex items-center">
        {coinUpTrend ? <span className="mr-1 text-green">+</span> : <span className="mr-1 text-red">-</span>}
        {coinPrice}
      </div>
      <div className="">
        <img src={coinPrice ? upChart : downChart} alt="" />
      </div>
    </div>
  );
}
