import React, { useState } from 'react';

const Header = () => {
    const [colorSchema, setColorSchema] = useState('light');
    const toggleColorSchema = () => {
        if (colorSchema === 'light') {
            setColorSchema('dark');
            document.documentElement.style.setProperty('--primary', 'rgb(0, 30, 60)');
            document.documentElement.style.setProperty('--secondary', ' rgb(10, 25, 41)');
            document.documentElement.style.setProperty('--primary-text', 'rgb(51, 153, 255)');
            document.documentElement.style.setProperty('--white', 'rgb(255, 255, 255)');


        }
        else {
            document.documentElement.style.setProperty('--primary', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--secondary', ' hsl(0, 0%, 98%)');
            document.documentElement.style.setProperty('--primary-text', 'hsl(200, 15%, 8%)');
            document.documentElement.style.setProperty('--white', 'hsl(200, 15%, 8%)');

            setColorSchema('light');
        }
    }
    return (
        <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
        <div className="flex justify-between px-8 py-4 shadow-sm bg-secondary">
            <h5 className="p-2 text-lg font-bold">All Countries In The World</h5>
            <button className="flex items-center p-2" onClick={toggleColorSchema} >
                {colorSchema === 'dark' ? <>
                <img src="https://i.ibb.co/Fb1w96C/icons8-sun-30.png"className='img-dark'/>
                    <span className="ml-1 text-sm">Light Mode</span>
                </> :
                    <>
                        <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-moon-halloween-bearicons-glyph-bearicons.png" className='img-dark'/>
                        <span className="ml-1 text-sm">Dark Mode</span>
                    </>
                }
            </button>
        </div>
        <hr className='css-1oy4h70'></hr>
        </>
    );
}

export default Header;