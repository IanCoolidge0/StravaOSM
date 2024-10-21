import { getStravaAthleteStats } from "$lib/api";
import type { PageServerLoad } from "./auth/signin/$types";

export const load: PageServerLoad = async (event) => {
    const stats = await getStravaAthleteStats(event.locals.access_token, event.locals.user_id);

    return {
        username: event.locals.username,
        profile: event.locals.profile,
        access_token: event.locals.access_token,
        stats
    };
}