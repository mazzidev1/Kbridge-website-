import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DemoBooking } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [booking, setBooking] = useState<DemoBooking>({
    fullName: '',
    workEmail: '',
    company: '',
    role: 'Investment Manager',
    teamSize: '10-50',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#101C2B]/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#F7F7F2] border border-[#CFCDC0] w-full max-w-xl rounded-[3px] shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#EEEEE6] border-b border-[#CFCDC0] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#2F5D50]" />
            <div>
              <h2 className="font-display font-medium text-[20px] text-[#101C2B] leading-tight">
                Book a Live kbridge Walkthrough
              </h2>
              <p className="text-[12.5px] text-[#3C4859]">
                Interactive walkthrough for funds, originators &amp; risk desks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[2px] text-[#3C4859] hover:text-[#101C2B] hover:bg-[#CFCDC0]/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#2F5D50]/15 text-[#2F5D50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-medium text-[22px] text-[#101C2B]">
              Walkthrough Session Reserved!
            </h3>
            <p className="text-[14.5px] text-[#3C4859] max-w-md mx-auto">
              Thank you, <strong>{booking.fullName}</strong>. We've sent a calendar invitation and platform spec sheet to <strong>{booking.workEmail}</strong>.
            </p>
            <div className="bg-[#EEEEE6] p-3 rounded text-[12.5px] font-mono text-[#2F5D50] inline-block border border-[#CFCDC0]">
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
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={booking.fullName}
                  onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@capitalfund.com"
                  value={booking.workEmail}
                  onChange={(e) => setBooking({ ...booking, workEmail: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Institution / Firm *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meridian Credit LP"
                  value={booking.company}
                  onChange={(e) => setBooking({ ...booking, company: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Your Role
                </label>
                <select
                  value={booking.role}
                  onChange={(e) => setBooking({ ...booking, role: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
                >
                  <option value="Investment Manager">Investment / Portfolio Manager</option>
                  <option value="Originator Desk">Financing Originator / Lender</option>
                  <option value="Risk & Underwriting">Risk &amp; Underwriting Desk</option>
                  <option value="Executive">Executive / Partner</option>
                </select>
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Target Date
                </label>
                <input
                  type="date"
                  value={booking.preferredDate}
                  onChange={(e) => setBooking({ ...booking, preferredDate: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] font-mono rounded focus:outline-none focus:border-[#101C2B]"
                />
              </div>

              <div>
                <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                  Firm Size
                </label>
                <select
                  value={booking.teamSize}
                  onChange={(e) => setBooking({ ...booking, teamSize: e.target.value })}
                  className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
                >
                  <option value="1-10">1-10 Employees</option>
                  <option value="10-50">10-50 Employees</option>
                  <option value="50-250">50-250 Employees</option>
                  <option value="250+">250+ Institutional</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-body font-semibold text-[11.5px] text-[#3C4859] uppercase tracking-wide mb-1">
                Specific Use Case or Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. We originate trade invoices in Europe and want to explore tokenized shelf syndication..."
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                className="w-full bg-[#EEEEE6] border border-[#B9B6A6] px-3 py-2 text-[13.5px] rounded focus:outline-none focus:border-[#101C2B] font-body"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#CFCDC0]">
              <div className="text-[12.5px] font-body text-[#2F5D50]">
                Direct inquiries: <a href="mailto:contact@kundabox.com" className="underline font-semibold">contact@kundabox.com</a>
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
