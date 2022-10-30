import React, { Component } from 'react';
import { useState, CSSProperties } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  return (
    <HashLoader
      color="olive"
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default Loader;
