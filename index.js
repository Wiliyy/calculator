let sign = document.querySelectorAll(".sign")
let number = document.querySelectorAll(".num");

for (let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverceNumberFormat(getResaultValue());
        if (output!=NaN & output.toString().length < 15){
        output = output+this.innerText;
        setResaultValue(output);
        }
    })
}

for(let i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', function(){
        if (this.innerText=="AC"){
            setPreviousValue("");
            setResaultValue("");
        }
        else if(this.innerText=="DEL"){        
            let output = reverceNumberFormat(getResaultValue()).toString();
            if (output) {
                output = output.substr(0,output.length - 1);
                setResaultValue(output);
            }
        }
        else{            
            var outp= getResaultValue();
            var pre = getPreviousValue();
            setResaultValue("")
            setPreviousValue("");
            if (outp!=""){
                outp = reverceNumberFormat(outp);
                pre =pre + outp;    
                if (this.innerText=="=") {
                    var result = eval(pre);
                    setResaultValue(result);
                    setPreviousValue("");
                }
                else{
                    pre=pre+ (this.innerText === "x"? "*" : this.innerText == "÷"?"/":this.innerText) ;
                    setPreviousValue(pre);
                    setResaultValue("")
                }
            }
        }
    });
}

function getPreviousValue(){
  return  document.querySelector("#previous__value").innerText;
}

function setPreviousValue(num){
    document.querySelector("#previous__value").innerText=num;
}

function getResaultValue(){
    return document.querySelector("#resault__value").innerText;
}

function setResaultValue(num){
    if (num==""){
        document.querySelector("#resault__value").innerText = num;
    }
    else{
        document.querySelector("#resault__value").innerText=getFormattedNumber(num);
    }    
}

function getFormattedNumber(num){
    var value = Number(num).toLocaleString("en");
    return value;
}

function reverceNumberFormat(num){
    return Number(num.replace(/,/g,""))
}







