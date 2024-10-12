import { SvelteKitAuth } from '@auth/sveltekit';
import Strava from '@auth/core/providers/strava';
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [
        Strava({ clientId: STRAVA_CLIENT_ID, clientSecret: STRAVA_CLIENT_SECRET })
    ],
    callbacks: {
        async session({ session, token, user }) {
            return session;
        },
        async jwt({ token, user }) {
            return token;
        },
    }
});