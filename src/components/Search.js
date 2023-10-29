import React, {useState} from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState(props.searchString);
    const debouncedHandler = () => {
        let debounced;
        return(e) => {
            const searchString = e.target.value;
            setSearchValue(searchString);
            clearTimeout(debounced);
            debounced = setTimeout(() => {
                props
                    .handleInputSearch
                    .apply(this, [searchString])
            }, 250)
        }
    }
    return (
        <> < div className = "relative flex items-center p-2 rounded-lg" > <form action="">
            <input
                type="text"
                required="required"
                aria-label="Type country name for search"
                value={searchValue}
                onChange={debouncedHandler()}
                placeholder="Search for a country..."/>
            <i class="fa fa-search"></i>
        </form>
    </div>
</>
    );
}

export default Search;