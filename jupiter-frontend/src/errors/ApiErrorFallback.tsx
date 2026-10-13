import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ShieldAlert, Ban, RefreshCw, LogIn, Compass, Wrench } from 'lucide-react';
import { UnauthorizedPage } from './UnauthorizedPage';
import { ForbiddenPage } from './ForbiddenPage';
import { NotFoundPage } from './NotFoundPage';
import { InternalServerErrorPage } from './InternalServerErrorPage';
import { ServiceUnavailablePage } from './ServiceUnavailablePage';
import './errorPages.css';

export interface ApiErrorFallbackProps {
  error?: any;
  status?: number;
  message?: string;
  onRetry?: () => void | Promise<void>;
  fullPage?: boolean;
}

export const ApiErrorFallback: React.FC<ApiErrorFallbackProps> = ({
  error,
  status: explicitStatus,
  message: explicitMessage,
  onRetry,
  fullPage = false
}) => {
  const [isRetrying, setIsRetrying] = useState(false);

  // Derive HTTP status
  const status = explicitStatus || error?.response?.status || (error?.status ? Number(error.status) : 500);
  
  // Derive user message
  const displayMessage = 
    explicitMessage || 
    error?.response?.data?.message || 
    error?.message || 
    'An unexpected error occurred while processing this request.';

  // If fullPage mode is requested, delegate to the respective dedicated full-page component
  if (fullPage) {
    if (status === 401) return <UnauthorizedPage />;
    if (status === 403) return <ForbiddenPage />;
    if (status === 404) return <NotFoundPage />;
    if (status === 503) return <ServiceUnavailablePage />;
    return <InternalServerErrorPage error={error instanceof Error ? error : new Error(displayMessage)} onResetError={onRetry} />;
  }

  const handleRetryClick = async () => {
    if (!onRetry) return;
    setIsRetrying(true);
    try {
      await onRetry();
    } finally {
      setTimeout(() => setIsRetrying(false), 500);
    }
  };

  // Inline / card render mode
  let icon = <AlertTriangle size={32} />;
  let title = 'Failed to Load Content';

  if (status === 401) {
    icon = <ShieldAlert size={32} />;
    title = 'Authentication Required';
  } else if (status === 403) {
    icon = <Ban size={32} />;
    title = 'Access Denied';
  } else if (status === 404) {
    icon = <Compass size={32} />;
    title = 'Resource Not Found';
  } else if (status === 503) {
    icon = <Wrench size={32} />;
    title = 'Service Temporarily Unavailable';
  }

  return (
    <div className="jupiter-api-error-card" role="alert">
      <div className="jupiter-api-error-icon-wrap" aria-hidden="true">
        {icon}
      </div>

      <div className="jupiter-error-badge badge-warning" style={{ margin: '0 auto' }}>
        <span>HTTP {status} ERROR</span>
      </div>

      <h3 className="jupiter-api-error-title">{title}</h3>
      <p className="jupiter-api-error-msg">{displayMessage}</p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
        {onRetry && (
          <button
            type="button"
            onClick={handleRetryClick}
            disabled={isRetrying}
            className="jupiter-btn-error-primary"
            style={{ minHeight: '42px', padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <RefreshCw size={16} className={isRetrying ? 'animate-spin' : ''} />
            <span>{isRetrying ? 'Retrying...' : 'Retry Request'}</span>
          </button>
        )}

        {status === 401 && (
          <Link
            to="/admin"
            className="jupiter-btn-error-secondary"
            style={{ minHeight: '42px', padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <LogIn size={16} />
            <span>Log In to Admin</span>
          </Link>
        )}

        <Link
          to="/"
          className="jupiter-btn-error-secondary"
          style={{ minHeight: '42px', padding: '10px 20px', fontSize: '0.88rem' }}
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ApiErrorFallback;
