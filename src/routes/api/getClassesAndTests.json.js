import db from "$lib/database.js"

export async function get()
{

    let tests = await db('tests').orderBy('title', 'asc');
    let classes = await db('classes').select('*');

    return{
        body:{
            tests: tests,
            classes: classes
        }
    }

}