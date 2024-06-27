// Complex conditions!

// strictParents => All grades should be higher than 90
// chillParents => All grades should be higher than 60,
// unless it's music, then 80
// randomParents => Sometimes they mad, sometimes they don't

const grade1 = {
  subject: "maths",
  score: 95,
};

const grade2 = {
  subject: "music",
  score: 65,
};

const listOfGrades = [grade1,grade2]

// Check if they are happy about a grade

const outputParentReaction = (grade, checkIfParentHappy) => {
  console.log("Let's see...");

  if (checkIfParentHappy(grade)) {
    console.log("GOOD JOB");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

const outputParentReactionV2 = (grades, checkIfParentHappy) => {
  console.log("Let's see...");

  for (const grade of grades) {
    if (checkIfParentHappy(grade)) {
      console.log("GOOD JOB");
    } else {
      console.log("I AM DISAPPOINT");
    }
  }
};

const evaluateGradeStrictParents = (grade) => grade.score > 90;

const evaluateGradeChillParents = (grade) => {
  if (grade.subject === "music" && grade.score > 80) {
    return true;
  }
  if (grade.subject !== "music" && grade.score > 60) {
    return true;
  }
  return false;
};

const evaluateGradeRandomParents = () => Math.random() > 0.5;

outputParentReaction(grade1, evaluateGradeRandomParents);


outputParentReactionV2(listOfGrades, evaluateGradeChillParents)