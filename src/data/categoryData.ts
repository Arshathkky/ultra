import { Box, Layout } from 'lucide-react';
import { Category } from '../types/index';

// Example images - Replace with actual image paths
const bronzeImage = "/images/box 02.jpg";
const naturalImage = "/images/roundpipe.jpg";
const milFinishedImage = "/images/aluminium-angle1.webp";
const powderCoatImage = "/images/curtain.jpg";

export const categories: Category[] = [
  {
    title: 'Hardware Profiles',
    icon: Box,
    description: 'Durable and high-quality aluminum profiles for various hardware applications.',
    products: [
      {
        name: 'Box Bar',
        description: 'Aluminum box bars for multiple applications.',
        specs: ['Material: Aluminum', 'Finish: Anodized, powder-coated', 'Sizes: Various options available'],
        applications: ['Construction', 'Industrial use', 'Furniture'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Standard Box Bar', 'Heavy Duty Box Bar', 'Slim Profile Box Bar'],
        productSpecs: [
          { code: 'BB-101', size: '1" x 1"', thickness: '1.2mm' },
          { code: 'BB-201', size: '2" x 1"', thickness: '1.5mm' },
          { code: 'BB-202', size: '2" x 2"', thickness: '1.8mm' },
          { code: 'BB-303', size: '3" x 3"', thickness: '2.0mm' }
        ]
      },
      {
        name: 'Round Pipe',
        description: 'Aluminum round pipes for various uses.',
        specs: ['Material: High-grade aluminum', 'Thickness: 1mm - 3mm', 'Length: 6m'],
        applications: ['Plumbing', 'Structural support', 'Decorative applications'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['1" Round Pipe', '2" Round Pipe', 'Heavy Duty Round Pipe'],
        productSpecs: [
          { code: 'RP-100', size: '1" diameter', thickness: '1.0mm' },
          { code: 'RP-150', size: '1.5" diameter', thickness: '1.2mm' },
          { code: 'RP-200', size: '2" diameter', thickness: '1.5mm' },
          { code: 'RP-300', size: '3" diameter', thickness: '2.0mm' }
        ]
      },
      {
        name: 'Angle Bar',
        description: 'L-shaped aluminum angle bars.',
        specs: ['Material: Aluminum alloy', 'Surface: Smooth, anodized', 'Thickness: 1mm - 5mm'],
        applications: ['Reinforcement', 'Edge protection', 'Structural supports'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['1"x1" Angle Bar', '2"x1" Angle Bar', 'Heavy Duty Angle Bar'],
        productSpecs: [
          { code: 'AB-101', size: '1" x 1"', thickness: '1.2mm' },
          { code: 'AB-201', size: '2" x 1"', thickness: '1.5mm' },
          { code: 'AB-202', size: '2" x 2"', thickness: '1.8mm' },
          { code: 'AB-303', size: '3" x 3"', thickness: '2.0mm' }
        ]
      },
      {
        name: 'Curtain Rail Bar',
        description: 'High-quality aluminum curtain rails.',
        specs: ['Material: Aluminum', 'Finish: Powder-coated', 'Length: Customizable'],
        applications: ['Homes', 'Offices', 'Hotels'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Standard Curtain Rail', 'Heavy Duty Curtain Rail', 'Decorative Curtain Rail'],
        productSpecs: [
          { code: 'CR-100', size: 'Single track', thickness: '1.0mm' },
          { code: 'CR-200', size: 'Double track', thickness: '1.2mm' },
          { code: 'CR-300', size: 'Heavy duty track', thickness: '1.5mm' },
          { code: 'CR-400', size: 'Decorative track', thickness: '1.2mm' }
        ]
      },
      {
        name: 'Box Bar with Channel',
        description: 'Special aluminum box bars with channels.',
        specs: ['Material: Aluminum', 'Customizable slots', 'Different sizes available'],
        applications: ['Sliding systems', 'Industrial frameworks', 'Architectural applications'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Channel Box Bar Small', 'Channel Box Bar Medium', 'Channel Box Bar Large'],
        productSpecs: [
          { code: 'BBC-101', size: '1" x 1" with channel', thickness: '1.2mm' },
          { code: 'BBC-201', size: '2" x 1" with channel', thickness: '1.5mm' },
          { code: 'BBC-202', size: '2" x 2" with channel', thickness: '1.8mm' },
          { code: 'BBC-303', size: '3" x 3" with channel', thickness: '2.0mm' }
        ]
      }
    ]
  },
  {
    title: 'Section Profiles',
    icon: Layout,
    description: 'Structural aluminum profiles designed for a wide range of applications.',
    products: [
      {
        name: 'Shop Front',
        description: 'Aluminum profiles for modern shop fronts.',
        specs: ['Material: High-strength aluminum', 'Customizable sizes', 'Elegant finish'],
        applications: ['Retail stores', 'Commercial buildings', 'Shopping malls'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Standard Shop Front', 'Glass Support Shop Front', 'Heavy Duty Shop Front'],
        productSpecs: [
          { code: 'SF-100', size: 'Standard frame', thickness: '1.8mm' },
          { code: 'SF-200', size: 'Wide frame', thickness: '2.0mm' },
          { code: 'SF-300', size: 'Glass support frame', thickness: '2.2mm' },
          { code: 'SF-400', size: 'Heavy duty frame', thickness: '2.5mm' }
        ]
      },
      {
        name: 'Sliding Door',
        description: 'Aluminum profiles for sliding doors.',
        specs: ['Material: Durable aluminum', 'Track included', 'Various thicknesses'],
        applications: ['Homes', 'Offices', 'Retail stores'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Single Sliding Door', 'Double Sliding Door', 'Heavy Duty Sliding Door'],
        productSpecs: [
          { code: 'SD-100', size: 'Single track', thickness: '1.5mm' },
          { code: 'SD-200', size: 'Double track', thickness: '1.8mm' },
          { code: 'SD-300', size: 'Heavy duty track', thickness: '2.0mm' },
          { code: 'SD-400', size: 'Extra wide track', thickness: '2.2mm' }
        ]
      },
      {
        name: 'Door Section',
        description: 'High-quality aluminum door profiles.',
        specs: ['Material: High-grade aluminum', 'Surface: Anodized or powder-coated', 'Customizable dimensions'],
        applications: ['Homes', 'Offices', 'Hotels'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Standard Door Profile', 'Decorative Door Profile', 'Heavy Duty Door Profile'],
        productSpecs: [
          { code: 'DS-100', size: 'Standard profile', thickness: '1.5mm' },
          { code: 'DS-200', size: 'Wide profile', thickness: '1.8mm' },
          { code: 'DS-300', size: 'Decorative profile', thickness: '1.5mm' },
          { code: 'DS-400', size: 'Heavy duty profile', thickness: '2.0mm' }
        ]
      },
      {
        name: 'Sliding Window',
        description: 'Aluminum profiles for sliding windows.',
        specs: ['Material: Lightweight aluminum', 'Smooth sliding mechanism', 'Various colors available'],
        applications: ['Residential buildings', 'Commercial buildings', 'Hotels'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Single Sliding Window', 'Double Sliding Window', 'Heavy Duty Sliding Window'],
        productSpecs: [
          { code: 'SW-100', size: 'Single track', thickness: '1.2mm' },
          { code: 'SW-200', size: 'Double track', thickness: '1.5mm' },
          { code: 'SW-300', size: 'Triple track', thickness: '1.8mm' },
          { code: 'SW-400', size: 'Heavy duty track', thickness: '2.0mm' }
        ]
      },
      {
        name: 'Casement Window',
        description: 'Casement window aluminum profiles.',
        specs: ['Material: Aluminum alloy', 'Various frame thicknesses', 'Weather-resistant'],
        applications: ['Homes', 'Offices', 'Architectural projects'],
        finishOptions: [
          { type: 'Bronze', image: bronzeImage },
          { type: 'Natural', image: naturalImage },
          { type: 'Mil Finished', image: milFinishedImage },
          { type: 'Powder Coat', image: powderCoatImage }
        ],
        examples: ['Standard Casement Window', 'Decorative Casement Window', 'Heavy Duty Casement Window'],
        productSpecs: [
          { code: 'CW-100', size: 'Standard profile', thickness: '1.5mm' },
          { code: 'CW-200', size: 'Wide profile', thickness: '1.8mm' },
          { code: 'CW-300', size: 'Heavy duty profile', thickness: '2.0mm' },
          { code: 'CW-400', size: 'Weather resistant profile', thickness: '2.2mm' }
        ]
      }
    ]
  }
];