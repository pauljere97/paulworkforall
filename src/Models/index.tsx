export interface ViewUser {
    name: string,
    login: string,
    avatar_url: string,
    bio: string,
    followers: number,
    following: number,
    public_repos: number,
    id: string
}

export interface User {
    avatar_url: string,
    events_url: string,
    followers_url: string
    following_url: string,
    gists_url: string,
    gravatar_id: string,
    html_url: string,
    id:string,
    login:string,
    node_id:string,
    organizations_url:string,
    received_events_url:string,
    repos_url:string,
    score:number,
    site_admin:boolean,
    starred_url:string,
    subscriptions_url:string,
    type:string,
    url:string,
}