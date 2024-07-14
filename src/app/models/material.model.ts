
  export interface PropertyData {
    [x: string]: any;
    Temperature: string[];
    Value: string[];
  }
  
  export interface Property {
    data: PropertyData[];
  }
  
  export interface Material {
    id: string;
    name: string;
    masseVolumique: Property[];
    coeffPoisson: Property[];
  }
  