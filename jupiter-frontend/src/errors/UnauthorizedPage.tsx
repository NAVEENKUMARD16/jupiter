import React from 'react';
import { ErrorPageLayout } from './ErrorPageLayout';
import { ShieldAlert, LogIn, Key, HelpCircle } from 'lucide-react';

export const UnauthorizedPage: React.FC = () => {
  // Bespoke animated SVG illustration: Industrial Security Lock & Biometric Scanner
  const illustration = (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Security Authentication Lock Illustration">
      <defs>
        {/* Gradients */}
        <linearGradient id="shieldGrad401" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#002D4C" />
          <stop offset="100%" stopColor="#001424" />
        </linearGradient>
        <linearGradient id="goldAccent401" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FF9200" />
        </linearGradient>
        <radialGradient id="lockGlow401" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 146, 0, 0.35)" />
          <stop offset="100%" stopColor="rgba(255, 146, 0, 0)" />
        </radialGradient>
        <clipPath id="shieldClip401">
          <path d="M150 40 L215 65 V125 C215 165 150 195 150 195 C150 195 85 165 85 125 V65 L150 40 Z" />
        </clipPath>
      </defs>

      {/* Ambient background glow */}
      <circle cx="150" cy="120" r="95" fill="url(#lockGlow401)" />

      {/* Rotating outer cyber ring */}
      <g className="anim-spin-slow">
        <circle cx="150" cy="120" r="105" stroke="rgba(255, 146, 0, 0.2)" strokeWidth="1.5" strokeDasharray="6 8" />
        <circle cx="150" cy="120" r="115" stroke="rgba(0, 180, 255, 0.15)" strokeWidth="1" strokeDasharray="2 12" />
        <circle cx="255" cy="120" r="3" fill="#FF9200" />
        <circle cx="45" cy="120" r="3" fill="#0A84FF" />
      </g>

      {/* Inner counter-rotating calibration ring */}
      <g className="anim-spin-reverse-slow">
        <circle cx="150" cy="120" r="88" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" strokeDasharray="14 10" />
        <rect x="146" y="28" width="8" height="4" fill="#FF9200" />
        <rect x="146" y="208" width="8" height="4" fill="#FF9200" />
      </g>

      {/* Security Shield Body */}
      <path 
        d="M150 40 L215 65 V125 C215 165 150 195 150 195 C150 195 85 165 85 125 V65 L150 40 Z" 
        fill="url(#shieldGrad401)" 
        stroke="#FF9200" 
        strokeWidth="2.5" 
      />

      {/* Animated scanline sweeping inside the shield */}
      <g clipPath="url(#shieldClip401)">
        <rect className="anim-scanline" x="80" y="40" width="140" height="4" fill="rgba(255, 146, 0, 0.8)" filter="drop-shadow(0 0 6px #FF9200)" />
      </g>

      {/* Heavy Industrial Padlock Graphic */}
      <g transform="translate(125, 95)">
        {/* Shackle */}
        <path 
          d="M12 18 V10 C12 2.5 38 2.5 38 10 V18" 
          stroke="url(#goldAccent401)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Lock Body */}
        <rect 
          x="4" 
          y="18" 
          width="42" 
          height="32" 
          rx="6" 
          fill="#001827" 
          stroke="#FF9200" 
          strokeWidth="2" 
        />
        {/* Keyhole */}
        <circle cx="25" cy="30" r="4" fill="#FF9200" />
        <path d="M23 32 L22 41 H28 L27 32 Z" fill="#FF9200" />
      </g>

      {/* Security Status Tag */}
      <rect x="100" y="208" width="100" height="22" rx="4" fill="rgba(0, 24, 39, 0.9)" stroke="rgba(255, 146, 0, 0.4)" strokeWidth="1" />
      <text x="150" y="223" fill="#FF9200" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
        AUTH RESTRICTED
      </text>
    </svg>
  );

  return (
    <ErrorPageLayout
      statusCode={401}
      badgeText="AUTHENTICATION REQUIRED"
      badgeVariant="warning"
      badgeIcon={<ShieldAlert size={15} />}
      title="Authentication Required"
      subtitle="Access to this industrial management node requires an active authorized session."
      descriptionExtra="Your session credentials may have expired or you have not yet authenticated. Please log in with your system administrator or operator credentials to proceed."
      illustration={illustration}
      primaryAction={{
        label: 'Log In to Admin Console',
        to: '/admin',
        icon: <LogIn size={18} />
      }}
      showBackButton={true}
      showHomeButton={true}
      diagnostics={[
        { label: 'Security Status', value: '401_UNAUTHORIZED', isHighlight: true },
        { label: 'Authorization', value: 'Bearer Token Required', isError: true },
        { label: 'Security Gate', value: 'Jupiter Auth Gateway v2.4' },
        { label: 'Suggested Action', value: 'Authenticate via Admin Portal', isSuccess: true }
      ]}
      helpfulLinks={[
        { label: 'Admin Login', to: '/admin', icon: <LogIn size={14} /> },
        { label: 'Forgot Password', to: '/admin/forgot-password', icon: <Key size={14} /> },
        { label: 'Help & Contact', to: '/contact-us', icon: <HelpCircle size={14} /> }
      ]}
      seoTitle="401 - Authentication Required | Jupiter Industries"
      seoDescription="HTTP 401 Unauthorized. Access to this Jupiter Industries control interface requires valid authentication credentials."
    />
  );
};

export default UnauthorizedPage;
