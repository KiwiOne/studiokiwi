var keys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';
    
    $(document).keydown(function(e){
        keys.push( e.keyCode );
        if ( keys.toString().indexOf( konami ) >=0 ){
            
            keys = [];
            
            //add silly music in background
           $('body').append ('<iframe width="0" height="0" src="https://www.youtube.com/embed/JaPf-MRKITg?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'); //ookay - star wars
          //add &autoplay=1 at the end of the source link
        }
    });