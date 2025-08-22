import React from 'react';

const MediaSkeleton = () => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 glass-card">
        <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
          <div className="placeholder-glow w-100 h-100">
            <div className="placeholder w-100 h-100 bg-secondary"></div>
          </div>
          <div className="position-absolute top-0 end-0 m-2">
            <div className="placeholder-glow">
              <span className="placeholder bg-secondary rounded-pill" style={{ width: '60px', height: '24px' }}></span>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 end-0 p-3">
            <div className="placeholder-glow">
              <div className="placeholder bg-light mb-2" style={{ width: '80%', height: '16px' }}></div>
              <div className="placeholder bg-light" style={{ width: '60%', height: '12px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSkeleton;