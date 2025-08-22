import React, { useEffect, useCallback, useState } from 'react';
import * as bootstrap from 'bootstrap';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, DownloadIcon, ImageIcon, VideoIcon } from '../icons';

const MediaModal = ({ show, media, mediaList, currentIndex, onHide, onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!media) return null;
  
  const isVideo = media.type === 'video';
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < mediaList.length - 1;

  // Keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (!show) return;
    
    switch (event.key) {
      case 'Escape':
        onHide();
        break;
      case 'ArrowLeft':
        if (hasPrevious) {
          onNavigate(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        if (hasNext) {
          onNavigate(currentIndex + 1);
        }
        break;
      default:
        break;
    }
  }, [show, currentIndex, hasPrevious, hasNext, onHide, onNavigate]);

  useEffect(() => {
    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [show, handleKeyDown]);

  // Reset loading state when media changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [media.src]);

  const handleMediaLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleMediaError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = media.src;
    link.download = media.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  return (
    <div 
      className={`modal fade ${show ? 'show d-block' : ''}`} 
      tabIndex="-1" 
      style={{ backgroundColor: show ? 'rgba(0,0,0,0.9)' : 'transparent' }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-modal-title"
      aria-describedby="media-modal-description"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          {/* Modal Header */}
          <div className="modal-header border-0 pb-2">
            <div className="d-flex align-items-center flex-grow-1">
              <h5 id="media-modal-title" className="modal-title text-white me-3 mb-0">
                {media.title}
              </h5>
              <span className="badge bg-secondary me-2 text-capitalize">
                {media.category}
              </span>
              <span className={`badge ${isVideo ? 'bg-primary' : 'bg-success'}`}>
                {isVideo ? <VideoIcon size={16} color="white" /> : <ImageIcon size={16} color="white" />}
                <span className="ms-1">{isVideo ? 'Video' : 'Image'}</span>
              </span>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              {/* Navigation Buttons */}
              <button 
                type="button" 
                className="btn btn-outline-light btn-sm"
                onClick={() => onNavigate(currentIndex - 1)}
                disabled={!hasPrevious}
                aria-label="Previous media"
              >
                <ChevronLeftIcon size={20} color="currentColor" />
              </button>
              
              <span className="text-white-50 small">
                {currentIndex + 1} / {mediaList.length}
              </span>
              
              <button 
                type="button" 
                className="btn btn-outline-light btn-sm"
                onClick={() => onNavigate(currentIndex + 1)}
                disabled={!hasNext}
                aria-label="Next media"
              >
                <ChevronRightIcon size={20} color="currentColor" />
              </button>

              {/* Download Button */}
              <button 
                type="button" 
                className="btn btn-outline-light btn-sm"
                onClick={handleDownload}
                aria-label="Download media"
              >
                <DownloadIcon size={20} color="currentColor" />
              </button>

              {/* Close Button */}
              <button 
                type="button" 
                className="btn btn-outline-light btn-sm"
                onClick={onHide}
                aria-label="Close modal"
              >
                <CloseIcon size={20} color="currentColor" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-0 position-relative">
            {/* Loading State */}
            {isLoading && (
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="text-center py-5 text-white">
                <h5>Failed to load {isVideo ? 'video' : 'image'}</h5>
                <p>Please try again or contact support if the problem persists.</p>
              </div>
            )}

            {/* Media Content */}
            {!hasError && (
              <div className="position-relative">
                {isVideo ? (
                  <video 
                    className="w-100"
                    controls
                    autoPlay
                    style={{ 
                      maxHeight: '70vh',
                      display: isLoading ? 'none' : 'block'
                    }}
                    onLoadedData={handleMediaLoad}
                    onError={handleMediaError}
                    aria-describedby="media-modal-description"
                  >
                    <source src={media.src} type="video/mp4" />
                    <track kind="captions" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media.src}
                    alt={media.title}
                    className="w-100"
                    style={{ 
                      maxHeight: '70vh', 
                      objectFit: 'contain',
                      display: isLoading ? 'none' : 'block'
                    }}
                    onLoad={handleMediaLoad}
                    onError={handleMediaError}
                  />
                )}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer border-0 pt-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div id="media-modal-description" className="text-white-50 small">
                Use arrow keys to navigate • ESC to close
              </div>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-light btn-sm" 
                  onClick={handleDownload}
                >
                  <DownloadIcon size={16} color="currentColor" />
                  <span className="ms-1 d-none d-sm-inline">Download</span>
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={onHide}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaModal;