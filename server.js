const express = require('express');
const mongoose = require('mongoose');
const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
})
        .then(() => { console.log("MongoDB Successfully connected..") })
        .catch(err => console.log(err));

// Initialization of middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
// app.get('/',(req,res)=> res.send('API is running'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));