import React from 'react';
import './Background3D.css'; // We will put the animation CSS here

const Background3D = () => {
  return (
    <div className="shared-background">
      <div className="background-animation">
        <div className="obj">
          <div className="objchild">
            <span className="inn6"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background3D;