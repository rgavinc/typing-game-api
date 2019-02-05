const saveScore = db => (req, res) => {
  const { score, name, groupId } = req.body;
  const row = {
    score: Number(score),
    name,
    group_id: groupId,
    posted: new Date()
  };
  db("scores")
    .returning("score")
    .insert(row)
    .then(score => {
      db.select("*")
        .from("scores")
        .orderBy("score", "desc")
        .limit(5)
        .then(scores => {
          res.json(scores);
        });
    })
    .catch(err => res.status(400).json({ err }));
};

module.exports = {
  saveScore
};
