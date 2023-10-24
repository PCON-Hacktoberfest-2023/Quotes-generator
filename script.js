// Define an array of quotes with authors and their Hindi translations
let quotes = [
  { text: "The only way to do great work is to love what you do.", author: "- Steve Jobs", hindi: "महान काम करने का एकमात्र तरीका वह है जो आप जो काम करने में पसंद करते हैं।" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "- Robert Frost", hindi: "तीन शब्दों में मैं जीवन के बारे में जो कुछ सीखा है, संक्षेपित कर सकता हूँ: यह जीता है।" },
  { text: "Believe you can and you're halfway there.", author: "- Theodore Roosevelt", hindi: "विश्वास करो कि आप कर सकते हैं और आप आधे रास्ते पर हैं।" },
  { text: "Strive not to be a success, but rather to be of value.", author: "- Albert Einstein", hindi: "सफलता होने की कोशिश न करें, बल्कि मूल्य होने की कोशिश करें।" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "- Eleanor Roosevelt", hindi: "भविष्य उनके पास है जो अपने सपनों की सुंदरता में विश्वास करते हैं।" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "- Winston Churchill", hindi: "सफलता अंतिम नहीं है, असफलता घातक नहीं है: जारी रखने का साहस है जो मायने रखता है।" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "- Franklin D. Roosevelt", hindi: "कल के हमारे साक्षरता की एकमात्र सीमा हमारे आज के संदेह होंगे।" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "- William Butler Yeats", hindi: "लोहे को गरम होने का इंतजार न करें, बल्कि इसे मारकर गरम करें।" },
  { text: "Life is what happens when you're busy making other plans.", author: "- Allen Sanders", hindi: "जब आप अन्य योजनाएँ बनाने में व्यस्त होते हैं, तो जीवन वह होता है।" },
  { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "- Jordan Belfort", hindi: "आपके और आपके लक्ष्य के बीच केवल यह कहानी है जिसे आप अपने आप से क्यों नहीं प्राप्त कर सकते हैं, इसके बारे में।" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "- C.S. Lewis", hindi: "आपके लिए कभी भी दूसरा लक्ष्य तय करने या एक नया सपना देखने के लिए बड़ा होने की आयु नहीं है।" },
  { text: "The purpose of our lives is to be happy.", author: "- Dalai Lama", hindi: "हमारे जीवन का उद्देश्य खुश रहना है।" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "- Steve Jobs", hindi: "आपका समय सीमित है, इसे किसी अन्य की जिंदगी जीकर बर्बाद न करें।" },
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "- Winston Churchill", hindi: "सफलता से गिरावट तक की लड़ाई में उत्साह की कोई हानि नहीं होती है।" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "- Nelson Mandela", hindi: "जीवन में जीने की सबसे बड़ी महिमा केवल कभी नहीं गिरने में है, बल्कि हर बार गिरने में उठने में है।" },
  { text: "Life is either a daring adventure or nothing at all.", author: "- Helen Keller", hindi: "जीवन या तो एक साहसी साहस है या बिल्कुल कुछ नहीं है।" },
  { text: "Don't count the days, make the days count.", author: "- Muhammad Ali", hindi: "दिनों की गिनती न करें, दिनों की मान करें।" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "- Ralph Waldo Emerson", hindi: "आपके नियत बनने वाले केवल व्यक्ति वह है जो आप तय करते हैं।" },
  { text: "Do not take life too seriously. You will never get out of it alive.", author: "- Elbert Hubbard", hindi: "जीवन को बहुत ही गंभीरता से न लो। आप इसे कभी भी जिंदा नहीं निकलेंगे।" },
  { text: "It always seems impossible until it’s done.", author: "- Nelson Mandela", hindi: "हमेशा यह असंभाव लगता है जब तक यह पूरा नहीं हो जाता।" },
  { text: "You can get everything in life you want if you will just help enough other people get what they want.", author: "- Zig Ziglar", hindi: "आप जीवन में वह सब कुछ प्राप्त कर सकते हैं जो आप चाहते हैं, अगर आप बस इतना ही मदद करें कि अन्य लोग वह प्राप्त करें जो वे चाहते हैं।" },
  { text: "Inspiration does exist, but it must find you working.", author: "- Pablo Picasso", hindi: "प्रेरणा जरूर मौजूद है, लेकिन यह आपको काम करते हुए मिलनी चाहिए।" },
  { text: "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.", author: "- Angela Bassett", hindi: "औसत से संतुष्ट न हों। पल में अपनी सबसे अच्छी चीज लेकर आइए। फिर, चाहे यह असफल हो या सफल हो, कम से कम आप जानते हैं कि आपने अपनी सारी शक्ति दी है।" },
  { text: "Show up, show up, show up, and after a while the muse shows up, too.", author: "- Isabel Allende", hindi: "आएं, आएं, आएं, और कुछ समय बाद म्यूज़ भी आता है।" },
  { text: "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.", author: "- David Ogilvy", hindi: "बंट मत करो। बार्क पार निशाना लगाओ। अमरों के साथ रहने का निशाना लगाओ।" },
  { text: "Your knowledge is your key to the future.", author: "- Albert Einstein", hindi: "आपका ज्ञान आपके भविष्य की कुंजी है।" },
  { text: "Don't tell people your plans. Show them your results.", author: "- Unknown", hindi: "लोगों को अपनी योजनाओं के बारे में नहीं बताओ। उन्हें अपने परिणाम दिखाओ।" },
  { text: "When nothing goes right, go left.", author: "- Unknown", hindi: "जब कुछ भी सही नहीं जा रहा हो, तो बाएं ओर जाओ।" },
  { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "- Winston Churchill", hindi: "सफलता अंतिम नहीं है; असफलता घातक नहीं है: जारी रखने का साहस है जो मायने रखता है।" },
  { text: "Stay hungry, stay foolish.", author: "- Steve Jobs", hindi: "भूखा रहो, मूर्ख रहो।" },
  { text: "Every man dies. Not every man lives.", author: "- William Wallace", hindi: "हर आदमी मरता है। हर आदमी जीता है।" },
  { text: "Stay hungry, stay foolish.", author: "- Steve Jobs", hindi: "भूखा रहो, मूर्ख रहो।" },
  { text: "Confidence is the first step towards success.", author: "- Unknown", hindi: "आत्मविश्वास सफलता की ओर पहला कदम है।" },
  { text: "Tit for Tat.", author: "- Unknown", hindi: "तलवार का मुँह काट देना।" },
  { text: "Once you choose hope, anything’s possible.", author: "- Christopher Reeve", hindi: "एक बार आप आशा चुन लेते हैं, तो कुछ भी संभव है।" },
];

// Get elements
let quoteText = document.getElementById("qid");
let authorText = document.getElementById("author");
let hindiQuoteText = document.getElementById("hindi-quote");
let generateButton = document.getElementById("generate-button");

// Function to generate a random quote
function randomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.text;
  authorText.textContent = "— " + randomQuote.author;
  hindiQuoteText.textContent = randomQuote.hindi; // Display the Hindi translation
  // Apply fade-in effect
  quoteText.classList.add("fade-in");
  authorText.classList.add("fade-in");
  hindiQuoteText.classList.add("fade-in");
}

generateButton.addEventListener("click", randomQuote);

randomQuote();
