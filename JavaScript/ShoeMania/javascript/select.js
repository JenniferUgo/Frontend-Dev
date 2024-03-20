let selectedItemCode = decodeURIComponent(window.location.search)
let selectedItem = selectedItemCode.substring(1)

if (selectedItem == maleShoe1.code) {
    document.getElementById('item-details').style.backgroundImage = `url(${maleShoe1.image})`
    document.getElementById("itemName").innerHTML = maleShoe1.name;
    document.getElementById("itemPrice").innerHTML = maleShoe1.price;
    document.getElementById("itemCode").innerHTML = maleShoe1.code;

    let cost = maleShoe1.price
    qty(cost)
}

else if (selectedItem == femaleShoe1.code) {
    document.getElementById("item-details").style.backgroundImage = `url(${femaleShoe1.image})`
    document.getElementById("itemName").innerHTML = femaleShoe1.name;
    document.getElementById("itemPrice").innerHTML = femaleShoe1.price;
    document.getElementById("itemCode").innerHTML = femaleShoe1.code;

    let cost = femaleShoe1.price
    qty(cost)
}


function qty(cost) {
    document.getElementById('quantity').onkeyup = function() {
        let quantity = document.getElementById('quantity').value

        if (quantity > 0) {
            let amount = cost * quantity

            document.getElementById('total').innerHTML = `Total amount: ${amount}`
            userLocation(amount)
        }
    }
}

function userLocation(amount) {
    document.getElementById('location').onchange = function () {
        let Lagos = 1000
        let Abuja = 1500
        let Abia = 2000
        let Uyo = 2500

        let delivery = document.getElementById('location').value

        if (delivery == 'Lagos') {
            document.getElementById('total').innerHTML = `Total amount: ${amount + Lagos}`
        }

        else if (delivery == 'Abuja') {
            document.getElementById('total').innerHTML = `Total amount: ${amount + Abuja}`
        }

        else if (delivery == 'Abia') {
            document.getElementById('total').innerHTML = `Total amount: ${amount + Abia}`
        }

        else if (delivery == 'Uyo') {
            document.getElementById('total').innerHTML = `Total amount: ${amount + Uyo}`
        }
    }
}