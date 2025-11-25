export const generateMCQ = (req, res) => {
  const { topic } = req.body;

  const mcqs = [
    {
      question: `What is ${topic}?`,
      options: ["Option A", "Option B", "Option C"],
      answer: "Option A"
    }
  ];

  res.json({ mcqs });
};
