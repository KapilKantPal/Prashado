import React from 'react';

type DoodleProps = {
    className?: string;
};

export const PizzaDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Pizza Crust - Golden Brown */}
        <path
            d="M50 10 L90 85 H10 L50 10Z"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="2.5"
        />
        {/* Cheese Layer - Yellow */}
        <path
            d="M50 20 L85 82 H15 L50 20Z"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="1.5"
        />
        {/* Pepperoni circles - Red */}
        <circle cx="50" cy="45" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        <circle cx="35" cy="60" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        <circle cx="65" cy="65" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        <circle cx="50" cy="75" r="4" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        {/* Green Bell Pepper pieces */}
        <ellipse cx="42" cy="50" rx="3" ry="4" fill="#10B981" stroke="#059669" strokeWidth="1" />
        <ellipse cx="58" cy="55" rx="3" ry="4" fill="#10B981" stroke="#059669" strokeWidth="1" />
        {/* Cheese melt drips */}
        <path d="M90 85 Q95 90 90 95" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
        <path d="M10 85 Q5 90 10 95" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
    </svg>
);

export const MomoDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Momo Body - White/Cream */}
        <path
            d="M20 70 C20 40 40 20 50 20 C60 20 80 40 80 70 Z"
            fill="#FEF3C7"
            stroke="#D97706"
            strokeWidth="2"
        />
        <path
            d="M20 70 Q50 85 80 70"
            fill="#FDE68A"
            stroke="#D97706"
            strokeWidth="2"
        />

        {/* Pleats / Folds - Brown lines */}
        <path d="M50 20 L50 40" stroke="#92400E" strokeWidth="2" />
        <path d="M40 25 L45 40" stroke="#92400E" strokeWidth="2" />
        <path d="M60 25 L55 40" stroke="#92400E" strokeWidth="2" />
        <path d="M35 35 L40 45" stroke="#92400E" strokeWidth="1.5" />
        <path d="M65 35 L60 45" stroke="#92400E" strokeWidth="1.5" />

        {/* Steam - Light gray */}
        <path d="M35 10 Q40 5 45 10" stroke="#9CA3AF" strokeWidth="2" opacity="0.7" />
        <path d="M50 5 Q55 0 60 5" stroke="#9CA3AF" strokeWidth="2" opacity="0.7" />
        <path d="M60 12 Q65 7 70 12" stroke="#9CA3AF" strokeWidth="2" opacity="0.7" />
    </svg>
);

export const BeverageDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Glass Cup - Transparent with outline */}
        <path
            d="M25 20 L30 80 Q32 90 50 90 Q68 90 70 80 L75 20 Z"
            fill="#DBEAFE"
            fillOpacity="0.3"
            stroke="#3B82F6"
            strokeWidth="2.5"
        />
        <line x1="25" y1="20" x2="75" y2="20" stroke="#3B82F6" strokeWidth="2.5" />

        {/* Drink - Blue/Cyan gradient effect */}
        <path
            d="M28 40 L31 78 Q33 85 50 85 Q67 85 69 78 L72 40 Z"
            fill="#60A5FA"
            fillOpacity="0.6"
        />

        {/* Drink surface */}
        <path d="M28 40 Q50 45 72 40" stroke="#3B82F6" strokeWidth="2" />

        {/* Straw - Red/Pink */}
        <path d="M45 90 L60 5" stroke="#EC4899" strokeWidth="3" />
        <path d="M60 5 L62 5 L47 90 L45 90" fill="#EC4899" stroke="none" />

        {/* Bubbles - White/Light blue */}
        <circle cx="45" cy="60" r="3" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1" />
        <circle cx="55" cy="50" r="2.5" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1" />
        <circle cx="40" cy="75" r="2" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1" />
        <circle cx="58" cy="70" r="2" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1" />

        {/* Mint Leaf decoration - Green */}
        <path
            d="M60 5 Q70 5 70 15 Q60 15 60 5Z"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="1"
        />
        <path d="M65 5 L65 15" stroke="#059669" strokeWidth="1" />
    </svg>
);

export const NoodleDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Bowl */}
        <path
            d="M20 50 C20 80 35 90 50 90 C65 90 80 80 80 50"
            fill="#FEF3C7"
            stroke="#EF4444"
            strokeWidth="2.5"
        />

        {/* Noodles Mass */}
        <path
            d="M25 50 Q30 30 50 25 Q70 30 75 50"
            fill="#FCD34D"
            stroke="#D97706"
            strokeWidth="1.5"
        />

        {/* Individual Noodle Strands */}
        <path d="M35 45 Q40 35 45 45 T55 45 T65 45" stroke="#F59E0B" strokeWidth="2" />
        <path d="M30 50 Q35 40 45 50 T60 50 T70 50" stroke="#F59E0B" strokeWidth="2" />

        {/* Chopsticks */}
        <line x1="85" y1="15" x2="60" y2="60" stroke="#78350F" strokeWidth="2.5" />
        <line x1="90" y1="20" x2="65" y2="65" stroke="#78350F" strokeWidth="2.5" />

        {/* Steam */}
        <path d="M40 20 Q45 10 50 20" stroke="#9CA3AF" strokeWidth="2" opacity="0.6" />
        <path d="M55 15 Q60 5 65 15" stroke="#9CA3AF" strokeWidth="2" opacity="0.6" />
    </svg>
);

