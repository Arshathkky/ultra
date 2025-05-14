import { Category } from '../types';
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

export const hardwareProfiles: Category[] = [
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '76SF01', size: '76mm × 45mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF02', size: '76mm × 50mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF03', size: '76mm × 55mm', thickness: '1.2mm',length:'0', },
          { code: '76SF04', size: '76mm × 60mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF05', size: '76mm × 62mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF06', size: '76mm × 64mm', thickness: '1.2mm',length:'0', },
          { code: '76SF07', size: '76mm × 66mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF08', size: '76mm × 68mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF09', size: '76mm × 70mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF10', size: '76mm × 72mm', thickness: '1.2mm' ,length:'0',},
          { code: '76SF11', size: '76mm × 74mm', thickness: '1.2mm',length:'0', }
        ]
      },
      {
        id: 'sf-100mm',
        name: '100mm Shop Front (1.5mm Thick)',
        description: 'Heavy-duty 100mm shop front profiles with 1.5mm thickness for enhanced security and stability.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Enhanced thermal insulation properties',
          'Glazing options up to 35mm',
          'Reinforced corners for added strength',
          'Anti-finger trap options available'
        ],
        applications: [
          'High-end retail stores',
          'Banking halls',
          'Car showrooms',
          'Hotels and resorts entrances'
        ],
        productSpecs: [
          { code: '100SD01A', size: '100mm × 50mm', thickness: '1.5mm' ,length:'0',},
          { code: '100SD02', size: '100mm × 55mm', thickness: '1.5mm' ,length:'0',},
          { code: '100SD03', size: '100mm × 60mm', thickness: '1.5mm',length:'0', },
          { code: '100SD04', size: '100mm × 65mm', thickness: '1.5mm',length:'0', },
          { code: '100SD05', size: '100mm × 70mm', thickness: '1.5mm',length:'0', },
          { code: '100SD10', size: '100mm × 75mm', thickness: '1.5mm',length:'0', },
          { code: '100SD15', size: '100mm × 80mm', thickness: '1.5mm',length:'0', },
          { code: '100SD20', size: '100mm × 85mm', thickness: '1.5mm' ,length:'0',}
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '76PA01', size: '76mm × 40mm', thickness: '1.2mm' ,length:'0'},
          { code: '76PA02', size: '76mm × 42mm', thickness: '1.2mm' ,length:'0',},
          { code: '76PA03', size: '76mm × 45mm', thickness: '1.2mm' ,length:'0'},
          { code: '76PA04', size: '76mm × 48mm', thickness: '1.2mm' ,length:'0'},
          { code: '76PA05', size: '76mm × 50mm', thickness: '1.2mm' ,length:'0',},
          { code: '76PA06', size: '76mm × 52mm', thickness: '1.2mm' ,length:'0',}
        ]
      },
      {
        id: 'pa-100mm',
        name: '100mm Partition (2.0mm Thick)',
        description: 'Heavy-duty 100mm partition profiles with 2.0mm thickness for enhanced sound insulation.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Superior sound insulation rating of up to 48dB',
          'Double glazing options available',
          'Integrated cable management',
          'Compatible with various door systems'
        ],
        applications: [
          'Executive offices',
          'Conference rooms',
          'Recording studios',
          'Medical facilities'
        ],
        productSpecs: [
          { code: '100PA01', size: '100mm × 50mm', thickness: '2.0mm' ,length:'0'},
          { code: '100PA02', size: '100mm × 55mm', thickness: '2.0mm' ,length:'0'},
          { code: '100PA03', size: '100mm × 60mm', thickness: '2.0mm',length:'0' }
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '70SD41', size: '70mm × 44mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SD42', size: '70mm × 46mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SD43', size: '70mm × 48mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SD44', size: '70mm × 50mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SD45', size: '70mm × 52mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SD46', size: '70mm × 54mm', thickness: '1.3mm' ,length:'0'}
        ]
      },
      {
        id: 'sd-100mm',
        name: '100mm 3 Track Sliding',
        description: 'Heavy-duty 100mm 3-track sliding door system for wide openings and multiple panels.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Stainless steel rollers rated for panels up to 150kg',
          'Triple track system for multiple sliding panels',
          'Enhanced security with multi-point locking',
          'Thermal break options available'
        ],
        applications: [
          'Large patio doors',
          'Storefront entrances',
          'Room dividers in commercial spaces',
          'Hotel lobby dividers'
        ],
        productSpecs: [
          { code: '100SD01', size: '100mm × 55mm', thickness: '1.6mm',length:'0' },
          { code: '100SD02', size: '100mm × 60mm', thickness: '1.6mm' ,length:'0'},
          { code: '100SD03', size: '100mm × 65mm', thickness: '1.6mm',length:'0' },
          { code: '100SD06', size: '100mm × 70mm', thickness: '1.6mm',length:'0' },
          { code: '100SD09', size: '100mm × 75mm', thickness: '1.6mm' ,length:'0'},
          { code: '100SD12', size: '100mm × 80mm', thickness: '1.6mm',length:'0' },
          { code: '100SD15', size: '100mm × 85mm', thickness: '1.6mm' ,length:'0'},
          { code: '100SD18', size: '100mm × 90mm', thickness: '1.6mm' ,length:'0'}
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '76DO03', size: '76mm × 50mm', thickness: '1.2mm' ,length:'0'},
          { code: '76DO04', size: '76mm × 52mm', thickness: '1.2mm' ,length:'0'},
          { code: '76DO05', size: '76mm × 55mm', thickness: '1.2mm' ,length:'0'},
          { code: '76DO06', size: '76mm × 60mm', thickness: '1.2mm' ,length:'0'}
        ]
      },
      {
        id: 'do-100mm',
        name: '100mm Door (1.6mm Thick)',
        description: 'Heavy-duty 100mm door profiles with 1.6mm thickness for commercial and high-traffic applications.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Reinforced corners for heavy-duty use',
          'Multipoint locking system',
          'Thermal break for enhanced energy efficiency',
          'Compliant with security standards'
        ],
        applications: [
          'High-traffic commercial entrances',
          'School and institutional doors',
          'Security entrances',
          'Retail store entrances'
        ],
        productSpecs: [
          { code: '100DO01', size: '100mm × 60mm', thickness: '1.6mm' ,length:'0'},
          { code: '100DO02', size: '100mm × 65mm', thickness: '1.6mm' ,length:'0'},
          { code: '100DO05', size: '100mm × 70mm', thickness: '1.6mm' ,length:'0'},
          { code: '100DO08', size: '100mm × 75mm', thickness: '1.6mm' ,length:'0'},
          { code: '100DO11', size: '100mm × 80mm', thickness: '1.6mm' ,length:'0'}
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '70SW01', size: '70mm × 35mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SW02', size: '70mm × 38mm', thickness: '1.3mm',length:'0' },
          { code: '70SW05', size: '70mm × 40mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SW08', size: '70mm × 42mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SW10', size: '70mm × 44mm', thickness: '1.3mm',length:'0' },
          { code: '70SW12', size: '70mm × 46mm', thickness: '1.3mm' ,length:'0'},
          { code: '70SW14', size: '70mm × 48mm', thickness: '1.3mm',length:'0' }
        ]
      },
      {
        id: 'sw-80mm',
        name: '80mm Sliding Window',
        description: 'Mid-range 80mm sliding window profiles for enhanced thermal performance.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Improved thermal insulation with thermal break',
          'Glazing options up to 26mm',
          'Enhanced water drainage system',
          'Higher security locking mechanisms'
        ],
        applications: [
          'Premium residential projects',
          'Small commercial buildings',
          'Hotels and hospitality',
          'Educational facilities'
        ],
        productSpecs: [
          { code: '80SW01', size: '80mm × 40mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW03', size: '80mm × 42mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW05', size: '80mm × 44mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW08', size: '80mm × 46mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW10', size: '80mm × 48mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW12', size: '80mm × 50mm', thickness: '1.4mm' ,length:'0'},
          { code: '80SW14', size: '80mm × 52mm', thickness: '1.4mm' ,length:'0'}
        ]
      },
      {
        id: 'sw-100mm',
        name: '100mm 3 Track Window',
        description: 'Premium 100mm 3-track window system for large openings and superior performance.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Triple track system for multiple panels',
          'High-performance thermal insulation',
          'Supports double glazing up to 32mm',
          'Advanced security features'
        ],
        applications: [
          'Luxury residential developments',
          'Commercial facades',
          'Coastal properties',
          'High-rise buildings'
        ],
        productSpecs: [
          { code: '100SW01', size: '100mm × 45mm', thickness: '1.5mm' ,length:'0'},
          { code: '100SW03', size: '100mm × 50mm', thickness: '1.5mm' ,length:'0'},
          { code: '100SW05', size: '100mm × 55mm', thickness: '1.5mm',length:'0' },
          { code: '100SW08', size: '100mm × 60mm', thickness: '1.5mm' ,length:'0'},
          { code: '100SW10', size: '100mm × 65mm', thickness: '1.5mm',length:'0' }
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
          { code: '41CA01', size: '41mm × 30mm', thickness: '1.2mm',length:'0' },
          { code: '41CA03', size: '41mm × 32mm', thickness: '1.2mm',length:'0' },
          { code: '41CA05', size: '41mm × 34mm', thickness: '1.2mm',length:'0' },
          { code: '41CA07', size: '41mm × 36mm', thickness: '1.2mm',length:'0' },
          { code: '41CA09', size: '41mm × 38mm', thickness: '1.2mm',length:'0' },
          { code: '41CA11', size: '41mm × 40mm', thickness: '1.2mm' ,length:'0'},
          { code: '41CA13', size: '41mm × 42mm', thickness: '1.2mm' ,length:'0'}
        ]
      },
      {
        id: 'ca-60mm',
        name: 'Casement 60mm (1.3mm Thick)',
        description: 'Mid-range 60mm casement window profiles for improved thermal performance.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'Thermal break for improved insulation',
          'Double glazing up to 24mm',
          'Enhanced weather sealing',
          'Multi-point locking system'
        ],
        applications: [
          'Modern residential projects',
          'Light commercial buildings',
          'Schools and institutions',
          'Rental properties'
        ],
        productSpecs: [
          { code: '60CA01', size: '60mm × 45mm', thickness: '1.3mm',length:'0' },
          { code: '60CA02', size: '60mm × 48mm', thickness: '1.3mm',length:'0' },
          { code: '60CA03', size: '60mm × 50mm', thickness: '1.3mm' ,length:'0'}
        ]
      },
      {
        id: 'ca-70mm',
        name: 'Casement 70mm (1.5mm Thick)',
        description: 'Premium 70mm casement window profiles with 1.5mm thickness for superior performance.',
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
            image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ],
        specs: [
          'High-performance thermal insulation',
          'Triple glazing options up to 32mm',
          'Superior weather resistance',
          'Advanced security features'
        ],
        applications: [
          'High-end residential',
          'Commercial buildings',
          'Energy-efficient projects',
          'Coastal locations'
        ],
        productSpecs: [
          { code: '70CA01', size: '70mm × 50mm', thickness: '1.5mm' ,length:'0'},
          { code: '70CA05', size: '70mm × 55mm', thickness: '1.5mm',length:'0' },
          { code: '70CA10', size: '70mm × 60mm', thickness: '1.5mm' ,length:'0'},
          { code: '70CA15', size: '70mm × 65mm', thickness: '1.5mm',length:'0' },
          { code: '70CA20', size: '70mm × 70mm', thickness: '1.5mm' ,length:'0'},
          { code: '70CA23', size: '70mm × 75mm', thickness: '1.5mm',length:'0' },
          { code: '70CA26', size: '70mm × 80mm', thickness: '1.5mm',length:'0' }
        ]
      }
    ]
  }
];

