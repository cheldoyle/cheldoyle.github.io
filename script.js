function enterSite() {
  document.getElementById('aboutID').style.marginTop = '100%'
  document.getElementById('projectsID').style.marginTop = '100%'
}
function viewAbout() {
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.marginBottom = '100%'
  document.getElementById('topSite').style.visibility = 'hidden'
  document.getElementById('aboutID').style.transition = '2s'
  document.getElementById('aboutID').style.visibility = 'visible'
  document.getElementById('aboutID').style.marginTop = '0'
  document.getElementById('aboutID').style.opacity = '1'
  document.getElementById('backButtAbout').classList.remove('rotate-down')
}
function viewPros() {
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.marginBottom = '100%'
  document.getElementById('topSite').style.visibility = 'hidden'
  document.getElementById('projectsID').style.transition = '2s'
  document.getElementById('projectsID').style.visibility = 'visible'
  document.getElementById('projectsID').style.marginTop = '0'
  document.getElementById('projectsID').style.opacity = '1'
  document.getElementById('backButtPro').classList.remove('rotate-down')
}
function viewBackAbout() {
  document.getElementById('aboutID').style.transition = '3s'
  document.getElementById('aboutID').style.marginTop = '100%'
  document.getElementById('aboutID').style.opacity = '0'
  document.getElementById('aboutID').style.visibility = 'hidden'
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.visibility = 'visible'
  document.getElementById('topSite').style.marginBottom = '0'
  document.getElementById('backButtAbout').classList.toggle('rotate-down')
}
function viewBackPro() {
  document.getElementById('projectsID').style.transition = '3s'
  document.getElementById('projectsID').style.marginTop = '100%'
  document.getElementById('projectsID').style.opacity = '0'
  document.getElementById('projectsID').style.visibility = 'hidden'
  document.getElementById('topSite').style.transition = '3s'
  document.getElementById('topSite').style.visibility = 'visible'
  document.getElementById('topSite').style.marginBottom = '0'
  document.getElementById('backButtPro').classList.toggle('rotate-down')
}