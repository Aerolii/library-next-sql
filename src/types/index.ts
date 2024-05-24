// 定义组件类型
export type ReactFCProps<T> = T & React.HTMLAttributes<HTMLElement>;

export type NavLinkProps = {
  href: string;
  title: string;
  active?: boolean;
};

// react function component children props
export type ReactComponentChildrenType = {
  children: React.ReactNode;
};
