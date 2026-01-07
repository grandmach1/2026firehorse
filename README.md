# 🐴 Horse Generator - Year of the Horse 2026

A festive React web app featuring a personality quiz to discover which horse spirit matches you for the Year of the Horse 2026!

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open your browser to the URL shown (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

## 📝 Customizing the Quiz

### Adding Your Questions and Horse Personalities

All quiz content is stored in `src/data/quizData.json`. This file contains:

1. **Horse Personalities** - The possible results
2. **Questions** - The quiz questions and answers

### Horse Personality Structure

Each horse has:
- `id` - Unique identifier (use lowercase with underscores)
- `name` - Display name
- `description` - Result description shown to the user
- `traits` - Array of personality traits
- `image` - Path to the image file
- `color` - Hex color code for styling

```json
{
  "id": "wild_stallion",
  "name": "The Wild Stallion",
  "description": "Free-spirited and adventurous...",
  "traits": ["adventurous", "independent", "passionate"],
  "image": "images/wild_stallion.jpg",
  "color": "#D4AF37"
}
```

### Question Structure

Each question has:
- `id` - Unique number
- `question` - The question text
- `answers` - Array of possible answers

Each answer has:
- `text` - Answer text shown to user
- `scores` - Object mapping horse IDs to points (higher = better match)

```json
{
  "id": 1,
  "question": "How do you prefer to celebrate?",
  "answers": [
    {
      "text": "At a wild party!",
      "scores": {
        "wild_stallion": 3,
        "racing_champion": 2
      }
    }
  ]
}
```

### Scoring System

- Assign points (1-3) to horse personalities for each answer
- The quiz totals all points
- The horse with the highest score is the result
- You don't need to give points to every horse for every answer

## 🖼️ Adding Images

1. Create a folder: `public/images/`
2. Add your horse images (JPG, PNG, etc.)
3. Reference them in `quizData.json` as: `"image": "images/your_image.jpg"`

The images will be displayed in a circular frame on the results screen.

## 🎨 Customizing Styles

- Main styles are in `src/App.css`
- Colors are defined as CSS variables at the top of the file
- Modify the gradient backgrounds, fonts, or animations as needed

## 📂 Project Structure

```
horse_generator/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/          # Add your images here
└── src/
    ├── main.jsx
    ├── App.jsx          # Main app logic
    ├── App.css          # Styles
    ├── components/
    │   ├── Quiz.jsx     # Quiz question component
    │   └── Results.jsx  # Results display component
    └── data/
        └── quizData.json # ⭐ Edit this to customize content!
```

## 🎉 Features

- ✨ Festive New Year's Eve themed design
- 📱 Fully responsive (mobile & desktop)
- 🎨 Smooth animations and transitions
- 🐴 6 different horse personalities (customizable)
- ❓ 5 quiz questions (add as many as you want!)
- 🔄 Restart quiz functionality
- 🎯 Score-based personality matching

## 💡 Tips

- Add as many questions as you like - just follow the JSON structure
- Create as many horse personalities as you want
- Each answer can give points to multiple horses
- Use the scoring system strategically to create interesting results
- Test your quiz to ensure all horses can be reached!

Enjoy creating your Year of the Horse personality quiz! 🐴✨
