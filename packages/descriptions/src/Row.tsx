import React from 'react';
import Cell from './Cell';
import type { DescriptionsItemProps } from './Item';
import type { CellProps } from './Cell';

interface CellConfig {
  component: CellProps['component'] | [CellProps['component'], CellProps['component']];
  type: string;
  showLabel?: boolean;
  showContent?: boolean;
}

function renderCells(
  items: Array<React.ReactElement<DescriptionsItemProps>>,
  { colon, prefixCls, bordered }: RowProps,
  {
    component,
    type,
    showLabel,
    showContent,
  }: CellConfig,
): React.ReactNode {
  return items.map((item, index) => {
    const {
      props: {
        label,
        children,
        prefixCls: itemPrefixCls = prefixCls,
        className,
        style,
        labelStyle,
        contentStyle,
        span = 1,
      },
      key,
    } = item;

    if (typeof component === 'string') {
      return (
        <Cell
          key={`${type}-${key || index}`}
          className={className}
          itemPrefixCls={itemPrefixCls}
          span={span}
          component={component}
          colon={colon}
          bordered={bordered}
          label={showLabel ? label : null}
          content={showContent ? children : null}
          style={style}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
        />
      );
    }

    return [
      (
        <Cell
          key={`label-${key || index}`}
          className={className}
          itemPrefixCls={itemPrefixCls}
          span={span}
          component={component[0]}
          colon={colon}
          bordered={bordered}
          label={label}
          // labelStyle={}
        />
      ),
      (
        <Cell
          key={`content-${key || index}`}
          className={className}
          itemPrefixCls={itemPrefixCls}
          span={span}
          component={component[1]}
          bordered={bordered}
          content={children}
        />
      ),
    ];
  });
}

export interface RowProps {
  prefixCls: string;
  vertical: boolean;
  row: Array<React.ReactElement<DescriptionsItemProps>>;
  bordered?: boolean;
  colon: boolean;
  index: number;
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    prefixCls,
    vertical,
    row,
    bordered,
    colon,
    index,
    children,
  } = props;

  return (
    <tr
      key={index}
      className={`${prefixCls}-row`}
    >
      {renderCells(row, props, {
        component: 'td',
        type: 'item',
        showLabel: true,
        showContent: true,
      })}
    </tr>
  );
};

Row.displayName = 'DescriptionsRow';

export default Row;
