import React, { useState } from 'react';
import { ErrorPageLayout } from './ErrorPageLayout';
import { Wrench, PhoneCall, CheckCircle2 } from 'lucide-react';
import { apiClient } from '../services/api';

export const ServiceUnavailablePage: React.FC = () => {
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleCheckHealth = async () => {
    try {
      setTestResult('Testing system reachability...');
      // Ping backend or health endpoint with a short timeout
      await apiClient.get('/products?limit=1', { timeout: 4000 });
      setTestResult('System restored! Reloading page...');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch {
      setTestResult('Service is still undergoing maintenance. Please wait 1-2 minutes.');
      setTimeout(() => setTestResult(null), 5000);
    }
  };

  // Bespoke animated SVG illustration: Robotic Servicing Arm & Maintenance Grid
  const illustration = (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Service Unavailable Industrial Maintenance Illustration">
      <defs>
        <radialGradient id="maintenanceGlow503" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 146, 0, 0.25)" />
          <stop offset="100%" stopColor="rgba(255, 146, 0, 0)" />
        </radialGradient>
        <linearGradient id="armMetal503" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>

      {/* Amber Maintenance Glow */}
      <circle cx="150" cy="120" r="95" fill="url(#maintenanceGlow503)" />

      {/* Heavy Base Machine Platform */}
      <rect x="70" y="170" width="160" height="25" rx="4" fill="#0A1626" stroke="#FF9200" strokeWidth="2" />
      <line x1="70" y1="182" x2="230" y2="182" stroke="rgba(255, 146, 0, 0.3)" strokeWidth="1" strokeDasharray="6 4" />
      
      {/* Platform Stabilizers */}
      <polygon points="60,195 70,170 70,195" fill="#FF9200" />
      <polygon points="240,195 230,170 230,195" fill="#FF9200" />

      {/* Rotating Alignment Turntable */}
      <g className="anim-spin-slow">
        <circle cx="150" cy="120" r="85" stroke="rgba(255, 146, 0, 0.15)" strokeWidth="1.5" strokeDasharray="8 8" />
        <circle cx="235" cy="120" r="3" fill="#FF9200" />
        <circle cx="65" cy="120" r="3" fill="#FF9200" />
      </g>

      {/* Oscillating Industrial Robot Arm */}
      <g className="anim-float">
        {/* Arm Segment 1 */}
        <path d="M150 170 L115 110" stroke="url(#armMetal503)" strokeWidth="12" strokeLinecap="round" />
        <path d="M150 170 L115 110" stroke="#FF9200" strokeWidth="2" strokeLinecap="round" />
        <circle cx="150" cy="170" r="10" fill="#0A1626" stroke="#FF9200" strokeWidth="3" />

        {/* Joint Elbow */}
        <circle cx="115" cy="110" r="9" fill="#0A1626" stroke="#FF9200" strokeWidth="2.5" />
        <circle cx="115" cy="110" r="3" fill="#FF9200" />

        {/* Arm Segment 2 */}
        <path d="M115 110 L175 65" stroke="url(#armMetal503)" strokeWidth="10" strokeLinecap="round" />
        <path d="M115 110 L175 65" stroke="#FF9200" strokeWidth="2" strokeLinecap="round" />

        {/* Tool Head / Wrench Clamp */}
        <circle cx="175" cy="65" r="7" fill="#0A1626" stroke="#FF9200" strokeWidth="2" />
        <path d="M175 65 L195 48 M195 48 L208 55 M195 48 L188 35" stroke="#FF9200" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Glowing Service Energy Arc */}
        <circle cx="205" cy="45" r="3" fill="#38BDF8" filter="drop-shadow(0 0 6px #38BDF8)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Floating Caution Badge */}
      <rect x="85" y="202" width="130" height="20" rx="4" fill="rgba(10, 22, 38, 0.95)" stroke="rgba(255, 146, 0, 0.5)" strokeWidth="1" />
      <text x="150" y="216" fill="#FBBF24" fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
        MAINTENANCE ACTIVE • 503
      </text>
    </svg>
  );

  return (
    <ErrorPageLayout
      statusCode={503}
      badgeText="SERVICE TEMPORARILY UNAVAILABLE"
      badgeVariant="warning"
      badgeIcon={<Wrench size={15} />}
      title="Service Temporarily Unavailable"
      subtitle="The system is currently undergoing scheduled infrastructure maintenance or handling peak industrial traffic."
      descriptionExtra="This condition is strictly temporary. Our high-availability cluster is redistributing server loads or completing synchronized updates. Services are normally restored in under two minutes."
      illustration={illustration}
      primaryAction={{
        label: 'Test Server & Retry',
        onClick: handleCheckHealth,
        icon: <Wrench size={17} />
      }}
      secondaryAction={{
        label: 'Emergency Contact',
        to: '/contact-us',
        icon: <PhoneCall size={17} />
      }}
      showBackButton={true}
      showHomeButton={true}
      showRetryButton={true}
      onRetry={handleCheckHealth}
      retryLabel="Check Health & Retry"
      customHeaderElement={
        testResult ? (
          <div style={{
            background: 'rgba(255, 146, 0, 0.15)',
            border: '1px solid rgba(255, 146, 0, 0.4)',
            borderRadius: '8px',
            padding: '10px 16px',
            color: '#FF9200',
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '8px'
          }}>
            <CheckCircle2 size={16} />
            <span>{testResult}</span>
          </div>
        ) : null
      }
      diagnostics={[
        { label: 'HTTP Code', value: '503_SERVICE_UNAVAILABLE', isHighlight: true },
        { label: 'Maintenance Window', value: 'Automated Micro-Update', isHighlight: true },
        { label: 'Expected Recovery', value: 'Normally < 60 - 120 Seconds', isSuccess: true },
        { label: 'Failover State', value: 'Redundant nodes synchronizing' }
      ]}
      helpfulLinks={[
        { label: 'Machinery Catalog', to: '/products' },
        { label: 'Direct Support Desk', to: '/contact-us', icon: <PhoneCall size={14} /> },
        { label: 'Company Homepage', to: '/' }
      ]}
      seoTitle="503 - Service Unavailable | Jupiter Industries"
      seoDescription="HTTP 503 Service Unavailable. Jupiter Industries server is temporarily undergoing maintenance or load rebalancing. Please retry shortly."
    />
  );
};

export default ServiceUnavailablePage;
