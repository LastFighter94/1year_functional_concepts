import React from 'react';

const CalcMode = () => {
    return (
        <div className="calc-mode">
            <div className="calc-mode-container">
                <button className=""><i className="fa-solid fa-eye"></i> Runtime</button>
                <button className="active"><i className="fa-solid fa-code"></i> Constructor</button>
            </div>
        </div>
    );
};

export default CalcMode;