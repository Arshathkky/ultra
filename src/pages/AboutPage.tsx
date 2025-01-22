import { sampleImages } from '../data/sampleImages';

import ProfileTypePage from './ProfileTypePage';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Redefining aluminum manufacturing with quality, innovation, and sustainability.
          </p>
        </div>
        

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our inception, we’ve been revolutionizing the aluminum manufacturing industry.
                Our dedication to quality craftsmanship, sustainable practices, and innovation has
                positioned us as a leader in the field.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create aluminum solutions that exceed expectations in quality, sustainability,
                and technological advancements while focusing on customer satisfaction.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Quality First</h4>
                <p className="text-gray-600">
                  Premium materials and unmatched craftsmanship.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
                <p className="text-gray-600">
                  Embracing cutting-edge technology and processes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Sustainability</h4>
                <p className="text-gray-600">
                  Environmentally friendly materials and methods.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Customer Focus</h4>
                <p className="text-gray-600">
                  Tailored solutions for every need.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={sampleImages.aboutHero}
                alt="About Our Company"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-75"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-semibold">Our Factory</h3>
                <p className="text-sm">Where innovation meets excellence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2010:</span> Founded with a vision to innovate aluminum manufacturing.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2015:</span> Expanded operations globally, serving multiple industries.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2020:</span> Achieved sustainability milestones and introduced eco-friendly materials.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2023:</span> Launched new innovative products redefining quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProfileTypePage/>
    </div>
  );
}
