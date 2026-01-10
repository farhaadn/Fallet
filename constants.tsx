
import { Account, AccountType, CurrencyRate, Transaction, TransactionType, Category } from './types';

export const INITIAL_ACCOUNTS: Account[] = [
  { id: '1', name: 'Resalat', type: AccountType.BANK, balance: 67241971.2, currency: 'IRT', color: '#2563eb' },
  { id: '2', name: 'Melat-M', type: AccountType.BANK, balance: 130115.47, currency: 'IRT', color: '#3f3f46' },
  { id: '3', name: 'Cash', type: AccountType.CASH, balance: -46800, currency: 'IRT', color: '#10b981' },
  { id: '4', name: 'Dollar', type: AccountType.CASH, balance: 3420, currency: 'USD', color: '#d97706' },
  { id: '5', name: 'Ether', type: AccountType.CRYPTO, balance: 0.58, currency: 'ETH', color: '#7e22ce' },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { 
    id: 't1', 
    accountId: '1', 
    type: TransactionType.INCOME, 
    category: 'Salary', 
    amount: 1800000, 
    currency: 'IRT', 
    date: '2023-12-21T10:00:00.000Z',
    note: 'December Salary'
  },
  { 
    id: 't2', 
    accountId: '1', 
    type: TransactionType.EXPENSE, 
    category: 'Food & Drink', 
    subCategory: 'Groceries',
    amount: 30000, 
    currency: 'IRT', 
    date: '2023-12-20T18:30:00.000Z' 
  },
];

export const INITIAL_CATEGORIES: Category[] = [
  { 
    id: 'cat1', 
    name: 'Food & Drink', 
    icon: 'Utensils',
    subCategories: [
      { name: 'Groceries', icon: 'ShoppingBag' }, 
      { name: 'Restaurant', icon: 'Utensils' }, 
      { name: 'Coffee', icon: 'Coffee' }
    ] 
  },
  { 
    id: 'cat2', 
    name: 'Transportation', 
    icon: 'Car',
    subCategories: [
      { name: 'Fuel', icon: 'Zap' }, 
      { name: 'Taxi', icon: 'Car' }, 
      { name: 'Public Transport', icon: 'Bus' }
    ] 
  },
  { 
    id: 'cat3', 
    name: 'Shopping', 
    icon: 'ShoppingBag',
    subCategories: [
      { name: 'Clothes', icon: 'Shirt' }, 
      { name: 'Electronics', icon: 'Smartphone' }, 
      { name: 'Gifts', icon: 'Gift' }
    ] 
  },
  { 
    id: 'cat4', 
    name: 'Housing', 
    icon: 'Home',
    subCategories: [
      { name: 'Rent', icon: 'ReceiptText' }, 
      { name: 'Maintenance', icon: 'Scissors' }, 
      { name: 'Energy', icon: 'Zap' }
    ] 
  },
  { 
    id: 'cat5', 
    name: 'Salary', 
    icon: 'TrendingUp',
    subCategories: [
      { name: 'Main Job', icon: 'Briefcase' }, 
      { name: 'Freelance', icon: 'Star' }
    ] 
  },
];

export const CURRENCY_RATES: CurrencyRate[] = [
  { code: 'USD', rateToIRR: 60000, symbol: '$', rateToUSD: 1 },
  { code: 'IRT', rateToIRR: 1, symbol: 'IRT', rateToUSD: 0.000016 },
  { code: 'EUR', rateToIRR: 65000, symbol: '€', rateToUSD: 1.08 },
  { code: 'BTC', rateToIRR: 5700000000, symbol: '₿', rateToUSD: 95000 },
  { code: 'ETH', rateToIRR: 156000000, symbol: 'Ξ', rateToUSD: 2600 },
];
