export const convertToIEEE = (req, res) => {
  const { title, authors, abstract, keywords, content } = req.body;

  const ieeePaper = `
Title: ${title}
Authors: ${authors}
Abstract: ${abstract}
Keywords: ${keywords}

Content:
${content}
`;

  res.json({ ieeePaper });
};
