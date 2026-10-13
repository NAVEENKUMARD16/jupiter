/**
 * Centralized Image Registry for Jupiter Industries Website.
 *
 * Optimized high-performance assets for Lighthouse 100/100 score.
 */

import heroBanner1 from './hero-banner1-opt.webp';
import jupiterLogo from './jupiter-logo-opt.webp';
import flyashMachine from './Machines/flyash-opt.webp';
import performanceMachineImg from './Machines/performance-machine-opt.webp';
import isoCertImg from './about/iso certification.jpg';

export const IMAGES = {
  // Brand Logo
  logo: jupiterLogo,

  // ISO Certification
  isoCertification: isoCertImg,

  // Hero section image
  heroBanner: heroBanner1,
  
  // Products & Applications
  concreteBlocks: '/images/concrete-blocks.jpg',
  flyAshBricks: '/images/fly-ash-bricks.jpg',
  paverBlocks: '/images/paver-blocks.jpg',
  batchingPlants: '/images/batching-plants.jpg',
  
  // Plant & Success Story
  successPlant: '/images/arunachala-plant.jpg',
  performanceMachine: performanceMachineImg,
  flyAshMachine: flyashMachine,
  
  // Industries
  construction: '/images/industry-construction.jpg',
  infrastructure: '/images/industry-infrastructure.jpg',
  precast: '/images/industry-precast.jpg',
  realEstate: '/images/industry-real-estate.jpg',
};
