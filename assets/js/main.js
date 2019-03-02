new Vue({ 
    el: '#app', 
    data: () => {
        return {
            icons: [
                { img: 'fab fa-github', to: 'https://github.com/ekinbukulmez' },
                { img: 'fab fa-linkedin', to: 'https://www.linkedin.com/in/ekinbukulmez/' },
                { img: 'fas fa-envelope-square', to: 'mailto:22412569@student.uwa.edu.au' },
            ],
            items: [
                {
                    color: '#4F518C',
                    icon: 'work',
                    title: 'Software Developer at Mote Net',
                    date: '2 January 2019 - Present',
                    text: `I am currently working at Mote Net, a Perth-based start-up that is developing smart farm technologies
                            for Western Australian farmers. I am currently developing the user-friendly Mote Net dashboard, which
                            displays farm for the user to utilise. `,
                    buttonText: 'Learn More',
                    link: 'https://mote.net.au/',
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
                    text: ``,
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
        }
    },
});
