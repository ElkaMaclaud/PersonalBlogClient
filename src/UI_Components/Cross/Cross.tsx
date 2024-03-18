import React, { FC } from "react";
export const Cross: FC<{ width?: string; height?: string }> = ({
  width,
  height,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.705a1 1 0 1 1 1.414-1.414L12 10.586Z"></path>
    </svg>
  );
};
