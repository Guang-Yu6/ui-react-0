import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {  // 大小
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {  // 类型
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps { //Base 基础按钮属性
  className?: string,
  btnType?: ButtonType,
  disabled?: boolean, // 禁用
  size?: ButtonSize,
  children: React.ReactNode
  href?: string
}

//Native 原生 按钮属性   Anchor a标签的意思  // 这三行是获取原生button和a标签里所有的属性
type NativeButtonProps = BaseButtonProps & React.BaseHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.BaseHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>  // Partial 可以快速把某个接口类型中定义的属性变成可选的


//
const Button: React.FC<ButtonProps> = (props) => {
  const {btnType, className, disabled, size, children, href, ...restProps} = props;

  const classes = classNames('btn', className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    );
  } else {
    return (
      <button disabled={disabled} className={classes} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
