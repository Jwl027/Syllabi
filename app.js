var upload;
(function(){
    //const upload="";            
                //document.getElementById("nani").style.color="red";
                 var config = {
    apiKey: "AIzaSyCJNj2leWSE833R4BoBZjAWWkAgYfB1R_o",
    authDomain: "syllabi-b9ca4.firebaseapp.com",
    databaseURL: "https://syllabi-b9ca4.firebaseio.com",
    projectId: "syllabi-b9ca4",
    storageBucket: "syllabi-b9ca4.appspot.com",
    messagingSenderId: "312202010876"
  };
  firebase.initializeApp(config);     
              var preObject = document.getElementById("object");
              preObject.innerText = "k";
              var ref = firebase.database().ref().child('object');
              //ref is to the root?
        //responds to object tag!
        ref.on('value',snap=>console.log(snap.val())); /*snap =>{ 
           console.log(snap.val());
           preObject.innerText = JSON.stringify(snap.val(),null,3);
           //preObject.innerText = "lol";
           
        }
 

        
        
        );
        */
        /* {
           console.log(snap.val());
           console.log("poop");
           preObject.innerText = JSON.stringify(snap.val(),null,3);
           });*/

  console.log("nanideska");
  var fileButton = document.getElementById('the_file');
  fileButton.addEventListener('change',function(e){
     var file = e.target.files[0];
     upload = file;
  var store= firebase.storage().ref("pdfs/"+file.name);
  /*
  var task =store.put(file);
      task.on('state_changed',
      function progress(snapshot){console.log("xd");},function
      error(err){},function complete(){console.log("kappa");}
      
      );*/
  });
  document.getElementById("uppy").addEventListener("click",function(){
     console.log(upload.name);
     var store= firebase.storage().ref("pdfs/"+upload.name);
     var task =store.put(upload);
      task.on('state_changed',
      function progress(snapshot){console.log("xd");},function
      error(err){},function complete(){console.log("kappa");});
     //document.getElementById("nani").style.color="red";
     });
   
  //ref.put("ex.pdf");
  //var storage = firebase.storage.ref();
  //var pdfRef = storage.child();
  }());

