import { createHash } from 'crypto';
export function digestSecure(value: string): string { return createHash('sha256').update(value).digest('hex'); }
