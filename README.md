# What-a-Div

What-a-Div is a small browser-based Whack-a-Div style game where players click the highlighted square as it appears on a grid to score points before the timer runs out. The project is implemented in plain HTML, CSS and JavaScript and is designed to be easy to run locally or host on GitHub Pages.

## How to play
- Choose a grid size (3×3, 4×4, or 5×5).
- Choose a game duration (15s, 30s, or 60s).
- Click the `Start` button to begin.
- When a cell lights up (turns red), click that cell to score a point.
- The active cell disappears shortly after appearing — try to click quickly to increase your score.
- When time runs out an alert will show your final score.

## Files included
- `index.html` — the game UI and controls.
- `style.css` — styles for the game, responsive grid layout and active state.
- `script.js` — main game logic (board generation, spawning active cells, scoring and countdown).
- `README.md` — this file.
- `LICENSE` — MIT License.
- `.gitignore` — common ignores for development.

## Run locally
1. Clone the repository:

```bash
git clone https://github.com/faizulr/What-a-Div.git
cd What-a-Div
```

2. Open `index.html` directly in your browser, or run a simple local server (recommended) and visit `http://localhost:8000`:

```bash
# Python 3 built-in server
python3 -m http.server 8000
```

## Published on GitHub Pages
This repository is published using GitHub Pages. The game is available at: https://faizulr.github.io/What-a-Div/

Play the game and see how it works here: https://faizulr.github.io/What-a-Div/

If you make changes, push to the `main` branch and Pages will update (may take a minute).

## Customization
- Adjust the active cell duration and spawn frequency in `script.js` to make the game easier or harder.
- Add sound effects, animations, or persistent high scores (localStorage) to extend the game.

## Contributing
Contributions are welcome. Open an issue or submit a pull request with improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

---

*Created and maintained by faizulr.*