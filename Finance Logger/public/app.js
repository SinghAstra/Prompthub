let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let toFrom = document.querySelector("#toFrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
import Invoice from "./models/Invoice.js";
import { ListTemplate } from "./models/ListTemplate.js";
import Payment from "./models/Payment.js";
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = {
        [type.name]: type.value,
        [toFrom.name]: toFrom.value,
        [details.name]: details.value,
        [amount.name]: amount.value,
    };
    let invoiceOrPayment;
    if (type.value === "invoice") {
        invoiceOrPayment = new Invoice(formData.toFrom, formData.details, parseFloat(formData.amount));
    }
    else {
        invoiceOrPayment = new Payment(formData.toFrom, formData.details, parseFloat(formData.amount));
    }
    list.render(invoiceOrPayment, type.value);
});
