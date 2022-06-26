import db from "$lib/database.js"

export async function get({ params })
{
    const data = JSON.parse(params.slug);

    let students = await db('students').select('*');

    let query = { grade: data.grade }; 
    
    if(data.grade){
        
        students = await db('students').where(query);  
    }

    if(data.student_name){
        
        students = await db('students')
                        .where("first_name", 'like', `%${data.student_name}%` )
                        .orWhere("surname", 'like', `%${data.student_name}%` )
                        .orderBy('surname', 'asc');  
    }


    return{
        body:{

            students
        }
    }

}