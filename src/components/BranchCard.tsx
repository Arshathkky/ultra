import { Link } from 'react-router-dom';
import { Branch } from '../types/branch';

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <Link
      to={branch.link}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-80">
        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{branch.name}</h3>
            <p className="text-gray-200">{branch.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}