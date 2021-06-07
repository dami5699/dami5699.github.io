'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
       navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;

    if(link == null ) {
        return;
    } 
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    // selectNavItem(target);
});

// Toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');

});

// Handle click on "contact me" button on home
const contactMe = document.querySelector('.home__contact');

contactMe.addEventListener('click', () => {
    scrollIntoView('#contact');

});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = (1 - window.scrollY / homeHeight);
})

// Arrow button
const arrowBtn = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if(window.scrollY > (homeHeight / 2)) {
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    }
});

arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Work button
const myProjBtn = document.querySelector('.myProject__categories');
const myProjList = document.querySelector('.myProject__projects');
const lists = document.querySelectorAll('.project');

myProjBtn.addEventListener('click', (event) => {

    const filter = event.target.dataset.type || event.target.parentNode.dataset.type;
    if(filter == null) {
        return;
    }

    // Remove selection from the previous item and select the new one.
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    myProjList.classList.add('anim-out');

    setTimeout(() => {
        lists.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });

        myProjList.classList.remove('anim-out');
    }, 300)

});

// 1. 모든 섹션 요소들을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다. 
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화시킨다.

// const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
// const sections = sectionIds.map(id => document.querySelector(id));
// const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

// // let selectedNavIndex = 0;
// // let selectedNavItem = navItems[0];
// // console.log('selectedNavItem:' + selectedNavItem);

// // add
// window.addEventListener("load", () => {
//     selectNavItem(navItems[selectedNavIndex]);
//     console.log('selectedNavItem:' + navItems[selectedNavIndex]);
//   });

// function selectNavItem(selected) {
//     selectedNavItem.classList.remove('active');
//     selectedNavItem = selected;
//     selectedNavItem.classList.add('active');
// };
// let selectedNavIndex = 0;
// let selectedNavItem = navItems[0];

// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     treshold: 0.3,
// };

// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting && entry.intersectionRatio > 0) {
//             const index = sectionIds.indexOf(`#${entry.target.id}`);
//             if(entry.boundingClientRect.y < 0) {
//                 selectedNavIndex = index + 1;
//             } else {
//                 selectedNavIndex = index - 1;
//             }

//         }
//     })
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// sections.forEach(section => observer.observe(section));

// window.addEventListener('scroll', (event) => {
//     // if(scrollY === 0) {
//     //     selectedNavIndex = 0;
//     // } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
//     //     selectedNavIndex = navItems.length - 1;
//     // }

//     selectNavItem(navItems[selectedNavIndex]);
// });

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    // selectNavItem(navItems[sectionIds.indexOf(selector)]);

}



