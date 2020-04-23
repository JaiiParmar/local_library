/**
    The definition will be very similar to the other models:
    The model should have a String SchemaType called name to describe the genre.
    This name should be required and have between 3 and 100 characters.
    Declare a virtual for the genre's URL, named url.
    Export the model.
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 100,
        min:3.
    },
})

//Virtual for author's URL
GenreSchema.virtual('url').get(function () {
    return "catalog/genre/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);
