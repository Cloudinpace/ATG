const { Storage } = require('@google-cloud/storage');
const vision = require('@google-cloud/vision');
const functions = require('firebase-functions');

const storage = new Storage();
const visionClient = new vision.ImageAnnotatorClient();

exports.analyzeImage = functions.https.onCall(async (data, context) => {
  const imageUrl = data.imageUrl; 

  // Download the image from Cloud Storage
  const [bucket] = await storage.getBucket(data.bucketName);
  const file = bucket.file(data.fileName);
  const [contents] = await file.download();

  // Perform image analysis
  const [result] = await visionClient.labelDetection({image: {content: contents}});
  const labels = result[0].labelAnnotations;

  // Process and return results
  const response = {
    labels: labels.map(label => label.description)
  };

  return response;
});