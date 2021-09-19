import React, { MouseEvent } from 'react';
import './styles.scss';
type MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => void;
type Props = {
  onClick: MouseEventHandler;
  iconName: string;
  children: React.ReactChildren;
  className: string;
};
export function Button(props: Props) {
  const { iconName, children, onClick, className, ...rest } = props;
  const renderIcon = (iconName: string) => {
    return <span className={`icon ${iconName}`}></span>;
  };

  return (
    <button
      className={`customButton primary ${className}`}
      onClick={onClick}
      {...rest}
    >
      {iconName && renderIcon(iconName)}
      {children}
    </button>
  );
}
