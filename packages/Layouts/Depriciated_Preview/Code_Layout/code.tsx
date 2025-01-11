import React from "react";
import { useCopy } from "../../hooks/useCopy";
import { CodeBlock, dracula } from "react-code-blocks";

type Props = {
  code: string;
};

const Code = (props: Props) => {
  const { CopytoClickboard, isCopied } = useCopy({ text: props.code });

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-1/2 max-h-[500px]  rounded-3xl overflow-y-scroll ">
        <div
          className="sticky z-50 top-5 w-20 left-full mx-5 rounded-xl bg-slate-600 p-2 text-center cursor-pointer hover:bg-slate-700"
          onClick={() => CopytoClickboard()}
        >
          {isCopied ? "Copied" : "Copy"}
        </div>
        <div className="relative -top-10 ">
          <CodeBlock
            text={props.code}
            showLineNumbers={true}
            language="jsx"
            theme={dracula}
          />
        </div>
      </div>
    </div>
  );
};

export default Code;
