// get input 
const srchInpt = document.querySelector("#search-inpt");
const productsDiv = document.querySelector(".products-box");

// products
const products = [
    { title: "Adobe Photoshop", isExist: true },
    { title: "Adobe Illustrator", isExist: false },
    { title: "Adobe Adobe Xd", isExist: true },
    { title: "Adobe InDesign", isExist: false },
    { title: "Adobe Premiere", isExist: true },
]

// filters
const filters = {
    searchItem: "",
}

// how filter search products to DOM
function reanderFilter(_products, _filters) {
    // filter type of search
    const filteredSearch = _products.filter((item) => {
        return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
    })

    // clear mother DIV after delet words
    productsDiv.innerHTML = "";
    
    // show products to DOM
    filteredSearch.forEach(element => {
        const pTag = document.createElement("p");
        pTag.textContent = element.title;
        productsDiv.appendChild(pTag)
    })
}

// add event Input
srchInpt.addEventListener("input", (e) => {
    filters.searchItem = e.target.value;

    reanderFilter(products, filters)
})