const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const errorHandler = require('./middleware/errorHandler');
const Actors = require('./models/actor-model');
const Movies = require('./models/actor-model');

const app = express();
app.use(errorHandler);

app.patch('/api/add-movie-actor/', jsonParser,(req, res)=>{
    
    const MovieID = req.body.MovieID //We have the movie ID
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const moviePathParameter = req.header.MovieID

    settings = {}
    if(!MovieID ){
        res.statusMessage = "Id is missing in the body of the request"
       return res.status(409).end();
    }
    if(MovieID != moviePathParameter){
        res.statusMessage = "id and movie_ID do not match"
       return res.status(409).end();
    }

    if(!firstName || !lastName ){
        res.statusMessage = "You need to send both firstName and lastName of the actor to add to the movie list"
       return res.status(403).end();
    }

    Actors.getActorByName(firsName).then(actor => {
       
        console.log(actor)
        Movies.getMovieId(movieID).then(movie =>{
        console.log(movie)

        }).catch(err =>{
            res.statusMessage = "“The actor or movie do not exist”."
            return res.status(409).end();
        })  
    }
    ).catch(err =>{
        res.statusMessage = "“The actor or movie do not exist”."
        return res.status(409).end();
    })


    fetch(url, settings).then( response =>{
        if(response.ok){
            return res.status(200).json(MovieID)
        }

    }).catch(err => {
        console.log(err);
    })

    console.log(MovieID);


} )   

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});