export type OrderInput={productId:string;playerId:string;paymentMethod:string};
export function validateOrder(input:Partial<OrderInput>){const errors:string[]=[]; if(!input.productId)errors.push('productId'); if(!input.playerId)errors.push('playerId'); if(!input.paymentMethod)errors.push('paymentMethod'); return {valid:errors.length===0,errors};}
