const express = required('express');
const routes = required('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);