import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { CustomDropdown } from './CustomDropdown';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [booking, setBooking] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: 'Investment Manager',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    teamSize: '10-50',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0C1D30]/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#F7F7F2] border border-[#CFCDC0] w-full max-w-xl rounded-[3px] shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#EEEEE6] border-b border-[#CFCDC0] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#EAA53A]" />
            <div>
              <h2 className="font-display font-medium text-[20px] text-[#0C1D30] leading-tight">
                Book a Live kbridge Walkthrough
              </h2>
              <p className="text-[12.5px] text-[#30455C]">
                Interactive walkthrough for funds, originators &amp; risk desks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[2px] text-[#30455C] hover:text-[#0C1D30] hover:bg-[#CFCDC0]/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EAA53A]/15 text-[#0C1D30] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#EAA53A]" />
            </div>
            <h3 className="font-display font-medium text-[22px] text-[#0C1D30]">
              Walkthrough Session Reserved!
            </h3>
            <p className="text-[14.5px] text-[#30455C] max-w-md mx-auto">
              Thank you, <strong>{booking.fullName}</strong>. We've sent a calendar invitation and platform spec sheet to <strong>{booking.workEmail}</strong>.
            </p>
            <div className="bg-[#EEEEE6] p-3 rounded text-[12.5px] font-mono text-[#0C1D30] inline-block border border-[#CFCDC0]">
              Scheduled for: {booking.preferredDate} • 45 Min Session
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn btn-primary btn-sm"
              >
                Return to Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={booking.fullName}
                  onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#0C1D30] font-body text-[#0C1D30]"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@capitalfund.com"
                  value={booking.workEmail}
                  onChange={(e) => setBooking({ ...booking, workEmail: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#0C1D30] font-body text-[#0C1D30]"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1">
                  Institution / Firm *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meridian Credit LP"
                  value={booking.company}
                  onChange={(e) => setBooking({ ...booking, company: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#0C1D30] font-body text-[#0C1D30]"
                />
              </div>

              <CustomDropdown
                label="Your Role"
                value={booking.role}
                onChange={(val) => setBooking({ ...booking, role: val })}
                options={[
                  { value: 'Investment Manager', label: 'Investment / Portfolio Manager' },
                  { value: 'Originator Desk', label: 'Financing Originator / Lender' },
                  { value: 'Risk & Underwriting', label: 'Risk & Underwriting Desk' },
                  { value: 'Executive', label: 'Executive / Partner' },
                ]}
              />

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1">
                  Target Date
                </label>
                <input
                  type="date"
                  value={booking.preferredDate}
                  onChange={(e) => setBooking({ ...booking, preferredDate: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3.5 py-2 text-[13.5px] font-mono rounded-[3px] focus:outline-none focus:border-[#EAA53A] text-[#0C1D30]"
                />
              </div>

              <CustomDropdown
                label="Firm Size"
                value={booking.teamSize}
                onChange={(val) => setBooking({ ...booking, teamSize: val })}
                options={[
                  { value: '1-10', label: '1-10 Employees' },
                  { value: '10-50', label: '10-50 Employees' },
                  { value: '50-250', label: '50-250 Employees' },
                  { value: '250+', label: '250+ Institutional' },
                ]}
              />
            </div>

            <div>
              <label className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1">
                Specific Use Case or Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. We originate trade invoices in Europe and want to explore tokenized shelf syndication..."
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#0C1D30] font-body text-[#0C1D30]"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#CFCDC0]">
              <div className="text-[12.5px] font-body text-[#0C1D30]">
                Direct inquiries: <a href="mailto:contact@kundabox.com" className="underline font-semibold hover:text-[#EAA53A]">contact@kundabox.com</a>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-ghost btn-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  Confirm Demo Request
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
