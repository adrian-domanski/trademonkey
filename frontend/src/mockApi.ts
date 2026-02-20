// mockApi.ts

import {
  CompanySearch,
  CompanyProfile,
  CompanyKeyMetrics,
  CompanyIncomeStatement,
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyTenK,
  Dividend,
} from './company';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const randInt = (min: number, max: number) => Math.floor(rand(min, max));

/* =========================
   SEARCH
========================= */

export const searchCompanies = async (query: string) => {
  await delay(300);

  const result: CompanySearch[] = Array.from({ length: 5 }).map((_, i) => ({
    currency: 'USD',
    exchangeShortName: 'NASDAQ',
    name: `${query.toUpperCase()} Corp ${i}`,
    stockExchange: 'NASDAQ',
    symbol: `${query.toUpperCase()}${i}`,
  }));

  return { data: result };
};

/* =========================
   PROFILE
========================= */

export const getCompanyProfile = async (symbol: string) => {
  await delay(300);

  const profile: CompanyProfile = {
    symbol,
    price: rand(50, 300),
    beta: rand(0.8, 1.5),
    volAvg: randInt(1_000_000, 10_000_000),
    mktCap: randInt(10_000_000_000, 500_000_000_000),
    lastDiv: rand(0, 2),
    range: '100-250',
    changes: rand(-5, 5),
    companyName: `${symbol} Technologies`,
    currency: 'USD',
    cik: '0000000000',
    isin: 'US0000000000',
    exchange: 'NASDAQ',
    exchangeShortName: 'NASDAQ',
    industry: 'Technology',
    website: 'https://example.com',
    description: 'Mock company for portfolio project.',
    ceo: 'Jane Doe',
    sector: 'Technology',
    counter: 'USA',
    fullTimeEmployees: '10000',
    phone: '123-456-7890',
    address: '123 Mock Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    dcfDiff: rand(-10, 10),
    dcf: rand(50, 200),
    image: 'https://via.placeholder.com/150',
    ipoDate: '2010-01-01',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false,
  };

  return { data: [profile] };
};

/* =========================
   KEY METRICS
========================= */

export const getKeyMetrics = async (symbol: string) => {
  await delay(300);

  const metrics: CompanyKeyMetrics = {
    revenuePerShareTTM: 15,
    netIncomePerShareTTM: 5,
    operatingCashFlowPerShareTTM: 6,
    freeCashFlowPerShareTTM: 4,
    cashPerShareTTM: 3,
    bookValuePerShareTTM: 20,
    tangibleBookValuePerShareTTM: 18,
    shareholdersEquityPerShareTTM: 22,
    interestDebtPerShareTTM: 8,
    marketCapTTM: 250000000000,
    enterpriseValueTTM: 260000000000,
    peRatioTTM: 24,
    priceToSalesRatioTTM: 5,
    pocfratioTTM: 20,
    pfcfRatioTTM: 18,
    pbRatioTTM: 4,
    ptbRatioTTM: 4,
    evToSalesTTM: 6,
    enterpriseValueOverEBITDATTM: 15,
    evToOperatingCashFlowTTM: 18,
    evToFreeCashFlowTTM: 17,
    earningsYieldTTM: 0.04,
    freeCashFlowYieldTTM: 0.05,
    debtToEquityTTM: 1.2,
    debtToAssetsTTM: 0.4,
    netDebtToEBITDATTM: 2,
    currentRatioTTM: 1.5,
    interestCoverageTTM: 6,
    incomeQualityTTM: 1.1,
    dividendYieldTTM: 0.02,
    dividendYieldPercentageTTM: 2,
    payoutRatioTTM: 0.35,
    salesGeneralAndAdministrativeToRevenueTTM: 0.15,
    researchAndDevelopementToRevenueTTM: 0.12,
    intangiblesToTotalAssetsTTM: 0.2,
    capexToOperatingCashFlowTTM: 0.25,
    capexToRevenueTTM: 0.08,
    capexToDepreciationTTM: 1.1,
    stockBasedCompensationToRevenueTTM: 0.05,
    grahamNumberTTM: 45,
    roicTTM: 0.18,
    returnOnTangibleAssetsTTM: 0.14,
    grahamNetNetTTM: 10,
    workingCapitalTTM: 5000000000,
    tangibleAssetValueTTM: 20000000000,
    netCurrentAssetValueTTM: 10000000000,
    investedCapitalTTM: 30000000000,
    averageReceivablesTTM: 5000000000,
    averagePayablesTTM: 3000000000,
    averageInventoryTTM: 2000000000,
    daysSalesOutstandingTTM: 45,
    daysPayablesOutstandingTTM: 60,
    daysOfInventoryOnHandTTM: 50,
    receivablesTurnoverTTM: 8,
    payablesTurnoverTTM: 6,
    inventoryTurnoverTTM: 7,
    roeTTM: 0.28,
    capexPerShareTTM: 2,
    dividendPerShareTTM: 1,
    debtToMarketCapTTM: 0.3,
  };

  return { data: [metrics] };
};

/* =========================
   INCOME STATEMENT
========================= */

