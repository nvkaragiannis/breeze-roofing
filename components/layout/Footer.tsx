import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { company } from "@/lib/data/company";
import { footerLinks } from "@/lib/data/navigation";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Logo + Tagline + License */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand/breeze_roofing_logo_white_background.jpeg"
                alt="Breeze Roofing - Simple as a Breeze"
                width={200}
                height={50}
                className="h-10 w-auto rounded"
              />
            </Link>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              {company.tagline}
            </p>
            <p className="mt-4 text-white/50 text-xs">
              NC License #{company.license}
            </p>
            <div className="mt-3 space-y-1">
              {company.certifications.map((cert) => (
                <p key={cert} className="text-white/60 text-xs">
                  {cert}
                </p>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links + Services */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info + Hours */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.phoneTel}
                  className="flex items-center gap-3 text-white/70 hover:text-amber transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {company.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-amber transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
                Hours
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <p>{company.hours.weekday}</p>
                    <p>{company.hours.saturday}</p>
                    <p className="text-amber font-medium">
                      {company.hours.emergency}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; 2025 {company.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
