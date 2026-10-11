import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { contactConfig } from '../config/contact';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-brand-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
            Ramraj Oil Industries
          </h1>
          <div className="mt-3 w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 font-light">
            Makers of <strong>RUCHI RICH</strong> — Fresh & Active Spices
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-brand-forest/10 space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-forest mb-4">
              Our Vision & Identity
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-light">
              <strong>Ramraj Oil Industries</strong> is a trusted manufacturing enterprise committed to bringing pure,
              wholesome culinary essentials to kitchens across India. Under our flagship consumer spice brand,{' '}
              <strong className="text-brand-emerald">RUCHI RICH</strong>, we produce a comprehensive portfolio of pure spice
              powders and expertly formulated spice blends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-ivory border-l-4 border-brand-gold space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold font-serif">
              The Brand Promise
            </span>
            <h3 className="text-lg font-serif font-bold text-brand-charcoal">
              Fresh & Active: Why It Matters
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
              Spices lose their culinary vitality and medicinal properties when over-processed or exposed to high milling
              temperatures. Our "Fresh & Active" processing philosophy preserves the natural volatile essential oils that
              give Indian spices their therapeutic properties, radiant colors, and intoxicating aromas.
            </p>
          </div>

          {/* Pillars of Purity */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-forest mb-6">
              Quality Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">100% Pure Raw Spices</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5">
                    Selected clean whole spices milled without artificial adulterants.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">Zero Artificial Colorants</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5">
                    Natural curcumin in turmeric and authentic natural color in chillies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">Hygienic Modern Milling</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5">
                    Processed under strict sanitation in our industrial facility.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-brand-charcoal">Direct Trade WhatsApp Access</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5">
                    Direct communication with our production and sales dispatch desk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Location Card */}
          <div className="pt-6 border-t border-brand-charcoal/10">
            <h2 className="text-2xl font-serif font-bold text-brand-forest mb-4 flex items-center gap-2">
              <Factory className="w-6 h-6 text-brand-gold" />
              <span>Manufacturing & Facilities</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light mb-4">
              Our operations are based in Andhra Pradesh at the ALEAP Industrial Estate, surrounded by renowned spice growing
              regions:
            </p>

            <div className="p-5 rounded-2xl bg-brand-forest text-brand-ivory">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                Verified Industrial Address
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {contactConfig.address}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={contactConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-gold text-brand-forest font-bold text-xs rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  View on Google Maps
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-emerald hover:bg-brand-forest text-white rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <span>Explore All 9 RUCHI RICH Spices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
