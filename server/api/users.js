export default function (server, db) {

  // Skapar ett schema för "users", vilket definierar strukturen för varje "user"-dokument i databasen.
  const usersSchema = new db.Schema({
    username: String,  // Varje "user" kommer att ha ett "username".
    password: String
  });

  /* 
    Skapar en Mongoose-modell baserat på usersSchema.
    Detta möjliggör för oss att skapa, läsa, uppdatera och radera (CRUD) dokument i vår "users"-samling (collection).
  */
  const User = db.model("users", usersSchema);

  server.get("/api/users", async (req, res) => {
    res.json(await User.find())
  })

}