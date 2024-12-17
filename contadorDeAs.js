function contarA(string) {
    let stringLower = string.toLowerCase();

    let count = 0;
    for (let i = 0; i < stringLower.length; i++) {
        if (stringLower[i] === 'a') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' aparece ${count} vez(es) na string.`;
    } else {
        return "A letra 'a' não aparece na string.";
    }
}

let texto = prompt("Digite uma string para verificar a quantidade de letras 'a':");
alert(contarA(texto));
