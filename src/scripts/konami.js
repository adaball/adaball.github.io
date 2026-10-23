(function() {
    const code = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
        "Enter"
    ];
    
    const containsCode = (a) => {
        if (a.length < code.length) {
            return false;
        }
    
        for (var i = 0; i < a.length; i++) {
            if (a[i] != code[i]) {
                return false;
            }
        }
    
        return true;
    }
    
    let keys = [];
    let start_time = new Date().getTime();
    let solved = false;
    
    const limit = 1;
    const title = document.getElementById('ada-ball');
    const keyup = (event) => {
        if (solved) {
            return;
        }
    
        let curr_time = new Date().getTime();
        if ((curr_time - start_time) / 1000 >= limit) {
            keys = [];
        }
    
        start_time = curr_time;
    
        keys.push(event.key);
    
        if (containsCode(keys)) {
            solved = true;
            title.innerText = "Ada Ball (lol)"
        }
    };
    
    document.addEventListener("keyup", keyup);
})();


