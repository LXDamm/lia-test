import { useEffect, useState } from "react"
import { getRepos } from "../api/api";
import RepoItem from "../types/repoitem";
import './RepoList.css';

export const RepoList = () => {
    const [repos, setRepos] = useState<Array<RepoItem>>();

    useEffect(() => {
        getRepos().then((repos) => {
            setRepos(repos);
        });
    }, []);
    
    return (
        <div className="RepoList">
            {repos?.length ? (
                <ul>
                {repos.map((item) => {
                    return (<li key={item.id}>
                        <div>
                            <h4>{item.name}</h4>
                            <p>Forks: {item.forks}</p><p>Watchers: {item.forks}</p><br></br>
                            <a href={item.html_url}>{item.html_url}</a>
                        </div>
                    </li>);
                })}
                </ul>)
                :
                <p>No repos</p>
            }
        </div>
    );
}