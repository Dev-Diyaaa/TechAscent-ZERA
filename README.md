# TechAscent-ZERA

TechAscent-ZERA is an interactive superhero-themed web application developed as an internship machine-test project.

The project introduces ZERA, an original superhero known as the Guardian of the Unheard. The application combines storytelling, animations, responsive design, and an interactive chatbot that allows users to submit grievances or requests.

## Features

- Interactive superhero-themed landing page
- Animated hero section featuring ZERA
- Story introduction slideshow
- Origin story section
- Powers and abilities section
- Mission section with Listen, Protect, and Empower themes
- Interactive chatbot for submitting grievances
- Form validation for user details
- Email notification system using Flask and SMTP
- Responsive design for desktop and mobile devices
- Smooth scrolling navigation
- Scroll progress indicator
- Loading animation
- Modern dark-themed UI with purple and indigo visual effects

## Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend

- Python
- Flask
- Flask-CORS
- python-dotenv
- SMTP / Gmail

## Project Structure

```text
TechAscent-ZERA/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Mission.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Origin.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── StoryIntro.jsx
│   │   ├── assets/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
│
└── README.md