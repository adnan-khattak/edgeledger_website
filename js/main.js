//initailize and add the map
function initMap() {
   //your loaction
   const loc = { lat: 33.684422, lng: 73.047882  };
 
    //to center map on location
    const map = new google.maps.Map(document.querySelector('.contact-map')
    , {
        zoom: 14, 
        center: loc});
        
        //The marker, positioned at location
        const marker = new google.maps.Marker({ position: loc, map: map});
      }
      
      //sticky menu backGround
      window.addEventListener('scroll', function() {
       if(window.scrollY > 150){
          document.querySelector('#navbar').style.opacity = 0.9;
         } else {
            document.querySelector('#navbar').style.opacity = 1;
         }
      });
    
    //smooth scrolling
    $('#navbar a').on('click', function(event) {
       if(this.hash !== '') {
          event.preventDefault();
    
          const hash = this.hash;
          
          $('html, body').animate(
             {
                scrollTop: $(hash).offset().top - 100
             },
             800
             );
            }
    });