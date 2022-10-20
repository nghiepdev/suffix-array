/**
 * Pads each middle character of a string
 * @param {string} arr - Required
 * @param {string} key - The key of item in array object
 * @param {string} [suffix='_{holder}'] - Template contains `{holder}` to replace the number
 */

export function suffixArrayObject<I = Record<string, unknown>>(
  arr: I[],
  key: keyof I,
  suffix: `${string}${'{holder}'}${string}` = '_{holder}'
) {
  if (typeof key !== 'string') {
    throw new Error('The `key` invalid');
  }

  const {result} = arr.reduce(
    (acc, curr) => {
      if (acc.counts[curr[key]] >= 0) {
        ++acc.counts[curr[key]];
      } else {
        (acc.counts[curr[key]] as number) = 0;
      }

      const current = acc.counts[curr[key]];

      acc.result.push({
        ...curr,
        [key]:
          curr[key] +
          (current > 0 ? suffix.replace(/{holder}/g, `${current}`) : ''),
      });

      return acc;
    },
    {
      result: [],
      counts: {},
    } as {
      result: I[];
      counts: Record<any, number>;
    }
  );

  return result;
}
