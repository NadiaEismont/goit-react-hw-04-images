import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  return (
    <div className="Spinner">
      <HashLoader
        color="#3f51b5;"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="Spinner"
      />
    </div>
  );
};

export default Loader;
