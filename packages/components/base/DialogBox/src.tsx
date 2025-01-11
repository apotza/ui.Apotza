import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
};

export const Index = (props: Props) => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>{props.trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-sm" />
          <Dialog.Content className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/3 bg-gradient-to-tr from-blue-500 to-slate-600 rounded-[15px]">
            <Dialog.Title className="text-2xl bg-white/15 rounded-t-[15px] font-bold text-center py-4">
              {props.title}
            </Dialog.Title>
            <div className="h-[2px] bg-white"></div>
            {props.children}
            <Dialog.Close className="absolute px-4 py-2 top-2 rounded-[10px] right-2 bg-red-500">
              <span className="w-4 h-4 text-white ">X</span>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
