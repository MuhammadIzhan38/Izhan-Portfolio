// src/data/projectsData.js
import { FaReact, FaPython, FaNodeJs, FaPhp, FaHtml5,FaLaravel,FaCss3Alt,FaDatabase} from 'react-icons/fa';
import { SiDjango, SiMongodb, SiVite, SiNextdotjs, SiJavascript,SiFlask,SiNumpy,SiPytorch } from 'react-icons/si';

// CATEGORIES (These create your buttons automatically)
export const categories = [
  "All",
  "Normal Projects",
  "AI-Powered Resume Builder",
  "Crop Disease Detector",
  "Ecommerce Store"
];

// PROJECTS
export const projects = [
  {
    id: 1,
    title: "Crop Disease Detector",
    category: "Crop Disease Detector",
    type: "advance",
    tech: [<FaPython />, <FaDatabase />, <SiPytorch />],
    images: ["/images/CropDisease1.jpg", "/images/CropDisease2.jpg", "/images/CropDisease3.jpg"],
    link: "https://huggingface.co/spaces/Muhammad-Izhan/CropDiseaseApp",
    description: "This project is a Crop Disease Detector web application designed to identify 19 types of crop diseases from leaf images and provide treatment guidance instantly. It is built using Python, PyTorch, and Torchvision for deep learning, leveraging MobileNetV2 for efficient image classification. Image processing and transformations are handled with Pillow, while the interactive web interface is implemented using Gradio, allowing users to upload images and receive predictions seamlessly. The model, class labels, and disease information are managed via JSON files, and the application is fully deployable on Hugging Face Spaces, requiring no paid APIs or external credentials. The interface is enhanced with custom CSS to provide a clean and professional user experience."
  },
    {
    id: 2,
    title: "AI-Powered Resume Builder",
    category: "AI-Powered Resume Builder",
    type: "advance",
    tech: [<FaPython />, <SiFlask />],
    images: ["/images/resume-builder1.jpg", "/images/resume-builder2.jpg", "/images/resume-builder3.jpg"],
    link: "https://huggingface.co/spaces/Muhammad-Izhan/AI_Resume_Builder",
    description: "This project is an AI-powered Resume Builder web application that allows users to input personal details such as contact information, education, work experience, and descriptions. It provides AI-generated suggestions for each section to help users improve the content of their resumes. Built with Python and Flask for the backend, the application uses pdfkit and wkhtmltopdf to generate professional PDF resumes. Environment variables are managed via python-dotenv, and external requests are handled with requests. The application delivers a streamlined, interactive experience for creating customized, polished resumes quickly and efficiently."
  },
  {
    id: 3,
    title: "Ecommerce Store",
    category: "Ecommerce Store",
    type: "advance",
    tech: [<FaReact />, <SiVite />, <FaNodeJs />],
    images: ["/images/ecommerce-img1.jpg", "/images/ecommerce-img2.jpg", "/images/ecommerce-img3.jpg"],
    link: "https://youtu.be/B5R7ezAfrRs",
    description: "I built a comprehensive full-stack e-commerce platform using React, Vite, and Node.js, utilizing SQLite for efficient data management. The application features a complete user journey including a dynamic home page, a functional checkout process, and dedicated pages for order history and real-time tracking. To ensure a professional user experience, I integrated Axios for seamless API communication, Day.js for precise date formatting, and Money.js to handle complex currency conversions and price calculations. While I currently have a video demonstration available to showcase the live functionality, I am also available to share and discuss the underlying source code upon request."
  },

  {
    id: 4,
    title: "Izhan's Trend Hub",
    category: "Normal Projects",
    type: "normal",
    tech: [<SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
    images: ["/images/trend-hub1.jpg", "/images/trend-hub2.jpg"], 
    link: "https://zippy-custard-b5ae46.netlify.app/",
    description: "Built with a mobile-first, responsive design using vanilla HTML, CSS, and JavaScript for dynamic content filtering and a clean UI."
  },
  // ADD NEW PROJECTS HERE. Just copy an object above and paste it.
   {
    id: 5,
    title: "Modern Landing Page",
    category: "Normal Projects",
    type: "normal",
    tech: [<SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
    images: ["/images/landing-page1.jpg", "/images/landing-page2.jpg"], 
    link: "https://muhammadizhan38.github.io/landing_page/",
    description: "Built with a mobile-first, responsive design using vanilla HTML, CSS, and JavaScript for dynamic content filtering and a clean UI."
  },
    {
    id: 6,
    title: "Image To Sketch",
    category: "Normal Projects",
    type: "normal",
    tech: [<FaPython />, <SiNumpy />],
    images: ["/images/img-to-scatch1.jpg", "/images/img-to-scatch2.jpg"], 
    link: "https://huggingface.co/spaces/Muhammad-Izhan/Image_To_Sketch",
    description: "Convert your photos to pencil sketches using this AI-powered tool built on Hugging Face Space during learning of Hugging Face agent course using Gradio, NumPy and Python."
  },
];

export const skills = {
  techList: ["Error Handling", "Git", "GitHub", "Testing", "API Integration", "Debugging", "custom web development"],
  logos: [
    { group: "Python", icons: [<FaPython color="#306998"/>, <SiDjango color="#092E20"/>] }, // Colors added for visibility
    { group: "JS", icons: [<SiJavascript color="#F7DF1E"/>, <FaReact color="#61DAFB"/>, <FaNodeJs color="#339933"/>, <SiMongodb color="#47A248"/>] },
    { group: "PHP", icons: [<FaPhp color="#777BB4"/>, <FaLaravel color="#FF2D20"/>] }
  ]
};