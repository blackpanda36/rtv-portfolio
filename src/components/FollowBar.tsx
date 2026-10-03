import React from 'react';
import {
  Linkedin,
  Youtube,
  Twitter,
  MessageSquare,
  Facebook,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FollowBar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f2f2f2] border-t border-[#e6e6e6] py-4 text-xs text-[#242424]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Follow Realtech Vision */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#242424] text-[13px]">
            Follow Realtech Vision
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#0067b8] hover:text-white flex items-center justify-center text-[#242424] transition-colors border border-[#d1d1d1]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#25D366] hover:text-white flex items-center justify-center text-[#242424] transition-colors border border-[#d1d1d1]"
              aria-label="WhatsApp Channel Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#FF0000] hover:text-white flex items-center justify-center text-[#242424] transition-colors border border-[#d1d1d1]"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-[#242424] transition-colors border border-[#d1d1d1]"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Back to Top Button (Microsoft Standard) */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#242424] hover:bg-[#e6e6e6] rounded-[2px] transition-colors focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to top</span>
        </button>

      </div>
    </div>
  );
};

export default FollowBar;
