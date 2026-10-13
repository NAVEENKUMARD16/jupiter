import React from 'react';
import { ErrorPageLayout } from './ErrorPageLayout';
import { Ban, UserCheck, Mail, ShieldX } from 'lucide-react';

export const ForbiddenPage: React.FC = () => {
  // Bespoke animated SVG illustration: Industrial Hazard Barrier & Cyber Clearance Gate
  const illustration = (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Access Denied Hazard Barrier Illustration">
      <defs>
        <linearGradient id="barrierGrad403" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1C0508" />
          <stop offset="100%" stopColor="#0B0102" />
        </linearGradient>
        <linearGradient id="hazardStripes403" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <path d="M0 0 L40 40 M-20 20 L20 60 M20 -20 L60 20" stroke="#EF4444" strokeWidth="8" />
        </linearGradient>
        <radialGradient id="dangerGlow403" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(239, 68, 68, 0.35)" />
          <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
        </radialGradient>
      </defs>

      {/* Ambient background danger glow */}
      <circle cx="150" cy="120" r="95" fill="url(#dangerGlow403)" />

      {/* Rotating outer barrier ring */}
      <g className="anim-spin-slow">
        <circle cx="150" cy="120" r="105" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1.5" strokeDasharray="8 10" />
        <circle cx="150" cy="120" r="115" stroke="rgba(255, 146, 0, 0.15)" strokeWidth="1" strokeDasharray="3 14" />
        <rect x="146" y="5" width="8" height="6" fill="#EF4444" />
        <rect x="146" y="229" width="8" height="6" fill="#EF4444" />
      </g>

      {/* Laser tripwires */}
      <line className="anim-laser" x1="40" y1="90" x2="260" y2="90" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 4" />
      <line className="anim-laser" x1="40" y1="150" x2="260" y2="150" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 4" />

      {/* Industrial Hexagonal Security Gate */}
      <polygon 
        points="150,35 225,75 225,165 150,205 75,165 75,75" 
        fill="url(#barrierGrad403)" 
        stroke="#EF4444" 
        strokeWidth="2.5" 
      />

      {/* Warning Hazard Diagonal Crossbars */}
      <g opacity="0.85">
        <rect x="85" y="105" width="130" height="30" rx="4" fill="#1C0508" stroke="#EF4444" strokeWidth="1.5" />
        {/* Hazard Stripes Pattern */}
        <line x1="95" y1="135" x2="115" y2="105" stroke="#EF4444" strokeWidth="5" />
        <line x1="120" y1="135" x2="140" y2="105" stroke="#EF4444" strokeWidth="5" />
        <line x1="145" y1="135" x2="165" y2="105" stroke="#EF4444" strokeWidth="5" />
        <line x1="170" y1="135" x2="190" y2="105" stroke="#EF4444" strokeWidth="5" />
        <line x1="195" y1="135" x2="215" y2="105" stroke="#EF4444" strokeWidth="5" />
      </g>

      {/* Central Warning Diamond Sign */}
      <g className="anim-float">
        <rect 
          x="130" 
          y="62" 
          width="40" 
          height="40" 
          rx="6" 
          transform="rotate(45 150 82)" 
          fill="#EF4444" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
        />
        {/* Exclamation point */}
        <rect x="148" y="70" width="4" height="15" rx="2" fill="#FFFFFF" />
        <circle cx="150" cy="91" r="2.5" fill="#FFFFFF" />
      </g>

      {/* Clearance Level Readout Tag */}
      <rect x="90" y="172" width="120" height="20" rx="4" fill="rgba(28, 5, 8, 0.9)" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" />
      <text x="150" y="186" fill="#F87171" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
        ACCESS FORBIDDEN • RBAC
      </text>
    </svg>
  );

  return (
    <ErrorPageLayout
      statusCode={403}
      badgeText="ACCESS RESTRICTED"
      badgeVariant="danger"
      badgeIcon={<Ban size={15} />}
      title="Access Forbidden"
      subtitle="Your account does not possess the clearance level required to access this partition."
      descriptionExtra="Although you may be logged in, your current role does not have authorization to view this control section. If you believe this is in error, please contact your system administrator to request elevated role privileges."
      illustration={illustration}
      primaryAction={{
        label: 'Switch Account / Login',
        to: '/admin',
        icon: <UserCheck size={18} />
      }}
      secondaryAction={{
        label: 'Contact Administrator',
        to: '/contact-us',
        icon: <Mail size={17} />
      }}
      showBackButton={true}
      showHomeButton={true}
      diagnostics={[
        { label: 'Security Status', value: '403_FORBIDDEN', isError: true },
        { label: 'Access Policy', value: 'Role-Based Access Control' },
        { label: 'Clearance', value: 'Insufficient Role Privileges', isError: true },
        { label: 'Resolution', value: 'Contact Super Admin for elevated grant', isHighlight: true }
      ]}
      helpfulLinks={[
        { label: 'Admin Login', to: '/admin', icon: <UserCheck size={14} /> },
        { label: 'Contact Support', to: '/contact-us', icon: <Mail size={14} /> },
        { label: 'Homepage', to: '/', icon: <ShieldX size={14} /> }
      ]}
      seoTitle="403 - Access Forbidden | Jupiter Industries"
      seoDescription="HTTP 403 Forbidden. You do not have the required permissions or clearance level to access this Jupiter Industries resource."
    />
  );
};

export default ForbiddenPage;
