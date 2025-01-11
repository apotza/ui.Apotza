"use client";
import React from "react";

type Props = {
  text: string;
};

type CopyResult = {
  CopytoClickboard: () => Promise<void>;
  isCopied: boolean;
};

export const useCopy = (props: Props): CopyResult => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const CopytoClickboard = async () => {
    await navigator.clipboard.writeText(props.text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return { CopytoClickboard, isCopied };
};
