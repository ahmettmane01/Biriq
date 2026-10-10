export class AppError extends Error{constructor(message:string,public code='APP_ERROR',public status=400){super(message);this.name='AppError';}}
