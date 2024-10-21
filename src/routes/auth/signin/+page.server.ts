import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { getStravaAuthorizeURI, getStravaRedirectURI } from "$lib/api";

export const load: PageServerLoad = (event) => {
    const redirectUri = getStravaRedirectURI();
    const scopes = [`read_all`];
    const url = getStravaAuthorizeURI(redirectUri, scopes, true);
    redirect(300, url);
}