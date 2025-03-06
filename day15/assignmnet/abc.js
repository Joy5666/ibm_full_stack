const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", category: "Electronics", price: 49.99, rating: 4.5, image: "https://tse2.mm.bing.net/th?id=OIP.YQYpvz3jCQXNqi8AMWRjAAHaHa&pid=Api&P=0&h=180" },
    { id: 2, name: "Gaming Mouse", category: "Electronics", price: 29.99, rating: 4.2, image: "https://tse4.mm.bing.net/th?id=OIP.Qn-xdTyKkm6eCcke8apD2gHaE8&pid=Api&P=0&h=180" },
    { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 79.99, rating: 4.7, image: "https://tse3.mm.bing.net/th?id=OIP.v1SORWJrXZqzg1pfabnCIAHaEK&pid=Api&P=0&h=180" },
    { id: 4, name: "Smartwatch", category: "Wearable", price: 199.99, rating: 4.8, image: "https://tse1.mm.bing.net/th?id=OIP.DmFgbUbzMoYe2d-uat4AFQHaHa&pid=Api&P=0&h=180" },
    { id: 5, name: "Running Shoes", category: "Fashion", price: 59.99, rating: 4.3, image: "https://tse3.mm.bing.net/th?id=OIP.q3SsvtCEArboul-TNdvGCAHaEK&pid=Api&P=0&h=180" },
    { id: 6, name: "Leather Wallet", category: "Fashion", price: 19.99, rating: 4.0, image: "https://tse2.mm.bing.net/th?id=OIP.YE-CrlfOQYJeKVMrxkZf9wHaHa&pid=Api&P=0&h=180" },
    { id: 7, name: "Digital Camera", category: "Electronics", price: 349.99, rating: 4.6, image: "https://tse3.mm.bing.net/th?id=OIP.-pjd-rACL9doeYt3gTeWwQHaHa&pid=Api&P=0&h=180" },
    { id: 8, name: "Backpack", category: "Accessories", price: 39.99, rating: 4.4, image: "https://tse4.mm.bing.net/th?id=OIP.jc3DaX-LmkKBX5e5bNLu7AHaHa&pid=Api&P=0&h=180" },
    { id: 9, name: "Sunglasses", category: "Fashion", price: 24.99, rating: 4.1, image: "https://tse3.mm.bing.net/th?id=OIP.OE9iPFFEJu0Ardog6loHygHaHa&pid=Api&P=0&h=180" },
    { id: 10, name: "Water Bottle", category: "Home & Kitchen", price: 14.99, rating: 4.2, image: "https://tse4.mm.bing.net/th?id=OIP.ufy-1s-UyieM_5x5dPGIWQHaGe&pid=Api&P=0&h=180" }
];

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this, args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

const searchInput = document.getElementById("search");
const priceFilter = document.getElementById("priceFilter");

const debouncedSearch = debounce(() => {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    displayProducts(filteredProducts);
}, 300);

const throttledFilter = throttle(() => {
    const selectedPrice = priceFilter.value;
    let filteredProducts = products;
    if (selectedPrice !== "all") {
        const [min, max] = selectedPrice.split("-").map(Number);
        filteredProducts = products.filter(product => product.price >= min && product.price <= max);
    }
    displayProducts(filteredProducts);
}, 500);

searchInput.addEventListener("input", debouncedSearch);
priceFilter.addEventListener("change", throttledFilter);

displayProducts(products);
