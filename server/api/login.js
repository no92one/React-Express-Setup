import User from "../model/User.js"

export default function (server, db) {

  server.get("/api/login", async (req, res) => {
    const user = req.session.user
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(401).json({ message: "Ingen inloggad" })
    }
  })

  server.post("/api/login", async (req, res) => {
    if (!req.session.user) {

      const username = req.body.username
      const password = req.body.password

      const user = await User.find({ username: username, password: password }, "-password")
      console.log("User - ", user);

      if (user.length > 0) {
        req.session.user = user[0]
        res.status(201).json({ message: `Välkomen ${req.session.user.username}!` })
      } else {
        res.status(404).json({ message: "Weeeeee!" })
      }

    } else {
      res.status(409).json({ message: "Någon är redan inloggad!" })
    }
  })

}
