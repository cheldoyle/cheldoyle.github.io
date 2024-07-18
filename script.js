function enterSite() {
  document.getElementById('aboutID').style.marginTop = '100%'
  document.getElementById('projectsID').style.marginTop = '100%'
  document.getElementById('myInfo').style.transition = '1.5s'
  document.getElementById('myInfo').style.visibility = 'visible'
  document.getElementById('myInfo').style.marginTop = '0'
  document.getElementById('pageNav').style.transition = '1.5s'
  document.getElementById('pageNav').style.visibility = 'visible'
  document.getElementById('pageNav').style.marginTop = '0'
}
function viewAbout() {
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.marginBottom = '100%'
  document.getElementById('topSite').style.visibility = 'hidden'
  document.getElementById('aboutID').style.transition = '2s'
  document.getElementById('aboutID').style.visibility = 'visible'
  document.getElementById('aboutID').style.marginTop = '0'
  document.getElementById('aboutID').style.opacity = '1'
}
function viewPros() {
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.marginBottom = '100%'
  document.getElementById('topSite').style.visibility = 'hidden'
  document.getElementById('projectsID').style.transition = '2s'
  document.getElementById('projectsID').style.visibility = 'visible'
  document.getElementById('projectsID').style.marginTop = '0'
  document.getElementById('projectsID').style.opacity = '1'
}
function viewBackAbout() {
  document.getElementById('aboutID').style.transition = '3s'
  document.getElementById('aboutID').style.marginTop = '100%'
  document.getElementById('aboutID').style.opacity = '0'
  document.getElementById('aboutID').style.visibility = 'hidden'
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.visibility = 'visible'
  document.getElementById('topSite').style.marginBottom = '0'
}
function viewBackPro() {
  document.getElementById('projectsID').style.transition = '3s'
  document.getElementById('projectsID').style.marginTop = '100%'
  document.getElementById('projectsID').style.opacity = '0'
  document.getElementById('projectsID').style.visibility = 'hidden'
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.visibility = 'visible'
  document.getElementById('topSite').style.marginBottom = '0'
}