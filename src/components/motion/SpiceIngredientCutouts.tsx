import React from 'react';

// Authentic Handcrafted Indian Brass Katori Bowl with Ground Spice Powder
export const BrassSpiceBowl: React.FC<{
  spiceColor?: string;
  spiceHighlight?: string;
  className?: string;
}> = ({
  spiceColor = '#D97706',
  spiceHighlight = '#F59E0B',
  className = 'w-36 h-28',
}) => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      {/* Brass metal gradients */}
      <linearGradient id="brassOuter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D061" />
        <stop offset="35%" stopColor="#D4A017" />
        <stop offset="70%" stopColor="#996515" />
        <stop offset="100%" stopColor="#5D3A0A" />
      </linearGradient>
      <linearGradient id="brassRim" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C68615" />
        <stop offset="50%" stopColor="#FFF2A3" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>
      {/* Ground spice mound gradient */}
      <radialGradient id="spicePowder" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor={spiceHighlight} />
        <stop offset="60%" stopColor={spiceColor} />
        <stop offset="100%" stopColor="#4A2600" />
      </radialGradient>
      {/* Soft contact shadow */}
      <radialGradient id="bowlShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
        <stop offset="70%" stopColor="rgba(0,0,0,0.25)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>

    {/* Ground contact shadow */}
    <ellipse cx="80" cy="110" rx="60" ry="8" fill="url(#bowlShadow)" />

    {/* Bowl base pedestal ring */}
    <ellipse cx="80" cy="100" rx="36" ry="6" fill="#754C0D" stroke="#D4A017" strokeWidth="1" />

    {/* Bowl body */}
    <path
      d="M20 50 C20 85 45 102 80 102 C115 102 140 85 140 50 Z"
      fill="url(#brassOuter)"
      stroke="#754C0D"
      strokeWidth="1.5"
    />

    {/* Hammered brass specular reflections */}
    <path d="M35 55 C35 78 52 92 80 92" stroke="#FFF0A0" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    <path d="M125 55 C125 78 108 92 80 92" stroke="#503008" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

    {/* Overflowing ground spice mound */}
    <path
      d="M26 50 C26 40 50 20 80 18 C110 20 134 40 134 50 C134 58 110 64 80 64 C50 64 26 58 26 50 Z"
      fill="url(#spicePowder)"
    />

    {/* Spice powder texture specks */}
    <g opacity="0.4">
      <circle cx="75" cy="28" r="1.5" fill={spiceHighlight} />
      <circle cx="88" cy="32" r="1.2" fill={spiceHighlight} />
      <circle cx="68" cy="38" r="1.8" fill="#FFF2A3" />
      <circle cx="94" cy="40" r="1.5" fill={spiceHighlight} />
      <circle cx="56" cy="45" r="1.2" fill={spiceHighlight} />
      <circle cx="106" cy="44" r="1.6" fill={spiceHighlight} />
      <circle cx="82" cy="48" r="2" fill="#FFE885" />
    </g>

    {/* Heavy brass rim lip */}
    <ellipse cx="80" cy="50" rx="58" ry="12" fill="none" stroke="url(#brassRim)" strokeWidth="3.5" />
    <ellipse cx="80" cy="50" rx="56" ry="10" fill="none" stroke="#754C0D" strokeWidth="1" opacity="0.5" />
  </svg>
);

// Whole Turmeric Rhizome / Fresh Root
export const TurmericRootCutout: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="turmericSkin" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#E5A630" />
        <stop offset="40%" stopColor="#C97B14" />
        <stop offset="80%" stopColor="#874706" />
        <stop offset="100%" stopColor="#542B02" />
      </linearGradient>
      <radialGradient id="turmericCut" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFC837" />
        <stop offset="60%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#E65100" />
      </radialGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="60" cy="72" rx="45" ry="6" fill="rgba(0,0,0,0.35)" />
    {/* Main root body */}
    <path
      d="M18 45 C15 32 30 20 55 24 C75 16 95 25 105 38 C110 46 102 58 88 56 C70 65 35 62 18 45 Z"
      fill="url(#turmericSkin)"
      stroke="#5A2E03"
      strokeWidth="1.2"
    />
    {/* Side root nodule */}
    <path
      d="M55 24 C58 12 72 10 78 18 C80 24 75 28 68 28 Z"
      fill="url(#turmericSkin)"
      stroke="#5A2E03"
      strokeWidth="1"
    />
    {/* Rhizome ring ridges */}
    <g stroke="#FDE047" strokeWidth="1" opacity="0.4" strokeLinecap="round">
      <path d="M32 30 C34 40 33 48 30 52" />
      <path d="M46 26 C48 38 46 50 44 56" />
      <path d="M62 26 C64 36 63 50 60 58" />
      <path d="M78 28 C80 38 78 48 76 54" />
      <path d="M92 34 C94 42 92 48 90 52" />
    </g>
    {/* Sliced exposed vibrant core on root tip */}
    <ellipse cx="20" cy="44" rx="8" ry="12" fill="url(#turmericCut)" stroke="#D97706" strokeWidth="1" />
    <circle cx="20" cy="44" r="4" fill="#FEF08A" opacity="0.6" />
  </svg>
);

