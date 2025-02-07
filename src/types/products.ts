

export interface Proudct {
    _id : string;
    _name : string;
    _type : "product";
    image? :{
        asset : {
            ref: string;
            _type : "image"
        }
    };
    price : number;
    description? : string;

}