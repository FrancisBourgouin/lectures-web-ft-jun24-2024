# WTH

Why is useEffect so weird!

```jsx
  useEffect(() => {
    ...
  },[])

  ===

  componentDidMount()
```

useEffect => Handle side effects

```jsx
  componentDidMount(){
    document.addEventListener("click", ...)
  }


  componentWillUnmount() {
    document.removeEventListener("click", ...)
  }
```

```jsx
  useEffect(() => {
    document.addEventListener("click", ...)

    return () => document.removeEventListener("click", ...)

  })
```
