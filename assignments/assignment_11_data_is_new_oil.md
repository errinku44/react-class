#### ● What is prop drilling ?
=> Props drilling refers to the process of passing data from parent component to child 
   component through multiple level of intermediate components using props.

#### ● What is lifting up the state in react?
=> Lifting up the state in React refers to a technique for managing state that is shared between 
   components in a way that avoids prop drilling.
   Lifting up the state involves moving the shared state from the lower-level component to a higher-level component and having the lower-level component receive the state as props instead. By doing so, the state is only managed in one place, making it easier to maintain and reducing the amount of props that need to be passed down the component hierarchy.

#### ● What is Context Provider and Context Consumer?
=> In React, the Context API is a way to share data between components without having 
   to pass props down the component hierarchy. The Context API provides a way to store data that can be accessed by multiple components without having to pass props through intermediate components.
   
   The Context Provider is a component that provides the data to the context. The provider component wraps the component tree that requires access to the context data. The provider component has a value prop that is used to set the data for the context.

    The Context Consumer is a component that accesses the data from the context. The consumer component is used inside a component that needs to access the context data. The consumer component is a function component that takes the context data as an argument and returns a React element.

#### ● If you don't pass a value to the provider does it take the default value ?
=> Yes