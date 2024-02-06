function organizePeople(peopleArray) {
  let organized = {
    females: [],
    males: [],
  };

  for (let i = 0; i < peopleArray.length; i++) {
    let person = peopleArray[i];
    let personInfo = {};

    let components = ["", "", "", ""];
    let currentComponent = 0;
    for (let j = 0; j < person.length; j++) {
      if (person[j] === "," || person[j] === " ") {
        currentComponent++;
      } else {
        components[currentComponent] += person[j];
      }
    }

    personInfo["second-name"] = components[0];
    personInfo["age"] = parseInt(components[1]);

    personInfo["gender"] = components[2].trim();

    if (personInfo["gender"] === "female") {
      organized.females.push({ [components[3]]: personInfo });
    } else if (personInfo["gender"] === "male") {
      organized.males.push({ [components[3]]: personInfo });
    }
  }

  return organized;
}

const peopleArray = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, male",
  "Patrick wyne, 40, male",
];

const organizedPeople = organizePeople(peopleArray);
console.log(organizedPeople);
