// api.ts

import axios from 'axios';

// Import ONLY premium mocks
import {
  getKeyMetrics as mockGetKeyMetrics,
  getCompData as mockGetCompData,
  getTenK as mockGetTenK,
  getHistoricalDividend as mockGetHistoricalDividend,
} from './mockApi';

const API_KEY = process.env.REACT_APP_API_KEY;

/* =========================
   FREE ENDPOINTS (REAL API)
========================= */

export const searchCompanies = async (query: string) => {
  try {
    return await axios.get(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${API_KEY}`,
    );
  } catch {
    return { data: [] };
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    return await axios.get(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${API_KEY}`,
    );
  } catch {
    return { data: [] };
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    return await axios.get(
      `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${API_KEY}`,
    );
  } catch {
    return { data: [] };
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    return await axios.get(
      `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${API_KEY}`,
    );
  } catch {
    return { data: [] };
  }
};

export const getCashFlow = async (query: string) => {
  try {
    return await axios.get(
      `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${API_KEY}`,
    );
  } catch {
    return { data: [] };
  }
};

/* =========================
   PREMIUM ENDPOINTS (MOCKED)
========================= */

// These now call mockApi instead of FMP

export const getKeyMetrics = async (query: string) => {
  return await mockGetKeyMetrics(query);
};

export const getCompData = async (query: string) => {
  return await mockGetCompData(query);
};

export const getTenK = async (query: string) => {
  return await mockGetTenK(query);
};

export const getHistoricalDividend = async (query: string) => {
  return await mockGetHistoricalDividend(query);
};