export const hardwareItems: Category[] = [
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
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
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
    },
    {
      id: 'box-12x12',
      name: '1/2" × 1/2" Box Bar',
      description: 'Compact box bar ideal for small-scale applications with 0.9mm thickness.',
      finishOptions: [
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
      ],
      specs: [
        'Compact square profile',
        'Lightweight structure',
        'Corrosion-resistant finish',
        'Ideal for lightweight frames'
      ],
      applications: [
        'Craft projects',
        'Interior detailing',
        'Fixtures and supports'
      ],
      productSpecs: [
        { code: '19TU19', size: '1/2" × 1/2"', thickness: '0.9mm', length: '3.65m' }
      ]
    },
    {
      id: 'box-20x10',
      name: '2" × 1" Box Bar',
      description: 'Wide-profile box bar with 0.9mm thickness for broader structural applications.',
      finishOptions: [
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
      ],
      specs: [
        'Rectangular profile design',
        'Reinforced edge strength',
        'Smooth extrusion',
        'Suitable for high-contact surfaces'
      ],
      applications: [
        'Partitions',
        'Framing and racks',
        'Storage units'
      ],
      productSpecs: [
        { code: '25TU25', size: '2" × 1"', thickness: '0.9mm', length: '3.65m' }
      ]
    },
    {
      id: 'box-20x20',
      name: '2" × 2" Box Bar',
      description: 'Heavy-duty square box bar with 1.2mm thickness for structural and industrial use.',
      finishOptions: [
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
      ],
      specs: [
        'Thicker gauge for durability',
        'Industrial strength',
        'Anti-corrosion finish',
        'Ideal for outdoor frameworks'
      ],
      applications: [
        'Industrial racking',
        'Frameworks',
        'Heavy-duty furniture'
      ],
      productSpecs: [
        { code: '50TU25', size: '2" × 2"', thickness: '1.2mm', length: '6.1m' }
      ]
    },
    {
      id: 'box-10x10',
      name: '1" × 1" Box Bar',
      description: 'Medium square profile with 0.9mm thickness, versatile and lightweight.',
      finishOptions: [
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
      ],
      specs: [
        'Balanced dimensions',
        'Popular in furniture and decoration',
        'Good structural integrity',
        'Low maintenance'
      ],
      applications: [
        'Display racks',
        'Interior fixtures',
        'Framework for light enclosures'
      ],
      productSpecs: [
        { code: '76TU25', size: '1" × 1"', thickness: '0.9mm', length: '3.65m' }
      ]
    },
    {
      id: 'box-30x10',
      name: '3" × 1" Box Bar',
      description: 'Extended rectangular box bar with 1.0mm thickness for longer spans.',
      finishOptions: [
        { type: 'Natural', image: '/images/Profiles/Box/natural.jpg' },
        { type: 'Bronze', image: '/images/Profiles/Box/bronze.jpg' },
        { type: 'Black', image: '/images/Profiles/Box/black.jpg' },
        { type: 'Powder Coat', image: '/images/Profiles/Box/white.jpg' }
      ],
      specs: [
        'Long span support',
        'Wide rectangular cross-section',
        'Ideal for bracing and shelving',
        'Consistent thickness'
      ],
      applications: [
        'Shelving',
        'Enclosures',
        'Custom fabrications'
      ],
      productSpecs: [
        { code: '38TU25', size: '3" × 1"', thickness: '1.0mm', length: '6.1m' }
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
          },
          {
            type: 'Powder Coat',
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
          { code: 'RP-34', size: '3/4"', thickness: '0.9mm', length:'0' }
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
        description: '2.5mm thick angle profile available in  3.65m length.',
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
          { code: 'ANG-34', size: '3/4" × 3/4"', thickness: '2.5mm',length:'0' }
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
          },
          {
            type: 'Powder Coat',
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
          { code: 'AC-12', size: '1/2" × 1/2"', thickness: '0.9mm' ,length:'0'}
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
          },
          {
            type: 'Powder Coat',
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
          { code: 'CH-12S', size: '1/2" × 1/2"', thickness: '0.9mm',length:'0' }
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
          },
          {
            type: 'Powder Coat',
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
          { code: 'CRB-10', size: 'Standard', thickness: '1.0mm',length:'0' }
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
          },
          {
            type: 'Powder Coat',
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
          { code: 'SC-C', size: 'Type C', thickness: '0.9mm' ,length:'0'}
        ]
      }
    ]
  }
];

export const allProfiles = [...hardwareProfiles, ...hardwareItems];