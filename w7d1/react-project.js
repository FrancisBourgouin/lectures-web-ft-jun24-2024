import React from "react";

const createUser = (name, isAdmin, password, imageUrl, description) => {
  // ...
};

createUser("bob", "1234", true, "...", "description");

const createUserButBetter = (userParams) => {
  const { name, isAdmin, password, imageUrl, description } = userParams;

  // ...
};

const user = {
  name: "bob", // name is a key inside user, name is a prop inside user
  description: "description",
  isAdmin: true,
  password: "1234",
  imageUrl: "...",
};

// name, description, isAdmin are props of the user obj

createUserButBetter(user);
