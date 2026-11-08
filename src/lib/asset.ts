/** Prefixa arquivos de /public com o basePath (necessário no GitHub Pages). */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
