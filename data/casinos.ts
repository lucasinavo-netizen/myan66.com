export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  bonusAmount: string;
  features: string[];
  paymentMethods: string[];
  minDeposit: string;
  withdrawalSpeed: string;
  url: string;
  badge?: 'top' | 'new' | 'fast';
  pros: string[];
  cons: string[];
  established: number;
  license: string;
}

export const casinos: Casino[] = [
  {
    id: 'b8my',
    name: 'B8.my',
    logo: '/images/b8my.png',
    rating: 4.9,
    bonus: '150% Welcome Bonus',
    bonusAmount: 'Up to 500,000 MMK',
    features: ['Live Casino', 'Sports Betting', 'Slots', 'Mobile App'],
    paymentMethods: ['KBZPay', 'Wave Money', 'AYA Bank', 'KBZ Bank'],
    minDeposit: '5,000 MMK',
    withdrawalSpeed: '1-3 hours',
    url: '#',
    badge: 'top',
    pros: ['Fast withdrawals', 'Great welcome bonus', 'Myanmar language support'],
    cons: ['Limited crypto options'],
    established: 2020,
    license: 'PAGCOR',
  },
  {
    id: 'myan99',
    name: 'Myan99',
    logo: '/images/myan99.png',
    rating: 4.8,
    bonus: '100% First Deposit Bonus',
    bonusAmount: 'Up to 300,000 MMK',
    features: ['Live Casino', 'Slots', 'Lottery', 'Mobile Friendly'],
    paymentMethods: ['KBZPay', 'Wave Money', 'CB Pay', 'USDT'],
    minDeposit: '3,000 MMK',
    withdrawalSpeed: '30 min - 2 hours',
    url: '#',
    badge: 'fast',
    pros: ['Very fast payouts', 'Low minimum deposit', 'Lottery games'],
    cons: ['No dedicated mobile app'],
    established: 2021,
    license: 'Curaçao eGaming',
  },
  {
    id: 'myan88',
    name: 'Myan88',
    logo: '/images/myan88.png',
    rating: 4.7,
    bonus: '120% Welcome + Free Spins',
    bonusAmount: 'Up to 400,000 MMK',
    features: ['Live Casino', 'Sports', 'Slots', 'Esports'],
    paymentMethods: ['KBZPay', 'Wave Money', 'AYA Bank', 'Binance'],
    minDeposit: '5,000 MMK',
    withdrawalSpeed: '1-4 hours',
    url: '#',
    badge: 'new',
    pros: ['Esports betting', 'Crypto support', 'Free spins'],
    cons: ['Higher wagering requirements'],
    established: 2022,
    license: 'MGA',
  },
  {
    id: 'burma777',
    name: 'Burma777',
    logo: '/images/burma777.png',
    rating: 4.6,
    bonus: '100% Welcome Bonus',
    bonusAmount: 'Up to 250,000 MMK',
    features: ['Live Casino', 'Slots', 'Sports Betting'],
    paymentMethods: ['KBZPay', 'Wave Money', 'AYA Bank'],
    minDeposit: '5,000 MMK',
    withdrawalSpeed: '2-6 hours',
    url: '#',
    pros: ['Trusted brand', 'Good customer support', 'Wide game selection'],
    cons: ['Slower withdrawals', 'Limited payment methods'],
    established: 2019,
    license: 'PAGCOR',
  },
  {
    id: 'myan98',
    name: 'Myan98',
    logo: '/images/myan98.png',
    rating: 4.5,
    bonus: '80% Reload Bonus',
    bonusAmount: 'Up to 200,000 MMK',
    features: ['Live Casino', 'Slots', 'Mobile App'],
    paymentMethods: ['KBZPay', 'CB Pay', 'KBZ Bank'],
    minDeposit: '2,000 MMK',
    withdrawalSpeed: '1-3 hours',
    url: '#',
    pros: ['Very low minimum deposit', 'Mobile app available', 'Daily promotions'],
    cons: ['Smaller bonus amounts'],
    established: 2021,
    license: 'Curaçao eGaming',
  },
  {
    id: 'inle99',
    name: 'Inle99',
    logo: '/images/inle99.png',
    rating: 4.4,
    bonus: '100% + Cashback 10%',
    bonusAmount: 'Up to 300,000 MMK',
    features: ['Live Casino', 'Sports', 'Slots', 'Lottery'],
    paymentMethods: ['KBZPay', 'Wave Money', 'USDT'],
    minDeposit: '5,000 MMK',
    withdrawalSpeed: '2-4 hours',
    url: '#',
    pros: ['Weekly cashback', 'Lottery games', 'Crypto accepted'],
    cons: ['Interface could be improved'],
    established: 2020,
    license: 'Curaçao eGaming',
  },
];

export const getCasinoById = (id: string) => casinos.find(c => c.id === id);
export const getTopCasinos = (limit = 5) => casinos.slice(0, limit);
export const getFastWithdrawalCasinos = () =>
  casinos.filter(c => c.withdrawalSpeed.includes('30 min') || c.withdrawalSpeed.includes('1-'));