// Whole Dried Indian Red Chilli Pod
export const DriedRedChilliCutout: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="chilliBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="40%" stopColor="#B91C1C" />
        <stop offset="80%" stopColor="#7F1D1D" />
        <stop offset="100%" stopColor="#450A0A" />
      </linearGradient>
      <linearGradient id="chilliStem" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#65A30D" />
        <stop offset="70%" stopColor="#3F6212" />
        <stop offset="100%" stopColor="#1A2E05" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="60" cy="62" rx="42" ry="5" fill="rgba(0,0,0,0.35)" />
    {/* Curved chilli body */}
    <path
      d="M26 32 C38 24 70 20 95 34 C108 42 112 50 114 54 C108 52 92 44 76 40 C52 36 34 40 26 42 Z"
      fill="url(#chilliBody)"
      stroke="#450A0A"
      strokeWidth="1.2"
    />
    {/* Specular curved sheen line */}
    <path
      d="M38 28 C55 24 80 26 96 36"
      stroke="#FCA5A5"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Green calyx cap and stem */}
    <path
      d="M26 32 C26 28 22 25 14 26 C10 27 6 30 8 32 C12 30 18 31 22 36 C24 39 26 42 26 42 Z"
      fill="url(#chilliStem)"
      stroke="#1E3A04"
      strokeWidth="1"
    />
    <path d="M12 26 C10 18 16 12 24 8" stroke="url(#chilliStem)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Green Cardamom Pods Cluster
export const CardamomClusterCutout: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="cardamomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A3E635" />
        <stop offset="40%" stopColor="#65A30D" />
        <stop offset="80%" stopColor="#3F6212" />
        <stop offset="100%" stopColor="#1E3A04" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="40" cy="70" rx="26" ry="5" fill="rgba(0,0,0,0.3)" />
    {/* Main central pod */}
    <g transform="rotate(-15 36 40)">
      <path
        d="M36 15 C26 25 22 42 28 54 C32 60 40 60 44 54 C50 42 46 25 36 15 Z"
        fill="url(#cardamomGrad)"
        stroke="#1E3A04"
        strokeWidth="1"
      />
      <path d="M36 18 C33 28 33 42 36 52" stroke="#BEF264" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <path d="M36 15 L36 10" stroke="#3F6212" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    {/* Second angled pod */}
    <g transform="rotate(35 48 46)">
      <path
        d="M48 24 C40 32 38 46 42 54 C46 58 52 58 56 54 C60 46 58 32 48 24 Z"
        fill="url(#cardamomGrad)"
        stroke="#1E3A04"
        strokeWidth="1"
      />
      <path d="M48 26 C46 34 46 44 48 52" stroke="#BEF264" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </g>
  </svg>
);

// Ceylon Cinnamon Bark Quill
export const CinnamonStickCutout: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="cinnamonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="40%" stopColor="#92400E" />
        <stop offset="80%" stopColor="#713F12" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="50" cy="52" rx="38" ry="5" fill="rgba(0,0,0,0.3)" />
    {/* Bark stick cylinder */}
    <g transform="rotate(18 50 30)">
      <path
        d="M20 22 L80 22 C84 22 86 36 80 36 L20 36 C14 36 16 22 20 22 Z"
        fill="url(#cinnamonGrad)"
        stroke="#351402"
        strokeWidth="1"
      />
      {/* Scroll curl on left end */}
      <ellipse cx="20" cy="29" rx="4" ry="7" fill="#451A03" stroke="#D97706" strokeWidth="1" />
      <path d="M20 25 C22 27 22 31 20 33" stroke="#FDE68A" strokeWidth="1" fill="none" />
      {/* Bark striations */}
      <path d="M30 25 L75 25" stroke="#FDE68A" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 2" />
      <path d="M25 32 L70 32" stroke="#F59E0B" strokeWidth="0.8" opacity="0.3" strokeDasharray="6 3" />
    </g>
  </svg>
);

// Whole Cloves & Star Anise Duo
export const WholeSpiceAccentsCutout: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="cloveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#78350F" />
        <stop offset="60%" stopColor="#451A03" />
        <stop offset="100%" stopColor="#1C0901" />
      </linearGradient>
      <linearGradient id="starAniseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B45309" />
        <stop offset="50%" stopColor="#78350F" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="45" cy="78" rx="30" ry="6" fill="rgba(0,0,0,0.3)" />

    {/* Star Anise on right */}
    <g transform="translate(36, 20) scale(0.7)">
      {/* 8 carpels */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
        <path
          key={rot}
          d="M30 30 C30 16 26 4 30 0 C34 4 30 16 30 30 Z"
          fill="url(#starAniseGrad)"
          stroke="#2A0F02"
          strokeWidth="0.8"
          transform={`rotate(${rot} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="5" fill="#92400E" stroke="#F59E0B" strokeWidth="1" />
    </g>

    {/* Clove stem on left */}
    <g transform="translate(14, 30) rotate(-28 15 25)">
      <path d="M13 18 L10 48 C10 50 18 50 18 48 L15 18 Z" fill="url(#cloveGrad)" stroke="#1C0901" strokeWidth="0.8" />
      <ellipse cx="14" cy="12" rx="5" ry="6" fill="#A16207" stroke="#451A03" strokeWidth="1" />
      <path d="M9 16 C12 18 16 18 19 16" stroke="#FEF3C7" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </g>
  </svg>
);

// Whole Coriander Seeds & Herb Sprig
export const CorianderSeedsCutout: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="seedGrad" cx="40%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="40%" stopColor="#CA8A04" />
        <stop offset="90%" stopColor="#854D0E" />
        <stop offset="100%" stopColor="#422006" />
      </radialGradient>
      <linearGradient id="herbGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="40" cy="68" rx="28" ry="6" fill="rgba(0,0,0,0.25)" />
    {/* Little sprig of fresh cilantro behind */}
    <path d="M25 45 C20 35 24 22 36 28 C30 20 44 18 48 26 C55 18 64 24 58 35" stroke="url(#herbGreen)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Spherical ribbed coriander seeds */}
    <g>
      {[
        { cx: 30, cy: 52, r: 7 },
        { cx: 44, cy: 56, r: 7.5 },
        { cx: 56, cy: 48, r: 6.5 },
        { cx: 38, cy: 44, r: 6.8 },
        { cx: 50, cy: 40, r: 6.2 },
        { cx: 24, cy: 58, r: 5.5 },
        { cx: 62, cy: 56, r: 5.8 },
      ].map((seed, i) => (
        <g key={i}>
          <circle cx={seed.cx} cy={seed.cy} r={seed.r} fill="url(#seedGrad)" stroke="#422006" strokeWidth="0.8" />
          {/* Subtle striation ridges */}
          <path
            d={`M${seed.cx - seed.r * 0.7} ${seed.cy} A ${seed.r * 0.8} ${seed.r} 0 0 1 ${seed.cx + seed.r * 0.7} ${seed.cy}`}
            stroke="#FEF9C3"
            strokeWidth="0.6"
            opacity="0.5"
            fill="none"
          />
        </g>
      ))}
    </g>
  </svg>
);

// Whole Black Peppercorns & Cumin Cluster
export const PepperCuminCutout: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="pepperGrad" cx="35%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#52525B" />
        <stop offset="40%" stopColor="#27272A" />
        <stop offset="85%" stopColor="#09090B" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
      <linearGradient id="cuminGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A16207" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
    </defs>
    <ellipse cx="40" cy="68" rx="26" ry="5" fill="rgba(0,0,0,0.3)" />
    {/* Black peppercorns */}
    {[
      { cx: 32, cy: 50, r: 6.5 },
      { cx: 46, cy: 54, r: 7 },
      { cx: 58, cy: 46, r: 6 },
      { cx: 42, cy: 42, r: 6.2 },
      { cx: 25, cy: 56, r: 5 },
    ].map((pep, i) => (
      <circle key={i} cx={pep.cx} cy={pep.cy} r={pep.r} fill="url(#pepperGrad)" stroke="#18181B" strokeWidth="0.8" />
    ))}
    {/* Slender cumin seeds scattered around */}
    {[
      { d: 'M48 34 C54 36 58 38 64 36', rot: 15 },
      { d: 'M20 44 C26 46 30 48 36 46', rot: -20 },
      { d: 'M50 60 C56 62 60 64 66 62', rot: 30 },
    ].map((seed, i) => (
      <path key={i} d={seed.d} stroke="url(#cuminGrad)" strokeWidth="2.5" strokeLinecap="round" />
    ))}
  </svg>
);