export const FriesDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Fries Container - Red */}
        <path
            d="M30 50 L35 90 H65 L70 50 Z"
            fill="#EF4444"
            stroke="#B91C1C"
            strokeWidth="2"
        />
        <path d="M32 55 H68" stroke="#B91C1C" strokeWidth="1" opacity="0.5" />

        {/* Fries - Yellow Sticks */}
        <rect x="35" y="20" width="6" height="40" rx="1" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" transform="rotate(-15 35 60)" />
        <rect x="45" y="15" width="6" height="45" rx="1" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" transform="rotate(-5 45 60)" />
        <rect x="55" y="18" width="6" height="42" rx="1" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" transform="rotate(5 55 60)" />
        <rect x="65" y="25" width="6" height="35" rx="1" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" transform="rotate(15 65 60)" />

        {/* Salt flecks */}
        <circle cx="48" cy="30" r="1" fill="#FFF" />
        <circle cx="58" cy="40" r="1" fill="#FFF" />
    </svg>
);

export const SpiralDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Stick */}
        <line x1="50" y1="10" x2="50" y2="95" stroke="#92400E" strokeWidth="3" />

        {/* Spiral Potential */}
        <path
            d="M40 20 C20 25 20 35 40 35 C60 35 70 25 70 20"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="6"
        />
        <path
            d="M40 38 C20 43 20 53 40 53 C60 53 70 43 70 38"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="6"
        />
        <path
            d="M40 56 C20 61 20 71 40 71 C60 71 70 61 70 56"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="6"
        />
        <path
            d="M40 74 C20 79 20 89 40 89 C60 89 70 79 70 74"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="6"
        />

        {/* Seasoning */}
        <circle cx="35" cy="30" r="1" fill="#DC2626" />
        <circle cx="65" cy="48" r="1" fill="#DC2626" />
        <circle cx="45" cy="65" r="1" fill="#DC2626" />
    </svg>
);

export const CornDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Corn Cobb Shape */}
        <ellipse cx="50" cy="50" rx="20" ry="40" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />

        {/* Kernels pattern - simplified grid */}
        <line x1="40" y1="15" x2="40" y2="85" stroke="#F59E0B" strokeWidth="1" />
        <line x1="50" y1="12" x2="50" y2="88" stroke="#F59E0B" strokeWidth="1" />
        <line x1="60" y1="15" x2="60" y2="85" stroke="#F59E0B" strokeWidth="1" />

        <path d="M32 30 H68" stroke="#F59E0B" strokeWidth="1" />
        <path d="M30 40 H70" stroke="#F59E0B" strokeWidth="1" />
        <path d="M30 50 H70" stroke="#F59E0B" strokeWidth="1" />
        <path d="M30 60 H70" stroke="#F59E0B" strokeWidth="1" />
        <path d="M35 70 H65" stroke="#F59E0B" strokeWidth="1" />

        {/* Leaves / Husk */}
        <path
            d="M50 90 Q20 80 15 50 Q20 85 50 90"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="2"
        />
        <path
            d="M50 90 Q80 80 85 50 Q80 85 50 90"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="2"
        />
    </svg>
);

export const CelebrationDoodle: React.FC<DoodleProps> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Party Popper Cone */}
        <path
            d="M20 80 L40 60 L50 70 L30 90 Q20 95 15 95 Q10 90 20 80"
            fill="#F472B6"
            stroke="#BE185D"
            strokeWidth="2"
        />
        {/* Stripes on cone */}
        <path d="M25 75 L45 55" stroke="#BE185D" strokeWidth="1" />
        <path d="M35 85 L55 65" stroke="#BE185D" strokeWidth="1" />

        {/* Explosion Lines */}
        <path d="M50 50 L60 40" stroke="#F59E0B" strokeWidth="2" />
        <path d="M60 60 L75 50" stroke="#F59E0B" strokeWidth="2" />
        <path d="M45 45 L45 30" stroke="#F59E0B" strokeWidth="2" />

        {/* Confetti - Triangles & Circles */}
        <path d="M60 20 L70 25 L65 35 Z" fill="#10B981" stroke="none" />
        <circle cx="80" cy="30" r="3" fill="#3B82F6" stroke="none" />
        <rect x="40" y="10" width="6" height="6" transform="rotate(45 43 13)" fill="#F59E0B" stroke="none" />
        <path d="M80 60 L90 55 L85 45 Z" fill="#EC4899" stroke="none" />
        <circle cx="20" cy="40" r="2" fill="#8B5CF6" stroke="none" />

        {/* Streamers */}
        <path d="M50 50 Q60 30 70 40 T90 30" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <path d="M55 55 Q70 60 80 50 T95 60" stroke="#10B981" strokeWidth="1.5" fill="none" />
    </svg>
);
