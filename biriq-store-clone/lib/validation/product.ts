export type ProductInput={name:string;slug:string;price:number;active:boolean};
export function validateProduct(input:Partial<ProductInput>){const errors:string[]=[]; if(!input.name)errors.push('name'); if(!input.slug)errors.push('slug'); if(typeof input.price!=='number'||input.price<0)errors.push('price'); return {valid:errors.length===0,errors};}
