import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, FullscreenIcon, ImageIcon, VideoIcon, ErrorIcon } from '../icons';
import LoadingSpinner from './LoadingSpinner';

const MediaItem = ({ media, index, onOpen }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);
  const isVideo = media.type === 'video';

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMediaLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleMediaError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleClick = () => {
    if (!hasError) {
      onOpen(index);
    }
  };

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && !hasError) {
      event.preventDefault();
      onOpen(index);
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4" ref={itemRef}>
      <div 
        className={`card h-100 glass-card gallery-item position-relative ${hasError ? 'border-danger' : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{ cursor: hasError ? 'default' : 'pointer' }}
        tabIndex={hasError ? -1 : 0}
        role="button"
        aria-label={`View ${media.title} in fullscreen`}
      >
        <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
          {/* Loading State */}
          {isLoading && isInView && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light">
              <LoadingSpinner />
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light text-muted">
              <ErrorIcon size={48} color="var(--bs-danger)" />
              <p className="mt-2 mb-0 text-center px-3">
                Failed to load {isVideo ? 'video' : 'image'}
              </p>
            </div>
          )}

          {/* Media Content */}
          {isInView && !hasError && (
            <>
              {isVideo ? (
                <>
                  <video 
                    className="w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      display: isLoading ? 'none' : 'block'
                    }}
                    muted
                    preload="metadata"
                    onLoadedData={handleMediaLoad}
                    onError={handleMediaError}
                    aria-label={media.title}
                  >
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {!isLoading && (
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-circle bg-dark bg-opacity-75 play-button"
                        style={{ width: '60px', height: '60px' }}
                        aria-hidden="true"
                      >
                        <PlayIcon size={24} color="white" />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={media.src}
                  alt={media.title}
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    display: isLoading ? 'none' : 'block'
                  }}
                  onLoad={handleMediaLoad}
                  onError={handleMediaError}
                  loading="lazy"
                />
              )}

              {/* Media Type Badge */}
              {!isLoading && (
                <div className="position-absolute top-0 end-0 m-2">
                  <span className={`badge ${isVideo ? 'bg-primary' : 'bg-success'}`}>
                    {isVideo ? <VideoIcon size={16} color="white" /> : <ImageIcon size={16} color="white" />}
                    <span className="ms-1">{isVideo ? 'Video' : 'Image'}</span>
                  </span>
                </div>
              )}

              {/* Media Info Overlay */}
              {!isLoading && (
                <div className="position-absolute bottom-0 start-0 end-0 p-3 media-overlay">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="flex-grow-1 me-2">
                      <h6 className="text-white mb-1 fw-semibold text-truncate">{media.title}</h6>
                      <small className="text-white-50 text-capitalize">{media.category}</small>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-light flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpen(index);
                      }}
                      aria-label="View fullscreen"
                    >
                      <FullscreenIcon size={16} color="currentColor" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Placeholder for items not in view */}
          {!isInView && (
            <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
              <div className="text-muted">
                {isVideo ? <VideoIcon size={48} /> : <ImageIcon size={48} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaItem;