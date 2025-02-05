Create a element by using JSX:

<body>
    <div id="app"> </div>
    <script type="text/babel">
        const element=<h1 className="a">Hello, JSX!</h1>
        const e=document.getElementById("app")
        const root=ReactDOM.createRoot(e)
        root.render(element)
    </script>
    
</body>

Creating a element without using jsx:

  <div id="app"> </div>
    <script>
        const e=React.createElement(
            'hi' ,{id:'a'} , "i am sai"
        )
        const element=document.getElementById('app')
        const root=ReactDOM.createRoot(element)
        root.render(e)
    </script>


Using expressions :


 <div id="a"> </div>
    <script type="text/babel">
        const n=10;
        const m=<h1>React is {n*2} times better then JSX</h1>
        const root = ReactDOM.createRoot(document.getElementById('app'))
     root.render(m);
    </script>


Conditional rendering in JSX:


    <div id="app"> </div>
    <script type="text/babel">
        const App=()=>{
            const isLoggedIn=false;
            return(
                <div>
                    {isLoggedIn ?(<h1>welcome back , user!</h1>:<h1>please login</h1>)}
                    {isLoggedIn &&<h2> you have new notification</h2>}
                    </div>
            );
        };
        const root=ReactDOM.createRoot(document.getElementById('app'))
        root.render(App)
