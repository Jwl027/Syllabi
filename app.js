var upload;
(function(){
    document.getElementById("txtPassword")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        console.log("c:");
        document.getElementById("log").click();
    }
});  
    document.getElementById("txtEmail")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        console.log("xd");
        document.getElementById("log").click();
    }
}); 
    
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

  //put file
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
     console.log(upload.name.substring(0,upload.name.length-4));
     var store= firebase.storage().ref("pdfs/"+upload.name);
     var task =store.put(upload);
      task.on('state_changed',
      function progress(snapshot){console.log("xd");},function
      error(err){},function complete(){console.log("kappa");});
     //document.getElementById("nani").style.color="red";
     
     
     var ref = firebase.database().ref().child('users');
     var curUser = auth.currentUser;
     //var fName = upload.name -;
     //Or ask user to rename how to view the file!
     ref.child(curUser.uid).child("Files").push(upload.name.substring(0,upload.name.length-4));


     });
   
  //ref.put("ex.pdf");
  //var storage = firebase.storage.ref();
  //var pdfRef = storage.child();


   const auth = firebase.auth();
   var user= document.getElementById("txtEmail");
                 var pass=document.getElementById("txtPassword");
                 var log=document.getElementById("log");
                 var reg=document.getElementById("reg");
                 var out=document.getElementById("logout");



        log.addEventListener('click',e=>{
                    out.display ="";
                    const email = txtEmail.value;
                    const password = pass.value;
                    const auth = firebase.auth();
                    const promise = auth.signInWithEmailAndPassword(email,password);
                    promise.catch(e=> console.log(e.message));

                    });




                 reg.addEventListener('click',e=>{
                    const email = txtEmail.value;
                    const password = pass.value;
                    const auth = firebase.auth();
                    const promise =
                    auth.createUserWithEmailAndPassword(email,password).then(function(user){
                        console.log('uid',user.uid);   
                        var ref = firebase.database().ref().child('users');
                        //ref.setValue(new User("lmao",123));
                        ref.child(user.uid).child("email").set(user.email);//This should be
                        //var list = [];
                        //ref.child(user.uid).child("Files").set(list);
                       
                       }).catch(e=> {console.log(e.message)});
                    //promise.catch(e=> {console.log(e.message+"\tNANI");
                    //return;});
                    
                    //var ref = firebase.database().ref().child('users');
                    //ref.child("jwl027").set("somevalue");//This should be


                    });
                 out.addEventListener('click',e=>{
                        //var user = auth.currentUser;
                        //console.log("check with back end\t"+user.getToken());
                    firebase.auth().signOut();   
                    });

                 firebase.auth().onAuthStateChanged(firebaseUser=>{
                    //When authenticated
                    if(firebaseUser){
                        user.style.display="none";
                        
                        pass.style.display ="none";
                        console.log("OCCURENCE \t");

                        //firebaseUser
                        console.log(firebaseUser);
                        


                        log.style.display ="none";
                        reg.style.display ="none";
                        out.style.display="inline";
                        console.log("dis change 1");

                        var ori = document.getElementById("viewer");
                        var clone = ori.cloneNode(true);
                        clone.setAttribute('src',"s.pdf");
                        ori.parentNode.replaceChild(clone,ori);

                        //var user = auth.currentUser;
                        console.log("check with backend\t"+firebaseUser.providerId);

                        var ref = firebase.database().ref().child('users');
                        //ref.setValue(new User("lmao",123));
                        //ref.child("jwl027").set("somevalue");//This should be
                        //in registering!
                        //ref.on('value',snap=>console.log(snap.val()));
                        console.log("after create uses");
                        //ref = ref.child('');

                        
                    }
                    //When not authenticated
                    else{
                        console.log("none");
                        out.style.display="none";
                        log.style.display ="inline";
                        reg.style.display ="inline";
                        console.log("dis change 2");
                        user.style.display="inline";
                        pass.style.display ="inline";

                        pass.value="";
                        user.value="";

                        var ori = document.getElementById("viewer");
                        var clone = ori.cloneNode(true);
                        clone.setAttribute('src',"");
                        ori.parentNode.replaceChild(clone,ori);

                    }
                    });


  }());

