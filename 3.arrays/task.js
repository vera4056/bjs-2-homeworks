function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
  
}

function getUsersNamesInAgeRange(users, gender) {
    
    let result = users.filter((user) => user.gender === gender)
                      .map((user) => user.age)
                      .reduce((acc, age) => acc + age, 0)
                / (users.filter((user) => user.gender === gender).length || 1);

     return result;

  
}