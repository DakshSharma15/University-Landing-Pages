import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import LeadForm from '../components/LeadForm.jsx';
import FeesModal from '../components/FeesModal.jsx';
import { fetchUniversity } from '../api.js';

export default function Uni2() {
  const id = 'uni2';
  const [uni, setUni] = useState(null);
  const [openFees, setOpenFees] = useState(false);

  useEffect(() => {
    fetchUniversity(id).then(setUni).catch(console.error);
  }, []);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>{uni?.name || 'Horizon School'}</h2>
          <p>{uni?.overview}</p>
          <div className="hero-ctas">
            <button onClick={() => setOpenFees(true)}>Check Course-wise Fees</button>
            <a className="btn" href="#lead-form">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features">
        <div className="feature-card feature-1">
          <h3>Industry-ready Courses</h3>
          <p>Learn from experienced faculty and get hands-on training in your chosen field.</p>
        </div>
        <div className="feature-card feature-2">
          <h3>Excellent Placements</h3>
          <p>Top recruiters visit our campus every year, ensuring bright career opportunities.</p>
        </div>
        <div className="feature-card feature-3">
          <h3>Modern Facilities</h3>
          <p>State-of-the-art labs, libraries, and infrastructure to support learning.</p>
        </div>
        <div className="feature-card feature-4">
          <h3>Scholarships & Aid</h3>
          <p>Financial assistance and scholarships available for meritorious students.</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses">
        <h3>Our Courses</h3>
        <div className="courses-grid">
          {uni?.courses?.map(c => (
            <div className="course-card" key={c.code}>
              <h4>{c.name}</h4>
              <p>Duration: {c.duration}</p>
              <p>Eligibility: {c.eligibility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Centered Lead Form */}
      <section className="lead-form-container" id="lead-form">
        <h3>Apply Now</h3>
        <LeadForm universityId={id} />
      </section>

      {/* Fees Modal */}
      <FeesModal universityId={id} open={openFees} onClose={() => setOpenFees(false)} />
    </div>
  );
}
