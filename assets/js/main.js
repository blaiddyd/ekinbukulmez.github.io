new Vue({ 
    el: '#app', 
    data: () => {
        return {
            icons: [
                { img: 'fab fa-github', to: 'https://github.com/ekinbukulmez' },
                { img: 'fab fa-linkedin', to: 'https://www.linkedin.com/in/ekinbukulmez/' },
                { img: 'fas fa-envelope-square', to: 'mailto:22412569@student.uwa.edu.au' },
                { img: 'fab fa-instagram', to: 'https://www.instagram.com/ekin.exe/' },
            ],
            items: [
                {
                    color: '#4F518C',
                    icon: 'work',
                    title: 'Software Developer at Mote Net',
                    date: '2 January 2019 - Present',
                    text: `I am currently working at Mote Net, a Perth-based start-up that is developing smart farm technologies
                            for Western Australian farmers. I am currently developing the user-friendly Mote Net dashboard, which
                            displays farm information for the user to utilise. `,
                    buttonText: 'Learn More',
                    link: 'https://mote.net.au/',
                    button: true,
                },
                {
                    color: '#5E35B1',
                    icon: 'fas fa-chalkboard-teacher',
                    title: 'Programmung Tutor',
                    date: 'July 2018 - Present',
                    text: `I work as a programming tutor every week, teaching the fundamentals of web development and basic algorithms. 
                            I am also able to tutor in Python, C, C++ and Java. If you or someone you know in Perth area is interested in getting tutored in 
                            programming, contact me through one of my social media links!`,
                    buttonText: 'Contact Me',
                    link: '#footer',
                    button: true,
                },
                {
                    color: '#2C2A4A',
                    icon: 'computer',
                    title: 'Web Development Intern at Mission Australia',
                    date: '14 March 2018 - Present',
                    text: `I worked on the early version of the No Wrong Door project, which enabled users to browse through 
                            non-profit resources in Western Australia based on their suburb, age, and area of need. I am currently working on a second version of the website using Vue.js
                            for improved perfromance.`,
                    buttonText: 'VERSION I',
                    link: 'https://www.ekinbukulmez.me/NoWrongDoor',
                    button: true,
                },
                {
                    color: '#907AD6',
                    icon: 'school',
                    date: '27 February 2018 - December 2019',
                    title: 'Computer Science, BS, at University of Western Australia',
                    text: `I am currently a third-year Computer Science major at UWA. I spend most of my time there working as the Secretary of
                            Coders for Causes, which is a student organization that builds software for non-profit organizations, and teaches
                            students professional programming skills.`,
                    button: false,
                },
                {
                    color: '#372549',
                    icon: 'book',
                    title: 'Global Business, BS, at the University of Texas at Dallas',
                    date: 'August 2015 - November 2017',
                    text: ``,
                    button: false,
                },
                
            ],
            images: [
                'https://cdn-images-1.medium.com/max/1280/1*QIg6vEjZmT5YMVKU5Rxr2A.png',
                'https://firebase.google.com/images/social.png',
                'https://www.geeksread.com/wp-content/uploads/2018/05/What-is-nodeJS-what-we-can-do-with-nodeJS.jpg',
                'https://c10.patreonusercontent.com/3/eyJ3IjoxOTIwfQ%3D%3D/patreon-media/p/campaign/941215/7d3ad801c44a4a59a0f90e72b99ef58f/2?token-time=2145916800&token-hash=Nj3wnHnyVXx2tlV5eahIX2rwaVkryunlNFAdvmVHS58%3D',
                'http://wallsdesk.com/wp-content/uploads/2017/01/Elon-Musk-Background-.jpeg',
                'http://images6.fanpop.com/image/photos/41300000/BTS-bts-41399222-2000-1333.jpg',
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/262ece3f-c877-4971-96fc-f736847d70be/d73oy5d-096b0942-9e5a-41ea-91fa-8b69b7b3fa88.jpg/v1/fill/w_1192,h_670,q_70,strp/jojo_s_bizarre_adventure_wallpaper_by_franky4fingersx2_d73oy5d-pre.jpg',
                'https://i.pinimg.com/originals/ab/1e/82/ab1e8231b32f4b88b4a9c96532b95749.jpg',
            ]
        }
    },
});
