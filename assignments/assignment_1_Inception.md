## Assignment
#### ● What is Emmet?
=> Emmet is free adon for text editor.It allow developer to type shortcut and it will expended for
 you full peice of code.

 #### ● Difference between a Library and Framework?
=> Both Frameworka and Library code is written by someone else that is used to help solve common problem
when you use a library, you are incharge of flow of your application. You are choosing when and where to call the library... when you use a Framework, the Framework is incharge of flow , it provide some place for you to plugin some code, but it calls the code you plugged in as needed.

#### ● What is CDN? Why do we use it?
=> A content delivery network or content distributed network refers to a geographical distributed group of servers which work together to provide fast delivery of internet content.

#### ● What is crossorigin in script tag?
=> crossorigin is an HTML attribute that is used to share the resourse from one domain to another basically it is used to handle the CORS request that check whether it is safe to allow the domain to share the resource.
Values: This attribute contains two values which are given below –
anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.
use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.

#### ● What is diference between React and ReactDOM
=> In order to work with react in the browser, we need to include two library React and ReactDOM. React library is responsible for creating views while ReactDOM library is responsible to actully render UI in the browser.
 const listElement = React.createElement('li',{className: list},'ReactJS')
 Once you created react element. Then you want to see in browser. But Browser doesn't understand the react element. ReactDOM is the middleman that render the react element in the browser.ReactDOM comes with some useful mehthod but the method in which we are interested is render, it takes two parameter describe as What(element you want to render) and where(the location you want to render);
 ReactDOM.render(listElement, document.querySlector('#root'))
 React is just JavaScript. So whatever you can do with JavaScript, you can also do with React.

#### ● What is difference between react.development.js and react.production.js files via CDN?
 => The very basis difference is that production build has ugly, minified(compressed) version of your JavaScript code, so this makes rendering of file on end user's browser very quick and performance inhancing.

 #### ● What is async and defer? -
 => async and defer will download the file during HTML parsing. Both will not interrupt the parser
 The script with async attribute will be executed once it is downloaded. While the script with defer attribute will be executed after completing the DOM parsing.
 The script loaded with async doesn't guarantee any order. While the scripts loaded with defer attributes maintains the order in which they are appear on the DOM.
without using async and defer will interrupt the parser will download and execute after that it'll resume the parsing.

 #### ● Why is React known as React?
=> As the name suggests, React reacts to changes in data or user interface without need of manual update when ever changes made.

