const express = require(`express`);
const api = express();
const port = 8000;

api.use(express.json());

api.get(`/`,
    function temp(req, res) {
        res.json({ message: "Hello from the server!" });
        //res.send("Hello from the server!");
    }
)

api.listen(port, function temp() {
    console.log('Server is running on port ', port)
}

)