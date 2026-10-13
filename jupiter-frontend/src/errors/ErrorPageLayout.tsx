import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  ArrowLeft, 
  RotateCw, 
  Activity, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useSeoMeta } from '../utils/useSeoMeta';
import './errorPages.css';

export interface DiagnosticItem {
  label: string;
  value: string;
  isHighlight?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export interface HelpfulLinkItem {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

export interface ActionButtonConfig {
  label: string;
  to?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface ErrorPageLayoutProps {
  statusCode: string | number;
  badgeText: string;
  badgeVariant?: 'orange' | 'danger' | 'warning' | 'info';
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  descriptionExtra?: string;
  illustration: React.ReactNode;
  diagnostics?: DiagnosticItem[];
  techDetails?: string;
  
  // Action configurations
  primaryAction?: ActionButtonConfig;
  secondaryAction?: ActionButtonConfig;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void | Promise<void>;
  retryLabel?: string;
  homeLabel?: string;
  backLabel?: string;

  helpfulLinks?: HelpfulLinkItem[];
  seoTitle?: string;
  seoDescription?: string;
  customHeaderElement?: React.ReactNode;
}

export const ErrorPageLayout: React.FC<ErrorPageLayoutProps> = ({
  statusCode,
  badgeText,
  badgeVariant = 'orange',
  badgeIcon,
  title,
  subtitle,
  descriptionExtra,
  illustration,
  diagnostics = [],
  techDetails,
  primaryAction,
  secondaryAction,
  showBackButton = true,
  showHomeButton = true,
  showRetryButton = false,
  onRetry,
  retryLabel = 'Retry Connection',
  homeLabel = 'Back to Home',
  backLabel = 'Previous Page',
  helpfulLinks,
  seoTitle,
  seoDescription,
  customHeaderElement
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRetrying, setIsRetrying] = useState(false);
  const [isTechDetailsOpen, setIsTechDetailsOpen] = useState(false);
  const [timestamp] = useState(() => new Date().toLocaleTimeString('en-US', { hour12: false }));

  // Dynamic SEO meta tags
  useSeoMeta({
    title: seoTitle || `${statusCode} - ${title} | Jupiter Industries`,
    description: seoDescription || `${title} (${statusCode}). ${subtitle} - Jupiter Industries Industrial Machinery.`,
    robots: 'noindex, follow',
  });

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      if (onRetry) {
        await onRetry();
      } else {
        window.location.reload();
      }
    } catch (err) {
      console.error('Retry action failed:', err);
    } finally {
      setTimeout(() => setIsRetrying(false), 600);
    }
  };

  const badgeClass = `jupiter-error-badge badge-${badgeVariant}`;

  // Default helpful links if not provided
  const resolvedLinks: HelpfulLinkItem[] = helpfulLinks || [
    { label: 'Machinery Catalog', to: '/products' },
    { label: 'Technical Contact', to: '/contact-us' },
    { label: 'Industrial Projects', to: '/gallery' },
    { label: 'Knowledge Base', to: '/blog' }
  ];

  return (
    <div className="jupiter-error-page-wrapper" role="main" aria-labelledby="jupiter-error-heading">
      {/* Background Graphic Effects */}
      <div className="jupiter-error-grid-overlay" aria-hidden="true" />
      <div className="jupiter-error-ambient-glow" aria-hidden="true" />
      <div className="jupiter-error-ambient-glow-secondary" aria-hidden="true" />

      <div className="jupiter-error-page-container">
        {/* ===================================================================
            LEFT COLUMN: Breadcrumbs, Status Badge, Title, Description, Actions
            =================================================================== */}
        <div className="jupiter-error-content-col">
          {/* Breadcrumb Navigation Pill */}
          <nav aria-label="Breadcrumb" className="jupiter-error-breadcrumb-pill">
            <Link to="/" title="Navigate to Homepage">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <ChevronRight size={13} className="jupiter-error-breadcrumb-separator" aria-hidden="true" />
            <span className="jupiter-error-breadcrumb-current">Error {statusCode}</span>
          </nav>

          {/* Status Badge */}
          <div className={badgeClass} role="status">
            <span className="jupiter-status-dot" aria-hidden="true" />
            {badgeIcon}
            <span>{badgeText}</span>
          </div>

          {/* Big Numeric Display */}
          <div className="jupiter-error-code-row" aria-label={`Error code ${statusCode}`}>
            <span className="jupiter-error-code-text">{statusCode}</span>
            <span className="jupiter-error-code-subtag">SYSTEM STATUS</span>
          </div>

          {/* Title and Subtitle */}
          <h1 id="jupiter-error-heading" className="jupiter-error-title">
            {title}
          </h1>

          <p className="jupiter-error-subtitle">
            {subtitle}
          </p>

          {descriptionExtra && (
            <p className="jupiter-error-desc-extra">
              {descriptionExtra}
            </p>
          )}

          {customHeaderElement}

          {/* Action Buttons Cluster */}
          <div className="jupiter-error-actions">
            {/* Primary Action Button */}
            {primaryAction && (
              primaryAction.to ? (
                <Link to={primaryAction.to} className="jupiter-btn-error-primary">
                  {primaryAction.icon || <Home size={18} />}
                  <span>{primaryAction.label}</span>
                </Link>
              ) : (
                <button 
                  type="button" 
                  onClick={primaryAction.onClick} 
                  className="jupiter-btn-error-primary"
                >
                  {primaryAction.icon || <Home size={18} />}
                  <span>{primaryAction.label}</span>
                </button>
              )
            )}

            {/* Retry Button */}
            {showRetryButton && (
              <button
                type="button"
                onClick={handleRetry}
                disabled={isRetrying}
                className="jupiter-btn-error-retry"
                aria-label={retryLabel}
              >
                <RotateCw size={17} className={isRetrying ? 'animate-spin' : ''} />
                <span>{isRetrying ? 'Retrying...' : retryLabel}</span>
              </button>
            )}

            {/* Back Button */}
            {showBackButton && (
              <button
                type="button"
                onClick={handleBack}
                className="jupiter-btn-error-secondary"
                aria-label="Go back to previous page"
              >
                <ArrowLeft size={17} />
                <span>{backLabel}</span>
              </button>
            )}

            {/* Default Home Button if not covered by primary/secondary */}
            {showHomeButton && !primaryAction && (
              <Link to="/" className="jupiter-btn-error-primary">
                <Home size={18} />
                <span>{homeLabel}</span>
              </Link>
            )}

            {/* Secondary Action Button */}
            {secondaryAction && (
              secondaryAction.to ? (
                <Link to={secondaryAction.to} className="jupiter-btn-error-secondary">
                  {secondaryAction.icon}
                  <span>{secondaryAction.label}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  className="jupiter-btn-error-secondary"
                >
                  {secondaryAction.icon}
                  <span>{secondaryAction.label}</span>
                </button>
              )
            )}
          </div>

          {/* Quick Helpful Links */}
          {resolvedLinks.length > 0 && (
            <div className="jupiter-error-quick-links-section">
              <div className="jupiter-error-quick-links-title">
                Suggested Navigation Routes:
              </div>
              <div className="jupiter-error-quick-links-grid">
                {resolvedLinks.map((link, idx) => (
                  <Link key={idx} to={link.to} className="jupiter-error-quick-link-pill">
                    {link.icon || <ExternalLink size={13} style={{ opacity: 0.7 }} />}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ===================================================================
            RIGHT COLUMN: Animated SVG Illustration, Telemetry Diagnostics
            =================================================================== */}
        <div className="jupiter-error-visual-col">
          <div className="jupiter-error-visual-card">
            {/* Themed SVG Illustration Box */}
            <div className="jupiter-error-illustration-box">
              {illustration}
            </div>

            {/* Telemetry Diagnostics Readout */}
            <div className="jupiter-error-telemetry-box" aria-label="System diagnostic telemetry">
              <div className="jupiter-telemetry-header">
                <div className="jupiter-telemetry-status-pill">
                  <Activity size={13} />
                  <span>LIVE DIAGNOSTICS</span>
                </div>
                <span>NODE: JUPITER-PRD-01</span>
              </div>

              <div className="jupiter-telemetry-rows">
                <div className="jupiter-telemetry-row">
                  <span className="tel-label">HTTP Code:</span>
                  <span className="tel-value value-highlight">{statusCode}</span>
                </div>
                <div className="jupiter-telemetry-row">
                  <span className="tel-label">Route Path:</span>
                  <span className="tel-value">{location.pathname || '/'}</span>
                </div>
                <div className="jupiter-telemetry-row">
                  <span className="tel-label">Timestamp:</span>
                  <span className="tel-value">{timestamp} UTC</span>
                </div>

                {diagnostics.map((diag, index) => {
                  let valClass = 'tel-value';
                  if (diag.isHighlight) valClass += ' value-highlight';
                  if (diag.isError) valClass += ' value-error';
                  if (diag.isSuccess) valClass += ' value-success';

                  return (
                    <div key={index} className="jupiter-telemetry-row">
                      <span className="tel-label">{diag.label}:</span>
                      <span className={valClass}>{diag.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Optional Collapsible Technical Stack / Error Info */}
              {techDetails && (
                <div className="jupiter-error-tech-details">
                  <summary 
                    onClick={() => setIsTechDetailsOpen(!isTechDetailsOpen)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none' }}
                  >
                    <span>{isTechDetailsOpen ? 'Hide Technical Details' : 'View Technical Details'}</span>
                    {isTechDetailsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </summary>
                  {isTechDetailsOpen && (
                    <pre className="jupiter-error-tech-stack">
                      {techDetails}
                    </pre>
                  )}
                </div>
              )}
            </div>

            {/* Industrial Factory Watermark */}
            <div className="jupiter-error-watermark">
              <span>Jupiter Heavy Machinery</span>
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPageLayout;
