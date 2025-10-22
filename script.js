// script.js

const STORAGE_KEY = "quotes-v1";

// default list (kept short here — you can expand)
const defaultQuotes = [
	{text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
	{
		text: "In three words I can sum up everything I've learned about life: it goes on.",
		author: "Robert Frost",
	},
	{text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
	{text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
	{text: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
];

let quotes = [];
let pool = [];

function loadQuotes() {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		quotes = stored ? JSON.parse(stored) : defaultQuotes.slice();
	} catch {
		quotes = defaultQuotes.slice();
	}
	resetPool();
}

function saveQuotes() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
	} catch {}
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function resetPool() {
	pool = shuffle(quotes.slice());
}

function getNextQuote() {
	if (pool.length === 0) resetPool();
	return pool.pop();
}

function renderQuote(q) {
	const container = document.getElementById("qid");
	if (!container) return;
	container.innerHTML = ""; // clear
	const txt = document.createElement("div");
	txt.className = "quote-text";
	txt.textContent = q.text;
	const auth = document.createElement("div");
	auth.className = "quote-author";
	auth.textContent = q.author ? `— ${q.author}` : "";
	container.appendChild(txt);
	container.appendChild(auth);
}

function newQuote() {
	const q = getNextQuote();
	renderQuote(q);
}

// Backwards-compatible name used in index.html
function func() {
	newQuote();
}

/**
 * Add a new quote. Minimal validation and persistence.
 * Returns true on success, false on invalid input.
 */
function addQuote(text, author = "") {
	if (!text || !text.trim()) return false;
	const q = {text: text.trim(), author: author.trim()};
	// avoid exact duplicates
	const exists = quotes.some((item) => item.text === q.text && item.author === q.author);
	if (exists) return false;
	quotes.push(q);
	saveQuotes();
	resetPool();
	return true;
}

// Expose helpers for console / other UI
window.newQuote = newQuote;
window.addQuote = addQuote;
window.func = func;

loadQuotes();
newQuote();
