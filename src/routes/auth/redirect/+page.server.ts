import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (event) => {
    console.log('here');
    event.cookies.set('sessionCookie', 'Ian', { path: '/' });

    redirect(300, '/');
}