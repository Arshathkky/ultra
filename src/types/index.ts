// types.ts
export interface ProductSpec {
  code: string;
  size: string;
  thickness: string;
  length: string;
}

export interface FinishOption {
  type: string;
  image: string;
}

export interface Configuration {
  id: string;
  name: string;
  description: string;
  finishOptions: FinishOption[];
  productSpecs: ProductSpec[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  finishOptions?: FinishOption[];
  configurations?: Configuration[];
  specs: string[];
  applications: string[];
  productSpecs?: ProductSpec[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any;
  products: Product[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  categories: Category[];
}