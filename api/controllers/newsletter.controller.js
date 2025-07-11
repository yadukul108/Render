import Newsletter from '../models/newsletter.model.js';

// Create Newsletter
export const createNewsletter = async (req, res) => {
  try {
    const { heading, year, Description } = req.body;

    const existing = await Newsletter.findOne({ heading });
    if (existing) {
      return res.status(400).json({ message: 'Newsletter with this heading already exists.' });
    }

    const newsletter = new Newsletter({ heading, year, Description });
    const saved = await newsletter.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error creating newsletter:', error);
    res.status(500).json({ message: 'Server error while creating newsletter.' });
  }
};

// Get All Newsletters
export const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json(newsletters);
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    res.status(500).json({ message: 'Server error while fetching newsletters.' });
  }
};

// Get Newsletter by ID
export const getNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;
    const newsletter = await Newsletter.findById(id);
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found.' });
    }
    res.status(200).json(newsletter);
  } catch (error) {
    console.error('Error fetching newsletter:', error);
    res.status(500).json({ message: 'Server error while fetching newsletter.' });
  }
};

// Update Newsletter
export const updateNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, year, Description } = req.body;

    const updated = await Newsletter.findByIdAndUpdate(
      id,
      { heading, year, Description },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Newsletter not found.' });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating newsletter:', error);
    res.status(500).json({ message: 'Server error while updating newsletter.' });
  }
};

// Delete Newsletter
export const deleteNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Newsletter.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Newsletter not found.' });
    }
    res.status(200).json({ message: 'Newsletter deleted successfully.' });
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    res.status(500).json({ message: 'Server error while deleting newsletter.' });
  }
};
