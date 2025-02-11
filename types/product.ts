export interface Product {
    _id : string;
    name : string;
    type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
            

        }
    };
    price : number;
    description? : string;
    slug : {
        _type : "slug"
        current : string;
    };
    stockLevel :number;

}


export interface Product {

    _id: string;
  
    name: string;
  
    price: number;
  
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
  
    quantity?: number; // Added quantity property
  
  }
  
