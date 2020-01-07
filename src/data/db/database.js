import Mock from "../mock";

const database = {
  information: {
    name: 'Rami Bukhari',
    aboutContent: "I'm a passionate programmer, I develop web applications during the day, and make games at night. Game development is my "+
    "number one passion in life",
    age: 31,
    phone: '+966 599565705',
    nationality: 'Saudi',
    language: 'Arabic, English',
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
      details: "Providing full-stack development from backend to front end, using up to date web technologies."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Providing mobile app development for both iOS and android platforms using React-Native."
    },
    {
      title: "Game Development",
      icon: 'game',
      details: "Providing game development services. Ranging from simple 2D games to complex 3D."
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
      title: "jQuery",
      value: 85
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
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-1.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        process.env.PUBLIC_URL + "/images/portfolio-image-4-lg.jpg",
        process.env.PUBLIC_URL + "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-3.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-5.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-6.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-7.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-8.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: process.env.PUBLIC_URL + "/images/portfolio-image-9.jpg",
      largeImageUrl: [process.env.PUBLIC_URL + "/images/portfolio-image-9-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "IT Application Developer",
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
        year: "2018 - 2019",
        graduation: "React Nanodegree",
        university: "Udacity",
        details: "I learned how to build declarative UIs for the web with React, and for iOS and Android with React Native." +
        "I also learned how to manage state more predictably with Redux."
      },
      {
        id: 2,
        year: "2008 - 2013",
        graduation: "Bachelor of Science, Electrical Engineering",
        university: "King AbdulAziz University",
        details: "Graduation Project: portable console which I designed, built both hardware and software. Using microcontrollers"
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

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
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