
import React, { useState } from 'react';

const ImageUpload = ({ onImageAnalysis }) => { // Pass onImageAnalysis prop
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    // Send image to Gemini Vision API (replace with your API call)
    // ... 
    // Example:
    // const response = await fetch('/api/imageAnalysis', {
    //   method: 'POST',
    //   body: image,
    // });
    // const data = await response.json();
    // setDescription(data.description); 
    // onImageAnalysis(data.description); // Call analysis function
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Analyze Image</button>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ImageUpload;
