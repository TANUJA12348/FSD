fs.appendFile( "student.txt","this is a file for cse students",(err)=>{
    if (err) 
    {
        console.log(err);
    }
    else 
    {
        console.log ( "file successfully updated");
    }
  });