import React, { useState, useMemo, useCallback } from 'react';
import FilterTabs from './gallery/FilterTabs';
import MediaItem from './gallery/MediaItem';
import MediaModal from './gallery/MediaModal';
import MediaSkeleton from './gallery/MediaSkeleton';
import { ImageIcon, VideoIcon } from './icons';

// Media data from public folders
const mediaData = [
  // Images from public/Image/
  { 
    src: '/Image/Murphy.jpg', 
    title: 'Project Murphy - Main View', 
    type: 'image',
    category: 'projects',
    description: 'Comprehensive view of the Murphy project implementation showcasing network infrastructure and technical setup.'
  },
  { 
    src: '/Image/Murphy1.jpg', 
    title: 'Project Murphy - Detail View', 
    type: 'image',
    category: 'projects',
    description: 'Detailed perspective of Murphy project components and technical specifications.'
  },
  { 
    src: '/Image/Murphy2.jpg', 
    title: 'Project Murphy - Technical Overview', 
    type: 'image',
    category: 'projects',
    description: 'Technical overview and system architecture of the Murphy project implementation.'
  },
  { 
    src: '/Image/1.jpg', 
    title: 'Network Infrastructure Setup', 
    type: 'image',
    category: 'infrastructure',
    description: 'Professional network infrastructure installation and configuration process.'
  },
  { 
    src: '/Image/2.jpg', 
    title: 'Base Station Installation', 
    type: 'image',
    category: 'infrastructure',
    description: 'Base station installation and tower setup for telecommunications network.'
  },
  { 
    src: '/Image/3.jpg', 
    title: 'Equipment Configuration', 
    type: 'image',
    category: 'technical',
    description: 'Technical equipment configuration and system optimization procedures.'
  },
  { 
    src: '/Image/4.jpg', 
    title: 'Power Distribution System', 
    type: 'image',
    category: 'infrastructure',
    description: 'Electrical power distribution setup and safety protocols implementation.'
  },
  { 
    src: '/Image/5.jpg', 
    title: 'Network Testing Protocol', 
    type: 'image',
    category: 'technical',
    description: 'Comprehensive network testing and quality assurance procedures.'
  },
  { 
    src: '/Image/6.jpg', 
    title: 'Site Management Overview', 
    type: 'image',
    category: 'maintenance',
    description: 'Professional site management and operational oversight activities.'
  },
  { 
    src: '/Image/7.jpg', 
    title: 'Technical Documentation', 
    type: 'image',
    category: 'technical',
    description: 'Technical documentation and system specification review process.'
  },
  { 
    src: '/Image/8.jpg', 
    title: 'Installation Progress', 
    type: 'image',
    category: 'projects',
    description: 'Project installation progress and milestone achievement documentation.'
  },
  { 
    src: '/Image/9.jpg', 
    title: 'Quality Control Inspection', 
    type: 'image',
    category: 'maintenance',
    description: 'Quality control inspection and system validation procedures.'
  },
  { 
    src: '/Image/10.jpg', 
    title: 'Network Optimization', 
    type: 'image',
    category: 'technical',
    description: 'Network performance optimization and system enhancement activities.'
  },
  { 
    src: '/Image/11.jpg', 
    title: 'Infrastructure Maintenance', 
    type: 'image',
    category: 'maintenance',
    description: 'Regular infrastructure maintenance and preventive care procedures.'
  },
  { 
    src: '/Image/12.jpg', 
    title: 'System Integration', 
    type: 'image',
    category: 'technical',
    description: 'Complex system integration and multi-platform connectivity setup.'
  },
  { 
    src: '/Image/13.jpg', 
    title: 'Client Training Session', 
    type: 'image',
    category: 'training',
    description: 'Professional client training and knowledge transfer session.'
  },
  { 
    src: '/Image/14.jpg', 
    title: 'Project Completion', 
    type: 'image',
    category: 'projects',
    description: 'Successful project completion and final system handover process.'
  },
  { 
    src: '/Image/15.jpg', 
    title: 'Technical Support', 
    type: 'image',
    category: 'maintenance',
    description: 'On-site technical support and troubleshooting assistance.'
  },
  { 
    src: '/Image/16.jpg', 
    title: 'Equipment Installation', 
    type: 'image',
    category: 'infrastructure',
    description: 'Professional equipment installation and mounting procedures.'
  },
  { 
    src: '/Image/17.jpg', 
    title: 'Safety Protocols', 
    type: 'image',
    category: 'technical',
    description: 'Safety protocols implementation and workplace security measures.'
  },
  { 
    src: '/Image/18.jpg', 
    title: 'Final System Testing', 
    type: 'image',
    category: 'technical',
    description: 'Comprehensive final system testing and performance validation.'
  },
  // Videos from public/Vids/
  { 
    src: '/Vids/a.mp4', 
    title: 'Technical Installation Process', 
    type: 'video',
    category: 'technical',
    description: 'Step-by-step demonstration of technical installation procedures and best practices.'
  },
  { 
    src: '/Vids/g.mp4', 
    title: 'Network Configuration Demo', 
    type: 'video',
    category: 'technical',
    description: 'Live demonstration of network configuration processes and system optimization.'
  },
  { 
    src: '/Vids/h.mp4', 
    title: 'Base Station Management', 
    type: 'video',
    category: 'infrastructure',
    description: 'Comprehensive guide to base station management and maintenance procedures.'
  },
  { 
    src: '/Vids/i.mp4', 
    title: 'System Maintenance Procedures', 
    type: 'video',
    category: 'maintenance',
    description: 'Essential maintenance procedures for optimal system performance and reliability.'
  },
  { 
    src: '/Vids/j.mp4', 
    title: 'Equipment Testing Protocol', 
    type: 'video',
    category: 'technical',
    description: 'Standardized testing protocols for equipment validation and quality assurance.'
  },
  { 
    src: '/Vids/k.mp4', 
    title: 'Site Installation Overview', 
    type: 'video',
    category: 'infrastructure',
    description: 'Complete overview of site installation processes from planning to completion.'
  },
  { 
    src: '/Vids/l.mp4', 
    title: 'Network Troubleshooting', 
    type: 'video',
    category: 'maintenance',
    description: 'Advanced troubleshooting techniques for network issues and system diagnostics.'
  },
  { 
    src: '/Vids/m.mp4', 
    title: 'Power Distribution Setup', 
    type: 'video',
    category: 'infrastructure',
    description: 'Professional power distribution setup and electrical safety protocols.'
  },
  { 
    src: '/Vids/n.mp4', 
    title: 'Quality Assurance Testing', 
    type: 'video',
    category: 'technical',
    description: 'Comprehensive quality assurance testing procedures and validation methods.'
  },
  { 
    src: '/Vids/o.mp4', 
    title: 'Client Training Session', 
    type: 'video',
    category: 'training',
    description: 'Professional client training session covering system operation and best practices.'
  },
  { 
    src: '/Vids/p.mp4', 
    title: 'Project Completion Review', 
    type: 'video',
    category: 'projects',
    description: 'Final project review and handover procedures with client satisfaction assessment.'
  }
];

