export const generateToken = (userId, res) => {
  console.log("generate token triggered");
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  console.log(token);

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "None", // ✅ must be None for cross-origin
    secure: process.env.NODE_ENV !== "development", // ✅
  });

  return token;
};
