import express from 'express'


const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');


//Routing
app.get('/', (req, res) => {
    res.render('index');
});

const port = 3000;

app.listen(port, () => {
    console.log(`El juego está funcionando en http://localhost:${port}`);
});
