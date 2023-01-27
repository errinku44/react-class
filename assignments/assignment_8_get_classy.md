#### ● What is the order of lifecycle method call in Class Based component ?
=> constructor() > render() > componentDidMount() > componentDidUpdate() > componentWillUnMount()

#### ● why do we use componentDidMount ?
 => componentDidMount() is a lifecycle method in React that is called after a component 
    has been rendered and mounted to the DOM. It is a good place to perform any setup that requires the component to be fully rendered, such as - API call, set up event listener etc.

### ● why do we use componentWillUnmount ?
 => componentWillUnmount() is a lifecycle method in React that is called just before a 
    component is unmounted and destroyed. It is a good place to perform any cleanup that should happen before the component is removed from the DOM. This is the last lifecycle method that is called before the component is removed from the DOM. do the things like - Removing event listeners, Clearing the setInterval, removing subscription etc.

 ### ● Why can't we have the callback function of useEffect async ?
 =>  The callback function of useEffect cannot be async because useEffect is a 
     synchronous function, and async functions return a promise which cannot be handled by useEffect.
     However, you could use async function inside of the callback function, you just need to make sure that the async function is wrapped in another function so that it doesn't return a promise.
     useEffect(() => {
     const fetchData = async () => {
     const result = await axios.get("/your/api");
     setData(result.data);
     };
     fetchData();
     }, []);
