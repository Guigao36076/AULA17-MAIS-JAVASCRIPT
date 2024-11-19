/* PROCEDIMENTO 
Descrição: Exibe uma mensagem fixa
Nome: mostraAlerta
Parâmetro: void
Retorno: void
void -> significa que não tem retorna valor */

function mostraAlerta() {
    alert("Não é que isso funciona mesmo!!!");
}
/* PROCEDIMENTO 
Descrição: Exibe uma mensagem com parâmetro
Nome: mostraAlerta1
Parâmetro: string
Retorno: void
void -> significa que não tem retorna valor */
function mostraAlerta1(msg) {
    alert(`Boa noite, ${msg}`);
}

function mensagem_com_parametro_return(msg1) {
    return(`Você digitou ${msg1}`);
}

function soma_dos_numero (N1,N2){
    N1=parseFloat(N1);
    N2=parseFloat(N2);
    soma=N1+N2;
    return(soma);
}

function mensagem_com_parametro_return(msg)
{
    return(`Você digitou ${msg}`);
}

function mensagem()
{
    alert("Cara! Isso funciona mesmo!");
}
