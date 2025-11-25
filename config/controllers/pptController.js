export const generatePPT = (req, res) => {
  const { topic, slides, design } = req.body;
  
  res.json({
    message: "PPT generated successfully",
    topic,
    slides,
    design
  });
};