export const getIncomeStatement = async (symbol: string) => {
  await delay(300);

  const income: CompanyIncomeStatement = {
    date: '2024-12-31',
    symbol,
    reportedCurrency: 'USD',
    cik: '0000000000',
    fillingDate: '2025-01-01',
    acceptedDate: '2025-01-01',
    calendarYear: '2024',
    period: 'FY',
    revenue: randInt(10_000_000_000, 100_000_000_000),
    costOfRevenue: randInt(1_000_000_000, 10_000_000_000),
    grossProfit: randInt(5_000_000_000, 50_000_000_000),
    grossProfitRatio: rand(0.3, 0.6),
    researchAndDevelopmentExpenses: randInt(1_000_000_000, 5_000_000_000),
    generalAndAdministrativeExpenses: randInt(500_000_000, 2_000_000_000),
    sellingAndMarketingExpenses: randInt(500_000_000, 2_000_000_000),
    sellingGeneralAndAdministrativeExpenses: randInt(
      1_000_000_000,
      3_000_000_000,
    ),
    otherExpenses: randInt(100_000_000, 500_000_000),
    operatingExpenses: randInt(2_000_000_000, 5_000_000_000),
    costAndExpenses: randInt(5_000_000_000, 10_000_000_000),
    interestIncome: randInt(10_000_000, 100_000_000),
    interestExpense: randInt(50_000_000, 200_000_000),
    depreciationAndAmortization: randInt(500_000_000, 1_000_000_000),
    ebitda: randInt(2_000_000_000, 10_000_000_000),
    ebitdaratio: rand(0.2, 0.4),
    operatingIncome: randInt(1_000_000_000, 5_000_000_000),
    operatingIncomeRatio: rand(0.15, 0.3),
    totalOtherIncomeExpensesNet: randInt(-500_000_000, 500_000_000),
    incomeBeforeTax: randInt(1_000_000_000, 5_000_000_000),
    incomeBeforeTaxRatio: rand(0.1, 0.25),
    incomeTaxExpense: randInt(500_000_000, 1_500_000_000),
    netIncome: randInt(1_000_000_000, 5_000_000_000),
    netIncomeRatio: rand(0.1, 0.25),
    eps: rand(1, 10),
    epsdiluted: rand(1, 10),
    weightedAverageShsOut: randInt(100_000_000, 500_000_000),
    weightedAverageShsOutDil: randInt(100_000_000, 500_000_000),
    link: '#',
    finalLink: '#',
  };

  return { data: [income] };
};

/* =========================
   BALANCE SHEET
========================= */

export const getBalanceSheet = async (symbol: string) => {
  await delay(300);

  const balance = {
    ...(await getIncomeStatement(symbol)).data[0],
    totalAssets: randInt(50000000000, 200000000000),
    totalLiabilities: randInt(10000000000, 100000000000),
  } as unknown as CompanyBalanceSheet;

  return { data: [balance] };
};

/* =========================
   CASH FLOW
========================= */

export const getCashFlow = async (symbol: string) => {
  await delay(300);

  const cashFlow = {
    ...(await getIncomeStatement(symbol)).data[0],
    operatingCashFlow: randInt(1000000000, 10000000000),
    netCashUsedForInvestingActivites: randInt(1000000000, 5000000000),
    netCashUsedProvidedByFinancingActivities: randInt(1000000000, 10000000000),
    cashAtEndOfPeriod: randInt(1000000000, 5000000000),
    capitalExpenditure: randInt(1000000000, 5000000000),
    commonStockIssued: randInt(1000000000, 5000000000),
    freeCashFlow: randInt(1000000000, 5000000000),
  } as unknown as CompanyCashFlow;

  return { data: [cashFlow] };
};

/* =========================
   DIVIDENDS
========================= */

export const getHistoricalDividend = async (symbol: string) => {
  await delay(300);

  const historical: Dividend[] = Array.from({ length: 8 }).map((_, i) => ({
    date: `2024-0${i + 1}-01`,
    label: `Dividend ${i}`,
    adjDividend: rand(0.1, 1),
    dividend: rand(0.1, 1),
    recordDate: `2024-0${i + 1}-05`,
    paymentDate: `2024-0${i + 1}-10`,
    declarationDate: `2024-0${i + 1}-01`,
  }));

  return {
    data: {
      symbol,
      historical,
    },
  };
};

/* =========================
   PEERS
========================= */

export const getCompData = async (symbol: string) => {
  await delay(300);

  const peers: CompanyCompData = {
    symbol,
    peersList: ['AAPL', 'MSFT', 'GOOGL', 'AMZN'],
  };

  return { data: [peers] };
};

/* =========================
   TEN-K
========================= */

export const getTenK = async (symbol: string) => {
  await delay(300);

  const filings: CompanyTenK[] = Array.from({ length: 3 }).map(() => ({
    symbol,
    fillingDate: '2024-12-31',
    acceptedDate: '2025-01-01',
    cik: '0000000000',
    type: '10-K',
    link: '#',
    finalLink: '#',
  }));

  return { data: filings };
};
