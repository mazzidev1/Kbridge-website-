export interface InvoiceDocument {
  name: string;
  type: string;
  size: string;
  hash: string;
}

export interface InvestorContribution {
  investorId: string;
  investorName: string;
  sharesBought: number;
  amountFunded: number;
  timestamp: string;
  txHash: string;
}

export interface Invoice {
  id: string; // e.g., 'KB-118420'
  originator: string;
  industry: string;
  amount: number;
  fundedAmount: number;
  tenureDays: number;
  apy: number;
  riskGrade: 'A+' | 'A' | 'B+' | 'B';
  status: 'Open' | 'Fully Funded' | 'Maturing Soon' | 'Settled';
  issuedDate: string;
  maturityDate: string;
  txHash: string;
  mintHash: string;
  settlementHash: string;
  underwriter: string;
  debtorName: string;
  debtorCountry: string;
  description: string;
  investorsCount: number;
  documents: InvoiceDocument[];
  contributions: InvestorContribution[];
  settlementSplit: {
    investorReturnPct: number;
    originatorPct: number;
    feePct: number;
  };
}

export interface DemoBooking {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  teamSize: string;
  preferredDate: string;
  notes: string;
}

export interface WaitlistEntry {
  fullName: string;
  workEmail: string;
  institutionType: string;
}
