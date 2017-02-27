export const isPlainObject = obj => typeof obj === 'object' && !Array.isArray(obj);

export const typeCheck = (input, type) => typeof input === type;
