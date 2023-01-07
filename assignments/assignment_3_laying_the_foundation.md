 #### ● What is JSX ?
=> JSX is Javscript Extension Syntax used in React to easily write HTML and Javascript together.
JSX convert HTML tags into React elements.
 #### JSX Sytax
const myElement = <h1>I Love JSX!</h1>;
 #### Converted to React Element
React.createElement("h1", null, "I Love JSX!");
(Behind the scene Babel do this for us)

#### ● Superpower of JSX ?
=> JSX maked it easier to develop react application.
   JSX allow to use expression in {}, this expression can be any javascript expression.
   JSX conver HTML tag to react element.
   It is faster  then regular javascript.
   As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
   It is type-safe, and most of the errors can be found at compilation time.

#### ● Role of `type` attribute in script tag ?
=> type attribute specify the type of the script.
    ```
    <script type="text/javascript"></script>
    ```
    - `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
    - `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
    - `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
    - `text/typescript`: As the name suggest the script is written in `TypeScript`.
 
#### ● `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
=> The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

