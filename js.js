

    function classnav() {
        var element = document.getElementById("nav-list-id");
        element.classList.toggle('is-active')
      }

      
      window.addEventListener('scroll', function() {
        let animacion = this.document.getElementById('prueba-scroll');
        let position = animacion.getBoundingClientRect().top;
        console.log(position)
        if(position < 400){
          let element = document.getElementById("prueba-scroll");
        element.classList.add('animated')
        }
        else if(position > 850){
          let element = document.getElementById("prueba-scroll");
        element.classList.remove('animated')
        }
      });
  



