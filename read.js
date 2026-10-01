fs.readFile ( "student.txt","utf-8",(err,data)=>{
if ( err) 
{
    console.log(err);
}
else 
{
    console.log( "file content");
    console.log(data);
}
});