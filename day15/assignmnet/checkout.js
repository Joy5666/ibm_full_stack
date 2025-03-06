document.addEventListener("DOMContentLoaded", function () {
    const orderSummary = document.getElementById("orderSummary");
    const totalAmount = document.getElementById("totalAmount");
    const placeOrderButton = document.getElementById("placeOrder");
    const backToCartButton = document.getElementById("backToCart");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function renderOrderSummary() {
        orderSummary.innerHTML = "";
        let total = 0;
        
        if (cart.length === 0) {
            orderSummary.innerHTML = "<tr><td colspan='3'>Your cart is empty!</td></tr>";
        } else {
            cart.forEach(product => {
                const row = document.createElement("tr");
                total += (product.price * (product.quantity || 1));
                
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.quantity || 1}</td>
                    <td>$${(product.price * (product.quantity || 1)).toFixed(2)}</td>
                `;
                orderSummary.appendChild(row);
            });
        }
        totalAmount.textContent = total.toFixed(2);
    }
    
    placeOrderButton.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const paymentMethod = document.getElementById("paymentMethod").value;
        
        if (!name || !email || !address || !paymentMethod) {
            alert("Please fill out all the required fields.");
            return;
        }
        
        alert("Thank you for your purchase, " + name + "! Your order has been placed successfully.");
        localStorage.removeItem("cart");
        
        setTimeout(() => {
            window.location.href = "abc.html";
        }, 3000);
    });
    
    backToCartButton.addEventListener("click", function () {
        window.location.href = "bcd.html";
    });
    
    renderOrderSummary();
});