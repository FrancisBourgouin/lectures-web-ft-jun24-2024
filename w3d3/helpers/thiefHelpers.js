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

const getThiefByEmail = (thieves, email) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "NO THIEF HERE WITH THAT EMAIL", thief: null };
  }

  return { error: null, thief };
};

const getThiefById = (thieves, id) => {
  const convertedThieves = Object.values(thieves);

  const thief = convertedThieves.find((thief) => thief.id === id);

  if (!thief) {
    return { error: "NO THIEF HERE WITH THAT ID", thief: null };
  }

  return { error: null, thief };
};

const createThief = (thieves, thiefInfo) => {
  const newThief = thiefInfo;
  newThief.id = Object.keys(thieves).length + 1;

  if (thieves[newThief.email]) {
    return { error: "WE ALREADY HAVE YOU IN HERE!", thief: null };
  }

  // if (!newThief.email || !newThief.name || !newThief.password || !newThief.imagePath) {
  //   return { error: "ONE OF THE FIELDS IS EMPTY!", thief: null };
  // }

  const emptyFields = []

  for(const key in thiefInfo){
    if(!thiefInfo[key]){
      emptyFields.push(key)
    }
  }

  if(emptyFields.length > 0){
    return { error: `The field(s) ${emptyFields.join(', ')} are empty` , thief: null };
  }

  thieves[newThief.email] = newThief;

  return { error: null, thief: newThief };
};

module.exports = { authenticateThief, getThiefByEmail, getThiefById, createThief };
