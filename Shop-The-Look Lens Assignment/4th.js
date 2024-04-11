function josephusSurvivor(totalPeople) {
    let remainingPeople = totalPeople;
    let index = 0;
    const people = Array.from({ length: totalPeople }, (_, i) => i + 1);
    while (remainingPeople > 1) {
        index = (index + 1) % people.length;

        people.splice(index, 1);

        if (index === people.length) {
            index = 0;
        }

        remainingPeople--;
    }
    return people[0];
}


const totalPeople = 100;


const survivor = josephusSurvivor(totalPeople);
console.log("The man left with the gun is:", survivor);
