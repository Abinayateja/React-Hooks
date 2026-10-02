# ⚛️ React JS & React Hooks

This repository contains simple examples and practical implementations of commonly used **React Hooks**.

The purpose of this project is to understand React Hooks through small, easy-to-understand examples rather than only learning their syntax.

---

# ⚛️ React JS

**React JS** is an open-source JavaScript library used to build user interfaces.

React JS was developed by Facebook, now **Meta**.

## Features

- Performant websites
- Less lines of code
- Improves code readability
- Less time consuming development
- Open Source
- Reusable Code

## Advantages

- Easy to Learn
- Large Community
- Developer Toolset
- Component-Based Development
- Reusable Components

## Popularity

```text
React > Vue > Angular
```

---

# 🪝 React Hooks

**Hooks are special functions that allow us to use state and other React features in functional components.**

Before React **16.8**, functional components did not have access to state management and lifecycle methods in the same way class components did.

Class components were commonly used when we needed features such as:

- State
- Lifecycle methods

From **React 16.8**, Hooks were introduced and functional components could use state and other React features.

Hooks helped make functional components more powerful and allowed developers to write React applications with simpler component structures.

## Why Hooks?

Hooks can help with:

- Simplifying code
- Improving readability
- Reusing logic
- Managing state
- Handling side effects
- Working with DOM elements
- Performance optimization

---

# ⭐ Commonly Used React Hooks

```text
useState
useEffect
useRef
useMemo
useCallback
useContext
useReducer
useLayoutEffect
Custom Hooks
```

This project demonstrates:

```text
useState
useEffect
useRef
useMemo
useCallback
React.memo
```

---

# 1️⃣ useState

`useState` is used to create and manage state inside a functional component.

Basic syntax:

```javascript
const [state, setState] = useState(initialValue);
```

Example:

```javascript
const [color, setColor] = useState("Green");
```

Here:

```text
color       → current state value
setColor    → function used to update the state
"Green"     → initial value
```

When the state is updated, React re-renders the component and the UI can display the updated value.

### Example

```javascript
const [color, setColor] = useState("Green");

const changeColor = () => {
    setColor("Black");
};
```

---

# 2️⃣ Updating State Multiple Times

Consider:

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

It may look like the value should increase by `4`.

However, these updates use the same state value from the current render.

For multiple updates that depend on the previous state, use the **functional updater**:

```javascript
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Now each update receives the latest previous value.

```text
prev = 0
   ↓
   1
   ↓
   2
   ↓
   3
   ↓
   4
```

### Remember

```text
setCount(count + 1)
        ↓
Uses current render's value

setCount(prev => prev + 1)
        ↓
