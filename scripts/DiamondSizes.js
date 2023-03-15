import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        const eventArea = event.target
        if (eventArea.name === "size") {
            setSize(parseInt(eventArea.value))
            // window.alert(``)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // This works like a for/of loop and generates the same data.
    // Generates individual html strings.
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

