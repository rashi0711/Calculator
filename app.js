const btn=document.querySelectorAll('.btn');
const display=document.getElementById('display');
const clearBtn=document.querySelector('.clearbtn');
let operand1="";
let operator="";

loadEvents();
function loadEvents()
{
    btn.forEach(function(button)
    {
        button.addEventListener('click',function()
            {
             const value=button.value;
             if(value==="/" || value==="*" || value==="-" || value==="+" || value==="%")
             {
                 operator=value;
                 operand1=operand1+operator;
                 display.style.color='#000';
                 display.innerText=operand1;
             }
             else if(value==="=")
             {
                display.innerText='';
                const len=operand1.length;
                if(operand1.charAt(len-1)==='/'|| operand1.charAt(len-1)==='*'|| operand1.charAt(len-1)==='-'|| operand1.charAt(len-1)==='+'||operand1.charAt(len-1)==='.'|| operand1.charAt(0)==='/'|| operand1.charAt(0)==='*'|| operand1.charAt(0)==='-'|| operand1.charAt(0)==='+'||operand1.charAt(0)==='.' )
                {
                    display.style.color='red';
                    display.innerText='Error';

                    setTimeout(function()
                    {
                        display.innerText='';
                    },2000)
                    operand1="";
                    operator="";
                }
                else
                {
                    const res=eval(operand1);
                    display.textContent=res;
                }
             }
             else
             {
                 operand1=operand1+value;
                 display.style.color='#000';
                 display.innerText=operand1;
             }
            })
    })
    clearBtn.addEventListener('click',function()
    {
        operand1="";
        operator="";
        display.innerText='';
    })
    
    btn.addEventListener('keydown',function()
            {
             const value=btn.value;
             console.log(value);
             if(value==="/" || value==="*" || value==="-" || value==="+" || value==="%")
             {
                 operator=value;
                 operand1=operand1+operator;
                 display.style.color='#000';
                 display.innerText=operand1;
             }
             else if(value==="=")
             {
                display.innerText='';
                const len=operand1.length;
                if(operand1.charAt(len-1)==='/'|| operand1.charAt(len-1)==='*'|| operand1.charAt(len-1)==='-'|| operand1.charAt(len-1)==='+'||operand1.charAt(len-1)==='.'|| operand1.charAt(0)==='/'|| operand1.charAt(0)==='*'|| operand1.charAt(0)==='-'|| operand1.charAt(0)==='+'||operand1.charAt(0)==='.' )
                {
                    display.style.color='red';
                    display.innerText='Error';

                    setTimeout(function()
                    {
                        display.innerText='';
                    },2000)
                    operand1="";
                    operator="";
                }
                else
                {
                    const res=eval(operand1);
                    display.textContent=res;
                }
             }
             else
             {
                 operand1=operand1+value;
                 display.style.color='#000';
                 display.innerText=operand1;
             }
            })


}
