import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://valid:valid@cluster0.64l6m.mongodb.net/dashboardDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});