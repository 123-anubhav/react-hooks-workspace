# react-hooks-useRef-useReducer-useContext
react hooks-useRef, useReducer, useContext

---

# React useRef Hook Example

This project demonstrates the use of the **`useRef` Hook** in React through a basic and a real-time example. The `useRef` hook is used to directly access DOM elements and to manage mutable data without triggering re-renders.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)
  - [Basic Example](#basic-example)
  - [Real-Time Use Case](#real-time-use-case)
- [Setup and Run](#setup-and-run)
- [Screenshots](#screenshots)

---

## Features
1. **Basic Example**: Accessing DOM element attributes directly using `useRef`.
2. **Real-Time Use Case**: Dynamically enabling and disabling a button based on user interaction (checkbox state).

---

## Project Structure
```
src/
├── assets/
│   └── nature_img.png         # Example image used in the app
├── components/
│   └── UseRefHook.js          # Main component demonstrating useRef examples
├── App.css                    # Styling for the app
├── App.js                     # Main application file
└── style.css                  # Additional styles
```

---

## Code Overview

### **Basic Example**
This example uses `useRef` to reference an image element and log its attributes (e.g., `src`, `alt`, `height`, `width`) to the console when a button is clicked.

#### Key Features:
- `refEl` is created using `useRef`.
- The `click` function accesses the `current` property of `refEl` to retrieve the image's attributes.

```jsx
<img 
  src={img1} 
  alt="load img..." 
  height="150" 
  width="150" 
  ref={refEl} 
  className="img-fluid" 
/>
```

### **Real-Time Use Case**
This example demonstrates a common real-time application of `useRef`. The checkbox controls whether the submit button is enabled or disabled.

#### Key Features:
- The `enableBtn` function toggles the `disabled` attribute of the button based on the checkbox state.
- `useRef` is used to manage the button reference.

```jsx
<input 
  type="checkbox" 
  name="terms" 
  onChange={enableBtn} 
/> Accept terms and conditions
<button 
  type="submit" 
  ref={refEl} 
  disabled 
  className="btn btn-sm btn-warning"
> submit </button>
```

---

## Setup and Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-folder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

---

## Screenshots

### Basic Example
Displays an image and logs its attributes when the "click me" button is clicked.

### Real-Time Use Case
Dynamically enables the submit button based on the checkbox state.

---

# useReducer Hook Example

This project demonstrates the usage of React's `useReducer` hook to manage state transitions in a functional component. The `UseReducerHook` component showcases a simple implementation where a message changes dynamically based on button clicks.

---

## Features

- **State Management**: Uses the `useReducer` hook for better state management in a React functional component.
- **Dynamic Message Rendering**: Updates the displayed message based on user interaction.
- **Interactive UI**: Buttons trigger actions that update the state.

---

## Code Overview

The component consists of the following key parts:

### 1. **Initial State**

```javascript
let initialstate = {
    message: 'hello'
};
```

The initial state is defined as an object containing a `message` property.

### 2. **Reducer Function**

```javascript
let reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'gm': return { message: 'Good Morning' };
        case 'ga': return { message: 'Good Afternoon' };
        case 'ge': return { message: 'Good Evening' };
        default: return state;
    }
};
```

The `reducer` function takes the current state and an action as arguments. It determines the new state based on the `action.type`.

### 3. **useReducer Hook**

```javascript
let [state, dispatch] = useReducer(reducer, initialstate);
```

The `useReducer` hook is used to manage state transitions. It returns the current state and a `dispatch` function to trigger state updates.

### 4. **UI Rendering**

```javascript
<div className="card-body bg-dark text-center h5">
    <div className="text-white">{state.message}</div>
    <button onClick={() => dispatch({ type: 'gm' })} className="btn btn-danger btn-sm">Good Morning</button>
    <button onClick={() => dispatch({ type: 'ga' })} className="btn btn-success btn-sm">Good Afternoon</button>
    <button onClick={() => dispatch({ type: 'ge' })} className="btn btn-warning btn-sm">Good Evening</button>
</div>
```

The UI displays the current `message` and three buttons. Each button dispatches an action to update the state.

---

## How to Use

1. **Install Dependencies**

   Make sure you have React installed in your project:

   ```bash
   npm install react react-dom
   ```

2. **Configure `UseReducerHook`**

   Add the `UseReducerHook` component to your project. Import it in your main `App.jsx` or equivalent file:

   ```javascript
   import React from "react";
   import UseReducerHook from "./UseReducerHook";

   function App() {
       return (
           <div>
               <UseReducerHook />
           </div>
       );
   }

   export default App;
   ```

3. **Run the Application**

   Start your React application:

   ```bash
   npm start
   ```

---

## How It Works

- Initially, the message is set to `'hello'`.
- Clicking the **Good Morning**, **Good Afternoon**, or **Good Evening** buttons dispatches an action (`'gm'`, `'ga'`, or `'ge'`) to the `reducer` function.
- The `reducer` updates the `message` property in the state, which is then rendered dynamically in the UI.

---

## Dependencies

- **React**: For building the component.
- **Bootstrap**: For styling buttons and layout (optional but included in the example).

---

## File Structure

```
src/
├── UseReducerHook.jsx  # The main component using the useReducer hook
├── App.jsx             # Root component rendering UseReducerHook
├── index.js            # Entry point for React application
```

---


---

---

# Context API with `useContext()` in React

This project demonstrates the usage of React's **Context API** with the `useContext()` hook to pass data across components without prop-drilling. The application consists of multiple nested components, with data being passed from a parent component (`MessageTwo`) to a deeply nested child component (`MessageFour`) using `useContext()`.

---

## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [File Structure](#file-structure)
4. [Component Flow](#component-flow)
5. [How to Run](#how-to-run)
6. [Key Features](#key-features)
7. [Code Highlights](#code-highlights)

---

## Overview
The project demonstrates:
- How to create a `Context` in React.
- Providing values to the context.
- Accessing context values in deeply nested components using the `useContext` hook.

---

## Technologies Used
- **React** (v18+)
- **Bootstrap** (for styling)

---

## File Structure
```
src/
├── components/
│   ├── MessageOne.js    // Parent component
│   ├── MessageTwo.js    // Passes context value
│   ├── MessageThree.js  // Intermediary component
│   ├── MessageFour.js   // Accesses context value
├── contextdefine.js      // Defines the Context
├── App.js                // Root component
└── index.js              // React entry point
```

---

## Component Flow

### 1. **MessageOne**
- Entry point of the nested component structure.
- Renders `MessageTwo` and passes a `wish` prop to it.

### 2. **MessageTwo**
- Creates a **context provider** (`ContextVal.Provider`).
- Wraps `MessageThree` within the provider and shares the `wish` value.

### 3. **MessageThree**
- Acts as an intermediary, rendering `MessageFour`.

### 4. **MessageFour**
- Reads the `wish` value using the `useContext` hook and displays it.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd context-api-example
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Key Features
- **Context API**: Implements React's context to share data between components.
- **Modularity**: Components are well-structured and easy to extend.
- **Dynamic Rendering**: Values passed from the context are dynamically displayed in the UI.

---

## Code Highlights

### Defining Context
The `contextdefine.js` file defines a `Context` to be used throughout the application:
```javascript
import { createContext } from 'react';

let ContextVal = createContext();

export { ContextVal };
```

### Providing Context
`MessageTwo` provides the `wish` value to its descendants:
```javascript
<ContextVal.Provider value={props}>
    <MessageThree />
</ContextVal.Provider>
```

### Accessing Context
`MessageFour` consumes the context value using `useContext`:
```javascript
const contextReader = useContext(ContextVal);

return (
    <span>{contextReader.wish}</span>
);
```

---

## Example Output

### Initial View
The application will render the following structure with data passed through the context:

```
context-api-using useContext() Example

MessageOne
    MessageTwo
        hello i m from parent
            MessageThree
                MessageFour
                Comes Value from Parent Component == hello i m from parent
```

---
