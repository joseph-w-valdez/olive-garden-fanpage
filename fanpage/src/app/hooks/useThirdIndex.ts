import { useMemo } from 'react';

export function useThirdIndex(getItems: () => any[], itemToFind: any): number {
  return useMemo(() => {
    const items = getItems();

    if (!itemToFind) return -1;

    const firstIndex = items.findIndex(item => item === itemToFind);
    if (firstIndex === -1) return -1;

    const secondIndex = items.findIndex((item, index) => index > firstIndex && item === itemToFind);
    if (secondIndex === -1) return -1;

    const thirdIndex = items.findIndex((item, index) => index > secondIndex && item === itemToFind);

    return thirdIndex;
  }, [getItems, itemToFind]);
}
