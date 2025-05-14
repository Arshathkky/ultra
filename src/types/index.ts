export interface ProductSpec {
  code: string;
  size: string;
  thickness: string;
  length:string;
}

export interface FinishOption {
  type: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  finishOptions: FinishOption[];
  specs: string[];
  
  applications: string[];
  productSpecs: ProductSpec[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  products: Product[];
}