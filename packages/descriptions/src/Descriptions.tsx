import React, { useContext } from 'react';
import classNames from 'classnames';
import ResponsiveObserve, { responsiveArray } from 'antd/es/_util/responsiveObserve';
import { ConfigContext } from 'antd/es/config-provider';
import Row from './Row';
import DescriptionsItem from './Item';
import { DEFAULT_COLUMN_MAP } from './constants/index';
import { getColumns, getRows } from './utils/index';

import type { Breakpoint, ScreenMap } from 'antd/es/_util/responsiveObserve';

export interface DescriptionsProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  bordered?: boolean;
  size?: 'middle' | 'small' | 'default';
  children?: React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  column?: number | Partial<Record<Breakpoint, number>>;
  layout?: 'horizontal' | 'vertical';
  colon?: boolean;
  // labelStyle?: React.CSSProperties;
  // contentStyle?: React.CSSProperties;
}

export const Descriptions: React.FC<DescriptionsProps> & { Item: typeof DescriptionsItem } = ({
  prefixCls: customizePrefixCls,
  title,
  extra,
  column = DEFAULT_COLUMN_MAP,
  colon = true,
  bordered,
  layout,
  children,
  className,
  style,
  size,
  // labelStyle,
  // contentStyle,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const mergedColumn = getColumns(column);

  const rows = getRows(children, mergedColumn);
  console.log(2222, rows);

  return (
    <div
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-${size}`]: size && size !== 'default',
          [`${prefixCls}-bordered`]: !!bordered,
          // [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className
      )}
      style={style}
    >
      {(title || extra) && (
        <div className={`${prefixCls}-header`}>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      )}
      <div className={`${prefixCls}-view`}>
        <table>
          <tbody>
            {rows.map((item, index) => {
              return (
                <Row
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  index={index}
                  prefixCls={prefixCls}
                  row={item}
                  bordered={bordered}
                  vertical={layout === 'vertical'}
                  colon={colon}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Descriptions.Item = DescriptionsItem;
Descriptions.displayName = 'Descriptions';
