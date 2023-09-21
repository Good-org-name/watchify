const userRouter = require("express").Router();
const { User } = require("../db/index");

//GET /api/user/:id
userRouter.get("/:id", async (req, res, next) => {
  try {
    //this sends back the user w/o token, don't I need the token
    //attached too?
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "could not get user",
      error: err.message,
    });
  }
});

//PUT /api/user/:id
userRouter.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    res.status(500).json({
      message: "could not update user",
      error: err.message,
    });
  }
});

module.exports = userRouter;