import React from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorPageLayout } from './ErrorPageLayout';
import { Compass, Package, Search, Layers, Box, Cpu } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  // Bespoke animated SVG illustration: Industrial Radar Beacon & Route Scanner
  const illustration = (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Route Radar Scanner Illustration">
      <defs>
        <radialGradient id="radarGlow404" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 180, 255, 0.25)" />
          <stop offset="100%" stopColor="rgba(0, 180, 255, 0)" />
        </radialGradient>
        <linearGradient id="radarBeam404" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255, 146, 0, 0.7)" />
          <stop offset="100%" stopColor="rgba(255, 146, 0, 0)" />
        </linearGradient>
      </defs>

      {/* Radar display backplate */}
      <circle cx="150" cy="120" r="100" fill="#001424" stroke="rgba(0, 180, 255, 0.25)" strokeWidth="1.5" />
      <circle cx="150" cy="120" r="95" fill="url(#radarGlow404)" />

      {/* Concentric radar range rings */}
      <circle cx="150" cy="120" r="75" stroke="rgba(0, 180, 255, 0.15)" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="150" cy="120" r="50" stroke="rgba(0, 180, 255, 0.2)" strokeWidth="1" />
      <circle cx="150" cy="120" r="25" stroke="rgba(0, 180, 255, 0.25)" strokeWidth="1" strokeDasharray="2 3" />

      {/* Crosshair coordinate axes */}
      <line x1="50" y1="120" x2="250" y2="120" stroke="rgba(0, 180, 255, 0.25)" strokeWidth="1" />
      <line x1="150" y1="20" x2="150" y2="220" stroke="rgba(0, 180, 255, 0.25)" strokeWidth="1" />

      {/* Sweeping Radar Beam */}
      <g style={{ transformOrigin: '150px 120px' }} className="anim-radar-sweep">
        <path d="M150 120 L245 80 A100 100 0 0 1 250 120 Z" fill="url(#radarBeam404)" opacity="0.65" />
        <line x1="150" y1="120" x2="250" y2="120" stroke="#FF9200" strokeWidth="2" filter="drop-shadow(0 0 5px #FF9200)" />
      </g>

      {/* Pulsing lost signal ping */}
      <circle cx="195" cy="85" r="5" fill="#FF9200" filter="drop-shadow(0 0 6px #FF9200)">
        <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="195" cy="85" r="14" stroke="#FF9200" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="6;22;26" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.2;0" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Outer measurement ring with rotation */}
      <g className="anim-spin-slow">
        <circle cx="150" cy="120" r="110" stroke="rgba(255, 146, 0, 0.2)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="150" cy="10" r="2.5" fill="#FF9200" />
        <circle cx="150" cy="230" r="2.5" fill="#FF9200" />
      </g>

      {/* Center radar origin point */}
      <circle cx="150" cy="120" r="4" fill="#FFFFFF" />

      {/* Radar status tag */}
      <rect x="90" y="196" width="120" height="20" rx="4" fill="rgba(0, 20, 36, 0.9)" stroke="rgba(0, 180, 255, 0.4)" strokeWidth="1" />
      <text x="150" y="210" fill="#38BDF8" fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
        TELEMETRY: ROUTE NOT FOUND
      </text>
    </svg>
  );

  return (
    <ErrorPageLayout
      statusCode={404}
      badgeText="PAGE NOT FOUND"
      badgeVariant="orange"
      badgeIcon={<Compass size={15} />}
      title="Page Not Found"
      subtitle="The machinery specification, blueprint, or page URL you requested cannot be located in the Jupiter Industries network."
      descriptionExtra={`We searched our database for "${location.pathname}", but no active route or document matched. Please double-check the URL or explore our machinery catalog below.`}
      illustration={illustration}
      primaryAction={{
        label: 'Explore Machinery Catalog',
        to: '/products',
        icon: <Package size={18} />
      }}
      showBackButton={true}
      showHomeButton={true}
      diagnostics={[
        { label: 'Status Code', value: '404_PAGE_NOT_FOUND', isHighlight: true },
        { label: 'Requested Path', value: location.pathname || '/', isError: true },
        { label: 'Route Registry', value: 'Jupiter Dynamic Router v7' },
        { label: 'Recommendation', value: 'Navigate to Machinery Catalog or Home', isSuccess: true }
      ]}
      helpfulLinks={[
        { label: 'Fly Ash Brick Machines', to: '/products/fly-ash-brick-machine', icon: <Layers size={14} /> },
        { label: 'Block Making Machines', to: '/products/hollow-and-solid-block-machine', icon: <Box size={14} /> },
        { label: 'Concrete Batching Plants', to: '/products/batching-plant', icon: <Cpu size={14} /> },
        { label: 'Contact Us', to: '/contact-us', icon: <Search size={14} /> }
      ]}
      seoTitle="404 - Page Not Found | Jupiter Industries"
      seoDescription="The page you are looking for could not be found. Explore Jupiter Industries' industry-leading fly ash brick and concrete block making machinery."
    />
  );
};

export default NotFoundPage;
