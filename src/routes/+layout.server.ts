import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, cookies, url }) => {
    const sess = await locals.auth();
    return {
        session: sess
    };
}