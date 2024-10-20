import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "$env/static/private";

export const load: PageServerLoad = async (event) => {
    const code = event.url.searchParams.get('code');
    const tokenResult = await fetch(`https://www.strava.com/api/v3/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${code}&grant_type=authorization_code`, {
        method: 'POST'
    });

    const tokenResultJson = await tokenResult.json();
    event.cookies.set('sessionCookie', JSON.stringify(tokenResultJson), { path: '/' });

    return redirect(302, '/');
}