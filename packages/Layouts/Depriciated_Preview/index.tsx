import React from "react";
import Title_Description from "./title_description";
import Hero from "./Code_Layout";

type Props = {
  title: string;
  description: string;
  Usage: React.ElementType;
  code: string;
  prop: Object;
};

const Code_Layout = ({ title, description, Usage, code, prop }: Props) => {
  return (
    <div className="min-h-screen">
      <Title_Description title={title} description={description} />
      <Hero Usage={Usage} Code={code} />
      <div className="h-screen"></div>
    </div>
  );
};

export default Code_Layout;
