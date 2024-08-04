import React from 'react';

const IconBox = ({ iconClass }) => {
    return (
        <div className="card-img-top text-center py-4">
            <i className={iconClass} style={{ fontSize: '2em' }}></i>
        </div>
    );
};

export default IconBox;
