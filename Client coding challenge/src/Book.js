import React from 'react';

function Book( props ){
    return(
        <div>
            {
                <ul>
                    <li>
                     {props.Book}
                    </li>
                </ul>
            }
        </div>
    );
}

export default Book;