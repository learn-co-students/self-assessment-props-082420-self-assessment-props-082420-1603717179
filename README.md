# react-props-practice1

- You are provided a `Header` component that is rendered inside of `App`
- `Header` should have a key called "header", inside of its `props`, that evaluates to a string of your choice
- Header should append the value of its "header" prop to the DOM

- You are also provided a `NotesContainer` which is responsible for rendering multiple `Note` components
- You will have to create the `Note` component yourself
- The `NotesContainer` has a `apiResponse` method that returns an array of notes
- Each `Note` component should be able to access the `content` key inside of its props and print the value of the `content` key to the DOM as a `li` tag
