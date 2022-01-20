import Mock from "../mock";

const database = {
  information: {
    name: 'Rami Bukhari',
    aboutContent: "I'm a passionate programmer, I develop web applications during the day, and make games at night. Game development is my "+
    "number one passion in life",
    birthdate: "September 23, 1988",
    phone: '+966 599565705',
    nationality: 'Saudi',
    language: 'Arabic, English, Japanese',
    email: 'rbisthebest@hotmail.com',
    address: 'Jeddah, North Abhor, Saudi Arabia',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: 'https://twitter.com/RamiBokhari',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/rami-bukhari/',
      dribbble: '',
      github: 'https://github.com/RamiB1234'
    },
    brandImage: process.env.PUBLIC_URL + '/images/brand-image.jpg',
    aboutImage: process.env.PUBLIC_URL + '/images/about-image.jpg',
    aboutImageLg: process.env.PUBLIC_URL + '/images/about-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Offering full-stack development services from backend to front end, using up to date web technologies."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Offering mobile app development services for both iOS and android platforms using React-Native."
    },
    {
      title: "Game Development",
      icon: 'game',
      details: "Offering game development services. Ranging from simple 2D games to complex 3D."
    },
  ],
  reviews: [
    {
      id: 1,
      content: "I know Rami as a hard working and self-driven team player. He holds a strong programming and problem solving skills. It was really a pleasure working with him.",
      author: {
        name: 'Osama Ali Bin Mahfouz',
        designation: 'Software Development Team Lead at Abdul Latif Jameel Group'
      }
    },
    {
      id: 2,
      content: "I know Rami as a hard working and self-driven team player. He holds a strong programming and problem solving skills. It was really a pleasure working with him.",
      author: {
        name: 'Osama Ali Bin Mahfouz',
        designation: 'Software Development Team Lead at Abdul Latif Jameel Group'
      }
    },
  ],
  skills: [
    {
      title: ".NET Framework",
      value: 80
    },
    {
      title: "MVC Design Pattern",
      value: 90
    },
    {
      title: "C#",
      value: 85
    },
    {
      title: "C++",
      value: 80
    },
    {
      title: "ReactJS",
      value: 75
    },
    ,
    {
      title: "React-Native",
      value: 65
    },
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "SQL",
      value: 75
    },
    {
      title: "HTML & CSS",
      value: 90
    },
    {
      title: "Git",
      value: 85
    }
  ],
  gamePortfolios: [
    {
      id: 1,
      title: "Gun Skaters",
      releaseDate: "March 2021",
      engine: "Unity",
      role: "Project Lead",
      genre: "2D Party Game",
      platforms: "Steam/Nintendo Switch",
      responsibilities: 'I desgined, developed, ported to Switch and published the game myself',
      imageUrl: process.env.PUBLIC_URL + "/images/Steam2.png",
      url: 'https://store.steampowered.com/app/1062130/Gun_Skaters/',
    },
    {
      id: 2,
      title: "Super Highway Racing",
      releaseDate: "July 2021",
      engine: "Unity",
      role: "Sole Developer",
      genre: "2D Top Down Racing",
      platforms: "Android",
      responsibilities: "This is a fast paced game where you control a fast car to avoid slow traffic. Beware of going out of fuel by collecting fuel tanks. One mistake means the end!",
      imageUrl: process.env.PUBLIC_URL + "/images/cars.png",
      url: 'https://play.google.com/store/apps/details?id=com.FunnySyntaxSoftware.S.HighwayRacing'
    },
    {
      id: 3,
      title: "Planetary Lander",
      releaseDate: "October 2021",
      engine: "Unity",
      role: "Sole Developer",
      genre: "2D Scroller",
      platforms: "WebGL",
      responsibilities: "I designed and developed this game in NASA Space App Challege 2021 as it was one of the challenges. In this game, the player controlls a planetary and tries to land successfully on the surface of the moon while trying to avoid floating meteoroids.",
      imageUrl: process.env.PUBLIC_URL + "/images/lander.png",
      url: 'https://ramib1234.github.io/planetary-lander/',
      git: 'https://github.com/RamiB1234/planetary-lander'
    },
    {
      id: 4,
      title: "Ur-Revisited",
      releaseDate: "April 2021",
      engine: "HTML5/Javascript",
      role: "Team Member",
      genre: "Strategy/Board Game",
      platforms: "Browser",
      responsibilities: 'Sound effects (piece selection, piece move), piece knockback when landed on it feature, how to play overlay support, instructions screen implementation',
      imageUrl: process.env.PUBLIC_URL + "/images/ur-revisited.gif",
      url: 'https://numenorian.itch.io/ur-revisited',
      git: 'https://github.com/gamkedo-la/ur-revisited'
    },
    {
      id: 5,
      title: "Solar Cinders",
      releaseDate: "November 2020",
      engine: "Unity",
      role: "Team Member",
      genre: "Space Shooter",
      platforms: "WebGL",
      responsibilities: 'Pause menu, health bar, sounds (shot, low health warning, hit, powerup ready, depleted energy, switch), player destruction bug fix, restart functionality, game over menu',
      imageUrl: process.env.PUBLIC_URL + "/images/solar.gif",
      url: 'https://itch.io/queue/c/188585/hometeam-gamedev?game_id=830386',
      git: 'https://github.com/gamkedo-la/solarcinders'
    },
    {
      id: 6,
      title: "Mercurial Luminance",
      releaseDate: "April 2020",
      engine: "Unity",
      role: "Team Member",
      genre: "Exploration",
      platforms: "WebGL",
      responsibilities: 'Intro manager ("Ken Burns" functionality), zoom support',
      imageUrl: process.env.PUBLIC_URL + "/images/Mercurial_Luminance.gif",
      url: 'https://itch.io/queue/c/188585/hometeam-gamedev?game_id=616422',
      git: 'https://github.com/gamkedo-la/mercurial-luminance'
    },
    {
      id: 7,
      title: "Descend Below the Crypts",
      releaseDate: "February 2020",
      engine: "HTML5/Javascript",
      role: "Team Member",
      genre: "Isometric adventure",
      platforms: "Browser",
      responsibilities: "Minimap, fast walk debug feature, invulnerable cheat, character positions on minimap, HP/MP HUD bars, key & gold display, inventory mouse support, level loading bug fix, animation code improvements, tooltip feature, abilities cooldown, assorted bug fixes, heal effect, melee attacks, abilities key shortcuts, shield item, enemy treasure drop, fireball spell, cleric heal unlock, heal effect, freeze spell, attack range",
      imageUrl: process.env.PUBLIC_URL + "/images/descend.gif",
      url: 'https://itch.io/queue/c/188585/hometeam-gamedev-formerly-gamkedo-club?game_id=566053',
      git: 'https://github.com/gamkedo-la/Descend-Below-the-Crypts'
    }
    /*{
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/portfolio-image-4-lg.jpg",
        process.env.PUBLIC_URL + "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },*/
  ],
  cppPortfolios: [
    {
      id: 1,
      title: "OpenStreetMap-Route-Planner",
      subtitle: "A C++ project that uses real map data from OpenStreetMap and implements A* search algorithm to find the shortest path between 2 points that the user enters ",
      imageUrl: process.env.PUBLIC_URL + "/images/map.png",
      git: 'https://github.com/RamiB1234/OpenStreetMap-Route-Planner'
    },
    {
      id: 2,
      title: "Linux-System-Monitor",
      subtitle: "A Linux process manager that is written in C++, it's similar to htop Linux program. It shows system information, processor information and running processes information",
      imageUrl: process.env.PUBLIC_URL + "/images/monitor.png",
      git: 'https://github.com/RamiB1234/linux-system-monitor'
    },
    {
      id: 3,
      title: "Memory-Management-Chatbot",
      subtitle: "A chatbot built with C++ and optimized from a memory management perspective using concepts such as: Smart Pointers, Move Semantics and The Rule of Five ",
      imageUrl: process.env.PUBLIC_URL + "/images/chatbot_demo.gif",
      git: 'https://github.com/RamiB1234/memory-management-chatbot'
    },
    {
      id: 4,
      title: "Concurrent-Traffic-Simulation",
      subtitle: "It's a traffic simulation in which vehicles are moving along streets and are crossing intersections according to traffic lights. Each element of these traffic objects runs in its own thread. ",
      imageUrl: process.env.PUBLIC_URL + "/images/traffic_simulation.gif",
      git: 'https://github.com/RamiB1234/concurrent-traffic-simulator'
    },
    {
      id: 5,
      title: "Pong-Cpp",
      subtitle: "It's a clone of the classic pong game written in C++. I used SDL library to take care of rendering and input detection  ",
      imageUrl: process.env.PUBLIC_URL + "/images/pong-game.gif",
      git: 'https://github.com/RamiB1234/pong-cpp'
    }
  ],
  awards: [
    {
      id: 1,
      title: "Hope Hackathon",
      awardDate: "May 2020",
      subtitle: "I have received 1st winner prize with my entry game 'Gun Skaters'. The hackathon had more than 15,000 ideas from around the world and my game has won 1st place in the eGaming category",
      imageUrl: process.env.PUBLIC_URL + "/images/hackathon1st-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/hackathon1st.png",
        process.env.PUBLIC_URL + "/images/hackathon1st.png"
      ],
      url: 'https://hopehackathon.com/'
    },
    {
      id: 2,
      title: "IGN ME Review",
      awardDate: "June 2020",
      subtitle: "IGN ME has reviewd a beta version of my game Gun Skaters and gave it a good score of 7/10",
      imageUrl: process.env.PUBLIC_URL + "/images/ignme-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/ignme.png",
        process.env.PUBLIC_URL + "/images/ignme.png"
      ]
    },
    {
      id: 3,
      title: "Nintendo Certified Developer",
      awardDate: "June 2020",
      subtitle: "I have pitched my award winning game to Nintendo to release it on the Nintendo Switch. It was approved!!",
      imageUrl: process.env.PUBLIC_URL + "/images/Switch-tn.jpg",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/Switch.jpg",
        process.env.PUBLIC_URL + "/images/Switch.jpg"
      ]
    },
    {
      id: 4,
      title: "Game Development Training",
      awardDate: "November 2020",
      subtitle: "I have completed the 3rd Game Development training with Mr. Ken Watanabe (Ex Nintendo Programmer who worked on Splatoon and Pikmin 3) where we learned game development best practices ",
      imageUrl: process.env.PUBLIC_URL + "/images/gameDev-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/gameDev.png",
        process.env.PUBLIC_URL + "/images/gameDev.png"
      ]
    },
    {
      id: 5,
      title: "React Nanodegree - Udacity",
      awardDate: "November 2019",
      subtitle: "I learned how to build declarative UIs for the web with React, and for iOS and Android with React Native.I also learned how to manage state more predictably with Redux.",
      imageUrl: process.env.PUBLIC_URL + "/images/reactnd-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/reactnd.png",
        process.env.PUBLIC_URL + "/images/reactnd.png"
      ]
    },
    {
      id: 6,
      title: "Front End Development Nanodegree - Udacity",
      awardDate: "August 2020",
      subtitle: "I learned how to to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript.",
      imageUrl: process.env.PUBLIC_URL + "/images/fend-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/fend.png",
        process.env.PUBLIC_URL + "/images/fend.png"
      ]
    },
    {
      id: 7,
      title: "C++ Nanodegree - Udacity",
      awardDate: "January 2021",
      subtitle: "I learned how to write good ,effecient and well designed programs in C++. I learned about advanced OOP topics such as templates and mutiple inheritance, "+
      "I also learned about how to manage memory propery and to write concurrent programs",
      imageUrl: process.env.PUBLIC_URL + "/images/cpp-nd-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/cpp-nd.png",
        process.env.PUBLIC_URL + "/images/cpp-nd.png"
      ],
      git: 'https://github.com/RamiB1234/cpp-nanodegree-ducumentation'
    },
    {
      id: 8,
      title: "Galactic Problem-Solver - NASA",
      awardDate: "October 2021",
      subtitle: "I participated in NASA Space Apps Challege and created a 2D game that simulates going back to the moon",
      imageUrl: process.env.PUBLIC_URL + "/images/nasa-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/nasa.png",
        process.env.PUBLIC_URL + "/images/nasa.png"
      ],
      git: 'https://github.com/RamiB1234/planetary-lander'
    },
    {
      id: 9,
      title: "Japanese Language L-1",
      awardDate: "November 2020",
      subtitle: "I have completed level 1 of Japanese language course, where I learned basic Japanese and Hiragana alphabets",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl1-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl1.png",
        process.env.PUBLIC_URL + "/images/japaneselvl1.png"
      ]
    },
    {
      id: 10,
      title: "Japanese Language L-2",
      awardDate: "December 2020",
      subtitle: "I have completed level 2 of Japanese language course, where I learned basic Japanese and Katakana alphabets",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl2-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl2.png",
        process.env.PUBLIC_URL + "/images/japaneselvl2.png"
      ]
    },
    {
      id: 11,
      title: "Japanese Language L-3",
      awardDate: "January 2021",
      subtitle: "I have completed level 3 of Japanese language course, where I learned basic Japanese conversations",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl3-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl33.png",
        process.env.PUBLIC_URL + "/images/japaneselvl33.png"
      ]
    },
    {
      id: 12,
      title: "Japanese Language L-4",
      awardDate: "January 2021",
      subtitle: "I have completed level 4 of Japanese language course, where I learned basic Japanese grammer and around 50 Kanjis",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl4-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl4.png",
        process.env.PUBLIC_URL + "/images/japaneselvl4.png"
      ]
    },
    {
      id: 13,
      title: "Japanese Language L-5",
      awardDate: "February 2021",
      subtitle: "I have completed level 5 of Japanese language course, where I learned basic Japanese grammer and around 50 Kanjis",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl5-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl5.png",
        process.env.PUBLIC_URL + "/images/japaneselvl5.png"
      ]
    },
    {
      id: 14,
      title: "Japanese Language L-6",
      awardDate: "March 2021",
      subtitle: "I have completed level 6 of Japanese language course, where I revised basic Japanese language and Kanjis",
      imageUrl: process.env.PUBLIC_URL + "/images/japaneselvl6-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japaneselvl6.png",
        process.env.PUBLIC_URL + "/images/japaneselvl6.png"
      ]
    },
    {
      id: 15,
      title: "Comprehensive Beginner Japanese Course",
      awardDate: "August 2021",
      subtitle: "I have completed the comprehensive beginner Japanese course where we studied Nihongo Daijobu 1st book",
      imageUrl: process.env.PUBLIC_URL + "/images/japanese beginner-tn.png",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/japanese beginner-lg.png",
        process.env.PUBLIC_URL + "/images/japanese beginner-lg.png"
      ]
    }
  ],
  webPortfolios: [
      {
        id: 1,
        title: "Travel-Buddy",
        tech: "HTML, CSS, Javascript, Webpack",
        subtitle: "This is an app that lets the user to enter traveling date and destination to receive weather information of the traveling date",
        imageUrl: process.env.PUBLIC_URL + "/images/travel.gif",
        url: 'http://travel-buddy-heroku.herokuapp.com/',
        git: 'https://github.com/RamiB1234/Travel-Buddy/'
      },
      {
        id: 2,
        title: "NLP News Evaluator",
        tech: "HTML, CSS, Javascript, Webpack",
        subtitle: "Building a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites",
        imageUrl: process.env.PUBLIC_URL + "/images/nlp.gif",
        url: 'https://npl-evaluater.herokuapp.com/',
        git: 'https://github.com/RamiB1234/evaluate-news-NLP/'
      },
      {
      id: 3,
      title: "Resturant Reservation - Front End",
      tech: "ReactJS",
      subtitle: "This is the front-end part of a resturant reservation system. It's developed with ReactJS framework",
      imageUrl: process.env.PUBLIC_URL + "/images/resturant.gif",
      url: 'https://ramib1234.github.io/resturant-front/#/',
      git: 'https://github.com/RamiB1234/resturant-front/'
    },
    {
      id: 4,
      title: "Resturant Reservation - API",
      tech: "ASP.NET Core 2.1 MVC",
      subtitle: "This is the backend part of a resturant reservation system. It's developed with ASP.NET Core 2.1 MVC framework",
      imageUrl: process.env.PUBLIC_URL + "/images/resturant.gif",
      url: 'https://ramib1234.github.io/resturant-front/#/',
      git: 'https://github.com/RamiB1234/ResturantAPI/'
    },
    {
      id: 5,
      title: "My Reads",
      tech: "ReactJS",
      subtitle: "In MyReads app the user have a virtual book library where he/she can move the books between shelves. The updates are dynamic and changes are saved on a server for a short time",
      imageUrl: process.env.PUBLIC_URL + "/images/MyReads.gif",
      url: 'https://ramib1234.github.io/my-reads/',
      git: 'https://github.com/RamiB1234/my-reads'
    },
    {
      id: 6,
      title: "Would you Rather",
      tech: "ReactJS and Redux",
      subtitle: "Would you Rather is a web app that lets users answer questions by selecting one of two options. Users can also post new questions and see leaderboard that has number of activities each user has made",
      imageUrl: process.env.PUBLIC_URL + "/images/would.gif",
      url: 'https://ramib1234.github.io/would-you-rather/',
      git: 'https://github.com/RamiB1234/would-you-rather'
    },
    {
      id: 7,
      title: "Personal Blog Website",
      tech: "HTML, CSS, Flexbox, CSS Grid",
      subtitle: "Utilize my HTML and CSS skills to build out a personal blog website, including custom images, layout, and styling. Along with webpage design considerations. The blog has a main page that has cards representing blog posts. Each blog post has an article, about the author, links, related post links and share buttons",
      imageUrl: process.env.PUBLIC_URL + "/images/blog.gif",
      url: 'https://ramib1234.github.io/personal-blog-website/index.html',
      git: 'https://github.com/RamiB1234/personal-blog-website'
    },
    {
      id: 8,
      title: "Landing Page",
      tech: "HTML, CSS, Vanilla Javascript",
      subtitle: "This is a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page",
      imageUrl: process.env.PUBLIC_URL + "/images/landing.gif",
      url: 'https://ramib1234.github.io/landing-page/index.html',
      git: 'https://github.com/RamiB1234/landing-page'
    },
    {
      id: 9,
      title: "Weather Journal",
      tech: "HTML, CSS, Vanilla Javascript, Openweathermap API, Node.js/Express",
      subtitle: "This is an app that fetches weather information from an external API by entering a desired ZIP code. It also makes other requests to save and get the data from a local express server. This is a demonstration of chaining Promise requests to make API calls then update the UI dynamically",
      imageUrl: process.env.PUBLIC_URL + "/images/weather.gif",
      git: 'https://github.com/RamiB1234/Weather-Journal'
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Senior Full Stack Developer",
        company: "Prince Mohammad Bin Salman College of Business & Entrepreneurship (MBSC)",
        details: "My job is to develop new applications based on top management requirements "+
        "and to maintain existing applications as well. I’m also working on integrating solutions together "+
        "using WCF or REST APIs. The primary technology I’m using is ASP.NET Core / ASP.NET 4.5 for backend and React framework for frontend."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Programmer",
        company: "Dar Al-Fikr Schools",
        details: "My job was to develop a comprehensive School Management System (S.M.S) for the school. "+
        "That includes but not limited to: Student Affairs, Human Resources, Helpdesk System, Grading System, "+
        "Inventory and Purchasing System. I was mainly using ASP.NET Core MVC 2 as the main framework for the system. "+
        "I was in charge of complete development cycle starting with requirement gathering, system design, coding, releasing and testing."
      },
      {
        id: 3,
        year: "2016 - 2018",
        position: "Database Analyst & Support services Specialist",
        company: "Allied Cooperative Insurance Group (ACIG)",
        details: "My job was to be a support party between our sales department and our vendors. "+
        "We used to take business requirements from management and coordinate with outsource vendors to deliver a solution. "+
        "And used to prepare management reports. I was also in charge of troubleshooting and resolving "+
        "day to day software issues.  And occasionally developed software to smooth company business"
      },
      {
        id: 4,
        year: "2014 - 1016",
        position: "Software Developer",
        company: "Abdul Latif Jameel Finance",
        details: "We were using Microsoft technologies to develop an in house system to handle all the financial "+
        "operations at the branches, mainly ASP.net MVC and MS SQL. My job was to translate the business "+
        "requirements to applications. All new software updates go through a QA test before release."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2021",
        graduation: "C++ Nanodegree",
        university: "Udacity",
        details: "I learned how to write good ,effecient and well designed programs in C++. I learned about advanced OOP topics such as templates and mutiple inheritance, "+
        "I also learned about how to manage memory propery and to write concurrent programs",
        download: '/files/cpp-nd.pdf'
      },
      {
        id: 2,
        year: "2020",
        graduation: "Front-End Development Nanodegree",
        university: "Udacity",
        details: "I learned how to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI " +
        "applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript.",
        download: '/files/FEND.pdf'
      },
      {
        id: 3,
        year: "2019",
        graduation: "React Nanodegree",
        university: "Udacity",
        details: "I learned how to build declarative UIs for the web with React, and for iOS and Android with React Native. " +
        "I also learned how to manage state more predictably with Redux.",
        download: '/files/Udacity React.pdf'
      },
      {
        id: 4,
        year: "2008 - 2013",
        graduation: "Bachelor of Science, Electrical Engineering",
        university: "King AbdulAziz University",
        details: "Graduation Project: portable console which I designed, built both hardware and software. Using microcontrollers",
        download: ''
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+966 599565705'],
    emailAddress: ['rbisthebest@hotmail.com'],
    address: "Jeddah, North Abhor, Saudi Arabia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/gamePortfolios").reply(config => {
  const response = database.gamePortfolios;
  return [200, response];
});

Mock.onGet("/api/webPortfolios").reply(config => {
  const response = database.webPortfolios;
  return [200, response];
});

Mock.onGet("/api/cppPortfolios").reply(config => {
  const response = database.cppPortfolios;
  return [200, response];
});

Mock.onGet("/api/awards").reply(config => {
  const response = database.awards;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});