export type StravaSession = {
    token_type: string;
    expires_at: number;
    expires_in: number,
    refresh_token: string,
    access_token: string,
    athlete?: StravaAthlete
};

export type StravaAthlete = {
    id: number,
    username: string,
    resource_state: number,
    firstname: string,
    lastname: string,
    bio: string,
    city: string,
    state: string,
    country: string,
    sex: string,
    premium: boolean,
    summit: boolean,
    created_at: string,
    updated_at: string,
    badge_type_id: number,
    weight?: number,
    profile_medium: string,
    profile: string,
    friend?: string,
    follower?: string
}