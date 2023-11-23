import { createPrimitiveComponent } from '@pdffiller/ui-kit/lib/utils/createPrimitiveComponent';
import css from './Tabs.module.scss';

const TabPanel = createPrimitiveComponent({
  displayName: 'Tabs.TabPanel',
  className: css.tabs__tabPanel,
  modifiers: {
    isSelected: css.tabs__tabPanel_isSelected,
    isScrollable: css.tabs__tabPanel_isScrollable,
  },
});

export default TabPanel;
