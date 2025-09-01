import News from '../models/news.model.js';

// CREATE a news item
export const createNews = async (req, res) => {
  try {
    const { heading, year, description, externalLink,mediaName } = req.body;

    const newNews = new News({
      heading,
      year,
      description,
      externalLink,
      mediaName,
    });

    await newNews.save();
    res.status(201).json({ success: true, data: newNews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all news
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a single news item by ID
export const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: 'News not found' });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a news item
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    const updated = await News.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return res.status(404).json({ error: 'News not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a news item
export const deleteNews = async (req, res) => {
  try {
    const deleted = await News.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'News not found' });
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
