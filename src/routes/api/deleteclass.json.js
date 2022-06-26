import db from "$lib/database.js"

export async function post(request)
{
    const data = request.body;

    await db('classes').where(data).del();

    const classes = await db('classes').select('*');

    return{
        body: classes 
    }
}