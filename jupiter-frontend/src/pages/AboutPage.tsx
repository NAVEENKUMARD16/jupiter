import React, { useState } from 'react';
import { useSeoMeta } from '../utils/useSeoMeta';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Target,
  Eye,
  Check,
  X,
  Wrench,
  Gauge,
  Cpu,
  Factory,
  Layers,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import isoCertificationImg from '../assets/images/about/iso certification.jpg';
import missionImg from '../assets/images/about/mission-opt.jpg';
import about1FacilityImg from '../assets/images/about/about1-opt.jpg';

export const AboutPage: React.FC = () => {
  useSeoMeta({
    title: 'Brick Making Machine Manufacturer in Coimbatore | Jupiter Industries',
    description: 'Jupiter Industries manufactures brick making machines in Coimbatore, Tamil Nadu, including fly ash brick, paver block and concrete block machinery.',
    keywords: 'Brick Making Machine Manufacturer in Coimbatore, Jupiter Industries About, Fly Ash Brick Machine Tamil Nadu, Paver Block Machine Manufacturer, Concrete Block Machinery India',
    canonical: 'https://jupitergroups.in/about-us',
    ogUrl: 'https://jupitergroups.in/about-us',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'Brick Making Machine Manufacturer in Coimbatore | Jupiter Industries',
      'url': 'https://jupitergroups.in/about-us',
      'description': 'Jupiter Industries manufactures brick making machines in Coimbatore, Tamil Nadu, including fly ash brick, paver block and concrete block machinery.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Jupiter Industries',
        'url': 'https://jupitergroups.in',
        'foundingDate': '1991',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Coimbatore',
          'addressRegion': 'Tamil Nadu',
          'addressCountry': 'IN'
        }
      }
    }
  });

  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <div className="about-page-view acme-style-about-page">
      {/* =====================================================================
          1. CONSISTENT HERO BANNER WITH BREADCRUMB
          ===================================================================== */}
      <PageBanner
        title="About Jupiter Industries"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* =====================================================================
          2. SECTION 1: HERO / COMPANY INTRO (CREATIVE LEFT IMAGE + RIGHT TEXT)
          ===================================================================== */}
      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-grid image-on-left">
            {/* Left Column: Creative Multi-Layer Visual Studio & Floating Badges */}
            <div className="about-intro-visual-col" style={{ order: 1 }}>
              <div className="about-creative-image-composition">
                {/* Tech background frame & glowing aura */}
                <div className="about-img-backdrop-aura"></div>
                <div className="about-img-tech-border"></div>

                {/* Primary High-Res Facility Image */}
                <div className="about-main-img-card">
                  <img
                    src={about1FacilityImg}
                    alt="Jupiter Industries Facility"
                    className="about-hero-img"
                    loading="lazy"
                  />
                  <div className="img-overlay-gradient"></div>
                </div>



                {/* Top-Left Trust Badge */}
                <div className="about-floating-top-chip">
                  <ShieldCheck size={16} className="text-orange" />
                  <span>ISO 9001:2015 Heavy Certified</span>
                </div>

                {/* Bottom Experience Badge */}
                <div className="about-floating-badge creative-left-badge">
                  <div className="badge-exp-number">35+</div>
                  <div className="badge-exp-text">
                    <strong>Years Experience</strong>
                    <span>In Heavy Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Intro Text & 2-Column Checklist */}
            <div className="about-intro-text-col" style={{ order: 2 }}>
              <div className="about-pill-tag">
                <span>ABOUT JUPITER INDUSTRIES</span>
              </div>

              <h2 className="about-main-title">
                Brick Making Machine Manufacturer in Coimbatore, Tamil Nadu
              </h2>

              <p className="about-intro-desc">
                Jupiter Industries is a brick making machine manufacturer based in Coimbatore, Tamil Nadu, serving brick and concrete block manufacturers across India. We specialise in manufacturing machinery for fly ash bricks, interlocking blocks, paver blocks, hollow blocks and solid blocks.
              </p>

              <p className="about-intro-desc">
                With our roots in Coimbatore’s industrial manufacturing environment, we focus on practical engineering, robust machine construction and reliable production performance. Our product range includes 5G Brick Making Machines, Fly Ash Brick Making Machines, Concrete Block Making Machines, Paver Block Machines and supporting equipment for brick and block manufacturing.
              </p>

              <p className="about-intro-desc">
                We also supply machine spare parts, dies, valves and essential components to support equipment maintenance and production continuity.
              </p>

              <p className="about-intro-desc">
                From helping customers identify suitable machinery to installation, commissioning and technical assistance, Jupiter Industries aims to support manufacturers in Coimbatore, throughout Tamil Nadu and across India.
              </p>

              <div style={{ marginTop: '24px', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#00233D', margin: 0 }}>
                  Our Machinery &amp; Capabilities
                </h3>
              </div>

              {/* 2-Column Checklist */}
              <div className="about-checklist-grid">
                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>5G Brick Making Machines</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Fly Ash Brick Making Machines</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Interlock Brick Machines</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Paver Block Machines</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Hollow &amp; Solid Block Machines</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Batching Plants and Storage Silos</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Brick Machine Spares</span>
                </div>

                <div className="about-check-item">
                  <div className="check-icon-box">
                    <Check size={15} />
                  </div>
                  <span>Installation and Technical Support</span>
                </div>
              </div>

              <div className="about-intro-actions">
                <Link to="/products" className="btn btn-orange">
                  <span>Explore Machinery Range</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/contact-us" className="btn btn-navy-outline">
                  <span>Contact Our Engineers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. SECTION 3: "OUR MISSION & VISION" (2-COLUMN MATCHING REFERENCE)
          ===================================================================== */}
      <section className="about-mission-section">
        <div className="container">
          <div className="about-section-header text-center" style={{ marginBottom: '40px' }}>
            <div className="about-pill-tag center">
              PURPOSE & DIRECTION
            </div>
            <h2 className="about-process-title">
              Our Mission & Vision
            </h2>
          </div>

          <div className="about-mission-grid">
            {/* Left Column: Mission & Vision Cards */}
            <div className="about-mission-cards-col">
              <div className="mission-card-item">
                <div className="mission-card-icon">
                  <Target size={26} />
                </div>
                <div className="mission-card-content">
                  <h3 className="mission-card-title">Our Mission</h3>
                  <p className="mission-card-desc">
                    To manufacture dependable brick and concrete block machinery in Coimbatore that helps manufacturers achieve consistent production, efficient operations and long-term equipment value.
                  </p>
                </div>
              </div>

              <div className="mission-card-item">
                <div className="mission-card-icon vision-icon">
                  <Eye size={26} />
                </div>
                <div className="mission-card-content">
                  <h3 className="mission-card-title">Our Vision</h3>
                  <p className="mission-card-desc">
                    To grow as a trusted machinery manufacturer from Coimbatore, delivering practical and reliable manufacturing solutions to the construction industry across India and international markets.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Picture Card */}
            <div className="about-mission-image-col">
              <div className="mission-image-frame">
                <img
                  src={missionImg}
                  alt="Modern Construction Machinery Facility"
                  className="mission-hero-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ISO 9001:2015 QUALITY CERTIFICATION SECTION
          ===================================================================== */}
      <section className="about-certification-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 100%)' }}>
        <div className="container">
          <div className="about-section-header text-center" style={{ marginBottom: '40px' }}>
            <div className="about-pill-tag center">
              <ShieldCheck size={14} className="text-orange" />
              <span>QUALITY & STANDARDS</span>
            </div>
            <h2 className="about-process-title">
              Quality-Focused Machinery Manufacturing
            </h2>
            <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p className="about-process-subtitle" style={{ margin: 0 }}>
                At Jupiter Industries, quality is an important part of our machinery manufacturing process. We focus on machine construction, component quality and operational reliability to support the production requirements of brick and concrete block manufacturers.
              </p>
              <p className="about-process-subtitle" style={{ margin: 0 }}>
                Our quality management practices support our commitment to delivering dependable industrial machinery. Refer to our current certification documentation for the applicable ISO 9001:2015 certification scope.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '360px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 15px 35px rgba(0, 35, 61, 0.08)',
            border: '1px solid #E2E8F0'
          }}>
            {/* Certificate Image Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                border: '2px solid #00233D',
                cursor: 'pointer'
              }}
              onClick={() => setShowCertModal(true)}
            >
              <img
                src={isoCertificationImg}
                alt="Jupiter Industries ISO 9001:2015 Certificate"
                loading="lazy"
                decoding="async"
                width={328}
                height={460}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Certificate Modal Popup */}
        {showCertModal && (
          <div className="modal-backdrop-overlay" onClick={() => setShowCertModal(false)} style={{ background: 'rgba(0, 0, 0, 0.85)', zIndex: 9999 }}>
            <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px', background: '#ffffff', borderRadius: '12px', overflow: 'hidden' }}>
              <div className="modal-header-bar" style={{ padding: '16px 24px', background: '#00233D', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>ISO 9001:2015 Official Certificate</h3>
                <button
                  className="modal-close-btn"
                  onClick={() => setShowCertModal(false)}
                  style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div style={{ padding: '20px', textAlign: 'center', background: '#0f172a' }}>
                <img
                  src={isoCertificationImg}
                  alt="ISO Certificate Full Resolution"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: '100%', maxHeight: '75vh', height: 'auto', borderRadius: '6px', border: '1px solid #334155' }}
                />
              </div>
            </div>
          </div>
        )}
      </section>


      {/* =====================================================================
          5. SECTION 4: "WHY CHOOSE JUPITER INDUSTRIES?" (8 CREATIVE CARDS)
          ===================================================================== */}
      <section className="about-why-choose-section">
        <div className="container">
          <div className="about-section-header text-center">
            <div className="about-pill-tag center">
              <span>OUR CORE STRENGTHS</span>
            </div>
            <h2 className="about-process-title">
              Why Choose <span className="text-orange">Jupiter Industries</span>?
            </h2>
            <p className="about-process-subtitle">
              Jupiter Industries manufactures and supplies 5G Brick Making Machines, Fly Ash Brick Making Machines, Interlock Brick Machines, Paver Block Machines and Concrete Block Machines, backed by precision engineering, installation and genuine machine spares.
            </p>
          </div>

          {/* 8 Creative Numbered Grid Cards with Icons & Glowing Hover */}
          <div className="why-choose-8cards-grid">
            {[
              {
                num: '01',
                title: 'Coimbatore-Based Manufacturing',
                tag: 'Industrial Hub',
                desc: 'Work with a machinery manufacturer based in Coimbatore, Tamil Nadu, with access to the region’s industrial and engineering ecosystem.',
                icon: Factory,
                color: '#00233D'
              },
              {
                num: '02',
                title: 'Comprehensive Machinery Range',
                tag: 'Full Production Line',
                desc: 'Explore equipment for fly ash bricks, concrete blocks, interlocking blocks and paver block production.',
                icon: Layers,
                color: '#EA580C'
              },
              {
                num: '03',
                title: 'Robust Machine Construction',
                tag: 'High Structural Strength',
                desc: 'Machinery designed for demanding production environments, with attention to structural strength and operational reliability.',
                icon: ShieldCheck,
                color: '#0284C7'
              },
              {
                num: '04',
                title: 'Precision Engineering',
                tag: 'Precision Dies & Parts',
                desc: 'Machine components and dies designed to support consistent product formation and dependable operation.',
                icon: Wrench,
                color: '#7C3AED'
              },
              {
                num: '05',
                title: 'Production-Focused Automation',
                tag: 'Smart Controls',
                desc: 'Selected models feature automation and operator controls suited to their intended manufacturing processes.',
                icon: Cpu,
                color: '#16A34A'
              },
              {
                num: '06',
                title: 'Installation & Commissioning',
                tag: 'On-Site Commissioning',
                desc: 'Installation and commissioning support to help customers prepare their machinery for operation.',
                icon: Gauge,
                color: '#D97706'
              },
              {
                num: '07',
                title: 'Spare Parts & Technical Support',
                tag: 'Production Continuity',
                desc: 'Access relevant machine spares and technical assistance to support maintenance and production continuity.',
                icon: Award,
                color: '#DC2626'
              },
              {
                num: '08',
                title: 'Serving Tamil Nadu & India',
                tag: 'Pan-India Reach',
                desc: 'Based in Coimbatore, Jupiter Industries serves customers seeking brick and block manufacturing machinery in Tamil Nadu and other Indian markets.',
                icon: MapPin,
                color: '#0D9488'
              }
            ].map((item) => {
              const CardIcon = item.icon;
              return (
                <div key={item.num} className="why-card-8 creative-why-card">
                  {/* Top Card Header with Icon Box & Number */}
                  <div className="why-card-header">
                    <div className="why-card-icon-wrap" style={{ background: `${item.color}15`, color: item.color }}>
                      <CardIcon size={22} />
                    </div>
                    <span className="why-card-number">{item.num}</span>
                  </div>

                  {/* Highlight Feature Tag */}
                  <div className="why-card-tag-pill">
                    <span>{item.tag}</span>
                  </div>

                  <h4 className="why-card-title">{item.title}</h4>
                  <p className="why-card-desc">{item.desc}</p>

                  {/* Bottom Accent Glow Line */}
                  <div className="why-card-accent-bar"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
