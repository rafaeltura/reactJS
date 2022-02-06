import React from "react";
import H1 from "../titles/H1"

function Header ( { title, children } ) {
    return (
        <header>
            <H1 obj={ 
                        { 
                            descricao: title
                        } 
                    }
            />
            { children }
        </header>
    )
}

export default Header;