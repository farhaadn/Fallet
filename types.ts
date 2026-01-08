export type Currency = 'USD' | 'IRR' | 'EUR' | 'BTC' | 'ETH' | string;

export enum AccountType {
  BANK = 'BANK',
  CASH = 'CASH',
  CRYPTO = 'CRYPTO',
  SAVINGS = 'SAVINGS',
  CREDIT = 'CREDIT'
}

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER'
}

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: Currency;
  color: string; // Hex color code
}

export interface Category {
  id: string;
  name: string;
  subCategories: string[];
}

export interface Transaction {
  id: string;
  accountId: string;
  toAccountId?: string;
  type: TransactionType;
  category: string;
  subCategory?: string;
  amount: number;
  currency: Currency;
  date: string; // ISO String including time
  note?: string;
}

export interface CurrencyRate {
  code: Currency;
  rateToIRR: number; // User manually enters how much 1 unit is in Rial
  symbol: string;
  rateToUSD?: number; // Kept for backward compatibility if needed
}