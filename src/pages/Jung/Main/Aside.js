import React from 'react';

const Aside = props => {
  return (
    <>
      <div className="asideList">{props.list}•</div>
    </>
  );
};
export default Aside;
