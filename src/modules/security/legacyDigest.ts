import { createHash } from 'crypto';
export function digest(value: string): string { return createHash('md5').update(value).digest('hex'); }
