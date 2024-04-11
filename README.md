# Mystra Payment Gateway Specifications:

The payment gateway allows you to purchase CSPR tokens for the following currencies:
PLN, USD, EUR.

Possible payment options:
Visa, MasterCard, Blik, GooglePay, ApplePay.

The current cost of a transaction made through the payment gateway is 2%.

The minimum transaction amount is 100 Euro or 400 PLN or 100 USD.

Due to legal requirements of payment processors, the purchase is redirected to the secured transaction page of the payment processor. Once the payment is completed, the payment processor page returns to the Mystra page.

Pursuant to the agreement concluded between the Mystra and Ari10 parties, this payment gateway may only be available on the Mystra website and on the websites indicated by Mystra.

As agreed, the subject of the provided source code is only the source code of the payment gateway integration frontend.

For security and know-how reasons, it was agreed with the Casper Association that the source code of the backend / payment processor is not made available.



## Available Scripts

In the project directory, you can run:

### `yarn start`
Start prod environment 

### `yarn start:win`
Start prod environment on Windows

### `yarn dev`
Start test environment

### `yarn start:dev`
Start test environment on Windows
