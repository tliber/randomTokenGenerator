var addUserSession = function(user){
        console.log('add user sesh triggered')
        $.post( "./users", { 'user' : user} ) 
          .done(function( data ) {
        alert( "session status " + data );
      });
    }