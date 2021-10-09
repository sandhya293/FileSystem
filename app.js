const fs = require("fs");
const readline = require("readline-sync");

class fileSystem{
    maked()
    {
        fs.mkdir("storedata",function (err)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("directry created successfully");
            }
        });
    }
    writef()
    {
        fs.writeFile("doc.txt","hello love",function (err) 
        {
            if(err)
            {
                console.log(err);
            } 
            else
            {
                console.log("data written successfully");
            }
        });
    }
    readf()
    {
        fs.readFile("doc.txt",'utf8',function (err,data)
        {
            if(err)
            {
                console.log(err);
            } 
            else
            {
                console.log(data);
            }
        });
    }
    appendf()
    {
        fs.appendFile("doc.txt"," my name is sandhya",function (err)
        {
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log("data added successfully ,you can go and check in your file");
            }
        });
    }
    unlinkf()
    {
        fs.unlink("doc.txt",function (err)
        {
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log("file delete successfully");
            }
        });
    }
    renamef()
    {
        fs.rename("doc.txt","doc1.txt",function (err)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("file renamed successfully");
            }
        });
    }
    removed()
    {
        fs.rmdir("storedata",function (err)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("dir removed successfully");
            }
        });
    }
}
filesys = new fileSystem();
while (true)
{
    console.log("1. make dir");
    console.log("2. remove fir");
    console.log("3. write in file");
    console.log("4. read from file");
    console.log("5. delete file");
    console.log("6. rename file");
    console.log("7 . append in file");
    console.log("8. update the data in file");
    
    console.log("enter the value = ");
    let data = Number(readline.question());
   // console.log(typeof(data));
    if(data == 1)
    {
        filesys.maked();
       // break;
    }
    else if(data == 2)
    {
        filesys.removed();
    }
    else if(data == 3)
    {
        filesys.writef();
    }
    else if(data == 4)
    {
        filesys.readf();
    }
    else if(data == 5)
    {
        filesys.unlinkf();
    }
    else if(data == 6)
    {
        filesys.renamef();
    }
    else if(data == 7)
    {
        filesys.appendf();
    }
    else if(data == 8)
    {
        filesys.writef();
    }
    else if(data == 9)
    {
        break;
    }
    else
    {
        console.log("enter valid data");
    }
}
