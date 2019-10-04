const express = required('express');
const mongoose = required('mongoose');
const routes = required('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:stack123456@omnistack-sqguu.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);