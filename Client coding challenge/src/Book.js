import React from 'react';

function Book( props ){
    return(
        <div>
            {
                <ul>
                    <li>
                    {response.title} {response.authors}
                    </li>
                </ul>
            }
        </div>
    );
}

export default Book;