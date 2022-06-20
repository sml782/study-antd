import type { ComponentMeta } from '@storybook/react';
import { Descriptions } from '.';
import './Descriptions.stories.less';
import './style';

export * from './demos';

const Stories: ComponentMeta<typeof Descriptions> = {
  title: 'Descriptions',
  component: Descriptions,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default Stories;
