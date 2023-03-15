import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        const eventArea = event.target
        if (eventArea.name === "style") {
            setStyle(parseInt(eventArea.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(styles => {
        return `<li>
        <input type="radio" name="style" value="${styles.id}" /> ${styles.style}
        </li>`
    })


        // Join all of the strings in the array into a single string
        html += listItemsArray.join("")

    html += "</ul>"
    return html
}

