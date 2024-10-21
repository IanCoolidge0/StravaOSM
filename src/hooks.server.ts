import { getStravaSession } from "$lib/api";
import type { StravaSession } from "$lib/types";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const sessionCookie = event.cookies.get('sessionCookie');

    if (!sessionCookie) return await resolve(event);
    let sessionJSON = JSON.parse(sessionCookie) as StravaSession;
    if (!sessionJSON || !sessionJSON.athlete) return await resolve(event);

    // refresh token if expired
    if (sessionJSON.expires_at > Date.now()) {
        const refreshSession = await getStravaSession(sessionJSON.refresh_token, 'refresh_token');

        sessionJSON.access_token = refreshSession.access_token;
        sessionJSON.refresh_token = refreshSession.refresh_token;
        sessionJSON.expires_at = refreshSession.expires_at;
        sessionJSON.expires_in = refreshSession.expires_in;

        event.cookies.set('sessionCookie', JSON.stringify(sessionJSON), { path: '/' });
    }

    // populate locals from Strava session, if we're logged in
    event.locals.user_id = sessionJSON.athlete.id;
    event.locals.username = sessionJSON.athlete.username;
    event.locals.profile = sessionJSON.athlete.profile_medium;
    event.locals.access_token = sessionJSON.access_token;

    return await resolve(event);
}