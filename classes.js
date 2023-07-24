class Student {
    constructor(name, age, score, courses) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.courses = courses;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
    
    getScore(){
        return this.score
    }

    increaseAge() {
        this.age++;
    }

    addCourse(course) {
        this.courses.push(course); // create an array and push course values into it
    }
}
// create a new student object and log output in console
const birdie = new Student('Birdie Artur', 20, 95, ['Math', 'Science']);

console.log("Initial output: ",birdie);
console.log(`\n========================================\n`);

// increases Birdie's age by 1
birdie.increaseAge();
console.log(birdie.getAge());

// adds the history course to the course array
birdie.addCourse('History');
console.log(birdie.courses);

console.log(`\n========================================\n`);
// pushes newly added course 'History' into stack
console.log("New output: ",birdie);
