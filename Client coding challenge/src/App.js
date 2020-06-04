import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      apiURL : "https://www.googleapis.com/books/v1/volumes",
      }
    }
  }


  get_Volumes = (event) => {
    event.preventDefault();
    const query = event.target.sbook.value;
    const settings  = {
      method : 'GET',
      headers : {
        'Content-Type': "application/json"
      },
      body : JSON.stringify(query)
    }

    fetch(this.state.apiURL, settings).then(response =>{
      if(response.ok){
        return response.json();
      }else{
        throw new Error("Something ocurred with the get");
      }
    }).catch(err =>{
      throw new Error("Something ocurred with the get");
    })
  
  }
  
  render(){
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
    )
  }

}

export default App;
