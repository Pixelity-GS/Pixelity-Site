const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    burger.addEventListener('click', ()=>{
        //toggle navigation
        nav.classList.toggle('nav-active');
        
        //animate links slide in
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
            
        });
        //BURGER ANIMATION
        burger.classList.toggle('toggle');
    });
    
}

const app =()=>{
    navSlide();
}

app();




