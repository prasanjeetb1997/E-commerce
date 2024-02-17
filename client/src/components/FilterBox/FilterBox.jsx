import React from 'react'
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function FilterBox() {

    const theme = createTheme({
        palette: {
            ochre: {
                main: '#088178',
                light: '#E9DB5D',
                dark: '#A29415',
                contrastText: '#242105',
            },
        },
    });

    const [value, setValue] = React.useState([0, 100000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div id='shop-page-filterbox' className='font-serif border border-gray-400'>
            <fieldset className='border-b-2 pt-3 pb-4 px-6'>
                <legend className='text-2xl text-black font-medium'>Price between</legend>
                <ThemeProvider theme={theme}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        max={100000}
                        color='ochre'
                    />
                </ThemeProvider>
            </fieldset>
            <div className='px-6 py-6'>
                <h4 className='my-3 text-4xl text-black font-medium'>Categories</h4>
                <ul className='text-2xl text-gray-600 ml-6 mt-5'>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Men</li>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Women</li>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Top</li>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Bottom</li>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Summer</li>
                    <li className='hover:text-cyan-500 cursor-pointer w-fit mb-4'>Winter</li>
                </ul>
            </div>
        </div>
    )
}

export default FilterBox