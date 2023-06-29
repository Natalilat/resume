// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: "Natali",
    lastname: "Latypova",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ in a month",
  address: "03197 bulvar Koltsova Kyiv",
}

   var footer = {
  social: {
  email: {
  text: "natali@mail.com",
  href: "mailto:natali@mail.com",
},
    
  phone: {
  text: "+381234567890",
  href: "tel:+381234567890",
},
  linkedin: {
  text: "linkedin",
  href: "www.linkedin.com",
}
},
}

//=================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
     
    page: {
      title: "Resume / summary",
    },
    header,
    main: {        
        summary: {
          title: "Summary",
          text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to  work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me",
         },
        experience: {
          title: "Other experience",
          text: "Pet project for parsing sport betting data from different platforms (odds) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
         },
        },
    footer,
    }
  )
  })

// ================================================================

// ================================================================






//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume / skills",
    },
    header,
  
    main: {
        skills: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'handlebars', 
            point: 10,
            isTop: true,
          },
          {
            name: 'VS Code & NPM',
            point: 9,
            isTop: false,
          },
          {
            name: 'Git',
            point: 7,
          },
          {
            name: 'Terminal',
            point: 8,
          },
          {
            name: 'React.js',
            point: 0,
          },
          {
            name: 'PHP',
            point: null,
          },

        ],

        title: 'My hobbies',
        hobbies: [
         {
          name: 'reading',
            isMain: true,
          },
               
          {
            name: 'baking',
            isMain: false, 
          },
          
          {
            name: 'knitting',
            isMain: true,                   
          }
        ],
    },
  

    footer,
    },
  )
  })
//===================================================================================
//===================================================================================

  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: "Resume / education",
      },
      header,
        
          main: {
          education: [
          {
            name: "NPU",
            isEnd: true                
          },
          {
            name: "KNU",
            isEnd: true,   
          },
          {
            name:  "it-brains school",
            isEnd: false, 
          },
        ],

          
        title: 'My Certificates',      
        certificates: [
          {
          name:'NPU certificate',
          id: 12345,
          },
          
          {
          name: 'KNU certificate',
          id: 67890,
          },
        ]
      },
     
      footer,
      },
    )
    })

    //===================================================================================
    //===================================================================================

    router.get('/work', function (req, res) {
      //             ↙ cюди вводимо назву файлу з сontainer
      res.render('work', {
        // ↙ сюди вводимо JSON дані
        layout: 'big',
        page: {
          title: "Resume / work",
        },
        header,
          
            main: {
              works: [
            {
                position: 'Junior Fullstack Developer',
                company:
              {
                name: 'IT Brains',
                url: 'https://it-brains.com.ua/',
              },
              
                duration: 
              {
                from: '10.10.2022',
                to: null,
              },
              projectAmount: 3,
              
              projects: [
                {
                  name: 'Resume',
                  url: 'https://resume/com/ua',
                  about: "Airbnb competitor",
                  stackAmount: 3,
                  stacks: [
                    {
                      name: 'React.js',
                    },
                    {
                      name: 'HTML/CSS',
                    }, 
                    {
                      name: 'Nodejs',
                    },
                  ],
                  awardAmount: 2,
                  awards: [
                    {
                      name: 'Background verification',
                    },
                    {
                      name: ' SEO optimtzation', 
                    },
                  ]

                }
              ]
            },
            ]
            },  
                  
           
            
              
                      
           
       
        footer,
        },
      )
      })

// Підключаємо роутер до бек-енду
module.exports = router
  
