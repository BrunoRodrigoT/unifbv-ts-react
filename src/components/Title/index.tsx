import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Title({ children, style }: Props) {
  return (
    <h1
      style={{
        color: "#222",
        fontSize: "4rem",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </h1>
  );
}

export default Title;
