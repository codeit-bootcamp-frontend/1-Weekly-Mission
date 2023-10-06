const routes = {
    "/": "/index.html",
    "/faq": "/pages/faq.html",
    "/folder": "/pages/folder.html",
    "/privacy": "/pages/privacy.html",
    "/signin": "/pages/signin.html",
    "/signup": "/pages/signup.html",
}

const getRouteHtml = async () => {
    const path = window.location.pathname
    const route = routes[path]
    window.location(route)
    await fetch(route)
    .then(response => response.text())
}


const handleRoute = event => {
    event = event || window.event
    console.log("EVENT", event, event.target.href)
    event.preventDefault()
    // location.origin + routes[]
    window.history.pushState({}, "", event.target.href)
    // getRouteHtml()
}

document.getElementById("homeRoute").addEventListener("click", handleRoute)
document.getElementById("signupRoute").addEventListener("click", handleRoute)
document.getElementById("signinRoute").addEventListener("click", handleRoute)
document.getElementById("faqRoute").addEventListener("click", handleRoute)
document.getElementById("folderRoute").addEventListener("click", handleRoute)
document.getElementById("privacyRoute").addEventListener("click", handleRoute)