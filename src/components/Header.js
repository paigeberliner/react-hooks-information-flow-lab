import React from "react";

function Header({ onDarkModeClick, isDarkMode }){
    function handleClick(){
        const darkMode = isDarkMode
        onDarkModeClick(darkMode);

    }
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;