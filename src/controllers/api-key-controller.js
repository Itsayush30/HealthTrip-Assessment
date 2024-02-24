const updateApiKey  = require('../services/api-key-service');

// Define controller function to update API keys
const updateApiKeysController = async (req, res) => {
  const { newApiKey } = req.body;

  // Validate the new API key
  if (!newApiKey) {
    return res.status(400).json({ success: false, error: 'New API key is required' });
  }

  try {
    const updated = await updateApiKey(newApiKey);
    if (updated) {
      return res.status(200).json({ success: true, message: 'API key updated successfully' });
    }
  } catch (error) {
    console.error('Error updating API key:', error);
    return res.status(500).json({ success: false, error: 'Failed to update API key' });
  }
};

module.exports = { updateApiKeysController };
