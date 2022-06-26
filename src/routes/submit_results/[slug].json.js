import db from "$lib/database.js"

export async function get({ params })
{
    const data = JSON.parse(params.slug);

    await db('results').insert(data);

    return {
        body: { }
    }
}