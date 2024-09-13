import {
  Component,
  ErrorInfo,
  ReactNode
} from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State  {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode {
     if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='p-10 bg-white rounded shadow-lg text-center'>
          <h1 className='text-4xl font-bold mb-4 text-red-600'>Oops!</h1>
          <p className='text-xl mb-4'>Something went wrong.</p>
          <p className='text-gray-600 mb-8'>We're sorry for the inconvenience. Please try refreshing the page or click the button below to go back to the homepage.</p>
          <Link to='/' className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
            Go to Homepage
          </Link>
        </div>
      </div>
      )
     }

     return this.props.children;
  }
}

export default ErrorBoundary
