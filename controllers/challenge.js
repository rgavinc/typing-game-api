const handleChallenge = (req, res) => {
  res.json([
    "When forty winters shall besiege thy brow,",
    "And dig deep trenches in thy beauty's field,",
    "Thy youth's proud livery so gazed on now,"
  ]);
};

module.exports = {
  handleChallenge
};
