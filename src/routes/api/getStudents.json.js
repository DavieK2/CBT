import db from "$lib/database.js"

export async function get()
{
    const students = await db('students').select('*').orderBy('grade', 'asc');
    const classes = await db('classes').select('*').orderBy('class_name', 'asc');

    return {
        body: {
            students,
            classes
        }
    }
}