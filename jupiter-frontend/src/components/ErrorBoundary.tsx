import { Component, ErrorInfo, ReactNode } from 'react';
import { InternalServerErrorPage } from '../errors';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <InternalServerErrorPage
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onResetError={() => {
            this.setState({ hasError: false, error: null, errorInfo: null });
            window.location.reload();
          }}
        />
      );
    }

    return this.props.children;
  }
}
