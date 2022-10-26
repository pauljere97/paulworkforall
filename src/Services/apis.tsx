const base_url = 'https://api.github.com'

export const fetch_users = (data:any, cancelToken:any) => {
    return {
        method: 'get',
        url: `${base_url}/search/users?per_page=100&${data}`,
        cancelToken:cancelToken,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Token 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'
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