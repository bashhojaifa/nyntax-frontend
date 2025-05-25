# Multiplayer Shiritori Game (MERN Stack)

A real-time, two-player Shiritori game built using the **MERN stack**.

> Shiritori is a word game where players take turns saying words that begin with the last letter of the previous word.

---

## Live Demo

🔗 [https://nyntax-frontend.vercel.app/]

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **API**: [DictionaryAPI.dev](https://dictionaryapi.dev/)
- **State Management**: React Hooks
- **Styling**: Plain CSS & Tailwind

---

## Game Features

| Feature             | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| Turn-based Gameplay | Players alternate turns after each valid word                                        |
| Word Validation     | Uses Dictionary API to check real English words                                      |
| Structure Rules     | Minimum 4 letters, must start with last letter of previous word, no repeats          |
| Countdown Timer     | 10-second timer per turn; skipping or delay penalizes player                         |
| Word History        | List of all previously entered words shown on screen                                 |
| Score Tracking      | Score increases for valid words, decreases for invalid entries                       |
| Deploy              | Frontend on [Vercel](https://vercel.com) and Backend on [Render](https://render.com) |

---

## Installation

### 1. Clone the Frontend Repository

````bash
git clone git@github.com:bashhojaifa/nyntax-frontend.git
cd nyntax-frontend

```bash
git git@github.com:bashhojaifa/nyntax-backend.git
cd nyntax-backend
````
