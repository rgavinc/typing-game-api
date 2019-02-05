const handleScore = db => (req, res) => {
  const { name, score, groupId } = req.body;

  db.insert({
    name,
    score,
    group_id: groupId,
    posted: new Date()
  })
    .into("scores")
    .then(() => {
      db.select("*").from("scores");
    });
};
