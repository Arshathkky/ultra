import { Section } from '../types';
import { 
  Store, 
  Layers, 
  SlidersHorizontal, 
  DoorOpen, 
  AppWindowIcon as WindowIcon, 
  GalleryVerticalEnd,
  Square,
  Circle,
  Triangle,
  CornerDownRight,
  AlignJustify,
  Maximize,
  Layout
} from 'lucide-react';

export const sections: Section[] = [
  {
    id: 'hardware-profiles',
    title: 'Hardware Profiles',
    description: 'Professional aluminum window and door profiles for architectural applications',
    categories: [
      {
        id: 'shop-front',
        title: 'Shop Front',
        description: 'Premium aluminum shop front profiles available in 76mm and 100mm variants with various thickness options.',
        icon: Store,
        products: [
          {
            id: 'sf-76mm',
            name: '76mm Shop Front (1.2mm Thick)',
            description: 'Durable 76mm shop front profiles with 1.2mm thickness, perfect for commercial buildings.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Thermal break system for improved energy efficiency',
              'Standard glazing options from 20mm to 28mm',
              'Designed for high traffic commercial environments',
              'Weather-resistant seals included'
            ],
            applications: [
              'Commercial storefronts',
              'Retail outlets',
              'Office building entrances',
              'Showrooms'
            ],
            productSpecs: [
              { code: '76SF01', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76SF02', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76SF03', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76SF04', size: '76mm × 60mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76SF05', size: '76mm × 62mm', thickness: '1.2mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'partition',
        title: 'Partition',
        description: 'Versatile partition profiles for interior space division, available in 76mm and 100mm sizes.',
        icon: Layers,
        products: [
          {
            id: 'pa-76mm',
            name: '76mm Partition (1.2mm Thick)',
            description: 'Lightweight 76mm partition profiles with 1.2mm thickness, ideal for office spaces.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Sound insulation rating of up to 40dB',
              'Compatible with various glass thicknesses',
              'Easy installation system',
              'Optional blind integration'
            ],
            applications: [
              'Office dividers',
              'Meeting room partitions',
              'Classroom dividers',
              'Retail space divisions'
            ],
            productSpecs: [
              { code: '76PA01', size: '76mm × 40mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76PA02', size: '76mm × 42mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76PA03', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76PA04', size: '76mm × 48mm', thickness: '1.2mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'sliding-door',
        title: 'Sliding Door',
        description: 'Space-saving sliding door profiles in 70mm and 100mm 3-track variants for smooth operation.',
        icon: SlidersHorizontal,
        products: [
          {
            id: 'sd-70mm',
            name: '70mm Sliding Door (1.3mm Thick)',
            description: 'Standard 70mm sliding door profiles with 1.3mm thickness for residential and light commercial use.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Ball-bearing rollers for smooth operation',
              'Double brush seals for improved weather resistance',
              'Integrated drainage system',
              'Multi-point locking options'
            ],
            applications: [
              'Balcony doors',
              'Interior room dividers',
              'Closet doors',
              'Patio doors'
            ],
            productSpecs: [
              { code: '70SD41', size: '70mm × 44mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SD42', size: '70mm × 46mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SD43', size: '70mm × 48mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SD44', size: '70mm × 50mm', thickness: '1.3mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'door',
        title: 'Door',
        description: 'Robust door profiles in 76mm and 100mm sizes for various applications with enhanced security features.',
        icon: DoorOpen,
        products: [
          {
            id: 'do-76mm',
            name: '76mm Door',
            description: 'Standard 76mm door profiles suitable for interior and light-duty exterior applications.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'European standard hinges and hardware',
              'Supports glazing up to 24mm',
              'Optional thermal break system',
              'Available with threshold options'
            ],
            applications: [
              'Office entrances',
              'Interior room doors',
              'Light commercial entrances',
              'Residential front doors'
            ],
            productSpecs: [
              { code: '76DO03', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76DO04', size: '76mm × 52mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76DO05', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' },
              { code: '76DO06', size: '76mm × 60mm', thickness: '1.2mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'sliding-window',
        title: 'Sliding Window',
        description: 'Efficient sliding window profiles in 70mm, 80mm, and 100mm variants for various applications.',
        icon: WindowIcon,
        products: [
          {
            id: 'sw-70mm',
            name: '70mm Sliding Window (1.3mm Thick)',
            description: 'Compact 70mm sliding window profiles with 1.3mm thickness for residential use.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Smooth rolling system on stainless steel tracks',
              'Dual brush seals for improved weather resistance',
              'Single glazing up to 22mm thickness',
              'Multiple locking point options'
            ],
            applications: [
              'Residential windows',
              'Apartment buildings',
              'Small office windows',
              'Interior pass-through windows'
            ],
            productSpecs: [
              { code: '70SW01', size: '70mm × 35mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SW02', size: '70mm × 38mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SW05', size: '70mm × 40mm', thickness: '1.3mm', length: '6.1m' },
              { code: '70SW08', size: '70mm × 42mm', thickness: '1.3mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'casement-window',
        title: 'Casement Window',
        description: 'Versatile casement window profiles in 41mm, 60mm, and 70mm sizes for various applications.',
        icon: GalleryVerticalEnd,
        products: [
          {
            id: 'ca-41mm',
            name: 'Casement 41mm (1.2mm Thick)',
            description: 'Slimline 41mm casement window profiles with 1.2mm thickness for traditional looks.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Powder Coat',
                image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Slim sightlines for more glass area',
              'Single glazing up to 16mm',
              'Friction hinges for easy operation',
              'Basic weather sealing'
            ],
            applications: [
              'Residential replacements',
              'Historic buildings',
              'Internal windows',
              'Small openings'
            ],
            productSpecs: [
              { code: '41CA01', size: '41mm × 30mm', thickness: '1.2mm', length: '6.1m' },
              { code: '41CA03', size: '41mm × 32mm', thickness: '1.2mm', length: '6.1m' },
              { code: '41CA05', size: '41mm × 34mm', thickness: '1.2mm', length: '6.1m' },
              { code: '41CA07', size: '41mm × 36mm', thickness: '1.2mm', length: '6.1m' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hardware-items',
    title: 'Hardware Items',
    description: 'Structural aluminum components and accessories for construction and fabrication',
    categories: [
      {
        id: 'box-bar',
        title: 'Box Bar',
        description: 'Premium quality aluminum box bars available in various sizes and thicknesses.',
        icon: Square,
        products: [
          {
            id: 'box-34x34',
            name: '3/4" × 3/4" Box Bar',
            description: 'Square box bar with 0.9mm thickness, available in 6.1m and 3.65m lengths.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Square profile design',
              'Uniform wall thickness',
              'Smooth surface finish',
              'Cut-to-length available'
            ],
            applications: [
              'Furniture manufacturing',
              'Display systems',
              'Interior decoration',
              'Light structural applications'
            ],
            productSpecs: [
              { code: '12TU12', size: '3/4" × 3/4"', thickness: '0.9mm', length: '6.1m / 3.65m' }
            ]
          }
        ]
      },
      {
        id: 'round-pipe',
        title: 'Round Pipe',
        description: 'High-quality aluminum round pipes in various diameters and lengths.',
        icon: Circle,
        products: [
          {
            id: 'rp-34',
            name: '3/4" Round Pipe',
            description: '0.9mm thick round pipe available in 3.65m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Circular cross-section',
              'Consistent diameter',
              'Smooth finish',
              'Easy to cut and join'
            ],
            applications: [
              'Handrails',
              'Support structures',
              'Furniture making',
              'Display systems'
            ],
            productSpecs: [
              { code: 'RP-34', size: '3/4"', thickness: '0.9mm', length: '3.65m' }
            ]
          }
        ]
      },
      {
        id: 'angle',
        title: 'Angle',
        description: 'Structural aluminum angles for various construction applications.',
        icon: Triangle,
        products: [
          {
            id: 'angle-34x34',
            name: '3/4" × 3/4" Thick Angle',
            description: '2.5mm thick angle profile available in 3.65m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'L-shaped profile',
              'Equal sides',
              'High strength',
              'Corrosion resistant'
            ],
            applications: [
              'Structural support',
              'Frame building',
              'Corner protection',
              'Mounting brackets'
            ],
            productSpecs: [
              { code: 'ANG-34', size: '3/4" × 3/4"', thickness: '2.5mm', length: '3.65m' }
            ]
          }
        ]
      },
      {
        id: 'angle-channel',
        title: 'Angle Channel',
        description: 'Versatile aluminum angle channels for various applications.',
        icon: CornerDownRight,
        products: [
          {
            id: 'ac-12x12',
            name: '1/2" × 1/2" Angle Channel',
            description: '0.9mm thick angle channel available in 3.65m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'U-shaped profile',
              'Equal sides',
              'Lightweight construction',
              'Easy installation'
            ],
            applications: [
              'Edge protection',
              'Trim work',
              'Display systems',
              'Furniture making'
            ],
            productSpecs: [
              { code: 'AC-12', size: '1/2" × 1/2"', thickness: '0.9mm', length: '3.65m' }
            ]
          }
        ]
      },
      {
        id: 'channel',
        title: 'Channel',
        description: 'Single and double aluminum channels for various applications.',
        icon: AlignJustify,
        products: [
          {
            id: 'ch-12x12-single',
            name: '1/2" × 1/2" Single Channel',
            description: '0.9mm thick single channel available in 3.65m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Single channel design',
              'Uniform thickness',
              'Clean edges',
              'Versatile application'
            ],
            applications: [
              'Sliding systems',
              'Guide tracks',
              'Protection strips',
              'Decorative trim'
            ],
            productSpecs: [
              { code: 'CH-12S', size: '1/2" × 1/2"', thickness: '0.9mm', length: '3.65m' }
            ]
          }
        ]
      },
      {
        id: 'curtain-rail',
        title: 'Curtain Rail Bar',
        description: 'Specialized aluminum curtain rail bars for smooth operation.',
        icon: Maximize,
        products: [
          {
            id: 'crb-10',
            name: 'Curtain Rail Bar',
            description: '1.0mm thick curtain rail available in 6.1m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'Smooth running surface',
              'Integrated track system',
              'Durable construction',
              'Easy installation'
            ],
            applications: [
              'Window curtains',
              'Room dividers',
              'Display systems',
              'Sliding panels'
            ],
            productSpecs: [
              { code: 'CRB-10', size: 'Standard', thickness: '1.0mm', length: '6.1m' }
            ]
          }
        ]
      },
      {
        id: 'show-case',
        title: 'Show Case',
        description: 'Professional aluminum show case profiles for display applications.',
        icon: Layout,
        products: [
          {
            id: 'sc-c',
            name: 'Show Case "C"',
            description: '0.9mm thick show case profile available in 3.65m length.',
            finishOptions: [
              {
                type: 'Natural',
                image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Bronze',
                image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                type: 'Black',
                image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ],
            specs: [
              'C-shaped profile',
              'Clean design',
              'Easy assembly',
              'Professional finish'
            ],
            applications: [
              'Display cases',
              'Retail showcases',
              'Exhibition displays',
              'Cabinet construction'
            ],
            productSpecs: [
              { code: 'SC-C', size: 'Type C', thickness: '0.9mm', length: '3.65m' }
            ]
          }
        ]
      }
    ]
  }
];