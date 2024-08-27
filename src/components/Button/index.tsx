import React from "react";
import "./styles.css";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
  disabled?: boolean;
};

export default function Button(props: Props) {
  return (
    <button
      style={{
        ...props.style,
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