// Main Gallery Component
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // New: search, sorting, pagination
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('title-asc'); // 'title-asc' | 'title-desc' | 'type' | 'category'
  const [visibleCount, setVisibleCount] = useState(9);

  // Memoized calculations for performance
  const categories = useMemo(() => 
    [...new Set(mediaData.map(item => item.category))].sort(), 
    []
  );

  const mediaCounts = useMemo(() => {
    const counts = { all: mediaData.length };
    categories.forEach(category => {
      counts[category] = mediaData.filter(item => item.category === category).length;
    });
    return counts;
  }, [categories]);

  const filteredSortedMedia = useMemo(() => {
    let base = activeFilter === 'all' 
      ? mediaData 
      : mediaData.filter(item => item.category === activeFilter);

    // Search
    const q = query.trim().toLowerCase();
    if (q) {
      base = base.filter(item => (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      ));
    }

    // Sort
    const sorted = [...base].sort((a, b) => {
      switch (sortBy) {
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'type':
          // images first then videos
          if (a.type === b.type) return a.title.localeCompare(b.title);
          return a.type === 'image' ? -1 : 1;
        case 'category':
          return a.category.localeCompare(b.category) || a.title.localeCompare(b.title);
        case 'title-asc':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return sorted;
  }, [activeFilter, query, sortBy]);

  const displayedMedia = useMemo(() => filteredSortedMedia.slice(0, visibleCount), [filteredSortedMedia, visibleCount]);

  // Handlers
  const handleFilterChange = useCallback((filter) => {
    setIsLoading(true);
    setActiveFilter(filter);
    setVisibleCount(9);
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const openModal = useCallback((index) => {
    const actualIndex = mediaData.findIndex(item => item === displayedMedia[index]);
    setActiveMediaIndex(actualIndex);
    setShowModal(true);
  }, [displayedMedia]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const navigateModal = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < mediaData.length) {
      setActiveMediaIndex(newIndex);
    }
  }, []);

  // Statistics
  const stats = useMemo(() => ({
    totalImages: mediaData.filter(item => item.type === 'image').length,
    totalVideos: mediaData.filter(item => item.type === 'video').length,
    totalCategories: categories.length
  }), [categories]);

  const canShowMore = displayedMedia.length < filteredSortedMedia.length;

  return (
    <section id="gallery" className="py-5" role="region" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 id="gallery-heading" className="section-title display-6 mb-3">
            Professional Gallery
          </h2>
          <p className="lead text-muted mb-3">
            Explore my professional work through images and videos showcasing telecom infrastructure, 
            network installations, and technical expertise across {stats.totalCategories} specialized categories
          </p>
        </div>

        {/* Controls row: stats on left (stack on mobile), search/sort on right */}
        <div className="row align-items-center g-3 mb-4">
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 flex-wrap">
              <div className="d-flex align-items-center">
                <ImageIcon size={20} color="var(--bs-success)" />
                <span className="ms-2 text-muted">
                  <strong>{stats.totalImages}</strong> Images
                </span>
              </div>
              <div className="d-flex align-items-center">
                <VideoIcon size={20} color="var(--bs-primary)" />
                <span className="ms-2 text-muted">
                  <strong>{stats.totalVideos}</strong> Videos
                </span>
              </div>
              <div className="d-flex align-items-center text-muted">
                <strong>{stats.totalCategories}</strong> Categories
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search title, description, category..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisibleCount(9); }}
                aria-label="Search gallery"
                style={{ maxWidth: 360 }}
              />
              <select 
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort gallery"
                style={{ maxWidth: 200 }}
              >
                <option value="title-asc">Title (A–Z)</option>
                <option value="title-desc">Title (Z–A)</option>
                <option value="type">Type (Images first)</option>
                <option value="category">Category (A–Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <FilterTabs 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          mediaCounts={mediaCounts}
        />

        {/* Media Grid */}
        <div id="gallery-content" role="tabpanel" aria-labelledby="gallery-heading">
          <div className="row g-4">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 6 }, (_, index) => (
                <MediaSkeleton key={`skeleton-${index}`} />
              ))
            ) : (
              // Actual media items
              displayedMedia.map((media, index) => (
                <MediaItem
                  key={`${media.src}-${activeFilter}-${index}`}
                  media={media}
                  index={index}
                  onOpen={openModal}
                />
              ))
            )}
          </div>
        </div>

        {/* Empty State */}
        {!isLoading && filteredSortedMedia.length === 0 && (
          <div className="text-center py-5" role="status" aria-live="polite">
            <div className="mb-3">
              <ImageIcon size={48} color="var(--bs-secondary)" />
            </div>
            <h5 className="text-muted">No media found</h5>
            <p className="text-muted">
              No content matches your filters. Try clearing search or selecting a different category.
            </p>
            <button 
              className="btn btn-outline-primary"
              onClick={() => { setQuery(''); handleFilterChange('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Results Summary + Load More */}
        {!isLoading && filteredSortedMedia.length > 0 && (
          <div className="text-center mt-4">
            <p className="text-muted small" role="status" aria-live="polite">
              Showing {displayedMedia.length} of {filteredSortedMedia.length} items
              {activeFilter !== 'all' && ` in "${activeFilter}" category`}
              {query && ` for "${query}"`}
            </p>
            {canShowMore && (
              <button 
                className="btn btn-primary btn-modern"
                onClick={() => setVisibleCount((v) => v + 9)}
              >
                Load more
              </button>
            )}
          </div>
        )}

        {/* Media Modal */}
        <MediaModal 
          show={showModal}
          media={mediaData[activeMediaIndex]}
          mediaList={mediaData}
          currentIndex={activeMediaIndex}
          onHide={closeModal}
          onNavigate={navigateModal}
        />
      </div>
    </section>
  );
};

export default Gallery;
