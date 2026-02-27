console.log("Welcome To My Calculator")

let status = "on"

while (status == "on") {

    let select = prompt("Choose: \n 1. Addition (+) \n 2. Subraction (-) \n 3. Multiply (*) \n 4. Divide (/) \n 5. Modulus(%) \n 6. (Root) \n 7. (Power) \n 8. (Exit)")

    if (select == "8") {
        status = "off"
        console.log("Thanks for using our service. Have a wonderful day!")
    }
    else {
        let num1, num2, result

        if (select == "6") {
            num1 = Number(prompt("Enter Number for Root:"))
            result = num1 ** 0.5
            console.log("The final calculated result for your Square Root is: " + result)
        }
        else if (select == "1" || select == "2" || select == "3" || select == "4" || select == "5" || select == "7") {
            num1 = Number(prompt("Enter First Number:"))
            num2 = Number(prompt("Enter Second Number:"))

            if (select == "1") {
                result = num1 + num2
                console.log("The final calculated result for your Addition is: " + result)
            }
            if (select == "2") {
                result = num1 - num2
                console.log("The final calculated result for your Subtraction is: " + result)
            }
            if (select == "3") {
                result = num1 * num2
                console.log("The final calculated result for your Multiplication is: " + result)
            }
            if (select == "4") {
                result = num1 / num2
                console.log("The final calculated result for your Division is: " + result)
            }
            if (select == "5") {
                result = num1 % num2
                console.log("The final calculated result for your Modulus is: " + result)
            }
            if (select == "7") {
                result = num1 ** num2
                console.log("The final calculated result for your Power is: " + result)
            }
        }
        else {
            console.log("Invalid choice! Please try again.")
        }
    }

    if (status == "on") {
        let check = prompt("Do you want to calculate again? (yes/no)")
        if (check == "no") {
            status = "off"
            console.log("Thanks for using our service. Have a Nice Day!")
        }
    }
}