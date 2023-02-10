const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        data: {
            data: Buffer,
            contentType: String
        }
    },
});

module.exports = ImageModel = mongoose.model('Image',imageSchema);