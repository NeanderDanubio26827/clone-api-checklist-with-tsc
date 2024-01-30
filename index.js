const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const selectMotRouter = require("./routes/select/selectMot");
const selectMotOneRouter = require("./routes/select/selectMotOne");
const selectVRouter = require("./routes/select/selectV");
const selectAltRouter = require("./routes/select/selectAlt");
const insertVtrRouter = require("./routes/insert/insertV");
const insertMotRouter = require("./routes/insert/insertMot");
const insertAltRouter = require("./routes/insert/insertAlt");
const corsMiddleware = require("./middlewares/corsMiddleware"); // Importe o middleware CORS
const authRouter = require("./routes/auth/login"); //
const authenticateToken = require("./middlewares/jwtMiddleware");
const jwtMiddleware = require("./middlewares/jwtMiddleware");
const { verifyToken } = require("./config/jwtUtil");
const app = express();

dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/selectMot", corsMiddleware, jwtMiddleware, selectMotRouter);
app.use("/selectMotOne", corsMiddleware, jwtMiddleware, selectMotOneRouter);
app.use("/selectV", corsMiddleware, jwtMiddleware, selectVRouter);
app.use("/selectAlt", corsMiddleware, jwtMiddleware,selectAltRouter);
app.use("/insertV", corsMiddleware, jwtMiddleware,insertVtrRouter);
app.use("/insertMot", corsMiddleware, jwtMiddleware,insertMotRouter);
app.use("/insertAlt", corsMiddleware, jwtMiddleware,insertAltRouter);
app.use("/auth", corsMiddleware, authRouter);

/* // Configurar o CORS para permitir solicitações do seu aplicativo React
const corsOptions = {
  origin:  "http://localhost:5173", // Remova a barra no final
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204, // Para preflight requests
  header: 'Access-Control-Allow-Origin'
};

app.use(cors(corsOptions));// Use o middleware CORS */
app.use(corsMiddleware);
// Inicializar o Sequelize e sincronizar com o banco de dados
db.authenticate()
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log("Error connecting to database" + err));

db.sync()
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
