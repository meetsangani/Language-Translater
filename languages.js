const languages = [
  {
    no: "0",
    name: "Auto",
    native: "Detect",
    code: "auto",
  },
  {
    no: "1",
    name: "Afrikaans",
    native: "Afrikaans",
    code: "af",
  },
  {
    no: "2",
    name: "Albanian",
    native: "Shqip",
    code: "sq",
  },
  {
    no: "3",
    name: "Arabic",
    native: "عربي",
    code: "ar",
  },
  {
    no: "4",
    name: "Armenian",
    native: "Հայերէն",
    code: "hy",
  },
  {
    no: "5",
    name: "Azerbaijani",
    native: "آذربایجان دیلی",
    code: "az",
  },
  {
    no: "6",
    name: "Basque",
    native: "Euskara",
    code: "eu",
  },
  {
    no: "7",
    name: "Belarusian",
    native: "Беларуская",
    code: "be",
  },
  {
    no: "8",
    name: "Bulgarian",
    native: "Български",
    code: "bg",
  },
  {
    no: "9",
    name: "Catalan",
    native: "Català",
    code: "ca",
  },
  {
    no: "10",
    name: "Chinese (Simplified)",
    native: "中文简体",
    code: "zh-CN",
  },
  {
    no: "11",
    name: "Chinese (Traditional)",
    native: "中文繁體",
    code: "zh-TW",
  },
  {
    no: "12",
    name: "Croatian",
    native: "Hrvatski",
    code: "hr",
  },
  {
    no: "13",
    name: "Czech",
    native: "Čeština",
    code: "cs",
  },
  {
    no: "14",
    name: "Danish",
    native: "Dansk",
    code: "da",
  },
  {
    no: "15",
    name: "Dutch",
    native: "Nederlands",
    code: "nl",
  },
  {
    no: "16",
    name: "English",
    native: "English",
    code: "en",
  },
  {
    no: "17",
    name: "Estonian",
    native: "Eesti keel",
    code: "et",
  },
  {
    no: "18",
    name: "Filipino",
    native: "Filipino",
    code: "tl",
  },
  {
    no: "19",
    name: "Finnish",
    native: "Suomi",
    code: "fi",
  },
  {
    no: "20",
    name: "French",
    native: "Français",
    code: "fr",
  },
  {
    no: "21",
    name: "Gujarati",
    native: "ગુજરાતી",
    code: "gu",
  },
  {
    no: "22",
    name: "Galician",
    native: "Galego",
    code: "gl",
  },
  {
    no: "23",
    name: "Georgian",
    native: "ქართული",
    code: "ka",
  },
  {
    no: "24",
    name: "German",
    native: "Deutsch",
    code: "de",
  },
  {
    no: "25",
    name: "Greek",
    native: "Ελληνικά",
    code: "el",
  },
  {
    no: "26",
    name: "Haitian Creole",
    native: "Kreyòl ayisyen",
    code: "ht",
  },
  {
    no: "27",
    name: "Hebrew",
    native: "עברית",
    code: "iw",
  },
  {
    no: "28",
    name: "Hindi",
    native: "हिन्दी",
    code: "hi",
  },
  {
    no: "29",
    name: "Hungarian",
    native: "Magyar",
    code: "hu",
  },
  {
    no: "30",
    name: "Icelandic",
    native: "Íslenska",
    code: "is",
  },
  {
    no: "31",
    name: "Indonesian",
    native: "Bahasa Indonesia",
    code: "id",
  },
  {
    no: "32",
    name: "Irish",
    native: "Gaeilge",
    code: "ga",
  },
  {
    no: "33",
    name: "Italian",
    native: "Italiano",
    code: "it",
  },
  {
    no: "34",
    name: "Japanese",
    native: "日本語",
    code: "ja",
  },
  {
    no: "35",
    name: "Korean",
    native: "한국어",
    code: "ko",
  },
  {
    no: "36",
    name: "Latvian",
    native: "Latviešu",
    code: "lv",
  },
  {
    no: "37",
    name: "Lithuanian",
    native: "Lietuvių kalba",
    code: "lt",
  },
  {
    no: "38",
    name: "Macedonian",
    native: "Македонски",
    code: "mk",
  },
  {
    no: "39",
    name: "Malay",
    native: "Malay",
    code: "ms",
  },
  {
    no: "40",
    name: "Maltese",
    native: "Malti",
    code: "mt",
  },
  {
    no: "41",
    name: "Norwegian",
    native: "Norsk",
    code: "no",
  },
  {
    no: "42",
    name: "Persian",
    native: "فارسی",
    code: "fa",
  },
  {
    no: "43",
    name: "Polish",
    native: "Polski",
    code: "pl",
  },
  {
    no: "44",
    name: "Portuguese",
    native: "Português",
    code: "pt",
  },
  {
    no: "45",
    name: "Romanian",
    native: "Română",
    code: "ro",
  },
  {
    no: "46",
    name: "Russian",
    native: "Русский",
    code: "ru",
  },
  {
    no: "47",
    name: "Sanskrit",
    native: "संस्कृतम्",
    code: "sa",
  },
  {
    no: "48",
    name: "Serbian",
    native: "Српски",
    code: "sr",
  },
  {
    no: "49",
    name: "Slovak",
    native: "Slovenčina",
    code: "sk",
  },
  {
    no: "50",
    name: "Slovenian",
    native: "Slovensko",
    code: "sl",
  },
  {
    no: "51",
    name: "Spanish",
    native: "Español",
    code: "es",
  },
  {
    no: "52",
    name: "Swahili",
    native: "Kiswahili",
    code: "sw",
  },
  {
    no: "53",
    name: "Swedish",
    native: "Svenska",
    code: "sv",
  },
  {
    no: "54",
    name: "Thai",
    native: "ไทย",
    code: "th",
  },
  {
    no: "55",
    name: "Turkish",
    native: "Türkçe",
    code: "tr",
  },
  {
    no: "56",
    name: "Ukrainian",
    native: "Українська",
    code: "uk",
  },
  {
    no: "57",
    name: "Urdu",
    native: "اردو",
    code: "ur",
  },
  {
    no: "58",
    name: "Vietnamese",
    native: "Tiếng Việt",
    code: "vi",
  },
  {
    no: "59",
    name: "Welsh",
    native: "Cymraeg",
    code: "cy",
  },
  {
    no: "60",
    name: "Yiddish",
    native: "ייִדיש",
    code: "yi",
  },
];
