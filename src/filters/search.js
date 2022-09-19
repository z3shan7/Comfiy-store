import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import { store } from '../store.js';
const setupSearch = () => {
    const form = getElement('.input-form');
    const nameInput = getElement('.search-input');
    form.addEventListener('keyup', () => {
        const value = nameInput.value
        console.log(value)
        if (value) {
            const newStore = store.filter((product) => {
                let { name } = product
                name = name.toLowerCase()
                if (name.startsWith(value)) {
                    return product;
                }
            })
            display(newStore, getElement('.products-container'))
            if (newStore.length < 1) {
                const prodcuts = getElement('.products-container')
                console.log(prodcuts)
                prodcuts.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`
            }
        } else {
            display(store, getElement('.products-container'))

        }
    })

};

export default setupSearch;
