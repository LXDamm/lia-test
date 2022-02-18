interface RepoItem {
    id: number;
    name: string;
    owner: string;
    forks: number;
    open_issues: number;
    url: string;
    watchers: number;
    updated_at: string;
}

export default RepoItem;