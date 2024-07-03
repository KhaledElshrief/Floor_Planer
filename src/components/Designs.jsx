import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNav from './TopNav';
import Footer from './Footer'; 

const Designs = () => {
const [images, setImages] = useState([]);

useEffect(() => {
    // Replace with your backend URL
    axios.get('https://your-backend-url.com/api/images')
    .then(response => {
        setImages(response.data);
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });
}, []);

return (
    <div className="flex flex-col min-h-screen">
    <TopNav />
    <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Design Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image.url} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
        ))}
        </div>
    </div>
    <Footer  />
    </div>
);
};

export default Designs;
