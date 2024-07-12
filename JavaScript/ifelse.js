/*let amount=100;
let promocode="jumbo";

if(promocode=="jumbo" && amount>150){
    amount=amount-0.30*amount;
    console.log("Amount to pay is: "+amount);    
}
else{
    console.log("Invalid Promocode or Amount Insufficient");
}*/

let amount=1000;
let promocode="BINGO";
if(promocode=="JUMBO" && amount>150)
    {
        amount=amount-0.30*amount;
        console.log("Amount is to pay: "+amount);
    }
    else if(promocode=="BINGO" && amount>250)
        {
            let discount=0.50*amount;
            if(discount<200)
                {
                    amount=amount-discount;
                }
            else
            {
                amount=amount-200;
            }
            console.log("Amount is to pay: "+amount);
        }
        else{
            console.log("Invalid Promocode or Amount Insufficient");
        }