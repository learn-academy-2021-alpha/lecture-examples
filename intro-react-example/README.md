# Intro to React

- React is a collection of components
- A `cli` command can create a React file structure with boilerplate code:
- $ yarn create react-app < project-name-here >
- $ cd < project-name-here >
- Looking at the file structure
  - `public` folder has the `index.html` file
  - `src` folder has `App.js` which is the main (parent) component
  - `src` folder has `App.css` has stylings for all the components
- `App.js` has boilerplate code that can be removed and replaced with our own class component
- All components will live in their own file
- Each component needs an import from `react`
- Each component needs to export the class

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <h1>Yo!</h1>
      </>
    )
  }
}

export default App
```

- Start up the server in terminal: $ yarn start
- While the server is running, any changes made (and saved) in the code will be reflected in the browser
- Stop the server from running: control + c
