import React from 'react';
import App from './App'

function BookForm( props ){
    return(
        <div>
            {
            <form onSubmit={(event) => App.get_Volumes(event)} id = "BookForm"> {/* When we click it calls the function that im creating */}
                <label htmlFor = "bookName"> What is the book name? </label>
                <input name ="bookName" type="text" id = "sbook"/>
                <button type ="submit"> Search! </button>
            </form>
            }
        </div>
    );
}

export default BookForm;