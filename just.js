const { OpenAIApi } = require('openai');
const fs = require('fs');
const axios = require('axios');

// Set up your OpenAI API credentials
const openai = new OpenAIApi('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');

async function generateCarOutline() {
  try {
    // Prompt for generating car outline
    const prompt = 'Car outline';

    // Generate image using the DALL-E model
    const response = await openai.complete('davinci', {
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.7,
      top_p: 1.0,
      n: 1,
      stop: null,
    });

    // Extract the image URL from the API response
    const imageURL = response.choices[0].image;

    // Fetch the image using the URL
    const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });

    // Save the image to a file
    const imageFilePath = 'car_outline.png';
    fs.writeFileSync(imageFilePath, imageResponse.data, 'binary');

    return imageFilePath;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Generate and save the car outline image
generateCarOutline()
  .then((imagePath) => {
    console.log(`Car outline image saved: ${imagePath}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
