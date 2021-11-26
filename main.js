const LinksSocialMedia = {
  github: 'Paullo-Nunes',
  youtube: 'pn_gamer',
  facebook: 'paulonunes',
  instagram: '_paullonunes',
  twitter: 'paulonunes'
}
function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olívia'
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href) seviu apenas para demonstrar a funcionalidade do código.
  }
}
//userName é o Id da tag <h1>
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
