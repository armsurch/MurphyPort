import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };

  return (
    <div className={`d-flex justify-content-center align-items-center ${className}`}>
      <div 
        className={`spinner-border text-primary ${sizeClasses[size]}`} 
        role="status"
        aria-label="Loading"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;