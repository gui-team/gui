import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/stories/scss/zhui-cover.scss';
import '../src/stories/scss/storybook-cover.scss';

addParameters({
  options: {
    name: 'Zhui',
    showPanel: true,
    panelPosition: 'bottom'
  }
});

const backgroundDecorator = story => (
  <div className='main-wrapper'>
    { story() }
  </div>
)

addDecorator(withInfo);
addDecorator(backgroundDecorator);

function loadStories() {
  require('../src/stories/introduce.story.js');
  require('../src/stories/button.story.js');
  require('../src/stories/alert.story.js');
  require('../src/stories/breadcrumb.story.js');
  require('../src/stories/card.story.js');
  require('../src/stories/checkbox.story.js');
  require('../src/stories/icon.story.js');
  require('../src/stories/input.story.js');
  require('../src/stories/loading.story.js');
  require('../src/stories/notify.story.js');
  require('../src/stories/portal.story.js');
  require('../src/stories/progress.story.js');
  require('../src/stories/steps.story.js');
  require('../src/stories/radio.story.js');
  require('../src/stories/tag.story.js');
  require('../src/stories/swtich.story.js');
  require('../src/stories/rate.story.js');
  // require('../src/stories/table.story.js');
  require('../src/stories/watermark.story.js');
  require('../src/stories/badge.story.js');
}

configure(loadStories, module);