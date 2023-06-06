app.get(
    "/",
    (req, res, next) => {
        console.log("hello");
        next();
    },
    (req, res) => {
        res.send(`<div>
        <h2>Hello world</h2>
        <h5>Tutorial on Middleware</h5>
    </div>`);
    }
    );
    