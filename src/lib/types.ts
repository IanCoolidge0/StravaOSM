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

export type ActivityStats = {
    biggest_ride_distance: number,
    biggest_climb_elevation_gain: number,
    recent_ride_totals: ActivityTotal,
    recent_run_totals: ActivityTotal,
    recent_swim_totals: ActivityTotal,
    ytd_ride_totals: ActivityTotal,
    ytd_run_totals: ActivityTotal,
    ytd_swim_totals: ActivityTotal,
    all_ride_totals: ActivityTotal,
    all_run_totals: ActivityTotal,
    all_swim_totals: ActivityTotal
};

export type ActivityTotal = {
    count: number,
    distance: number,
    moving_time: number,
    elapsed_time: number,
    elevation_gain: number,
    achievement_count: number
};