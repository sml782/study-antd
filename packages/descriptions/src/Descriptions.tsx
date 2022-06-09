import React, { useContext } from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import ResponsiveObserve, { responsiveArray } from 'antd/es/_util/responsiveObserve';
import warning from 'antd/es/_util/warning';
import { ConfigContext } from 'antd/es/config-provider';
// import Row from './Row';
import { cloneElement } from 'antd/es/_util/reactNode';
import DescriptionsItem from './Item';
import { DEFAULT_COLUMN_MAP } from './constants/index';
import { getColumns, getRows } from './utils/index';

import type { Breakpoint, ScreenMap } from 'antd/es/_util/responsiveObserve';
import type { DescriptionsProps } from './interface';

export const Descriptions: React.FC<DescriptionsProps> & { Item: typeof DescriptionsItem } = ({
  prefixCls: customizePrefixCls,
  title,
  extra,
  column = DEFAULT_COLUMN_MAP,
  // colon = true,
  // bordered,
  // layout,
  children,
  className,
  style,
  // size,
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
      className={classNames(prefixCls, className)}
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
            1
          </tbody>
        </table>
      </div>
    </div>
  );
};

Descriptions.Item = DescriptionsItem;
Descriptions.displayName = 'Descriptions';
