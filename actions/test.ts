'use server'

import {getDb} from "@/lib/db";

export async function fn () {
    const users = await getDb().user.findMany()
    console.log(users)
    return users;
}
