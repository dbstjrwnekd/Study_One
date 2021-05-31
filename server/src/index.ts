import App from './App';

const app = new App().app;

app.listen(4000, () => {
    console.log("Server Start");
});