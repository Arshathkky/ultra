export interface FinishOption {
  type: 'Bronze' | 'Natural' | 'Mil Finished' | 'Powder Coat';
  image: string;
}

export interface ProductSpec {
  code: string;
  size: string;
  thickness: string;
}

export interface Product {
  name: string;
  description: string;
  specs: string[];
  applications: string[];
  finishOptions: FinishOption[];
  examples: string[];
  productSpecs: ProductSpec[];
}

export interface Category {
  title: string;
  icon: React.ElementType;
  description: string;
  products: Product[];
}