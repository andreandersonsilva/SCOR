function regra01(){

    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<h2>Alteração de Regra postada 26/02/2021</h2><h2>Reforçando:</h2><p>1º Acionamento de BA 98 com Afetação</p><p>BA 98 com afetação, independentemente da quantidade, precisa ser atendido ou escalonado <h2>(Supervisor, Gerente N5 ou Gerente N4)</h2></p><p>Obs: Sempre descrevam dentro do BA o nome das pessoas escalonadas.</p><p>Não temos autorização de segurar acionamentos para horário comercial por qualquer tipo de problema.</p><p>Acionamentos de segunda a segunda. Agora é 0 ou 1, ou atende ou escalona.</p><p><h4>⚠️Importante qualquer impedimento no atendimento de campo para 100% dos casos devem ser escalonando o supervisor ou gerente N5 ou gerente N4. de forma a garantir o pronto atendimento!</h4></p><p><h3>2º Escalonamento de BA 98 com Afetação</h3></p><p><h4>2.1 – Dentro do horário comercial das “07h até as 20h”(Horário comercial: De segunda-feira até sexta-feira, fora  feriados)</h4></p><p>Passados 4h da data de abertura do BA, escalonar Supervisor de campo da região do BA com afetação</p><p>Passados 6h da data de abertura do BA, escalonar Gerente de campo N5</p><p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p><p><h4>2.1 – Fora do horário comercial das “20:01h até as 06:59h” + sábados, domingos e Feriados</h4></p><p>Passados 4h da data de abertura do BA, escalonar Supervisor de Plantão</p><p>Passados 6h da data de abertura do BA, escalonar Gerente de Plantão</p><p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p><p>Obs: Bas 98 com afetação de TX-LL, não entram na regra (2º Escalonamento) acima.</p>"
    
}

function TXLLCOF(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<p>Alteração de Regra postada 15/02/2021<<Orientação para tratamento de TX-LL (Reforço) e Avisos de COF com afetação > 13 sites</p> <p>Estamos com o indicador de disponibilidade fora da meta e com isso, peço a gentileza de redobrar a atenção com os dois pontos abaixo:</p><p>1º Avisos de COF com afetação Móvel</p><p>BAs de COF com afetação > 13, avisar imediatamente o Gerente Divino, 24hs x 7 dias da semana.</p><p>2º TX-LL</p><p>Vamos redobrar a atenção com a abertura dos chamados junto com os provedores, principalmente Vivo.</p><p>Para melhorar o tempo de abertura com os provedores, vamos pedir ajuda entre nós, assim entendo que vamos conseguir abrir os chamados mais rapidamente.</p><p>Tenho visto que a solicitação de ajuda entre nós já está acontecendo, isso é muito positivo.</p>" 

}

function preditiva(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<p>Alteração de Regra postada 29/09/2020</p><p>Vamos começar a apoiar campo nos BA´s de preventiva relacionado ao tema preditivo com causa de falha TX-LL.</p><p>Os supervisores de campo nos solicitarão abertura de chamado junto com o provedor de TX-LL.</p><p>2º O numero do chamado Oi a ser informado para o provedor será o numero do BA de preventiva.</p><p>3º Na abertura do chamado, informar que o tratamento será somente em horário comercial.</p><p>5º Obs: Não temos autorização para encerrar o chamado. Somente o supervisor pode encerrar o chamado com o provedor.</p><p>Sempre coloquem nota dentro do BA, principalmente informando a LP e o chamado aberto correspondente.</p>"
    
}

function vulto(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<h2>Vulto Afetação > 5 e < 14. (Com ou Sem BA) </h2><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora do Horário Comercial: Supervisor</p><h2>Vulto Afetação a partir de 14. (Com ou Sem BA) </h2><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora do Horário Comercial: Imediatamente Supervisor</p><p>Fora do Horário Comercial: Após 02h da falha escalonar o Gerente N5 independente do horário. </p><p>Fora do Horário Comercial: Após 04h da falha escalonar Ger. N4 independente do horário. </p><h2>Sites 4G OI afetação >0 (Somente em horário Comercial) </h2><p>No período da 07h até 20h, com exceção Sábados, Domingos e Feriados, vamos avisar imediatamente o Gerente N5 + Ger. N4 sobre a interrupção de um ou mais sites 4G. </p><h2>Sites 4G OI afetação =< 2 (Fora do horário comercial) </h2><p>Escalonar após 02h Supervisor / Supervisor de Plantão. </p><p>Após 04h da falha escalonar o Gerente N5 independente do horário. </p><p>Após 06h da falha escalonar Ger N4 independente do horário. </p><h2>Sites 4G OI afetação >2 (Fora do horário comercial) </h2><p>Escalonar imediatamente Supervisor / Supervisor de Plantão. </p><p>Após 02h da falha escalonar o Gerente N5 independente do horário. </p><p>Após 04h da falha escalonar Ger. N4 independente do horário. </p><h2>Sites 4G Ransharing (BA COF SP / SUL / CO) </h2><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora Horário Comercial: </p><p>Após 02h da falha escalonar o Gerente Plantão</p><p>Após 04h da falha escalonar o Gerente N4</p>"
}

