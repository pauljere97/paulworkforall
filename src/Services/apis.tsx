const base_url = 'https://api.github.com'

export const fetch_users = (data:any) => {
    return {
        method: 'get',
        url: `${base_url}/search/users?per_page=100&${data}`,
        headers: { 
            'Content-Type': 'application/json'
        },
    };
}
export const fetch_user = (data:any) => {
    return {
        method: 'get',
        url: `${base_url}/users/${data}`,
        headers: { 
            'Content-Type': 'application/json'
        },
    };
}