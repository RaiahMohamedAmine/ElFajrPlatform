import React from 'react'
import './search.css'

const Search = ({
    onClick = f => f,
    onChange = f => f,
}) => {
    const onSearchClick = () => {
        if (_currentText.value === '') {
            document.getElementById('text').focus()
        }
        else {
            onClick(_currentText.value)
        }
    }
    let _currentText
    return (
        <div className='search'>
            <div className='search-input-container'>
                <input id='text' type='text'
                    autoComplete='off'
                    ref={input => _currentText = input}
                    placeholder='Recherche...' className='search-input'
                    onChange={e =>onChange(_currentText.value)} />
            </div>
            <span className='search-icon' onClick={e=> onSearchClick()}></span>
        </div>
    )
}

export default Search;