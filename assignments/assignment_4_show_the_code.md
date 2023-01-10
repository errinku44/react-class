#### ● Is JSX mandatory for React?
 => No

#### ● Is ES6 mandatory for React?
=> No

#### ● How can i write comment JSX?
=> If you want to comment on something in JSX you need to use JavaScript comments inside of curly braces like {/* Comment here /}. It is a regular / Block comment */, but it needs to be wrapped in curly braces.

#### ● What is <React.Fragment></React.Fragment> and <></>?
=> React Fragment allow you to wrap or group multiple element without adding a extra node to the DOM.

#### ● What is Virtual DOM?
=> As the name implies, Virtual DOM is a "Virtual" representation of actual DOM. By Virtual, we mean a much lighter replica of actual DOM.
● First, ReactJS creates a copy of the original DOM, calling it the Virtual DOM. Each of the nodes of the Virtual DOM represents an element.
● Next, if there is a state update of an element, a new Virtual DOM is created.
● The diffing algorithm identifies the difference of the change. In this case, a subtree from the changed node has been identified as the diff.
● Last, the ReactJS runs a batch update to update the Original DOM with these changes to keep it in sync.

#### ● What is Reconciliation in React?
=> React keeps the in-memory virtual represntation of the actual DOM and keep it sync with the batch update. This process is called reconciliation.
=> The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation.

#### ● What is React Fiber?
=> Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

#### ● Why we need keys in React ? When do we need keys in React?
=> Keys helps to diff algorithm in reconcilition process to detect the changes(difference). Keys is required when we are creating the list of element in react.

#### ● Can we use index as keys in React?
=> Yes, we can use index as keys but not recommened.

#### ● What is Props in React?
=> Props(properties) are arguments passed in to react component.
 




