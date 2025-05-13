import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: undefined
  };

  // Fängt Fehler während des Renderns ab
  public static getDerivedStateFromError(error: Error): State {
    // Spline-spezifische Fehler identifizieren
    const errorMessage = error.message || '';
    const isSplineError = 
      errorMessage.includes('spline') || 
      errorMessage.includes('3d') || 
      errorMessage.includes('webgl') ||
      errorMessage.includes('canvas');
    
    return { 
      hasError: true,
      errorInfo: isSplineError ? 'spline-error' : 'general-error'
    };
  }

  // Loggt den abgefangenen Fehler
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  // Versucht, die Komponente neu zu rendern
  public tryAgain = () => {
    this.setState({ hasError: false, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      // Fallback-UI für den Fehlerfall
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg p-8 text-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 mx-auto mb-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-white mb-2">
              {this.state.errorInfo === 'spline-error' 
                ? '3D-Komponente konnte nicht geladen werden'
                : 'Rendering-Fehler'}
            </h3>
            <p className="text-gray-400 mb-4">
              {this.state.errorInfo === 'spline-error'
                ? 'Beim Laden der 3D-Komponente ist ein Fehler aufgetreten. Dies kann an Browserkompatibilität oder Internetverbindung liegen.'
                : 'Beim Laden der Komponente ist ein Fehler aufgetreten.'}
            </p>
            <button
              onClick={this.tryAgain}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 