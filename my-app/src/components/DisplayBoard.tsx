import React from 'react'

interface IDisplayBoard {
    numberOfConversions: number;
    getAllConversions: Function;
}

function DisplayBoard({numberOfConversions, getAllConversions}: IDisplayBoard) {
    
    return(
        <div className="display-board">
            <h4 style={{color: 'white'}}>Conversions Created</h4>
            <div className="number">
            {numberOfConversions}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllConversions()} className="btn btn-warning">Get Conversion History</button>
            </div>
        </div>
    )
}

export default DisplayBoard