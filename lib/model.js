let mongoose = require("mongoose")
let snowboards = require("./snowboards.json")
let mongooseConfig = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-express-api")

let snowboardModel = mongoose.model("Snowboard", new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    bestFor: String,
    sizes: [Number]
}))

snowboardModel
.deleteMany({})
.then(()=> snowboardModel.create(snowboards))
.then(() => console.log("Snowboards Seeded"))
.catch(error => console.error(error))

module.exports = snowboardModel
