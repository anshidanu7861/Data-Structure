function balance (expr) {
    let stack = []
    
    for(let i = 0; i < expr.length; i++) {
        let x = expr[i]

        if(x == "(" || x == "{" || x == "[") {
            stack.push(x)
            continue;
        }
        if(stack == 0) return false
         
        let check
        switch(x) {
            case ')' :
                check = stack.pop()
                if(check == '{' || check == '[') {
                    return false
                    break; 
                }

                case '}' :
                    check = stack.pop()
                    if(check == '(' || check == '[') {
                        return false
                        break;
                    }

                    case ']' :
                        check = stack.pop()
                        if(check == '(' || check == '{') {
                            return false
                            break;
                        }
        }
    }

    return (stack.length == 0)
}

let expr = "(){}"

if(balance(expr)) {
    console.log('balanced');
}else{
    console.log('not balanced');
}