import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//withSpinner is a HOC, we passed the wrapped component to the WithSpinner
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
