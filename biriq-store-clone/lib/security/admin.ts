export type AdminRole='owner'|'admin'|'support'|'finance';
export function canAccessAdmin(role:AdminRole|undefined){return !!role;}
export function canManagePayments(role:AdminRole|undefined){return role==='owner'||role==='admin'||role==='finance';}
