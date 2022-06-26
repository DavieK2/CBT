import db from "$lib/database.js"

export async function post(request){

    const studentData = request.body;
    const first_name = studentData.first_name;
    const surname = studentData.surname;
    const grade = studentData.grade;
    const testTitle = studentData.test;

    if( validate(first_name) || validate(surname) || validate(grade) || validate(testTitle) ){
        return {
            body : { message: "Unsuccessful, all fields are required" },
        }    
    }
    
    let student = await db('students').where('first_name', 'like' , `%${first_name}%`).andWhere('surname', 'like' , `%${surname}%`).andWhere('grade', 'like' , `%${grade}%`).first();
    
    let test = await db('tests').where('title', studentData.test).first();

    if(! student){

        let studentDetails = { first_name, surname, grade };

        const [id] = await db('students').insert(studentDetails);

        if(id){

            student = await db('students').where({ id }).first()
        }
    }


    if(student && test){

        return {
            body : { 
                data: {
                    student_name: student.first_name + " " + student.surname,
                    student_grade: student.grade,
                    test_id: test.id,
                    instructions: test.instructions,
                    test_path: test.test_path
                }
                
            },
        }
    }
    
    
    return {
        body : { message : "No Student" },
    }
}

const validate = (data) => {
    if(data.trim().length < 2) { return true }
}

