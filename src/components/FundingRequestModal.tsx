import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Check, Sparkles, Building2, FileText, Mail, Phone, Lock } from 'lucide-react';

interface FundingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FundingRequestModal: React.FC<FundingRequestModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    phone: '',
    invoiceAmount: '100,000',
    debtorName: '',
    paymentTerms: '60 Days',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-body">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101C2B]/75 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#F7F7F2] border border-[#CFCDC0] rounded-[4px] shadow-2xl max-w-[580px] w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#3C4859] hover:text-[#101C2B] p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-[#2F5D50]/15 text-[#2F5D50] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="font-display font-medium text-[26px] text-[#101C2B] mb-2">
                  Invoice Quote Request Received
                </h3>
                
                <p className="text-[15px] text-[#3C4859] max-w-[420px] mx-auto mb-6 leading-relaxed">
                  Thank you! Our underwriting team and automated engine are reviewing your submission. You will receive a binding term sheet at <b>{formData.workEmail || 'your email'}</b> within 2 business hours.
                </p>

                <button
                  onClick={handleReset}
                  className="btn btn-primary bg-[#101C2B] text-white px-8 py-3 text-[14px]"
                >
                  Return to portal
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-body text-[12px] uppercase tracking-wide text-[#2F5D50] font-semibold flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Supplier & Originator Portal
                  </span>
                  <h3 className="font-display font-medium text-[26px] text-[#101C2B] leading-tight">
                    Submit Invoice for Funding
                  </h3>
                  <p className="text-[13.5px] text-[#3C4859] mt-1">
                    Get an immediate non-binding advance quote within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Logistics LLC"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-white border border-[#CFCDC0] rounded-[2px] px-3.5 py-2 text-[14px] text-[#101C2B] focus:outline-none focus:border-[#2F5D50]"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="finance@acmelogistics.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-white border border-[#CFCDC0] rounded-[2px] px-3.5 py-2 text-[14px] text-[#101C2B] focus:outline-none focus:border-[#2F5D50]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                        Invoice Face Value ($) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="100,000"
                        value={formData.invoiceAmount}
                        onChange={(e) => setFormData({ ...formData, invoiceAmount: e.target.value })}
                        className="w-full bg-white border border-[#CFCDC0] rounded-[2px] px-3.5 py-2 text-[14px] text-[#101C2B] font-mono focus:outline-none focus:border-[#2F5D50]"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                        Payment Term Remaining
                      </label>
                      <select
                        value={formData.paymentTerms}
                        onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                        className="w-full bg-white border border-[#CFCDC0] rounded-[2px] px-3.5 py-2 text-[14px] text-[#101C2B] focus:outline-none focus:border-[#2F5D50]"
                      >
                        <option>30 Days</option>
                        <option>60 Days</option>
                        <option>90 Days</option>
                        <option>120 Days</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                      Debtor / Customer Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enterprise Client Corp (e.g., Target, Walmart, IBM)"
                      value={formData.debtorName}
                      onChange={(e) => setFormData({ ...formData, debtorName: e.target.value })}
                      className="w-full bg-white border border-[#CFCDC0] rounded-[2px] px-3.5 py-2 text-[14px] text-[#101C2B] focus:outline-none focus:border-[#2F5D50]"
                    />
                  </div>

                  {/* Drag and Drop Zone */}
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#101C2B] mb-1">
                      Upload Invoice PDF (Optional for Faster Approval)
                    </label>
                    <div className="border-2 border-dashed border-[#CFCDC0] bg-white rounded-[3px] p-4 text-center hover:border-[#2F5D50] transition-colors cursor-pointer">
                      <Upload className="w-6 h-6 text-[#2F5D50] mx-auto mb-1.5" />
                      <p className="text-[13px] text-[#101C2B] font-medium">
                        Click to upload or drag & drop invoice PDF
                      </p>
                      <p className="text-[11px] text-[#3C4859] font-mono mt-0.5">
                        PDF, PNG, JPG up to 25MB
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[12px] text-[#3C4859]">
                    <Lock className="w-3.5 h-3.5 text-[#2F5D50]" />
                    <span>Your financial information is encrypted and strictly confidential.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary bg-[#2F5D50] hover:bg-[#23473D] text-white py-3.5 text-[15px] font-medium shadow-md transition-colors mt-2"
                  >
                    Get Instant Quote
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
