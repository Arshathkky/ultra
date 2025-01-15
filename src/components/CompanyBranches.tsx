import { Building2 } from 'lucide-react';
import { branches } from '../data/branches';
import BranchCard from './BranchCard';

export default function CompanyBranches() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Building2 className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Ultra Holding</h1>
          <p className="text-xl text-gray-600">Building Excellence Through Innovation</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-24 bg-blue-600"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-32">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}