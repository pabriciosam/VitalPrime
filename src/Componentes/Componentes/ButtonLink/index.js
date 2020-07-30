import React from 'react';

function ButtonLink(props){
//props => { className: o que algupem passar, href}

    return (
        <nav>
            <a href={props.href} className={props.className}>
                {props.children}
            </a>
        </nav>
    )
}

export default ButtonLink;