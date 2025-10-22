# Quotes-generator

A small, responsive Quote Generator web page. Click "New Quote" to show a different quote; add your own quotes via the built-in form or from the browser console — quotes persist in localStorage.

## Demo

- Open `index.html` in your browser (no server required).
- Click "New Quote" to cycle through quotes (no immediate repeats until the pool is exhausted).
- Add quotes using the form in the page or programmatically (see Usage).

## Features

- Minimal, dark-themed responsive UI (see `styles.css`)
- Non-repeating shuffle pool so quotes rotate before repeating
- Persistent user-added quotes via `localStorage`
- Small, dependency-free codebase: `index.html`, `styles.css`, `script.js`
- Accessibility considerations and reduced-motion support

## Files

- `index.html` — page markup and UI. Quote container: `div#qid`.
- `styles.css` — UI styling and responsive rules.
- `script.js` — application logic (loading, rendering, adding, shuffling, persistence).
- `README.md` — documentation.

## Quick start

1. Clone or download the repository.
2. Open `index.html` in any modern browser (Windows, macOS, Linux).
3. Click "New Quote" or add your own quote.

## Usage

From the page UI

- "New Quote" button — shows the next quote from an internal shuffled pool.
- Add-quote form — enter quote text and optional author, then click "Add Quote". Validates emptiness and prevents exact duplicates.

Programmatically (browser console)

- Show a new quote:
  - window.newQuote()
  - or call the backwards-compatible function window.func()
- Add a quote:
  - window.addQuote("Your quote text", "Author Name")
  - Returns true on success, false on invalid/duplicate input.

Developer-facing functions (exposed on `window`)

- newQuote() — render next quote
- func() — alias for newQuote()
- addQuote(text, author) — add and persist a quote

Persistence

- Quotes are stored in `localStorage` under the key `quotes-v1`.
- To reset to the default quotes, clear that key from DevTools Application > Local Storage, or run:
  - localStorage.removeItem('quotes-v1');

## How it works (brief)

- On load, `script.js` reads saved quotes from `localStorage` or falls back to `defaultQuotes`.
- A "pool" is a shuffled copy of the quotes. Each call to newQuote() pops one quote from the pool.
- When the pool is empty it is reshuffled from the full quotes array — this ensures all quotes are shown before repeats.
- addQuote() appends to the quotes array, persists to `localStorage`, and resets the pool.

## Styling notes

- Quote text uses `.quote-text`, author uses `.quote-author` — modify `styles.css` to change typography or layout.
- The main quote container in the markup uses the id `qid`.

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Keep changes small and focused; update README when adding features.
4. Open a pull request describing your change.

## License

Add a LICENSE file (MIT recommended) to make this repository open source.

## Troubleshooting

- If new quotes don't appear after adding, check browser console for errors and verify `localStorage` is writable (some private modes restrict storage).
- To debug quotes state in console:
  - JSON.parse(localStorage.getItem('quotes-v1') || '[]')
  - Or inspect the `quotes` variable in DevTools (page must be open).
