export const loadLocaleFile = async <T extends object>(
  lang: string,
  fileName: string
): Promise<T> => {
  try {
    const res = await fetch(`/locales/${lang}/${fileName}.json`);
    if (!res.ok) throw new Error('missing');
    return (await res.json()) as T;
  } catch (error) {
    console.error(`Missing locale file: ${lang}/${fileName}.json ->`, error);
    return {} as T;
  }
};
