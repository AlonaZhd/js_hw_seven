document.write("Порожній прямокутник:");
document.write("<br/>");

for(let i = 0; i < 10; i++){
    if (i===0 || i===9){
        for(let j = 0; j < 10; j++){
            document.write("*");
        }
    }
    else {
        document.write("*");
        for (let j = 1; j < 9; j++){
            document.write("&nbsp");
        }
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<hr/>");
document.write("<br/>");
document.write("Рівнобедрений трикутник:");
document.write("<br/>");

for(let i = 0; i < 10; i++){
    for(let j = i + 1; j < 10; j++){
        document.write("&nbsp;")
    }
    for(let y = 1+i; y > 0; y--){
        document.write("*")
    }
    document.write("<br>")
    }

    document.write("<br>")

document.write("<hr/>");
document.write("<br/>");
document.write("Трикутник прямокутний:");
document.write("<br/>");

for(let i = 0; i < 10; i++){
    for(let y = 1+i; y > 0; y--){
        document.write("*")
    }
    for(let j = i + 1; j < 10; j++){
        document.write("&nbsp;")
    }
    document.write("<br>")
    }

    document.write("<br>")

document.write("<hr/>");
document.write("<br/>");
document.write("Ромб:");
document.write("<br/>");

for(let i = 0; i < 8; i++){
    for(let j = i + 1; j < 8; j++){
        document.write("&nbsp;")
    }
    for(let y = 1+i; y > 0; y--){
        document.write("*")
    }
    document.write("<br>")
}
for(let i = 0; i < 8; i++){
    for(let y = 1+i; y > 0; y--){
        document.write("&nbsp;")
    }
    for(let j = i + 1; j < 8; j++){
        document.write("*")
    }
    document.write("<br>")
}