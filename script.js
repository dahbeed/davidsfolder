
    function screen(val){ //puts values on the screen//
        document.getElementById("result").value+=val
    }
    function solve(){
        let digit = document.getElementById("result").value
        let y = eval(digit)
        document.getElementById("result").value = y
    }
    function clr(){
        document.getElementById("result").value = ""
    }
