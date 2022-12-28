let products = [new MobilePhone("", "", "",)];
function display() {
    let show = "";
    let sumProduct = 0;
    for (let i = 0; i < products.length; i++) {
        sumProduct += Number(products[i].number);
        show += `<tr style='text-align: center'>
                   <td>${products[i].name}</td>
                   <td>${products[i].number}</td>
                   <td>${products[i].price}</td>
                   <td>${products[i].number * products[i].price}</td>
                   <td><img style='width: 100px' src="${products[i].img}"></td>
                   <td style='text-align: center;width: 50px' class='button'><button onclick='deleteByTr(" + i + ")'>Delete</button></td>
                 </tr>`
    document.getElementById("listProduct").innerHTML = show;
}
display();
function creNewProduct() {
    let name = document.getElementById("productName").value
    let price = document.getElementById("productNumber").value
    let number = document.getElementById("productPrice").value
    let img = document.getElementById("productImage").value
    let newProduct = new MobilePhone(name, number, price, img)
    products.push(newProduct)
    display()
}
function deleteByTr(index) {
    products.splice(index, 1)
    display()
 }}
