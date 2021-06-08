const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;
  const { displayName } =req.body;
  
  console.log("REQ USER",req.body,"NAME:",displayName);

  const user = await User.findOneAndUpdate(
    { email },
    { name:displayName, picture },
    { new: true }
  );
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name:displayName,
      picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req,res) =>{
  User.findOne({email:req.user.email}).exec((err,user)=>{
    if(err)
      throw new Error(err)
    res.json(user);
  })
}