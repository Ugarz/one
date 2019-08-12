/**
 * Format Github response
 * @param {Object} response 
 */
const formatGithubResponse = (response) => response.map(repo => ({
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    clone_url: repo.clone_url,
    forks: repo.forks,
    hompage: repo.homepage,
    url: repo.url,
    owner: repo.owner,
    stargazers_count: repo.stargazers_count,
    pushed_at: repo.pushed_at,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    language: repo.language
}))

module.exports = {
    formatGithubResponse
}