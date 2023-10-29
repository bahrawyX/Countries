import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../assets/css/main.css';
import Countries from './Countries';
import Detail from './Detail';
import Filters from './Filters';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [Region, setRegion] = useState('All');
    useEffect(() => {
        let cacheCountries = null;
        try {
            cacheCountries = localStorage.getItem('countries');
        } catch (err) {}
        if (cacheCountries == null) {
            const allCountriesAPI = 'https://restcountries.com/v2/all';
            fetch(allCountriesAPI)
                .then(response => response.json())
                .then((json) => {
                    try {
                        localStorage.setItem('countries', JSON.stringify(json));
                    } catch (err) {}
                    setCountries(json)
                });
        } else {
            setCountries(JSON.parse(cacheCountries));
        }

    }, []);

    const handleInputSearch = (searchString) => {
        setSearchString(searchString);
    }
    const handleRegion = (Region) => {
        setRegion(Region);
    }

    const filterByRegion = (countries, Region) => {
        return countries.filter((country) => {
            if (Region === 'All') {
                return true
            }
            return country.region === Region;
        });
    }
    const filterbySearchString = (countries, searchString) => {
        return countries.filter((country) => {
            if (searchString === '' || searchString == null) {
                return true;
            }
            if (country.name.search(new RegExp(searchString, 'i')) !== -1) {
                return true;
            }
            return false;
        })
    }
    return (
        <> < Router > <Header/>
        <Switch>
            <Route path="/" exact="exact">
                <> <div className="min-h-screen px-12 py-4">
                    <Filters
                        Region={Region}
                        searchString={searchString}
                        handleRegion={handleRegion}
                        handleInputSearch={handleInputSearch}/>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
                        <Countries
                            countries={filterByRegion(filterbySearchString(countries, searchString), Region)}/>
                    </div>
                </div>
            </>
        </Route>
        <Route path="/detail/:countryCode" exact="exact">
            <Detail countries={countries}/>
        </Route>
    </Switch>
    <Footer/>
</Router>
</>
    );
}

export { App as default } 