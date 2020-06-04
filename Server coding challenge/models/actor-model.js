const mongoose = require( 'mongoose' );

const actorsSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    actor_ID : {
        type : Number,
        unique : true,
        required : true
    }
});

const actorsCollection = mongoose.model( 'actors', actorsSchema );

const Actors = {
    createActor : function( newActor ){
        return actorsCollection
                .create( newActor )
                .then( createdActor => {
                    return createdActor;
                })
                .catch( err => {
                    throw new Error( err );
                });
    },
    getActorByName : function (name){
        return moviesCollection.findOne({firstName : name}).then( actor =>{
            if(!actor){
                throw new Error("Movie is not found")
            }
            return movie
        }).catch(err =>{
            throw new Error(err);
        })
    }
}

module.exports = {
    Actors
};

