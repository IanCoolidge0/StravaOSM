import type { StravaSession } from "$lib/types";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const sessionCookie = event.cookies.get('sessionCookie');
    if (sessionCookie) {
        const sessionJSON = JSON.parse(sessionCookie) as StravaSession;
        event.locals.user = sessionJSON.athlete.username;
        event.locals.profile = sessionJSON.athlete.profile_medium;
    }

    return await resolve(event);
}