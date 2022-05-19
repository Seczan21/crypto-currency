import React from 'react';
import ListCoin from '../listCoins/index';

const trendingCoins = [
  {
    image: '/cryptocurrencies/bitcoin.png',
    name: 'Bitcoin',
    price: '$43,180.13',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/etherium.png',
    name: 'Etherium',
    price: '$13,122.53',
    uptrend: false,
  },
  {
    image: '/cryptocurrencies/solana.png',
    name: 'Solana',
    price: '$1,31.3',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/doge.png',
    name: 'Dogecoin',
    price: '$159,180.13',
    uptrend: true,
  },
];
const gainerCoins = [
  {
    image: '/cryptocurrencies/pappay.png',
    name: 'Pappay',
    price: '$0,180.13',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/bitcoinasia.png',
    name: 'BitcoinAsia',
    price: '$1,122.53',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/moonrock.png',
    name: 'MoonRock',
    price: '$12,31.3',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/ninjafloki.png',
    name: 'NinjaFloki',
    price: '$200,180.13',
    uptrend: true,
  },
];
const recentlyCoins = [
  {
    image: '/cryptocurrencies/metacraft.png',
    name: 'MetaCraft',
    price: '$22,180.13',
    uptrend: false,
  },
  {
    image: '/cryptocurrencies/frog.png',
    name: 'Frog',
    price: '$0,122.53',
    uptrend: false,
  },
  {
    image: '/cryptocurrencies/muskdoge.png',
    name: 'MuskDoge',
    price: '$12,31.3',
    uptrend: true,
  },
  {
    image: '/cryptocurrencies/2share.png',
    name: '2share',
    price: '$159,180.13',
    uptrend: true,
  },
];

export default function CryptocurrencySection() {
  return (
    <section className="-mt-10">
      <div className="container px-4 py-8 mx-auto bg-white shadow-lg rounded-3xl ">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <ListCoin title="🔥 Trending" data={trendingCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="🚀 Top Gainers" data={gainerCoins} />
          </div>
          <div className="px-4">
            <ListCoin title="💎 Recently Added" data={recentlyCoins} />
          </div>
        </div>
      </div>
    </section>
  );
}
