import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Button, {ButtonProps, ButtonSize, ButtonType} from './button';

const defaultProps = {
  onClick:jest.fn()
}

const testProps:ButtonProps = {
  btnType:ButtonType.Primary,
  size:ButtonSize.Large,
  className:'klass'
}

const disableProps:ButtonProps = {
  disabled:true,
  onClick:jest.fn()
}
// describe 描述  测试按钮组件
describe('test Button component',()=>{
  // expect期望
  //应该呈现正确的默认按钮吗
  it('should render the correct default button',()=>{
    const wrapper = render(<Button {...defaultProps}>Ni</Button>);
    const element = wrapper.getByText('Ni') as HTMLButtonElement;
    expect(element).toBeInTheDocument(); // 在这文档里面吗
    expect(element.tagName).toEqual('BUTTON') // 等于这个吗
    //expect(element).toHaveClass('btn btn-default') // 有这个类名吗
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled() //被称为
  })

  // 应该渲染基于不同道具的正确组件吗
  // expect期望
  it('should render the correct component based on different props',()=>{
    const wrapper = render(<Button {...testProps}>Ni</Button>);
    const element = wrapper.getByText('Ni');
    expect(element).toBeInTheDocument(); // 在这文档里面吗
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })

  // 当btnType = link和href提供时，应该呈现一个链接
  // expect期望
  it('should render a link when btnType equals link and href is provided',()=>{
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link') // 得到文本
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  //渲染禁用按钮时禁用设置为true
  it('should render disabled button when disabled set to true',  () =>{
    const wrapper = render(<Button {...disableProps}>Ni</Button>);
    const element = wrapper.getByText('Ni') as HTMLButtonElement
    expect(element).toBeInTheDocument(); // 在这文档里面吗
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  });
})
