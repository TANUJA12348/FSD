fs.unlink( "student.txt",(err)=>{
    if ( err) {
        console.log(err);
    }
    else {
        console.log( "file successfully deleted");
    }
  });
