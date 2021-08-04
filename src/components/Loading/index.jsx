import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({type, color}) => (
    <ReactLoading type={type} color={color} height={300} width={150} />
);

export default Loading;