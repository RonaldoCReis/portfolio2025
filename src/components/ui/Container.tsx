import React, { type PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-7xl px-10 mx-auto">{children}</div>;
};

export default Container;
