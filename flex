<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent{
             display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh; 
            align-items:    center;
        }
            
        
        .child1{
            background-color: red;
            color: white;
            height: 100px;
            width: 100px;
            border: 1px solid black;
            align-self: center;

         
        }
        .child2{
            background-color: green;
            height: 100px;
            width: 100px;
            border: 1px solid black;
            color: white;
            align-self: center;
            
        }
        .child3{
            color: white;
            height: 100px;
            width: 100px;
            border: 1px solid black;
            background-color: blue;
            align-items: center;
        }
    </style>

</head>
<body>
    <div class="parent">
        <div class="child1">Child 1</div>
        <div class="child2">Child 2</div>
        <div class="child3">Child 3</div>

    </div>
    
</body>
</html>
