import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { getStravaAuthorizeURI, getStravaRedirectURI } from "$lib/api";

export const load: PageServerLoad = (event) => {
    const redirectUri = getStravaRedirectURI();
    const scopes = [`read_all`,`activity:read`];
    const url = getStravaAuthorizeURI(redirectUri, scopes, true);
    redirect(300, url);
}