import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "$env/static/private";
import { getStravaSession } from "$lib/api";

export const load: PageServerLoad = async (event) => {
    const code = event.url.searchParams.get('code') || '';
    const tokenResult = await getStravaSession(code, 'authorization_code');
    event.cookies.set('sessionCookie', JSON.stringify(tokenResult), { path: '/' });

    return redirect(302, '/');
}