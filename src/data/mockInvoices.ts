import { Invoice } from '../types';

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'KB-118420',
    originator: 'Credable Trade Services Ltd',
    industry: 'Global Logistics & Supply Chain',
    amount: 100000,
    fundedAmount: 68000,
    tenureDays: 90,
    apy: 14.5,
    riskGrade: 'A',
    status: 'Open',
    issuedDate: '2026-07-15',
    maturityDate: '2026-10-13',
    txHash: '0x4a18f921...e29c',
    mintHash: '0x8f2c3109...b731',
    settlementHash: '0x1c92a401...4d05',
    underwriter: 'Standard Institutional Capital',
    debtorName: 'Eurofreight Multi-Modal BV',
    debtorCountry: 'Netherlands',
    description: 'Advance against 90-day trade invoice for transatlantic container route logistics and customs clearing fees.',
    investorsCount: 14,
    documents: [
      { name: 'Invoice_KB-118420_Original.pdf', type: 'Trade Invoice', size: '1.8 MB', hash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' },
      { name: 'Bill_of_Lading_EU_US_9021.pdf', type: 'Shipping Proof', size: '2.4 MB', hash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284ddd200126d9069b' },
      { name: 'Underwriting_Report_A_Grade.pdf', type: 'Credit Audit', size: '890 KB', hash: 'sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b' }
    ],
    contributions: [
      { investorId: 'inv-101', investorName: 'Atlas Credit Fund LP', sharesBought: 250, amountFunded: 25000, timestamp: '2026-07-16 09:14', txHash: '0x71a...92b1' },
      { investorId: 'inv-108', investorName: 'Meridian Capital Partners', sharesBought: 200, amountFunded: 20000, timestamp: '2026-07-17 14:22', txHash: '0x32f...81c4' },
      { investorId: 'inv-112', investorName: 'Vanguard Yield Alpha', sharesBought: 150, amountFunded: 15000, timestamp: '2026-07-18 11:05', txHash: '0x990...11a2' },
      { investorId: 'inv-125', investorName: 'K-Bridge Family Office', sharesBought: 80, amountFunded: 8000, timestamp: '2026-07-19 16:48', txHash: '0x44d...88e0' }
    ],
    settlementSplit: {
      investorReturnPct: 45,
      originatorPct: 45,
      feePct: 10
    }
  },
  {
    id: 'KB-204915',
    originator: 'Apex Semiconductor Corp',
    industry: 'High-Tech Hardware Manufacturing',
    amount: 250000,
    fundedAmount: 230000,
    tenureDays: 60,
    apy: 12.0,
    riskGrade: 'A+',
    status: 'Open',
    issuedDate: '2026-07-20',
    maturityDate: '2026-09-18',
    txHash: '0x9b1102f8...29fa',
    mintHash: '0x3e18a221...e010',
    settlementHash: '0x88f11002...9c2e',
    underwriter: 'Credable Prime Underwriting',
    debtorName: 'OmniTech Enterprise Systems',
    debtorCountry: 'Germany',
    description: 'Short-term financing against verified purchase order for wafer fabrication assembly supplied to tier-1 OEMs.',
    investorsCount: 22,
    documents: [
      { name: 'Apex_Wafer_Supply_PO_204915.pdf', type: 'Purchase Order', size: '3.1 MB', hash: 'sha256:d41d8cd98f00b204e9800998ecf8427e' },
      { name: 'Certificate_of_Inspection_SGS.pdf', type: 'Quality Audit', size: '1.2 MB', hash: 'sha256:098f6bcd4621d373cade4e832627b4f6' }
    ],
    contributions: [
      { investorId: 'inv-201', investorName: 'Caledonia Credit Vault', sharesBought: 1000, amountFunded: 100000, timestamp: '2026-07-21 08:30', txHash: '0xa00...11f3' },
      { investorId: 'inv-204', investorName: 'Zurich Institutional Liquidity', sharesBought: 800, amountFunded: 80000, timestamp: '2026-07-21 15:40', txHash: '0xb21...77d8' },
      { investorId: 'inv-210', investorName: 'Nordic Private Debt Fund', sharesBought: 500, amountFunded: 50000, timestamp: '2026-07-22 10:12', txHash: '0xc33...88e9' }
    ],
    settlementSplit: {
      investorReturnPct: 50,
      originatorPct: 40,
      feePct: 10
    }
  },
  {
    id: 'KB-301140',
    originator: 'BioHealth Supplies Global',
    industry: 'Pharmaceuticals & Healthcare',
    amount: 75000,
    fundedAmount: 30000,
    tenureDays: 45,
    apy: 16.0,
    riskGrade: 'A',
    status: 'Open',
    issuedDate: '2026-08-01',
    maturityDate: '2026-09-15',
    txHash: '0x12c49012...89aa',
    mintHash: '0x55d012e4...1123',
    settlementHash: '0x77e12903...001f',
    underwriter: 'Kundabox Credit Risk Desk',
    debtorName: 'St. Jude Regional Hospital Network',
    debtorCountry: 'United Kingdom',
    description: '45-day receivable financing for medical diagnostic equipment delivered to regional healthcare providers.',
    investorsCount: 8,
    documents: [
      { name: 'Invoice_BioHealth_StJude_301140.pdf', type: 'Trade Invoice', size: '1.5 MB', hash: 'sha256:5d41402abc4b2a76b9719d911017c592' }
    ],
    contributions: [
      { investorId: 'inv-302', investorName: 'MedTech Yield Fund', sharesBought: 200, amountFunded: 20000, timestamp: '2026-08-02 12:00', txHash: '0x883...22c1' },
      { investorId: 'inv-305', investorName: 'Apex Family Office', sharesBought: 100, amountFunded: 10000, timestamp: '2026-08-03 09:15', txHash: '0x994...33d2' }
    ],
    settlementSplit: {
      investorReturnPct: 48,
      originatorPct: 42,
      feePct: 10
    }
  },
  {
    id: 'KB-419082',
    originator: 'Helios Solar Systems',
    industry: 'Renewables & Infrastructure',
    amount: 180000,
    fundedAmount: 180000,
    tenureDays: 120,
    apy: 15.2,
    riskGrade: 'B+',
    status: 'Fully Funded',
    issuedDate: '2026-06-10',
    maturityDate: '2026-10-08',
    txHash: '0x77f88123...4490',
    mintHash: '0x22100876...9012',
    settlementHash: '0x44d88219...3312',
    underwriter: 'CleanEnergy Finance Partners',
    debtorName: 'Pacific Rim Energy Grid Corp',
    debtorCountry: 'Australia',
    description: 'Financing photovoltaic inverter panel installations for commercial solar farm expansion.',
    investorsCount: 29,
    documents: [
      { name: 'Helios_Solar_Installation_Verification.pdf', type: 'Completion Cert', size: '4.2 MB', hash: 'sha256:098f6bcd4621d373cade4e832627b4f6' }
    ],
    contributions: [
      { investorId: 'inv-401', investorName: 'Green Impact Infrastructure Fund', sharesBought: 1000, amountFunded: 100000, timestamp: '2026-06-11 10:00', txHash: '0x101...99e2' },
      { investorId: 'inv-402', investorName: 'Pacific Rim Institutional Partners', sharesBought: 800, amountFunded: 80000, timestamp: '2026-06-11 16:30', txHash: '0x202...88f3' }
    ],
    settlementSplit: {
      investorReturnPct: 46,
      originatorPct: 44,
      feePct: 10
    }
  },
  {
    id: 'KB-502931',
    originator: 'Nordic Freight Line AS',
    industry: 'Maritime Shipping',
    amount: 320000,
    fundedAmount: 48000,
    tenureDays: 90,
    apy: 13.8,
    riskGrade: 'A',
    status: 'Open',
    issuedDate: '2026-08-05',
    maturityDate: '2026-11-03',
    txHash: '0x33e11029...7711',
    mintHash: '0x99021882...3102',
    settlementHash: '0x55a99210...8821',
    underwriter: 'DNB Commercial Debt Desk',
    debtorName: 'Baltic Wood Exports Holding',
    debtorCountry: 'Finland',
    description: 'Bulk timber shipping freight invoice advance covering Scandinavia to Central Europe route.',
    investorsCount: 5,
    documents: [
      { name: 'Invoice_Nordic_Timber_502931.pdf', type: 'Trade Invoice', size: '2.1 MB', hash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65d' }
    ],
    contributions: [
      { investorId: 'inv-501', investorName: 'Nordic Credit Alpha', sharesBought: 480, amountFunded: 48000, timestamp: '2026-08-06 14:10', txHash: '0x501...11a1' }
    ],
    settlementSplit: {
      investorReturnPct: 45,
      originatorPct: 45,
      feePct: 10
    }
  },
  {
    id: 'KB-610283',
    originator: 'Precision Tooling Co',
    industry: 'Industrial Equipment',
    amount: 65000,
    fundedAmount: 55250,
    tenureDays: 30,
    apy: 17.0,
    riskGrade: 'B+',
    status: 'Maturing Soon',
    issuedDate: '2026-07-12',
    maturityDate: '2026-08-11',
    txHash: '0x88921033...1102',
    mintHash: '0x44d11092...7711',
    settlementHash: '0x22188902...9921',
    underwriter: 'Credable Direct Lending',
    debtorName: 'AutoParts Manufacturing North America',
    debtorCountry: 'United States',
    description: '30-day ultra short-term bridge for custom CNC precision mold manufacturing delivery.',
    investorsCount: 11,
    documents: [
      { name: 'PrecisionTooling_CNC_Invoice_610283.pdf', type: 'Trade Invoice', size: '1.1 MB', hash: 'sha256:6b86b273ff34fce19d6b804eff5a3f57' }
    ],
    contributions: [
      { investorId: 'inv-601', investorName: 'Short-Duration Yield LP', sharesBought: 500, amountFunded: 50000, timestamp: '2026-07-13 11:20', txHash: '0x601...22b2' }
    ],
    settlementSplit: {
      investorReturnPct: 45,
      originatorPct: 45,
      feePct: 10
    }
  }
];
