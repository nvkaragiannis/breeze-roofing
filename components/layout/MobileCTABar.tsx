"use client";

import { Phone } from "lucide-react";
import { company } from "@/lib/data/company";
import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1)]">
      <div className="flex items-center h-[60px] px-2 gap-2">
        <a
          href={company.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-lg border-2 border-navy text-navy font-semibold text-sm transition-all hover:bg-navy hover:text-white"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/estimate"
          className="flex-1 flex items-center justify-center h-11 rounded-lg bg-amber text-white font-semibold text-sm hover:bg-amber-hover transition-all shadow-md"
        >
          Get Free Estimate
        </Link>
      </div>
    </div>
  );
}
