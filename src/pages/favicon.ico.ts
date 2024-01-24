import type { APIRoute } from 'astro';
import { Buffer } from 'buffer';
import sharp from 'sharp';
import ico from 'sharp-ico';
import path from 'node:path';

// relative to project root
const faviconSrc = path.resolve('src/images/favicon.png');

export const GET: APIRoute = async () => {
    const buffer32 = await sharp(faviconSrc).resize(32).toFormat('png').toBuffer();
    const buffer16 = await sharp(faviconSrc).resize(16).toFormat('png').toBuffer();

    const encodedBuffer = ico.encode([buffer16, buffer32]);

    return new Response(encodedBuffer, {
        headers: { 'Content-Type': 'image/x-icon' }
    });
};
