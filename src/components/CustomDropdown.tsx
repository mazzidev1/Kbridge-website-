import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface DropdownOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface CustomDropdownProps {
  label?: string;
  value: string;
  options: (string | DropdownOption)[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  bgColor?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select option...',
  className = '',
  id,
  bgColor = 'bg-[#EEEEE6]',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoId = useId();
  const dropdownId = id || autoId;

  // Normalize options to DropdownOption objects
  const normalizedOptions: DropdownOption[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
        const nextIndex = (currentIndex + 1) % normalizedOptions.length;
        onChange(normalizedOptions[nextIndex].value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
        const prevIndex = (currentIndex - 1 + normalizedOptions.length) % normalizedOptions.length;
        onChange(normalizedOptions[prevIndex].value);
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={dropdownId}
          className="block font-body font-semibold text-[11.5px] text-[#30455C] uppercase tracking-wide mb-1"
        >
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        id={dropdownId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`w-full ${bgColor} border ${
          isOpen ? 'border-[#EAA53A] ring-2 ring-[#EAA53A]/20' : 'border-[#B9B6A6] hover:border-[#0C1D30]'
        } px-3.5 py-2 text-[13.5px] rounded-[3px] font-body text-[#0C1D30] flex items-center justify-between text-left transition-all duration-150 cursor-pointer shadow-2xs focus:outline-none`}
      >
        <span className="truncate pr-2 font-medium">
          {selectedOption ? selectedOption.label : <span className="text-[#30455C]/70">{placeholder}</span>}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-[#30455C] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#EAA53A]' : ''
          }`}
        />
      </button>

      {/* Dropdown Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 bg-white border border-[#CFCDC0] rounded-[4px] shadow-xl py-1 max-h-[220px] overflow-y-auto"
          >
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-3.5 py-2.5 text-[13.5px] font-body cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? 'bg-[#EAA53A]/15 text-[#0C1D30] font-semibold'
                      : 'text-[#0C1D30] hover:bg-[#EAA53A]/10 hover:text-[#0C1D30]'
                  }`}
                >
                  <div className="flex flex-col min-w-0">
                    <span className="truncate leading-tight">{opt.label}</span>
                    {opt.sublabel && (
                      <span className="text-[11px] text-[#30455C] font-normal mt-0.5">{opt.sublabel}</span>
                    )}
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="shrink-0 text-[#EAA53A]"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
