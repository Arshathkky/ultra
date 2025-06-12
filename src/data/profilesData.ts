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
            id: 'shop-front-system',
            name: 'Shop Front System',
            description: 'Durable shop front profiles available in multiple configurations, perfect for commercial buildings.',
            configurations: [
              {
                id: '76SF',
                name: '76SF Series',
                description: '76mm shop front profiles with 1.2mm thickness',
                finishOptions: [
                  { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
                  { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
                  { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
                  { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
                ],
                productSpecs: [
                  { code: '76SF01', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF02', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF03', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF04', size: '76mm × 60mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF05', size: '76mm × 62mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF06', size: '76mm × 65mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF08', size: '76mm × 68mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF09', size: '76mm × 70mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF10', size: '76mm × 72mm', thickness: '1.2mm', length: '6.1m' },
                  { code: '76SF11', size: '76mm × 75mm', thickness: '1.2mm', length: '6.1m' }
                ]
              },
              {
                id: '10SF',
                name: '10SF Series', 
                description: '100mm shop front profiles with 1.5mm thickness for enhanced performance',
                finishOptions: [
                  { type: 'Natural', image: 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg' },
                  { type: 'Bronze', image: 'https://images.pexels.com/photos/1212060/pexels-photo-1212060.jpeg' },
                  { type: 'Black', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
                  { type: 'Anodized', image: 'https://images.pexels.com/photos/2529165/pexels-photo-2529165.jpeg' }
                ],
                productSpecs: [
                  { code: '10SF01', size: '100mm × 50mm', thickness: '1.5mm', length: '6.1m' },
                  { code: '10SF02', size: '100mm × 55mm', thickness: '1.5mm', length: '6.1m' },
                  { code: '10SF03', size: '100mm × 60mm', thickness: '1.5mm', length: '6.1m' },
                  { code: '10SF04', size: '100mm × 65mm', thickness: '1.5mm', length: '6.1m' },
                  { code: '10SF05', size: '100mm × 70mm', thickness: '1.5mm', length: '6.1m' },
                  { code: '10SF06', size: '100mm × 75mm', thickness: '1.5mm', length: '6.1m' }
                ]
              }
            ],
            specs: [
              'Thermal break system for improved energy efficiency',
              'Standard glazing options from 20mm to 28mm',
              'Designed for high traffic commercial environments',
              'Weather-resistant seals included'
            ],
            applications: ['Commercial storefronts', 'Retail outlets', 'Office building entrances', 'Showrooms']
          }
        ]
      },
      {
  id: 'partition',
  title: 'Partition',
  description: 'Versatile aluminum partition profiles available in 76mm and 100mm variants, ideal for modern interior divisions.',
  icon: Layers,
  products: [
    {
      id: 'partition-system',
      name: 'Partition System',
      description: 'Durable partition systems designed for indoor space separation, offering both 76mm and 100mm profile options.',
      configurations: [
        {
          id: '76PA',
          name: '76PA Series',
          description: '76mm partition profiles with 1.2mm thickness, suitable for office interiors.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
            { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
          ],
          productSpecs: [
            { code: '76PA01', size: '76mm × 40mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76PA02', size: '76mm × 42mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76PA03', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76PA04', size: '76mm × 48mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76PA05', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76PA06', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' }
          ]
        },
        {
          id: '10PA',
          name: '10PA Series',
          description: '100mm partition profiles with 1.5mm thickness, providing greater strength and acoustic separation.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212060/pexels-photo-1212060.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
            { type: 'Anodized', image: 'https://images.pexels.com/photos/2529165/pexels-photo-2529165.jpeg' }
          ],
          productSpecs: [
            { code: '10PA01', size: '100mm × 50mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10PA02', size: '100mm × 55mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10PA03', size: '100mm × 60mm', thickness: '1.5mm', length: '6.1m' }
          ]
        }
      ],
      specs: [
        'Sound insulation rating up to 40dB',
        'Compatible with a variety of glass thicknesses',
        'Quick installation with modular design',
        'Optional integrated blinds for privacy'
      ],
      applications: ['Office partitions', 'Meeting rooms', 'Retail space dividers', 'Classroom sections']
          }
        ]
      },

      {
  id: 'sliding-window',
  title: 'Sliding Window',
  description: 'Smooth-operating aluminum sliding window systems in 76mm and 100mm sizes, suitable for residential and commercial spaces.',
  icon: SlidersHorizontal,
  products: [
    {
      id: 'sliding-window-system',
      name: 'Sliding Window System',
      description: 'Robust sliding window systems designed for modern architecture with two series: 76mm and 100mm options.',
      configurations: [
        {
          id: '76SW',
          name: '76SW Series',
          description: '76mm sliding window profiles with 1.2mm thickness, offering easy operation and stylish design.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
            { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
          ],
          productSpecs: [
            { code: '76SW01', size: '76mm × 40mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76SW02', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76SW03', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76SW04', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76SW05', size: '76mm × 60mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76SW06', size: '76mm × 65mm', thickness: '1.2mm', length: '6.1m' }
          ]
        },
        {
          id: '10SW',
          name: '10SW Series',
          description: '100mm sliding window profiles with 1.5mm thickness, designed for larger openings and superior durability.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212060/pexels-photo-1212060.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
            { type: 'Anodized', image: 'https://images.pexels.com/photos/2529165/pexels-photo-2529165.jpeg' }
          ],
          productSpecs: [
            { code: '10SW01', size: '100mm × 50mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10SW02', size: '100mm × 55mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10SW03', size: '100mm × 60mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10SW04', size: '100mm × 65mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10SW05', size: '100mm × 70mm', thickness: '1.5mm', length: '6.1m' }
          ]
        }
      ],
      specs: [
        'Smooth roller operation with stainless steel tracks',
        'Available for single, double, or triple-track systems',
        'Supports mosquito mesh and fixed glass panels',
        'Water and air tightness tested'
      ],
      applications: [
        'Balconies and verandas',
        'Apartment windows',
        'Modern houses',
        'Showrooms and commercial buildings'
      ]
    }
  ]
},

        {
  id: 'door',
  title: 'Door',
  description: 'Heavy-duty aluminum door profiles available in 76mm and 100mm variants for residential and commercial entrances.',
  icon: DoorOpen,
  products: [
    {
      id: 'door-system',
      name: 'Aluminium Door System',
      description: 'Sturdy and elegant door systems offering reliable performance with aesthetic finishes in 76mm and 100mm sizes.',
      configurations: [
        {
          id: '76DO',
          name: '76DO Series',
          description: '76mm door profiles with 1.2mm thickness, suitable for standard residential and office doors.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
            { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
          ],
          productSpecs: [
            { code: '76DO01', size: '76mm × 45mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76DO02', size: '76mm × 50mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76DO03', size: '76mm × 55mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76DO04', size: '76mm × 60mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76DO05', size: '76mm × 65mm', thickness: '1.2mm', length: '6.1m' },
            { code: '76DO06', size: '76mm × 70mm', thickness: '1.2mm', length: '6.1m' }
          ]
        },
        {
          id: '10DO',
          name: '10DO Series',
          description: '100mm door profiles with 1.5mm thickness, ideal for main entrances and heavy-duty commercial use.',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212060/pexels-photo-1212060.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
            { type: 'Anodized', image: 'https://images.pexels.com/photos/2529165/pexels-photo-2529165.jpeg' }
          ],
          productSpecs: [
            { code: '10DO01', size: '100mm × 60mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10DO02', size: '100mm × 65mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10DO03', size: '100mm × 70mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10DO04', size: '100mm × 75mm', thickness: '1.5mm', length: '6.1m' },
            { code: '10DO05', size: '100mm × 80mm', thickness: '1.5mm', length: '6.1m' }
          ]
        }
      ],
      specs: [
        'Accommodates single and double door configurations',
        'High-strength profiles for frequent use',
        'Weather-sealed for outdoor installations',
        'Optional glazing and lock hardware compatibility'
      ],
      applications: [
        'Main entrances',
        'Interior partition doors',
        'Commercial access points',
        'Institutional facilities'
      ]
    }
  ]
},

{
  id: 'casement-window',
  title: 'Casement Window',
  description: 'High-performance aluminum casement window profiles available in 41mm, 60mm, and 70mm variants with multiple thickness and finish options.',
  icon: WindowIcon, // replace with your actual icon import
  products: [
    {
      id: 'casement-window-system',
      name: 'Casement Window System',
      description: 'Reliable and durable aluminum casement window profiles suited for residential and commercial applications.',
      configurations: [
        {
          id: '41CW',
          name: '41CW Series',
          description: '41mm casement window profiles with 1.2mm thickness',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
            { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
          ],
          productSpecs: [
            { code: '41CW01', size: '41mm × 35mm', thickness: '1.2mm', length: '6.1m' },
            { code: '41CW02', size: '41mm × 40mm', thickness: '1.2mm', length: '6.1m' },
            { code: '41CW03', size: '41mm × 45mm', thickness: '1.2mm', length: '6.1m' }
          ]
        },
        {
          id: '60CW',
          name: '60CW Series',
          description: '60mm casement window profiles with 1.4mm thickness',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212060/pexels-photo-1212060.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg' },
            { type: 'Anodized', image: 'https://images.pexels.com/photos/2529165/pexels-photo-2529165.jpeg' }
          ],
          productSpecs: [
            { code: '60CW01', size: '60mm × 40mm', thickness: '1.4mm', length: '6.1m' },
            { code: '60CW02', size: '60mm × 45mm', thickness: '1.4mm', length: '6.1m' },
            { code: '60CW03', size: '60mm × 50mm', thickness: '1.4mm', length: '6.1m' }
          ]
        },
        {
          id: '70CW',
          name: '70CW Series',
          description: '70mm casement window profiles with 1.5mm thickness',
          finishOptions: [
            { type: 'Natural', image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg' },
            { type: 'Bronze', image: 'https://images.pexels.com/photos/1212052/pexels-photo-1212052.jpeg' },
            { type: 'Black', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
            { type: 'Powder Coat', image: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg' }
          ],
          productSpecs: [
            { code: '70CW01', size: '70mm × 50mm', thickness: '1.5mm', length: '6.1m' },
            { code: '70CW02', size: '70mm × 55mm', thickness: '1.5mm', length: '6.1m' },
            { code: '70CW03', size: '70mm × 60mm', thickness: '1.5mm', length: '6.1m' }
          ]
        }
      ],
      specs: [
        'Double-glazing support up to 28mm',
        'Enhanced sealing for noise and weather insulation',
        'Sturdy profile for long-lasting use in high-moisture environments',
        'Flexible opening styles for maximum ventilation'
      ],
      applications: ['Residential windows', 'Commercial buildings', 'Schools and hospitals', 'Ventilated rooms']
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