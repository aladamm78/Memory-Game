# Memory Game

A simple memory game where the objective is to match pairs of colored cards. This project uses HTML, CSS, and JavaScript.

## Features

- Randomly shuffled card colors for each game session.
- Interactive gameplay: flip cards to reveal their colors.
- Matching and non-matching card animations.
- Responsive design for different screen sizes.

## How to Run

### Prerequisites
Ensure you have a browser (e.g., Chrome, Firefox, Edge) installed on your computer.

### Steps
1. Clone or download this repository.
2. Navigate to the project directory.
3. Open the `index.html` file in your browser by double-clicking it.

Alternatively, you can use a local web server:

#### Using Python
1. Open a terminal and navigate to the project folder:
   ```bash
   cd /path/to/memory-game
   ```
2. Start a local server:
   ```bash
   python -m http.server
   ```
3. Open `http://localhost:8000` in your browser.

#### Using Node.js
1. Ensure Node.js is installed on your system.
2. Install `http-server` if you don’t have it:
   ```bash
   npm install -g http-server
   ```
3. Start the server:
   ```bash
   http-server
   ```
4. Open the provided local URL (e.g., `http://localhost:8080`) in your browser.

## Project Structure
```
/memory-game
  |-- index.html      # Main HTML file
  |-- style.css       # Styling for the game
  |-- script.js       # JavaScript logic for the game
```

## Gameplay Instructions
1. The game starts with all cards facing down.
2. Click on a card to flip it and reveal its color.
3. Click on another card to try to find a match.
4. If the two flipped cards match, they remain revealed.
5. If they do not match, they flip back over.
6. Continue until all cards are matched.
