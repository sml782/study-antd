import type React from 'react';

import type { DescriptionsItemProps } from './interface';

const DescriptionsItem: React.FC<DescriptionsItemProps> = ({ children }) => children as JSX.Element;

export default DescriptionsItem;
