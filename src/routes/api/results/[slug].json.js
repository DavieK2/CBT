import db from "$lib/database.js"

export async function get({ params })
{
    const data = JSON.parse(params.slug);

    let results = [];

    let query = { student_grade: data.student_grade, test_id: data.test_id }; 

    if(data.student_name){
        
        results = await db('results')
                        .join("tests", "results.test_id", "tests.id")
                        .select("tests.title", "results.*")
                        .where("student_name", 'like', `%${data.student_name}%` )
                        .orderBy('student_name', 'asc');  
    }
    else{

        results = await db('results')
                        .join("tests", "results.test_id", "tests.id")
                        .select("tests.title", "results.*")
                        .where(query)
                        .orderBy('student_name', 'asc');  
    }
    

    return{
        body:{
            data: results
        }
    }

}