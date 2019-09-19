class Student {
    learn() {
        console.log('I\'m learning something new!')
    }

    question(teacher) {
        teacher.answer();
    }
}

class Teacher {
    teach(student) {
        student.learn();
    }

    answer() {
        console.log('I\'m answering a question');
    }
}

let s = new Student();
let t = new Teacher();

s.question(t);
t.teach(s);