import React, { useState } from 'react';
import { ErrorPageLayout } from './ErrorPageLayout';
import { AlertTriangle, Wrench, RefreshCw, Mail } from 'lucide-react';

export interface InternalServerErrorPageProps {
  error?: Error | null;
  errorInfo?: { componentStack?: string | null } | null;
  onResetError?: () => void;
}

export const InternalServerErrorPage: React.FC<InternalServerErrorPageProps> = ({
  error,
  errorInfo,
  onResetError
}) => {
  const [incidentId] = useState(() => `INC-500-${Math.floor(100000 + Math.random() * 900000)}`);

  const handleRetry = () => {
    if (onResetError) {
      onResetError();
    } else {
      window.location.reload();
    }
  };

  // Bespoke animated SVG illustration: Industrial Gear Train & Server Telemetry Anomaly
  const illustration = (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Internal Server Error Mechanical Gears Illustration">
      <defs>
        <radialGradient id="anomalyGlow500" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
          <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
        </radialGradient>
        <linearGradient id="gearMetal500" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Background Warning Glow */}
      <circle cx="150" cy="120" r="95" fill="url(#anomalyGlow500)" />

      {/* Background Server Rack Enclosure */}
      <rect x="55" y="45" width="190" height="150" rx="10" fill="#020813" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" />
      
      {/* Server Rack Status LEDs */}
      <g transform="translate(68, 55)">
        <circle cx="5" cy="5" r="3" fill="#EF4444" />
        <circle cx="15" cy="5" r="3" fill="#FF9200">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="5" r="3" fill="#10B981" />
        <line x1="40" y1="5" x2="155" y2="5" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" strokeDasharray="4 4" />
      </g>

      {/* Large Driving Industrial Gear (Rotating Clockwise) */}
      <g transform="translate(120, 120)" className="anim-gear-fast">
        {/* 8 Gear Teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect
            key={i}
            x="-7"
            y="-46"
            width="14"
            height="14"
            rx="2"
            fill="url(#gearMetal500)"
            stroke="#EF4444"
            strokeWidth="1.2"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Gear Rim */}
        <circle cx="0" cy="0" r="40" fill="url(#gearMetal500)" stroke="#EF4444" strokeWidth="2" />
        {/* Cutout Holes */}
        <circle cx="0" cy="-20" r="8" fill="#020813" />
        <circle cx="0" cy="20" r="8" fill="#020813" />
        <circle cx="-20" cy="0" r="8" fill="#020813" />
        <circle cx="20" cy="0" r="8" fill="#020813" />
        {/* Center Axle */}
        <circle cx="0" cy="0" r="14" fill="#020813" stroke="#FF9200" strokeWidth="2" />
        <circle cx="0" cy="0" r="5" fill="#EF4444" />
      </g>

      {/* Interlocking Secondary Small Gear (Counter-Rotating) */}
      <g transform="translate(182, 78)" className="anim-gear-counter">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <rect
            key={i}
            x="-5"
            y="-27"
            width="10"
            height="10"
            rx="2"
            fill="url(#gearMetal500)"
            stroke="#FF9200"
            strokeWidth="1.2"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="23" fill="url(#gearMetal500)" stroke="#FF9200" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="7" fill="#020813" stroke="#EF4444" strokeWidth="1.5" />
      </g>

      {/* Warning Hazard Strobe Badge in foreground */}
      <g className="anim-float" transform="translate(75, 135)">
        <polygon points="20,0 40,34 0,34" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="18.5" y="10" width="3" height="12" rx="1" fill="#FFFFFF" />
        <circle cx="20" cy="27" r="1.8" fill="#FFFFFF" />
      </g>

      {/* Status Footer Tag */}
      <rect x="90" y="200" width="120" height="20" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" />
      <text x="150" y="214" fill="#F87171" fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">
        CRITICAL ENGINE ANOMALY
      </text>
    </svg>
  );

  const technicalDetails = error
    ? `${error.name}: ${error.message}\n\nStack:\n${error.stack || 'No stack trace available'}${
        errorInfo?.componentStack ? `\n\nComponent Stack:\n${errorInfo.componentStack}` : ''
      }`
    : undefined;

  return (
    <ErrorPageLayout
      statusCode={500}
      badgeText="INTERNAL SERVER ERROR"
      badgeVariant="danger"
      badgeIcon={<AlertTriangle size={15} />}
      title="Internal Server Error"
      subtitle="Our machinery telemetry system encountered an unexpected internal server exception."
      descriptionExtra="The server encountered an unhandled condition that prevented it from fulfilling your request. Automatic recovery protocols have logged the event, and our engineering team is actively investigating."
      illustration={illustration}
      primaryAction={{
        label: 'Reload / Retry System',
        onClick: handleRetry,
        icon: <RefreshCw size={17} />
      }}
      secondaryAction={{
        label: 'Report Issue to Support',
        to: '/contact-us',
        icon: <Mail size={17} />
      }}
      showBackButton={true}
      showHomeButton={true}
      showRetryButton={true}
      onRetry={handleRetry}
      retryLabel="Retry Connection"
      diagnostics={[
        { label: 'HTTP Code', value: '500_INTERNAL_SERVER_ERROR', isError: true },
        { label: 'Incident ID', value: incidentId, isHighlight: true },
        { label: 'Telemetry Engine', value: 'Jupiter Automation Core v4.8' },
        { label: 'Recovery State', value: 'Automatic Failover Active', isSuccess: true }
      ]}
      techDetails={technicalDetails}
      helpfulLinks={[
        { label: 'Homepage', to: '/' },
        { label: 'Machinery Catalog', to: '/products' },
        { label: 'Contact Engineering', to: '/contact-us', icon: <Wrench size={14} /> }
      ]}
      seoTitle="500 - Internal Server Error | Jupiter Industries"
      seoDescription="HTTP 500 Internal Server Error. The Jupiter Industries system encountered an unexpected error while processing your request."
    />
  );
};

export default InternalServerErrorPage;
