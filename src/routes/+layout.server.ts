import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
    if (!event.locals.user && !event.url.pathname.startsWith('/auth')) {
        return redirect(302, '/auth/login');
    }
    return {
        user: event.locals.user
    }
} 