Uses previous/latest state value
```

---

# 3️⃣ useState with Objects

State can also contain objects.

Example:

```javascript
const [car, setCar] = useState({
    name: "Range Rover",
    color: "Silver"
});
```

When updating one property, preserve the other properties using the spread operator:

```javascript
setCar(prev => ({
    ...prev,
    color: "Royal Black"
}));
```

The spread operator keeps the existing properties and changes only the required property.

---

# 4️⃣ useEffect

`useEffect` is used to perform **side effects** in a React component.

Examples of things commonly handled using Effects include:

- Timers
- API calls
- Event listeners
- Subscriptions
- Synchronization with external systems

Basic syntax:

```javascript
useEffect(() => {
    // effect code
}, []);
```

## Dependency Array

There are three common patterns:

### No dependency array

```javascript
useEffect(() => {
    // code
});
```

The Effect runs after every render.

### Empty dependency array

```javascript
useEffect(() => {
    // code
}, []);
```

The Effect runs after the initial render and does not re-run because of later state/prop changes.

### Dependency array with a value

```javascript
useEffect(() => {
    // code
}, [count]);
```

The Effect runs initially and runs again when `count` changes.

---

# ⏱️ useEffect with setInterval

Example:

```javascript
useEffect(() => {
    if (!running) {
        return;
    }

    const timer = setInterval(() => {
        console.log("Hello");
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, [running]);
```

### What happens?

When:

```text
running = false
```

No interval is created.

When the user clicks **Start**:

```text
running → true
      ↓
Component re-renders
      ↓
useEffect runs
      ↓
setInterval()
      ↓
Timer starts
```

When the user clicks **Stop**:

```text
running → false
      ↓
Component re-renders
      ↓
Previous Effect cleanup runs
      ↓
clearInterval(timer)
      ↓
Timer stops
```

The returned function:

```javascript
return () => {
    clearInterval(timer);
};
```

is the **cleanup function**.

It is not executed immediately. React calls it when the Effect needs to be cleaned up.

### Important concept

```text
useEffect
    ↓
Starts external process

Cleanup function
    ↓
Stops external process
```

---

# 5️⃣ useRef

`useRef` allows us to store a mutable value that persists between renders **without causing a re-render when the value changes**.

Basic syntax:

```javascript
const reference = useRef(initialValue);
```

The value is accessed using:

```javascript
reference.current
```

## Example

```javascript
const count = useRef(0);

count.current += 1;
```

Changing:

```javascript
count.current
```

does not cause the component to re-render.

### useRef is commonly used for:

- Storing values between renders
- Accessing DOM elements
- Storing timer IDs
- Keeping mutable values that don't need to update the UI

---

# 6️⃣ useRef for Counting Renders

Example:

```javascript
const [value, setValue] = useState(0);
const count = useRef(0);

useEffect(() => {
    count.current += 1;
});
```

Every time the component renders, the Effect increments:

```javascript
count.current
```

The important difference is:

```text
useState
   ↓
Change state
   ↓
Re-render

useRef
   ↓
Change ref.current
   ↓
No re-render
```

---

# 7️⃣ useRef for DOM Elements

`useRef` can also be used to directly access a DOM element.

Example:

```javascript
const inputElement = useRef();

function changeElement() {
    console.log(inputElement.current);

    inputElement.current.style.backgroundColor = "Pink";
}
```

Attach the ref to the element:

```javascript
<input ref={inputElement} />
```

Now:

```javascript
inputElement.current
```

refers to the actual input DOM element.

This allows us to access or manipulate the DOM element directly when needed.

---

# 8️⃣ useMemo

`useMemo` is used to **memoize a calculated value**.

In simple terms:

> It remembers the result of a calculation and recalculates it when its dependencies change.

Example:

```javascript
const result = useMemo(
    () => cubeOfNum(number),
    [number]
);
```

Here:

```text
number changes
      ↓
cubeOfNum() runs again

number doesn't change
      ↓
Previous calculated result can be reused
```

Example calculation:

```javascript
function cubeOfNum(number) {
    console.log("Calculation Done!");

    return Math.pow(number, 3);
}
```

If another state such as `counter` changes, the cube calculation does not need to run again because `number` hasn't changed.

### Important

```text
useMemo
   ↓
Memoized VALUE
```

It returns a **value**.

---

# 9️⃣ useCallback

`useCallback` is used to **memoize a function**.

Example:

```javascript
const newFun = useCallback(() => {

}, []);
```

It returns a memoized function.

### Why is this useful?

Normally, when a component re-renders, functions created inside the component can receive a new function reference.

For example:

```javascript
const newFun = () => {

};
```

When the parent re-renders:

```text
Parent renders
     ↓
new function reference
     ↓
newFun
```

`useCallback` can preserve the function reference until its dependencies change.

```javascript
const newFun = useCallback(() => {

}, []);
```

Because the dependency array is empty, the same memoized function reference can be reused across renders.

---

# 🔟 React.memo

`React.memo` is used to prevent unnecessary re-renders of a component when its props have not changed.

Example:

```javascript
const Header = (props) => {
    console.log("Header Rendered!");

    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};

export default React.memo(Header);
```

Suppose the parent component has its own state:

```javascript
const [counter, setCounter] = useState(0);
```

When `counter` changes:

```text
Parent re-renders
      ↓
React checks Header props
      ↓
Props unchanged
      ↓
Header can skip re-rendering
```

---

# 🔥 useMemo vs useCallback vs React.memo

This is an important interview concept.

| Feature | Purpose | Returns |
|---|---|---|
| `useMemo` | Memoizes a calculated value | Value |
| `useCallback` | Memoizes a function | Function |
| `React.memo` | Prevents unnecessary component re-renders when props are unchanged | Memoized Component |

### Easy way to remember

```text
useMemo
   ↓
"I want to remember a VALUE."

useCallback
   ↓
"I want to remember a FUNCTION."

React.memo
   ↓
"I want to prevent unnecessary COMPONENT re-renders."
```

---

# 🔗 useCallback + React.memo

These two are often used together.

Parent:

```javascript
const newFun = useCallback(() => {

}, []);

<Header newFun={newFun} />
```

Child:

```javascript
export default React.memo(Header);
```

The idea is:

```text
Parent re-renders
       ↓
useCallback preserves function reference
       ↓
Header receives same function reference
       ↓
React.memo checks props
       ↓
Props unchanged
       ↓
Header can skip re-render
```

Without `useCallback`, a function created during every parent render can have a new reference, which can cause a memoized child receiving that function as a prop to render again.

---

# 📊 useState vs useRef

One of the most important differences:

| | useState | useRef |
|---|---|---|
| Stores value | ✅ | ✅ |
| Persists between renders | ✅ | ✅ |
| Changing value causes re-render | ✅ | ❌ |
| Access value | State variable | `.current` |
| Used for UI state | ✅ | Usually not |
| Access DOM elements | ❌ | ✅ |

### Easy rule

```text
Value affects UI?
       ↓
   useState

Value doesn't need UI re-render?
       ↓
    useRef
```

---

# 🧠 Hooks Covered in This Project

```text
                    React Hooks
                        │
        ┌───────────────┼────────────────┐
        │               │                │
     State           Effects          References
        │               │                │
    useState        useEffect          useRef
        │
        │
   Performance
        │
   ┌────┴─────┐
   │          │
useMemo   useCallback
              │
              ↓
         React.memo
```

---

# 📁 Project Structure

```text
react-hooks/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── Header.jsx
│   │
│   ├── Hooks/
│   │   │
│   │   ├── UseCallbackHook/
│   │   │   └── useCallback.jsx
│   │   │
│   │   ├── UseEffectHook/
│   │   │   └── useEffect.jsx
│   │   │
│   │   ├── UseMemoHook/
│   │   │   └── useMemo.jsx
│   │   │
│   │   ├── UseRefHook/
│   │   │   ├── useRef.jsx
│   │   │   └── useRefDOM.jsx
│   │   │
│   │   └── UseStateHook/
│   │       ├── useState.jsx
│   │       ├── useStateMultiple.jsx
│   │       └── useStateObject.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# 🎯 What Students Should Understand

After going through this project, you should be able to explain:

### useState

> How to create and update state in functional components.

### useEffect

> How to perform side effects and clean them up when necessary.

### useRef

> How to persist mutable values without causing a re-render and how to access DOM elements.

### useMemo

> How to memoize a calculated value.

### useCallback

> How to memoize a function reference.

### React.memo

> How to skip unnecessary component re-renders when props have not changed.

---

# 🚀 Quick Interview Revision

```text
useState
→ Manages component state.

useEffect
→ Handles side effects.

useRef
→ Stores mutable values without causing re-renders
  and can access DOM elements.

useMemo
→ Memoizes a calculated value.

useCallback
→ Memoizes a function.

React.memo
→ Prevents unnecessary component re-renders
  when props are unchanged.
```

---

# 💡 Final Concept

The easiest way to understand React Hooks is to think about **what problem each Hook solves**:

```text
Need state?
    ↓
useState

Need side effect?
    ↓
useEffect

Need persistent value without re-render?
    ↓
useRef

Need to cache an expensive calculation?
    ↓
useMemo

Need to preserve a function reference?
    ↓
useCallback

Need to skip unnecessary component re-render?
    ↓
React.memo
```

The goal of this project is to understand these concepts through **small practical examples** and build a strong foundation for developing larger React applications.