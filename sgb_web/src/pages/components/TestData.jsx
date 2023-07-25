import React from 'react';

const TestData = ({greens}) => {
    return (
        <div>
           {greens.map(green => {
              return (<div key={green.dataSearch}>
                    {green.dataSearch.content}
                </div>)
           })} 
        </div>
    );
};

export default TestData;