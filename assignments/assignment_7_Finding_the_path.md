#### ● What are the varios way to add image in to our APP?
 => Directly pass the image url in src attributes in image tag 
    <img src="https://reactjs.org/logo-og.png" alt="React Image" />

    Put image in assets or in config and then pass the image in tag
    <img src={reactLogo} alt="react logo" />

#### ● What would happen if we do console.log(useState())?
 => Return array with two element first a undefined and another is function.

#### ● How will useEffect behave if we don't add dependency array?
 => it will run on every render of the component. This means that the effect will be re-run 
    each time the component is rendered, including the first time it is rendered. 

#### ● What is SPA?
 => A Single-Page Application (SPA) is a web application or website that loads a single HTML 
    page and dynamically updates that page as the user interacts with the app. Unlike traditional web applications, which require the browser to refresh the entire page and request new resources from the server each time the user clicks a link or submits a form.

#### ● What is difference between Client Side Routing and Server Side Routing ?
 => Client-side routing refers to the practice of using JavaScript and the browser's history 
    API to handle the routing of URLs in the client-side of an application.
    Server-side routing, on the other hand, refers to the practice of handling the routing of URLs on the server-side. When a user clicks on a link or enters a URL in the browser, the request is sent to the server, which then decides which content to serve based on the URL. The server then sends the appropriate HTML and other assets to the browser
    Client-side routing is faster than server-side routing


