# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: 1,
  name: "",
  type: "",
  wateringInterval: 1,
  lastWatered: "DATE",
};
```

## Plants

Array: Most often used when we want to list independent items
Array: Mechanically speaking, it's easier to loop over

Object: Most often to list properties of a singular thing
Object: Mechanically speaking, it's easy to target a singular item (Object.values(obj))
State

```jsx
const plants = [
  {
    id: 1,
    name: "",
    type: "",
    wateringInterval: 1,
    lastWatered: "DATE",
  },
  {
    id: 1,
    name: "",
    type: "",
    wateringInterval: 1,
    lastWatered: "DATE",
  },
]; // SAD :(

const plants = {
  1: {
    id: 1,
    name: "",
    type: "",
    wateringInterval: 1,
    lastWatered: "DATE",
  },
  2: {
    id: 2,
    name: "",
    type: "",
    wateringInterval: 1,
    lastWatered: "DATE",
  },
}; // OBJ OF OBJS
//
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2024-07-28",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2024-06-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2024-07-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2024-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4]; // We want to use the array for looping simplicity
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

```html
header
  h1 TITLE

main
    ul
        li (class: well-watered, not-well-watered)
            h1 plant name
            p type
            p last watered
        li (class: well-watered, not-well-watered)
            h1 plant name
            p type
            p last watered
        li (class: well-watered, not-well-watered)
            h1 plant name
            p type
            p last watered
```

### Components


```html
App
    Header
    PlantList
        PlantListItem
```

### Component Data
