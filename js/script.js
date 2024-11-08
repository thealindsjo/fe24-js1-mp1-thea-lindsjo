//skapar raderna överst på sidan och stylar dem
for(i=0;  i<100; i+=20){
    const h1 = document.createElement('h1');
    document.body.append(h1);

    const hue = 100 + i;

    h1.innerHTML = `Rad ${i/20+1}`
    h1.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
    h1.style.color = `hsl(250, 100%, 65%)`;
    h1.style.fontSize = `${i/40+1}rem`;
    h1.style.textAlign = `center`;
}

// Skapa huvud-diven och stylar den
const mainDiv = document.createElement('div');
mainDiv.style.border = "2px solid black";
mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "space-around";
mainDiv.style.padding = "50px 0px";

// Skapar första div-taggen och lägger till en klass på den
const div1 = document.createElement('div');
div1.classList.add('div-style',);

// Skapar och numrerar p-tagarana
for (let i = 0; i < 10; i++) {
    const p = document.createElement('p');
    p.innerText = i;
    div1.append(p);

    // Ger varanan p-tag svart bakgrund och vit text
    if (i%2 == 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white"
    }

    // Gör att den femte p-tagen uppifrån får lila bakgrund
    if (i === 4) {
        p.style.backgroundColor = "hsl(268 100% 85%)";
    }
}

// Skapar den andra div-taggen och lägger till en klass på den
const div2 = document.createElement('div');
div2.classList.add('div-style',);

// Skapar och numrerar p-tagarana
for (let i = 9; i >= 0; i--) {
    const p = document.createElement('p');
    p.innerText = i;
    div2.append(p);

    // Ger varanan p-tag svart bakgrund och vit text
    if (i%2 == 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white"
    }

    // Gör att den andra p-tagen uppifrån får lila bakgrund
    if (i === 8) {
        p.style.backgroundColor = "hsl(268 100% 85%)";
    }
}

// Skapar den tredje div-taggen och lägger till en klass på den
const div3 = document.createElement('div');
div3.classList.add('div-style',);
const numbersInWords = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

// Skapar p-tagarana och lägger till en string från arrayen
for (let i = 0; i < numbersInWords.length; i++) {
    const numbersInWord = numbersInWords[i];
    const p = document.createElement('p');
    p.innerText = numbersInWord;
    div3.append(p);

    // Ger varanan p-tag svart bakgrund och vit text
    if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }

    // Gör att den sjätte p-tagen uppifrån får lila bakgrund
    if (i === 5) {
        p.style.backgroundColor = "hsl(268 100% 85%)";
    }
}

//Lägger till de tre divarna i huvud-diven
mainDiv.append(div1, div2, div3);

//Lägger till huvud-diven i body
document.body.append(mainDiv);


