//Code Your Solution Below
function init() {

    const button = document.getElementById("submit");
    const testName =document.getElementsByName("testName")[0];

    button.addEventListener('click', event => {
    
        if(testName.value ==='')
           alert("Testname required");
      
        
    });


}

window.addEventListener("load", init);