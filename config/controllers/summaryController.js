export const createSummary = (req, res) => {
  const { text } = req.body;

  const summary = text.substring(0, 200) + " ...summary generated";

  res.json({ summary });
};
