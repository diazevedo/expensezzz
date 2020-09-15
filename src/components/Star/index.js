import React from 'react';

import id from '../../utils/functions/generateID';

const Star = ({ full = false }) => {
  const gradientColors = {
    top: full ? '#FE70A5' : '#5c659d',
    bottom: full ? '#FC9F35' : '#5c659d',
  };

  const linearID = id();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
    >
      <defs>
        <linearGradient
          id={linearID}
          x1="0%"
          y1="10%"
          x2="00%"
          y2="100%"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor={gradientColors.top} />
          <stop offset="100%" stopColor={gradientColors.bottom} />
        </linearGradient>
      </defs>
      <path
        id="path_star"
        data-name="path_star"
        d="M7.583.225l1.842,4.3,4.716.4a.366.366,0,0,1,.212.643l-3.577,3.06,1.072,4.552a.37.37,0,0,1-.554.4L7.241,11.169,3.188,13.582a.37.37,0,0,1-.554-.4L3.707,8.633.129,5.572a.366.366,0,0,1,.212-.643l4.716-.4L6.9.225A.373.373,0,0,1,7.583.225Z"
        fill={`url(#${linearID})`}
      />
    </svg>
  );
};

export default Star;
