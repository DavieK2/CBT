import db from "$lib/database.js";

export async function get(){

    const tests = await db('tests').select("*");

    return {
        body: {
            tests: tests
        }
    }
}