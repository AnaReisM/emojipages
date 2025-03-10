const emojiItems = [
  {
    title: "A Feast for Crows",
    author: "George R. R. Martin",
    emojiImgs: "🍳🐛🐦🦅",
    genres: ["fantasy", "fiction"],
    year: 2005,
    itemLink: "https://www.goodreads.com/book/show/13497.A_Feast_for_Crows"
  },
  {
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    emojiImgs: "👑👑🐺⚔",
    genres: ["fantasy"],
    year: 1998,
    itemLink: "https://www.goodreads.com/book/show/10572.A_Clash_of_Kings"
  },
  {
    title: "A Storm of Swords",
    author: "George R. R. Martin",
    emojiImgs: "🌩️🌪️⚔️🛡️🗡️",
    genres: ["fantasy", "fiction"],
    year: 2000,
    itemLink: "https://www.goodreads.com/book/show/62291.A_Storm_of_Swords"
  },
  {
    title: "The Adventures of Pinocchio",
    author: "Carlo Collodi",
    emojiImgs: "🧒👃🤥🎡🐳🦗",
    genres: ["fiction", "fantasy"],
    year: 1883,
    itemLink: "https://www.goodreads.com/book/show/568989.Adventures_of_Pinnochio"
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    emojiImgs: "🧠🎻⚰👣🕵️‍♂️",
    genres: ["mystery","crime","classic"],
    year: 1892,
    itemLink: "https://www.goodreads.com/book/show/3590.The_Adventures_of_Sherlock_Holmes"
  },
  {
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    emojiImgs: "🇺🇸⚔️💵👨",
    genres: ["non-fiction", "biography"],
    year: 2004,
    itemLink: "https://www.goodreads.com/book/show/16130.Alexander_Hamilton"
  },
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    emojiImgs: "👩🐇😼☕🎩♕",
    genres: ["fantasy", "children's"],
    year: 1865,
    itemLink: "https://www.goodreads.com/book/show/48492452-alice-s-adventures-in-wonderland"
  },
  {
    title: "The Andromeda Strain",
    author: "Michael Crichton",
    emojiImgs: "👨‍🔬💉👽🛸",
    genres: ["thriller"],
    year: 1969,
    itemLink: "https://www.goodreads.com/book/show/7670.The_Andromeda_Strain"
  },
  {
    title: "Angels & Demons",
    author: "Dan Brown",
    emojiImgs: "👨‍🏫🇻🇦⏳💣🔎",
    genres: ["crime", "mystery", "thriller"],
    year: 2000,
    itemLink: "https://www.goodreads.com/book/show/960.Angels_Demons"
  },
  {
    title: "Angels in America",
    author: "Tony Kushner",
    emojiImgs: "👼🏽🇺🇸👬🏳️‍🌈👦🏽",
    genres: ["drama"],
    year: 1991,
    itemLink: "https://www.goodreads.com/book/show/72003.Angels_in_America"
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    emojiImgs: "🐷🐰🐭🐴🐮🐔",
    genres: ["satire"],
    year: 1945,
    itemLink: "https://www.goodreads.com/book/show/170448.Animal_Farm"
  },
  {
    title: "The Baby-Sitters Club",
    author: "Ann Martin",
    emojiImgs: "🧒👧🏡🎡",
    genres: ["fiction"],
    year: 1986,
    itemLink: "https://www.goodreads.com/book/show/233722.Kristy_s_Great_Idea"
  },
  {
    title: "The Bad Beginning",
    author: "Lemony Snicket",
    emojiImgs: "👧👶👦😈",
    genres: ["comedy", "drama"],
    year: 1999,
    itemLink: "https://www.goodreads.com/book/show/78411.The_Bad_Beginning"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    emojiImgs: "🇩🇪☠️📚🔥👧🏼",
    genres: ["historical-fiction", "fiction", "war"],
    year: 2006,
    itemLink: "https://www.goodreads.com/book/show/19063.The_Book_Thief"
  },
  {
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    emojiImgs: "🧛‍♂️💔👼💫🌖",
    genres: ["young-adult", "fantasy", "romance"],
    year: 2008,
    itemLink: "https://www.goodreads.com/book/show/1162543.Breaking_Dawn"
  },
  {
    title: "The Cat In The Hat",
    author: "Dr. Seuss",
    emojiImgs: "🐱🎩😸🎉",
    genres: ["fantasy", "children's"],
    year: 1957
  },
  {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    emojiImgs: "🎩🏭🍫🎫👦🏼",
    genres: ["fantasy", "children's"],
    year: 1964
  },{
    title: "Charlotte's Web",
    author: "E.B. White",
    emojiImgs: "🕷️🕸️🖊️🐖👩‍👩‍👧",
    genres: ["fiction", "children's"],
    year: 1952
  },
  {
    title: "Cloud Atlas",
    author: "David Mitchell",
    emojiImgs: "☁️🌎🏝🌺",
    genres: ["science-fiction", "drama", "fantasy"],
    year: 2004
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    emojiImgs: "🇺🇸👧🏽👎🏿👵🏾👍🏾",
    genres: ["classic", "historical"],
    year: 1982
  },
  {
    title: "Confessions of a Shopaholic",
    author: "Sophie Kinsella",
    emojiImgs: "👠🧣🛍️📈💸",
    genres: ["comedy", "chick-lit"],
    year: 2000
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    emojiImgs: "👧🏻🗝🐈🚪🐀⚫",
    genres: ["adventure", "fantasy", "horror"],
    year: 2002
  },
  {
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    emojiImgs: "🤪💰💵🇸🇬🌏",
    genres: ["fiction", "romance", "comedy"],
    year: 2013
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    emojiImgs: "🕵‍♂ 🔎 🤔",
    genres: ["mystery", "thriller", "fiction"],
    year: 2003
  },
  {
    title: "Death of a Salesman",
    author: "Arthur Miller",
    emojiImgs: "💀⚰️🤵💼",
    genres: ["tragedy"],
    year: 1949
  },
  {
    title: "The Devil Wears Prada",
    author: "Lauren Weisberger",
    emojiImgs: "😈👩🏻‍🦳👠👩🏻👗👛",
    genres: ["drama", "comedy", "romance"],
    year: 2003
  },
  {
    title: "Diary of A Wimpy Kid",
    author: "Jeff Kinney",
    emojiImgs: "📔🧀🎒🎮",
    genres: ["comedy", "fiction", "young-adult"],
    year: 2007
  },
  {
    title: "The Diamond Age",
    author: "Neal Stephenson",
    emojiImgs: "💎⌚️📖🎓🤖🎩",
    genres: ["science-fiction"],
    year: 2000,
    itemLink: "https://www.goodreads.com/book/show/827.The_Diamond_Age"
  },
  {
    title: "Disgrace",
    author: "J. M. Coetzee",
    emojiImgs: "🇿🇦🌹👨‍🏫👩‍🎓",
    genres: ["fiction", "romance"],
    year: 1999
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    emojiImgs: "⚔️❤️🌎🤕👩‍👧🧩",
    genres: ["dystopian", "science-fiction", "young-adult"],
    year: 2011
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    emojiImgs: "🇪🇸⚔🛡🏇🤺",
    genres: ["romance", "dystopian", "adventure"],
    year: 1605
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    emojiImgs: "🧛‍♂️🩸🌕⚰🦇",
    genres: ["classic", "fantasy", "horror"],
    year: 1897,
    itemLink: "https://www.goodreads.com/book/show/40665263-dracula"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    emojiImgs: "🏜🌠⚔💊💧",
    genres: ["science-fiction"],
    year: 1965
  },
  {
    title: "The Dutch House: A Novel",
    author: "Ann Patchett",
    emojiImgs: "🥢🥠👧➡️👩",
    genres: ["classic"],
    year: 2019
  },
  {
    title: "Eclipse",
    author: "Stephenie Meyer",
    emojiImgs: "❤️🐺🧛‍♂️🌕💑",
    genres: ["young-adult", "fantasy", "romance"],
    year: 2007
  },
  {
    title: "The Eye of the World",
    author: "Robert Jordan",
    emojiImgs: "👹🧙‍♀️⚔️🗺️🐺",
    genres: ["fantasy", "fiction"],
    year: 1990,
    itemLink: 'https://www.goodreads.com/book/show/228665.The_Eye_of_the_World'
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    emojiImgs: "☁️💙🚬🇳🇱🏥",
    genres: ["young-adult", "romance"],
    year: 2012
  },
  {
    title: "Fight Club",
    author: "Chuck Palahniuk",
    emojiImgs: "👨🚬👊💣♣🌆",
    genres: ["crime", "satire"],
    year: 1996
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    emojiImgs: "🧪➕➡️🧟⚰️",
    genres: ["gothic", "science-fiction", "horror"],
    year: 1818
  },
  {
    title: "Freaky Friday",
    author: "Mary Rodgers",
    emojiImgs: "🥢🥠👧➡️👩",
    genres: ["children's", "comedy"],
    year: 1972
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    emojiImgs: "👧🏻🐉💉🇸🇪",
    genres: ["crime", "mystery", "thriller"],
    year: 2005
  },
  {
    title: "The Goldfinch",
    author: "Donna Tartt",
    emojiImgs: "🥇🐤🖼️👱‍♂",
    genres: ["fiction", "contemporary"],
    year: 2013
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    emojiImgs: "👧👦🛣️👩🔪👨",
    genres: ["mystery", "crime"],
    year: 2012
  },
  {
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    emojiImgs: "🌙🐄🐻🎈🥣🌙",
    genres: ["children's", "classic"],
    year: 1947
  },
  {
    title: "The Gruffalo",
    author: " Julia Donaldson, Axel Scheffler",
    emojiImgs: "🐭🦊🦉🐍👹",
    genres: ["children's"],
    year: 1999,
    itemLink: "https://www.goodreads.com/book/show/1013383.The_Gruffalo"
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    emojiImgs: "🤴🇩🇰🏰⚔👻💔",
    genres: ["classic", "drama", "crime", "romance"],
    year: 1602
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    emojiImgs: "👦🏻⚡🐈😨📸🐍",
    genres: ["children's", "fantasy"],
    year: 1998
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J. K. Rowling",
    emojiImgs: "👓🕮🔮🐍✨",
    genres: ["fantasy"],
    year: 2007
  },
  {
    title: "Harry Potter and the Half Blood Prince",
    author: "J.K. Rowling",
    emojiImgs: "💔🤴📚🚣💀🐍",
    genres: ["fantasy", "children's", "fiction"],
    year: 2005
  },
  {
    title: "Harry Potter and the Methods of Rationality",
    author: "Eliezer Yudkowsky",
    emojiImgs: "📚⚗✨🧙‍♂️👦",
    genres: ["fantasy", "science-fiction"],
    year: 2010
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    emojiImgs: "🧙‍♂️👦🏻⚡💀🐦",
    genres: ["young-adult", "fiction"],
    year: 2004
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    emojiImgs: "📨🎂✨📖💎",
    genres: ["fantasy"],
    year: 1997
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    emojiImgs: "🔒🏢🧟🐀🌕🐺",
    genres: ["fantasy"],
    year: 1999
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    emojiImgs: "👍🌌💛🛸🤖",
    genres: ["science-fiction", "comedy", "surreal"],
    year: 1979
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    emojiImgs: "👧1️⃣2️⃣🏹☠🥇",
    genres: ["romance", "action-and-adventure", "science-fiction"],
    year: 2008
  },
  {
    title: "Iliad",
    author: "Homer",
    emojiImgs: "🤴👸⚔️🏹🌳🐎",
    genres: ["classic", "mythology"],
    year: 800
  },
  {
    title: "Inherent Vice",
    author: "Thomas Pynchon",
    emojiImgs: "🌱💨💰🕵️‍♂️",
    genres: ["fiction", "mystery", "crime", "noir"],
    year: 2009
  },
  {
    title: "Into the Wild",
    author: "Jon Krakauer",
    emojiImgs: "➡🌎🍃🌲",
    genres: ["adventure", "biography","true travel essay"],
    year: 1996
  },
  {
    title: "IT",
    author: "Stephen King",
    emojiImgs: "🤡🎈👿🧒",
    genres: ["fiction", "horror", "thriller"],
    year: 1986
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    emojiImgs: "🐦🏚️💑😱🔥💒",
    genres: ["gothic", "classic", "romance"],
    year: 1847
  },
  {
    title: "John Dies at the End",
    author: "David Wong",
    emojiImgs: "🧔⚰️🔚",
    genres: ["Comedy", "Horror"],
    year: 2007,
    itemLink: "https://www.goodreads.com/book/show/1857440.John_Dies_at_the_End"
  },
  {
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    emojiImgs: "🐻🧒🌴🔥📕",
    genres: ["animals", "childrens"],
    year: 1849,
    itemLink: "https://www.goodreads.com/book/show/77270.The_Jungle_Book"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    emojiImgs: "🦖🦕🏞️👨‍🔬⚠",
    genres: ["science-fiction", "thriller"],
    year: 1990
  },
  {
    title: "Les Miserables",
    author: "Victor Hugo",
    emojiImgs: "🇫🇷👮🏻‍♂️🥖🎵",
    genres: ["drama", "romance"],
    year: 1862
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    emojiImgs: "👳🛶🌊🐯",
    genres: ["fiction"],
    year: 2001
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S.Lewis",
    emojiImgs: "🦁🧙‍♀️🚪👧🧒🏞️",
    genres: ["children's", "fantasy"],
    year: 1950
  },
  {
    title: "The Little Prince",
    author: " Antoine de Saint-Exupery",
    emojiImgs: "👶🏻👑🛡🗡",
    genres: ["children's","fiction"],
    year: 2017
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    emojiImgs: "👭👩🏼‍🤝‍👩🏻🎀📜",
    genres: ["classic", "romance"],
    year: 1869,
    itemLink: "https://www.goodreads.com/book/show/1934.Little_Women"
  },
  {
    title: "Looking for Alaska",
    author: "John Green",
    emojiImgs: "🏫👦🔍👧❤️",
    genres: ["young-adult"],
    year: 2005
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    emojiImgs: "🧙‍💍🧝🌋",
    genres: ["fantasy", "adventure"],
    year: 1968
  },
  {
    title: "The Lost Symbol",
    author: "Dan Brown",
    emojiImgs: "🧐🎚🗝🔎",
    genres: ["crime", "mystery", "thriller"],
    year: 2009
  },
  {
    title: "Macbeth",
    author: "William Shakespeare",
    emojiImgs: "🧙‍♀️🧙‍♀️🧙‍♀️👨⚔️👑",
    genres: ["tragedy", "drama"],
    year: 1623
  },
  {
    title: "Madeline",
    author: "Ludwig Bemelmans",
    emojiImgs: "👧🏫🐯⛪",
    genres: ["children's"],
    year: 1939
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    emojiImgs: "🚀🥔🧪🤔",
    genres: ["science-fiction", "fiction"],
    year: 2011
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    emojiImgs: "👩‍🏫📚👧🦎🎂✨",
    genres: ["children's"],
    year: 1988
  },
  {
    title: "The Maze Runner",
    author: "James Dashner",
    emojiImgs: "↙️➡️🏃‍♂️🏃‍♀️↪️⤴️",
    genres: ["young-adult", "science-fiction", "post-apocalyptic"],
    year: 2009
  },
  {
    title: "The Merchant of Venice",
    author: "William Shakespeare",
    emojiImgs: "🚢⌛💰🔪👨",
    genres: ["drama", "comedy", "romance"],
    year: 1600
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    emojiImgs: "👨😴✨🐜😱",
    genres: ["absurdism", "fantasy"],
    year: 1915,
    itemLink: "https://www.goodreads.com/book/show/485894.The_Metamorphosis"
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    emojiImgs: "🧪🕴🌋🙎🏻⚔️👑",
    genres: ["action-and-adventure", "fantasy"],
    year: 2006
  },
  {
    title: "Moby-Dick",
    author: " Herman Melville",
    emojiImgs: "🦈🌊🛶🎣",
    genres: ["adventure", "classic","fiction"],
    year: 1851
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    emojiImgs: "🐦⚔️💣🏹👩",
    genres: ["action-and-adventure", "science-fiction", "war"],
    year: 2010
  },
  {
    title: "Monsieur Malaussène",
    author: "Daniel Pennac",
    emojiImgs: "👶👴👱‍♀️👵🐕🗼",
    genres: ["crime", "fiction", "satire"],
    year: 1995
  },
  {
    title: "Much Ado About Nothing",
    author: "William Shakespeare",
    emojiImgs: "💑👿💔💀💑",
    genres: ["classic", "comedy", "romance"],
    year: 1623
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    emojiImgs: "🌬️🎐🍃🧔",
    genres: ["young-adult", "romance"],
    year: 2007,
    itemLink: "https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind"
  },
  {
    title: "New Moon",
    author: "Stephenie Meyer",
    emojiImgs: "✨🌑🧛👧",
    genres: ["young-adult", "romance"],
    year: 2006
  },
  {
    title: "Nineteen Eighty-Four: A Novel",
    author: "George Orwell",
    emojiImgs: "👀👨🏻👩🏻📕💌🐁",
    genres: ["dystopian", "political-fiction", "science-fiction"],
    year: 1949
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    emojiImgs: "🐭🐭➕👨🧔",
    genres: ["classic", "fiction"],
    year: 1937
  },
  {
    title: "Othello",
    author: "William Shakespeare",
    emojiImgs: "👨👎👨🏿⚔️👩‍🦰",
    genres: ["tragedy", "drama"],
    year: 1622
  },
  {
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    emojiImgs: "💒 🏭 🌏",
    genres: ["historical", "fiction", "fantasy"],
    year: 1989
  },
  {
    title: "Percy Jackson and the Lightning Thief",
    author: "Rick Riordan",
    emojiImgs: "⚡️🏛🌊",
    genres: ["adventure", "fantasy", "young-adult"],
    year: 2005
  },
  {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    emojiImgs: "🌼📗🌟🎶",
    genres: ["coming-of-age", "young-adult"],
    year: 1999
  },
  {
    title: "Pet Sematary",
    author: "Stephen King",
    emojiImgs: "🐈✝️🧟😱",
    genres: ["horror"],
    year: 1986
  },
  {
    title: "Peter Pan",
    author: "J.M. Barrie",
    emojiImgs: "🧝‍♂️👧🧒🏴‍☠️🐊",
    genres: ["fantasy", "classic", "children's"],
    year: 1904
  },
  {
    title: "The Princess Bride",
    author: "William Goldman",
    emojiImgs: "👸👰🚜🏰💕⚔️",
    genres: ["fantasy", "romance", "comedy"],
    year: 1973
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    emojiImgs: "💍🎭🥄📜",
    genres: ["classic", "romance"],
    year: 1813,
    itemLink: "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice"
  },
  {
    title: "PS, I Love You",
    author: "Cecilia Ahern",
    emojiImgs: "👩🏼 ⚰️ 💌👱🏻‍♂️",
    genres: ["romance"],
    year: 2004
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    emojiImgs: "🕹️🥚🎮🕹️🗝️",
    genres: ["science-fiction", "dystopian"],
    year: 2011
  },
  {
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    emojiImgs: "🏩📜🕊️👴🏽",
    genres: ["historical-fiction", "graphic-novel", "classic"],
    year: 1989
  },
  {
    title: "The Reptile Room",
    author: "Lemony Snicket",
    emojiImgs: "👧👶👦🐍",
    genres: ["comedy", "drama"],
    year: 1999
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    emojiImgs: "🧔🛣️👦🛒",
    genres: ["post-apocalyptic-fiction", "tragedy"],
    year: 2007,
    itemLink: "https://www.goodreads.com/book/show/6288.The_Road"
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    emojiImgs: "👨🏻❤️👩🏻🧪☠",
    genres: ["drama", "romance"],
    year: 1597
  }, {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    emojiImgs: "🅰️❤️👶🤱⚖️",
    genres: ["romance", "historical-fiction"],
    year: 1850
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    emojiImgs: "🤐🌹🚪🗝️🏃‍♀️👨‍🦽",
    genres: ["classic", "fiction", "young-adult", "historical-fiction"],
    year: 1911,
    itemLink: "https://www.goodreads.com/book/show/2998.The_Secret_Garden"
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    emojiImgs: "👩‍👧‍👧💰💔👫",
    genres: ["Novel"],
    year: 1811,
    itemLink:"https://www.goodreads.com/book/show/14935.Sense_and_Sensibility?from_search=true"
  }
  {
    title: "The Shining",
    author: "Stephen King",
    emojiImgs: "👨🔪🚪😱",
    genres: ["horror"],
    year: 1977
  }, {
    title: "Ship of Magic",
    author: "Robin Hobb",
    emojiImgs: "🐉🌊🚢💰🏴‍☠️",
    genres: ["fantasy"],
    year: 1998
  },
  {
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    author: "Robert Louis Stevenson",
    emojiImgs: "🏴󠁧󠁢󠁳󠁣󠁴󠁿👨‍⚕️🦹‍♂️󠁧󠁢󠁳󠁣󠁴󠁿🧪☯️",
    genres: ["classic", "mystery", "science-fiction"],
    year: 1886
  }, {
    title: "The Struggle",
    author: "L.J.Smith",
    emojiImgs: "😱🧛💀👍🦇",
    genres: ["crime", "horror"],
    year: 1991
  },
  {
    title: "Steelheart",
    author: "Brandon Sanderson",
    emojiImgs: "⚙❤😡🔫🤓🌃",
    genres: ["action-and-adventure", "fantasy", "literature"],
    year: 2013
  },
  {
    title: "Superfudge",
    author: "Judy Blume",
    emojiImgs: "🧒👧🗽🐦",
    genres: ["literature"],
    year: 1980
  },
  {
    title: "Talking To Strangers",
    author: " Malcom Gladwell",
    emojiImgs: " 🙋🏼  🙋🏼‍♂️ 👩🏼‍💻 👨🏼‍💻 🎭",
    genres: ["self-help"],
    year: 2019
  },
  {
    title: "The Tempest",
    author: "William Shakespeare",
    emojiImgs: "🚢 ⛈🧙‍😱",
    genres: ["romance"],
    year: 1611
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    emojiImgs: "🏹🐦👧👦🧓🇺🇸",
    genres: ["classic", "historical-fiction", "drama"],
    year: 1960
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    emojiImgs: "⏳🔎❓👁🧠",
    genres: ["romance", "philosofy", "dystopian"],
    year: 1925
  },
  {
    title: "Twelfth Night",
    author: "William Shakespeare",
    emojiImgs: "💁🏼‍⛵️✉️❤️👰🏼😂",
    genres: ["comedy", "romance"],
    year: 1602
  },
  {
    title: "Twelve Angry Men",
    author: "Reginald Rose",
    emojiImgs: " 1⃣ 2⃣ 😡🧔",
    genres: ["drama", "crime"],
    year: 1954
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    emojiImgs: "❤️🐺🧛‍♂️🌕💑",
    genres: ["young-adult", "fantasy", "romance"],
    year: 2005
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    emojiImgs: "🐛🍏🍊🎂🍉🦋",
    genres: ["children's", "classic"],
    year: 1969
  },
    {
    title: "The Village By the Sea",
    author: "Anita Desai",
    emojiImgs: "🌊🌴👨‍👧‍👦🏚️",
    genres: ["Non-fiction"],
    year: 1982,
    itemLink:"https://www.goodreads.com/book/show/275600.The_Village_by_the_Sea?ac=1&from_search=true"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    emojiImgs: "⚔️🕊️💌🇷🇺",
    genres: ["historical-fiction"],
    year: 1869
  },
  {
    title: "The War of the Worlds",
    author: " H. G. Wells",
    emojiImgs: "👽👾🌎⚔️💣",
    genres: ["science-fiction", "war", "space", "thriller"],
    year: 1898
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    emojiImgs: "🙂❤️🦸🧛‍🦇",
    genres: ["drama", "fantasy", "comedy"],
    year: 1987
  },{
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    emojiImgs: "👦🛏️🐺⛵🌲👹",
    genres: ["children's", "classic", "fantasy"],
    year: 1963
  },{
    title: "Who Moved My Cheese",
    author: "Spencer Johnson",
    emojiImgs: "🐭🏃🕵️🗺️🧀",
    genres: ["fiction"],
    year: 1998
  },
  {
    title: "The Wide Window",
    author: "Lemony Snicket",
    emojiImgs: "👧👶👦🍳",
    genres: ["comedy", "drama"],
    year: 2000
  },
  {
    title: "Winnie the Pooh",
    author: "A. A. Milne",
    emojiImgs: "🧸🍯🐅🤔",
    genres: ["children's", "classic", "fantasy"],
    year: 1926
  },
  {
    title: "The Winter King",
    author: "Bernard Cornwell",
    emojiImgs: "❄🇬🇧⚔👑",
    genres: ["historical-fiction"],
    year: 1995
  },
  {
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    emojiImgs: "🐈💔👩🏻🔮👴🏻🐦",
    genres: ["Magical Realism", "Fiction", "Mystery"],
    year: 1997
  },
  {
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    emojiImgs: "🌪️👧🐕🦁🟨🧙‍♂️",
    genres: ["classic", "fantasy", "fiction", "childrens"],
    year: 1900,
    itemLink: "https://www.goodreads.com/book/show/236093.The_Wonderful_Wizard_of_Oz"
  }
];
