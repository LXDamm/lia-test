import axios from 'axios';
import RepoItem from '../types/repoitem';

const api = axios.create({
    baseURL: 'https://api.github.com'
})

const getRepos = () => api.get('search/repositories?q=react').then((result) => result.data.items).then((repos: Array<any>) => repos.map(({id, owner, forks, name, open_issues, url, html_url, watchers, updated_at}: any) => ({
        id,
        owner,
        forks,
        name, 
        open_issues,
        html_url,
        url,
        watchers,
        updated_at
    } as RepoItem
)));

export { getRepos };