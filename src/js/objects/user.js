
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    events: [],
    forks: '',
    commits: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.events = gitHubUser.events
        this.forks = gitHubUser.forks
        this.commits = gitHubUser.commits
    },

    setRepositories(repositories) {
        this.repositories = repositories
    },

    setEvents(events) {
        this.events = events
    }
}

export { user }