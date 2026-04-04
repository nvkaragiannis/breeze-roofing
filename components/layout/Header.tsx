"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { company } from "@/lib/data/company";
import { mainNav } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {
  /** true = transparent over hero (homepage). false = solid white (inner pages) */
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTransparent = transparent && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "shadow-md"
        )}
        style={!isTransparent ? {
          background: "linear-gradient(to right, #7BA7BC, #A3C4D4, #d4e5ec, #ffffff)"
        } : undefined}
      >
        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo + Emergency Badge */}
            <div className="flex items-center gap-3">
              <Link href="/" className="shrink-0">
                <Image
                  src="/images/brand/breeze_roofing_logo_white_background.jpeg"
                  alt="Breeze Roofing - Simple as a Breeze"
                  width={220}
                  height={55}
                  priority
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>
              <a
                href={company.phoneTel}
                className="hidden sm:inline-flex items-center gap-1.5 bg-emergency text-white text-xs font-semibold px-2.5 py-1 rounded-full hover:bg-emergency/80 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>24/7 Emergency</span>
              </a>
            </div>

            {/* Desktop: Trust stats + Phone + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <div className={cn(
                "flex items-center gap-1.5 text-sm",
                isTransparent ? "text-white/70" : "text-gray-600"
              )}>
                <Star className="w-4 h-4 text-amber fill-amber" />
                <span className={cn(
                  "font-semibold",
                  isTransparent ? "text-white" : "text-gray-900"
                )}>
                  {company.reviewRating}
                </span>
                <span>({company.reviewCount}+ reviews)</span>
              </div>

              <div className={cn(
                "w-px h-6",
                isTransparent ? "bg-white/20" : "bg-gray-200"
              )} />

              <a
                href={company.phoneTel}
                className={cn(
                  "flex items-center gap-2 font-semibold transition-colors",
                  isTransparent
                    ? "text-white hover:text-amber"
                    : "text-navy hover:text-navy-light"
                )}
              >
                <Phone className="w-4 h-4" />
                {company.phoneFormatted}
              </a>

              <Link
                href="/estimate"
                className="bg-amber text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-hover transition-all shadow-md hover:shadow-lg"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Mobile: Phone + CTA + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={company.phoneTel}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-lg",
                  isTransparent ? "text-white" : "text-navy"
                )}
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Link
                href="/estimate"
                className="bg-amber text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-amber-hover transition-all"
              >
                Estimate
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-lg",
                  isTransparent ? "text-white" : "text-navy"
                )}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "hidden lg:block border-t transition-colors",
            isTransparent
              ? "border-white/10 bg-navy/30 backdrop-blur-sm"
              : "border-white/50 bg-white/80 backdrop-blur-sm"
          )}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.children ? setOpenDropdown(item.label) : undefined
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-3 text-sm font-medium transition-colors rounded-md",
                      isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-navy hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200",
                        openDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Spacer: pushes page content below the fixed header + emergency bar */}
      {!transparent && (
        <div className="h-16 lg:h-[calc(5rem+44px)]" aria-hidden="true" />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[5rem] z-40">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />

          <nav
            className="relative bg-white w-full max-w-sm h-full overflow-y-auto shadow-xl"
            aria-label="Mobile navigation"
          >
            <div className="p-4">
              <ul className="space-y-1">
                {mainNav.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.children) setMobileOpen(false);
                        }}
                        className="flex-1 px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="p-3 text-gray-400"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>
                    {item.children && openDropdown === item.label && (
                      <ul className="ml-4 border-l border-gray-200 pl-4 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-navy transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a
                  href={company.phoneTel}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {company.phoneFormatted}
                </a>
                <Link
                  href="/estimate"
                  className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-amber text-white font-semibold hover:bg-amber-hover transition-all shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
