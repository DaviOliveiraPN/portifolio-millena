import type { NextConfig } from 'next';

/**
 * No GitHub Pages o site fica em https://<usuario>.github.io/<repositorio>/,
 * então o workflow define NEXT_PUBLIC_BASE_PATH="/<repositorio>".
 * Localmente fica vazio e o site roda na raiz.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export', // gera HTML estático em ./out
  basePath,
  trailingSlash: true,
  images: { unoptimized: true }, // GitHub Pages não tem servidor de imagens
};

export default nextConfig;
