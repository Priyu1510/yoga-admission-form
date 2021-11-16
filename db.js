const postData=async(e)=>{
                     e.preventDefault();
                     const { fname,lname,email,phnno,age }=inputs;
                    
                     if((fname&&lname&&email&&phnno&&age)){

                 const response  = await fetch("https://yogaclassform-default-rtdb.firebaseio.com/formreact.json",
                 {method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({
                    fname,
                    lname,
                    email,
                    phnno,
                    age
                  
                  }
                  ),
                 }
                  );

                  if(response){
                    setInputs({
                      fname:" ",
                      lname:" ",
                      email:" ",
                      phnno:" ",
                      age:" "
                    });

                    alert("Data stored successfully")
                  }
                }
                else{
                  alert("plz fill all the data");
                }
          
      
      

       
