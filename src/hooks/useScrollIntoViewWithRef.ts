import { useCallback, useRef } from 'react';

export const useScrollIntoViewWithRef = () => {
  const itemsRef = useRef<Map<string, HTMLAnchorElement | null> | null>(null);

  const getMap = useCallback(() => {
    if (!itemsRef.current) {
      // 首次运行时初始化 Map。
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }, []);

  const setMap = useCallback(
    (key: string, node: HTMLAnchorElement) => {
      const map = getMap();
      if (node) {
        map.set(key, node);
      } else {
        map.delete(node);
      }
    },
    [getMap],
  );

  const scrollIntoView = useCallback(
    (key: string) => {
      const map = getMap();
      const node = map.get(key);
      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    },
    [getMap],
  );

  return {
    getMap,
    setMap,
    scrollIntoView,
  };
};
