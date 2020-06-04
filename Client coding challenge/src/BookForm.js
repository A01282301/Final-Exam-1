import React from 'react';

function onClick(event){
    
}

function BookForm( props ){
    return(
        <div>
            {
            <form onSubmit={(event) => onClick(event)} id = "BookForm"> {/* When we click it calls the function that im creating */}
                <label htmlFor = "bookName"> What is the book name? </label>
                <input name ="bookName" type="text" id = "sbook"/>
                <button type ="submit"> Search! </button>
            </form>
            }
        </div>
    );
}

export default BookForm;