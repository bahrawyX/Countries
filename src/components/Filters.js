import React from 'react';
import Region from './Region';
import Search from './Search';

const Filters = (props) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Search searchString={props.searchString} handleInputSearch={props.handleInputSearch} />
            <Region Region={props.Region} handleRegion={props.handleRegion} />
        </div>
    );
}

export { Filters as default } 