import React, { InputHTMLAttributes, useId } from "react";
import * as S from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { type = "text", name = "", label = "", helperText = "", ...props },
    ref
  ) => {
    const inputID = useId();
    const hasError = helperText.length > 0;

    return (
      <S.Container>
        <S.Label htmlFor={inputID}>{label}</S.Label>
        <S.Input
          id={inputID}
          type={type}
          name={name}
          ref={ref}
          {...props}
          hasError={hasError}
        />
        {helperText.length > 0 && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  }
);

export default Input;
