#### ● when and why we use lazy() in react?
 => In React we have useLazy hook that allow us to load component lazily, when they are actually needed. This helps us with performace by avoiding unnecessary component and code until they are needed.
 Sometimes we called it on demand loading.

#### ● What is suspense ?
 => Suspense is a component in React that allow you to manage the loading state of 
    lazily loaded component. Its allow you to provide fallback component to render like loading bar or process bar while the component is lazily loaded.
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>

