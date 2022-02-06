import React from "react";
import H1 from "../titles/H1";
import PropTypes from "prop-types";

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

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Header;