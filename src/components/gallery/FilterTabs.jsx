import React from 'react';

const FilterTabs = ({ categories, activeFilter, onFilterChange, mediaCounts }) => {
  const handleKeyDown = (event, category) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onFilterChange(category);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <ul className="nav nav-pills flex-wrap justify-content-center" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className={`nav-link ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
            onKeyDown={(e) => handleKeyDown(e, 'all')}
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            aria-controls="gallery-content"
          >
            All Media
            <span className="badge bg-light text-dark ms-2">
              {mediaCounts.all}
            </span>
          </button>
        </li>
        {categories.map(category => (
          <li key={category} className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeFilter === category ? 'active' : ''}`}
              onClick={() => onFilterChange(category)}
              onKeyDown={(e) => handleKeyDown(e, category)}
              type="button"
              role="tab"
              aria-selected={activeFilter === category}
              aria-controls="gallery-content"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              <span className="badge bg-light text-dark ms-2">
                {mediaCounts[category] || 0}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTabs;