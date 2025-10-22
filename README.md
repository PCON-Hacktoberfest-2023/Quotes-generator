# Quotes-generator

A minimal, responsive Quote Generator web page that displays a quote and updates it when the "New Quote" button is clicked.

## Features

- Clean, dark-themed UI (see [styles.css](styles.css))
- Simple single-file front-end: [index.html](index.html) + [script.js](script.js)
- Accessible, responsive layout with reduced-motion support

## Quick start

1. Open [index.html](index.html) in your browser.
2. Click the "New Quote" button to get a different quote.

## Files

- [index.html](index.html) — page markup and UI. The displayed quote lives in the element with id [`#qid`](index.html).
- [styles.css](styles.css) — styling and responsive rules.
- [script.js](script.js) — logic that updates the quote; the button calls the [`func`](script.js) function.

## How it works

- The quote text element is: `div#qid` (referenced as [`#qid`](index.html)).
- The button in [index.html](index.html) calls the global function [`func`](script.js) which updates the content of `#qid`.

## Customization

- Replace or extend the quote list inside [`func`](script.js) to change available quotes.
- Edit colors, fonts and layout in [styles.css](styles.css).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

Choose and add a license file (e.g., MIT) if you want this repo to be open source.
