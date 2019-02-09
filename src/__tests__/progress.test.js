import React from 'react';
import { shallow } from 'enzyme';

import Progress from '../components/progress/index'

describe('Progress Default Test', () => {
  const wrapper = shallow(
    <Progress precent={30}/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-line')).toBe(true);
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});

describe('Progress Exception Test', () => {
  const wrapper = shallow(
    <Progress precent={70} status='exception'/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-line')).toBe(true);
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});

describe('Progress Success Test', () => {
  const wrapper = shallow(
    <Progress precent={100}/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-line')).toBe(true);
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});

describe('Progress Circle Test', () => {
  const wrapper = shallow(
    <Progress precent={100} type='circle'/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-circle')).toBe(true);
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});