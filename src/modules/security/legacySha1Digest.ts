import { createHash } from 'crypto';
export function digestSha1(value: string): string { return createHash('sha1').update(value).digest('hex'); }
