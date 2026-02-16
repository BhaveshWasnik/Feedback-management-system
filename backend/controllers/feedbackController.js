const db = require("../config/db");

// Submit Feedback
exports.submitFeedback = (req, res) => {
  const { name, email, message, rating } = req.body;

  const sql = "INSERT INTO feedbacks (name, email, message, rating) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, message, rating], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Feedback submitted successfully" });
  });
};

// Get All Feedback
exports.getFeedbacks = (req, res) => {
  db.query("SELECT * FROM feedbacks ORDER BY created_at DESC",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};
