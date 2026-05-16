function calcular() {

    // ITENS

    let reparoMecanica =
        (parseInt(document.getElementById('ReparoMecanica').value) || 0) * 1100;

    let reparoNorte =
        (parseInt(document.getElementById('ReparoNorte').value) || 0) * 1500;

    let reparoSul =
        (parseInt(document.getElementById('ReparoSul').value) || 0) * 1900;

    let kit =
        (parseInt(document.getElementById('Kit').value) || 0) * 1100;

    let kitAvancado =
        (parseInt(document.getElementById('KitAvancado').value) || 0) * 3400;

    let chave =
        (parseInt(document.getElementById('Chave').value) || 0) * 2300;

    let pneu =
        (parseInt(document.getElementById('Pneu').value) || 0) * 1100;

    let tunningBase =
        parseFloat(document.getElementById('Tunning').value) || 0;

    let tunning =
        tunningBase + (tunningBase * 0.50);

    let tunning30Base =
    parseFloat(document.getElementById('Tunning30').value) || 0;

    let tunning30 =
    tunning30Base + (tunning30Base * 0.20);


    // TOTAL DOS ITENS

    let totalItens =
        reparoMecanica +
        reparoNorte +
        reparoSul +
        kit +
        kitAvancado +
        chave +
        pneu;
        

    // DESCONTO SOMENTE NOS ITENS

    let desconto =
        document.getElementById('desconto')?.checked || false;

    if (desconto) {
        totalItens *= 0.80; // 20% OFF
    }

    // EXTRAS

    let extras = 0;

    extras += tunning;
    extras += tunning30;

    let sul =
        document.getElementById('sul')?.checked || false;

    if (sul) {
        extras += 1500;
    }

    let norte =
        document.getElementById('norte')?.checked || false;

    if (norte) {
        extras += 1100;
    }

    let explodido =
        document.getElementById('explodido')?.checked || false;

    if (explodido) {
        extras += 400;
    }

    // TOTAL FINAL

    let total = totalItens + extras;

    document.getElementById('total').innerHTML =
        'TOTAL: R$ ' +
        total.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}