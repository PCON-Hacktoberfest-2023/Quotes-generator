# Quotes-generator

Minimal, responsive Quote Generator — a single-page web app that shows a quote, lets users add new quotes, and persists them to localStorage.

Quick links

- Live demo: open `index.html` in your browser (no server required)
- Quote element: `div#qid`
- Primary files: `index.html`, `styles.css`, `script.js`

Why this project

- Tiny, dependency-free UI for quickly viewing inspirational quotes
- Non-repeating shuffle pool so every quote is shown before repeats
- User-added quotes persist across sessions via `localStorage`
- Works offline entirely in the browser

Features

- Modern dark theme and responsive layout (see `styles.css`)
- Floating Action Buttons (FABs): New Quote and Add Quote remain visible
- Accessible markup and reduced-motion support
- Simple programmatic API for automation / testing

Contents

- `index.html` — page markup and UI
- `styles.css` — design, responsive rules, and FAB placement
- `script.js` — quote data, shuffle logic, rendering, persistence
- `README.md` — this documentation

Quick start

1. Clone or download the repo.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari).
3. Click "New Quote" to show another quote. Use the form to add quotes.

Usage — UI

- New Quote (FAB, bottom-right): displays the next quote from a shuffled pool.
- Add Quote (FAB, bottom-left): open the form in the page, enter quote text and optional author, then click Add. The form validates non-empty input and prevents exact duplicates.

Usage — programmatic API (browser console)

- Show a new quote:
  - window.newQuote()
  - window.func() (alias)
- Add a quote:
  - window.addQuote("Your quote text", "Author Name")
  - Returns boolean: true on success, false for invalid or duplicate input.
- Inspect persisted quotes:
  - JSON.parse(localStorage.getItem('quotes-v1') || '[]')

Persistence & reset

- Storage key: `quotes-v1` in `localStorage`
- To reset to the built-in default quotes:
  - localStorage.removeItem('quotes-v1'); location.reload();

How it works (brief)

- On load, `script.js` reads `quotes-v1` from `localStorage` or falls back to the built-in `defaultQuotes`.
- The app creates a shuffled "pool" copy of the quotes. Each call to newQuote() pops one quote from the pool.
- When the pool empties it is reshuffled — this ensures no immediate repeats until all quotes have been shown.
- addQuote() appends a quote to the quotes array, saves to localStorage, and resets the pool so the new quote participates immediately.

Styling notes

- Quote text uses `.quote-text`, author uses `.quote-author`.
- Floating buttons are fixed to the viewport to remain visible; CSS rules ensure dialogs/modals render above them (see `styles.css`).
- To customize typography, edit the fonts and sizes in `styles.css`.

Accessibility

- Reduced-motion preference is respected.
- Buttons have visible focus styles; consider adding ARIA labels if you change button markup.
- If you add dialogs, the CSS includes rules to move FABs out of the way and ensure dialogs have higher z-index.

Extending

- Add more default quotes in `script.js` (the `defaultQuotes` array).
- Replace the storage mechanism with a backend API by swapping persistence calls in `saveQuotes()` / `loadQuotes()`.

Contributing

1. Fork the repository.
2. Create a branch for your feature or fix.
3. Keep changes small and document them in this README or in a CHANGELOG.
4. Open a Pull Request.

Examples

- Add a quote from the console:
  - window.addQuote("Do small things with great love.", "Mother Teresa")
- Show the next quote:
  - window.newQuote()

Troubleshooting

- If quotes don't persist, check browser privacy settings and confirm `localStorage` is available.
- If the UI seems to hide behind the FABs, either scroll the page or open DevTools and check for unexpected CSS overrides.
- Debug storage state:
  - console.log(JSON.parse(localStorage.getItem('quotes-v1') || '[]'))

License

- No license file included. Add a LICENSE (MIT recommended) to make this repo open source.

Contact / feedback

- Open an issue or PR with suggestions, bug reports, or improvements.
