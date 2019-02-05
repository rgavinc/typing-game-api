const handleChallenge = db => (req, res) => {
  const { id } = req.params;
  db.select("content")
    .from("challenge")
    .where({ group_id: id })
    .then(data => {
      res.json(data.map(item => item.content));
    })
    .catch(err => res.status(400).json("Unable to get challenge"));
};

const allChallenges = db => (req, res) => {
  db.select("*")
    .from("challenge_group")
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json("Unable to get challenges"));
};

module.exports = {
  handleChallenge,
  allChallenges
};
