# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

Why Object: Access thief by their key, easy to access one specific value
Why Array: Access thief by their index, easy to access all the thieves

```js
const thievesArr = [thief, thief];
const thievesObj = { "email@email": thief, 2: thief };
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

#### authenticateThief

Check if thief has proper email / password

```jsx
const authenticateThief = (thieves, email, password) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "NO THIEF HERE WITH THAT EMAIL", thief: null };
  }

  if (thief.password !== password) {
    return { error: "HEY BAD PASSWORD YOU DUM DUM", thief: null };
  }

  return { error: null, thief };
};
```

#### getThiefByEMail

Get thief data by email

```jsx
const getThiefByEmail = (thieves, email) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "NO THIEF HERE WITH THAT EMAIL", thief: null };
  }

  return { error: null, thief };
};
```

#### getThiefById

Get thief data by id

```jsx
const getThiefById = (thieves, id) => {
  const convertedThieves = Object.values(thieves);

  const thief = convertedThieves.find((thief) => thief.id === id);

  if (!thief) {
    return { error: "NO THIEF HERE WITH THAT ID", thief: null };
  }

  return { error: null, thief };
};
```

#### createThief

Create a thief object

```jsx
const createThief = (thieves, thiefInfo) => {
  const newThief = thiefInfo;
  newThief.id = Object.keys(thieves).length() + 1;

  if (thieves[newThief.email]) {
    return { error: "WE ALREADY HAVE YOU IN HERE!", thief: null };
  }

  if (!newThief.email || !newThief.name || !newThief.password || !newThief.imagePath) {
    return { error: "ONE OF THE FIELDS IS EMPTY!", thief: null };
  }

  thieves[newThief.email] = newThief

  return newThief
};
```

### HTML
