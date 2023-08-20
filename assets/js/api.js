
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/betortizPSG/js-developer-portifolio/projeto-base/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
