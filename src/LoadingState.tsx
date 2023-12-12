import { count } from "console";
import React, { useState } from "react";

const LoadingState = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div>
      <img src="" alt="" />
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingState;
