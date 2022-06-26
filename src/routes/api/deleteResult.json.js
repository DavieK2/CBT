import db from "$lib/database.js"

export async function post(request)
{
    const { id } = request.body;

    await db('results').where({ id }).del();

    return{
        body: { 

            message: "Deleted"
        } 
    }
}