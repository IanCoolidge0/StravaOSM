import type { PageServerLoad } from "./$types";
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = (event) => {
    const redirectUri = `http://localhost:5173/auth/redirect`;
    const scope = `read_all`;
    const url = `https://strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&approval_prompt=force&scope=${scope}`;
    redirect(300, url);
}