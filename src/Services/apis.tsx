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