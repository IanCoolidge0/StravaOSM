import { NODE_ENV, STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "$env/static/private";
import type { StravaSession } from "./types";

export const getStravaRedirectURI = () => {
    const prefix = (NODE_ENV === 'development') ? 'http://localhost:5173' : 'http://localhost:4173';
    return `${prefix}/auth/redirect`;
}

export const getStravaAuthorizeURI = (redirectUri: string, scopes: string[], force?: boolean) => {
    let url = `https://strava.com/oauth/authorize`;
    url = `${url}?client_id=${STRAVA_CLIENT_ID}`;
    url = `${url}&redirect_uri=${redirectUri}`;
    url = `${url}&response_type=code`;
    url = `${url}&approval_prompt=${force ? 'force' : 'auto'}`;
    url = `${url}&scope=${scopes.join(`,`)}`;
    return url;
}

export const getStravaSession = async (code: string, grantType: 'authorization_code' | 'refresh_token') => {
    let url = `https://strava.com/api/v3/oauth/token`;
    url = `${url}?client_id=${STRAVA_CLIENT_ID}`;
    url = `${url}&client_secret=${STRAVA_CLIENT_SECRET}`;
    url = `${url}&grant_type=${grantType}`;
    url = `${url}&${grantType === 'authorization_code' ? 'code' : 'refresh_token'}=${code}`;
    const response = await fetch(url, {
        method: 'POST'
    });
    return await response.json() as StravaSession;
}