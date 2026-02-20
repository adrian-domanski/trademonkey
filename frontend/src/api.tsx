// api.ts

import axios from 'axios';

// Import ALL mocked endpoints
import {
  getCompanyProfile as mockGetCompanyProfile,
  getKeyMetrics as mockGetKeyMetrics,
  getCompData as mockGetCompData,
  getTenK as mockGetTenK,
  getHistoricalDividend as mockGetHistoricalDividend,
  getCashFlow as mockGetCashFlow,
  getIncomeStatement as mockGetIncomeStatement,
  getBalanceSheet as mockGetBalanceSheet,
} from './mockApi';

const API_KEY = process.env.REACT_APP_API_KEY;

/* =========================
   REAL ENDPOINT (SEARCH ONLY)
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

/* =========================
   MOCKED ENDPOINTS
========================= */

export const getCompanyProfile = async (query: string) => {
  return await mockGetCompanyProfile(query);
};

export const getIncomeStatement = async (query: string) => {
  return await mockGetIncomeStatement(query);
};

export const getBalanceSheet = async (query: string) => {
  return await mockGetBalanceSheet(query);
};

export const getCashFlow = async (query: string) => {
  return await mockGetCashFlow(query);
};

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
