
export const getActivities = async () => {
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
        headers: {
            Authorization: `Bearer ${'x'}`
        }
    });
    return await response.json();
}