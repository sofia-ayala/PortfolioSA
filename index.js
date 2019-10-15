if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
   } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  $(document).ready(function(){
    // event.preventDefault();
  
  $('.readmore1').on('click', (event) => {
    event.preventDefault();
      $('#show-this-on-click1').slideDown();
      $('#show-this-on-click1').show();
      $(".slideshow-container1").slideDown();
      $(".slideshow-container1").show();
      $('#readless1').show();
      $('#readmore1').hide();
    })
  
    const hidden1 = () => {
      $('#show-this-on-click1').hide()
      $('#readless1').hide()
      $('.slideshow-container1').hide()
     }
  
    hidden1();
  
    $('#readless1').on('click',()=>{
        event.preventDefault();
        $('#show-this-on-click1').slideUp();
        $('#show-this-on-click1').hide();
        $('.slideshow-container1').slideUp()
        $('.slideshow-container1').hide()
        $('#readless1').hide();
        $('#readmore1').show();
      })


      $('.readmore2').on('click', (event) => {
        event.preventDefault();
          $('#show-this-on-click2').slideDown();
          $('#show-this-on-click2').show();
          $(".slideshow-container2").slideDown();
          $(".slideshow-container2").show();
          $('#readless2').show();
          $('#readmore2').hide();
        })  

        
        const hidden2 = () => {
            $('#show-this-on-click2').hide()
            $('#readless2').hide()
            $('.slideshow-container2').hide()
          }
        
          hidden2();
        
          $('#readless2').on('click',()=>{
              event.preventDefault();
              $('#show-this-on-click2').slideUp();
              $('#show-this-on-click2').hide();
              $('.slideshow-container2').slideUp()
              $('.slideshow-container2').hide()
              $('#readless2').hide();
              $('#readmore2').show();
            })


            $('.readmore3').on('click', (event) => {
                event.preventDefault();
                  $('#show-this-on-click3').slideDown();
                  $('#show-this-on-click3').show();
                  $(".slideshow-container3").slideDown();
                  $(".slideshow-container3").show();
                  $('#readless3').show();
                  $('#readmore3').hide();
                })  
        
                
        const hidden3 = () => {
            $('#show-this-on-click3').hide()
            $('#readless3').hide()
            $('.slideshow-container3').hide()
            }
                
            hidden3();
                
        $("#readless3").on("click",()=>{
            event.preventDefault();
            $('#show-this-on-click3').slideUp();
            $('#show-this-on-click3').hide();
            $(".slideshow-container3").slideUp();
            $(".slideshow-container3").hide();
            $('#readless3').hide();
            $('#readmore3').show();
            })
        

         $('.readmore4').on('click', (event) => {
            event.preventDefault();
            $('#show-this-on-click4').slideDown();
            $('#show-this-on-click4').show();
            $(".slideshow-container4").slideDown();
            $(".slideshow-container4").show();
            $('#readless4').show();
            $('#readmore4').hide();
            })  
                
                        
         const hidden4 = () => {
            $('#show-this-on-click4').hide()
            $('#readless4').hide()
            $('.slideshow-container4').hide()
            }
                        
            hidden4();
                        
            $("#readless4").on("click",()=>{
                event.preventDefault();
                $('#show-this-on-click4').slideUp();
                $('#show-this-on-click4').hide();
                $(".slideshow-container4").slideUp();
                $(".slideshow-container4").hide();
                $('#readless4').hide();
                $('#readmore4').show();
            })


            $('.readmore5').on('click', (event) => {
              event.preventDefault();
              $('#show-this-on-click5').slideDown();
              $('#show-this-on-click5').show();
              $(".slideshow-container5").slideDown();
              $(".slideshow-container5").show();
              $('#readless5').show();
              $('#readmore5').hide();
              })  
                  
                          
           const hidden5 = () => {
              $('#show-this-on-click5').hide()
              $('#readless5').hide()
              $('.slideshow-container5').hide()
              }
                          
              hidden5();
                          
              $("#readless5").on("click",()=>{
                  event.preventDefault();
                  $('#show-this-on-click5').slideUp();
                  $('#show-this-on-click5').hide();
                  $(".slideshow-container5").slideUp();
                  $(".slideshow-container5").hide();
                  $('#readless5').hide();
                  $('#readmore5').show();
              })


              $('.readmore6').on('click', (event) => {
                event.preventDefault();
                $('#show-this-on-click6').slideDown();
                $('#show-this-on-click6').show();
                $(".slideshow-container6").slideDown();
              $(".slideshow-container6").show();
                $('#readless6').show();
                $('#readmore6').hide();
                })  
                    
                            
             const hidden6 = () => {
                $('#show-this-on-click6').hide()
                $('#readless6').hide()
                $('.slideshow-container6').hide()
                }
                            
                hidden6();
                            
                $("#readless6").on("click",()=>{
                    event.preventDefault();
                    $('#show-this-on-click6').slideUp();
                    $('#show-this-on-click6').hide();
                    $(".slideshow-container6").slideUp();
                  $(".slideshow-container6").hide();
                    $('#readless6').hide();
                    $('#readmore6').show();
                })

                $(document).ready(function(){

                function myFunction() {
                  var x = document.getElementById("headernav");
                  if (x.style.display === "block") {
                    x.style.display = "none";
                  } else {
                    x.style.display = "block";
                  }
                }

              });


                  
              });
