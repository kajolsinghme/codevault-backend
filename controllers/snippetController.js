import snippetModel from "../models/snippetModel.js";

export const createSnippet = async (req, res) => {
  try {
    const snippet = await snippetModel.create(req.body);
    res.status(201).json(snippet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllSnippets = async (req, res) => {
  try {
    const snippets = await snippetModel.find();
    res.status(200).json(snippets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const searchSnippets = async (req, res) => {
  try {

    const {query} = req.query
    const snippets = await snippetModel.find({
        $or: [
            {title: {$regex: query, $options: "i"}},
            {tags: {$regex: query, $options: "i"}}
        ]
    });
    res.status(200).json(snippets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSnippet = async (req, res) => {
  try {
    const deleted = await snippetModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Snippet does not exist" });
    }

    res.json({ message: "Snippet deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};