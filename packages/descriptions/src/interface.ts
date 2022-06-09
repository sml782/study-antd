import type { Breakpoint, ScreenMap } from 'antd/es/_util/responsiveObserve';

export interface DescriptionsProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  // bordered?: boolean;
  // size?: 'middle' | 'small' | 'default';
  children?: React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  column?: number | Partial<Record<Breakpoint, number>>;
  // layout?: 'horizontal' | 'vertical';
  // colon?: boolean;
  // labelStyle?: React.CSSProperties;
  // contentStyle?: React.CSSProperties;
}

export interface DescriptionsItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children: React.ReactNode;
  span?: number;
}
