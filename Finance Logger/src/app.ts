let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let toFrom = document.querySelector("#toFrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    [type.name]: type.value,
    [toFrom.name]: toFrom.value,
    [details.name]: details.value,
    [amount.name]: amount.value,
  };
  console.log("formData is ", formData);
});

class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `Invoice for ${this.client}:\nDetails: ${
      this.details
    }\nAmount: $${this.amount.toFixed(2)}`;
  }
}
