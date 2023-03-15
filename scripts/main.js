// Webpage needs to list all possible options that store offers for custom jewelry. 
// The user can choose any of the options, and a new code object should be created 
// to represent their custom piece of jewelry
// The customer can create as many jewelry items as she likes, add them to list of custom orders,
// and Javascript code should be able to calculate the total cost.


import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
