interface RepoItem {
    id: number;
    name: string;
    full_name: string;
    owner: string;
    forks: number;
    open_issues: number;
    html_url: string;
    url: string;
    watchers: number;
    updated_at: string;
}

export default RepoItem;