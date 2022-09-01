
const navbar = () => {
    return ( 
        <nav id='nav'>
 <div class='brand nav-group'>
   Brand
 </div>
 <div class='menus nav-group'>
   <div class="hamburger">
     <div class='bar'></div>
     <div class='bar'></div>
     <div class='bar'></div>
   </div>
   <a class='menu-item' href='#'>Accueil</a>
   <a class='menu-item' href='#'>Services</a>
   <a class='menu-item' href='#'>FaQs</a>
   <a class='menu-item' href='../client\login.html'>Login</a>
 </div>
 <div class="hamburger nav-group">
   <div></div>
   <div></div>
   <div></div>
 </div>
</nav>

     );
}
 
export default navbar;


 


// const navHeight = $("nav#nav").height();
// console.log({navHeight})
// const $navGroup = $('nav .nav-group')
// const navOrigPadding = ($navGroup.innerWidth() - $navGroup.width())/2;

// $('.hamburger').on('click', function() {
//   $('.menus.nav-group').toggleClass('show');
// })

// const minNavPadding = 10;
// $('nav').css({'background-color': 'rgba(256, 256, 256, 0)'})

// $(window).scroll(function() {
//   const windowScroll = $(window).scrollTop()
//   if (windowScroll < navHeight) {
//     const padding = navOrigPadding - windowScroll/2
//     let newPadding = padding >= minNavPadding ? padding : minNavPadding;
//     newPadding = newPadding > navOrigPadding ? navOrigPadding : newPadding;
//     const opacity = 1-(newPadding-minNavPadding)/(navOrigPadding-minNavPadding);
//     const newOpacity = opacity >= 1 ? 1 : opacity;
//     $('nav').css({'background-color': `rgba(256, 256, 256, ${newOpacity})`});
//     $('nav .nav-group').css({padding: `${newPadding}px`})
//   }
// })