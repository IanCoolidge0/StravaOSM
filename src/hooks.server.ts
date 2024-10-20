import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const sessionCookie = event.cookies.get('sessionCookie');
    if (sessionCookie) {
        event.locals.user = sessionCookie;
    }

    return await resolve(event);
}