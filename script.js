function mensagem(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>Vultos por falta de AC / Copiar e colar a mensagem fazendo os devidos ajustes</b></p>"
    res.innerHTML += "<p>Segue para conhecimento estamos com um vulto na *LOCALIDADE*, devido a falta de energia no concentrador *SITE* devido programada emergencial da *CONCESSIONÁRIA* na região previsto término as 13:30, site é greenfield, técnico *NOME DO TÉCNICO* acionado antes do prazo dos 50% previsão de chegada às 12:10. </p>" 
    res.innerHTML += "<p>Concessionária está com a equipe próximo realizando tratativa. </p>" 
    res.innerHTML += "*Sites 2G:* Quantitativo<br>"
    res.innerHTML += "*Sites 3G:* Quantitativo<br><br>*"
    res.innerHTML += "Início de falha:* xx:xx<br>"
    res.innerHTML += "*Autonomia:* xxx<br>"
    res.innerHTML += "*Horário acio. téc.:* xx:xx<br><br>"
    res.innerHTML += "<p><b>Vultos por queda direta TX OI ou TX LL / Copiar e colar a mensagem fazendo os devidos ajustes</b></p>"
    res.innerHTML += "<p><b>Vulto TX OI com único ponto comum</b></p>"
    res.innerHTML += "<p>Segue para conhecimento de estamos com um vulto na *LOCALIDADE*, acionado suporte de TX para análise, site concentrador *SITE*, técnico em deslocamento com previsão de chegada no local para às *horário*, verificado na gerência sem indícios de alarmes de infra. </p>"
    res.innerHTML += "*Sites 2G:* Quantitativo<br>"
    res.innerHTML += "*Sites 3G:* Quantitativo<br><br>"
    res.innerHTML += "*Início de falha:* xx:xx<br>"
    res.innerHTML += "*Horário acio. téc.:* xx:xx<br><br>" 
    res.innerHTML += "<p><b>Vulto TX LL sem ponto comum</b></p>"
    res.innerHTML += "<p>Segue para conhecimento de estamos com um vulto na *LOCALIDADE*, acionado suporte de TX para análise, sites afetados são TX LL, em processo de abertura dos chamados com o provedor. </p>"
    res.innerHTML += "*Sites 2G:* Quantitativo<br>"
    res.innerHTML += "*Sites 3G:* Quantitativo<br><br>"
    res.innerHTML += "*Início de falha:* xx:xx<br>"
    res.innerHTML += "*Horário acio. téc.:* xx:xx"
    
}

function regra01(){

    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<b>Reforçando:</b><p>1º Acionamento de BA 98 com Afetação</p><p>BA 98 com afetação, independentemente da quantidade, precisa ser atendido ou escalonado <b>(Supervisor, Gerente N5 ou Gerente N4)</b></p><p>Obs: Sempre descrevam dentro do BA o nome das pessoas escalonadas.</p><p>Não temos autorização de segurar acionamentos para horário comercial por qualquer tipo de problema.</p><p>Acionamentos de segunda a segunda. Agora é 0 ou 1, ou atende ou escalona.</p><p><b>⚠️Importante qualquer impedimento no atendimento de campo para 100% dos casos devem ser escalonando o supervisor ou gerente N5 ou gerente N4. de forma a garantir o pronto atendimento!</b></p><p><b>2º Escalonamento de BA 98 com Afetação</b></p><p><b>2.1 – Dentro do horário comercial das “07h até as 20h”(Horário comercial: De segunda-feira até sexta-feira, fora  feriados)</b></p><p>Passados 4h da data de abertura do BA, escalonar Supervisor de campo da região do BA com afetação</p><p>Passados 6h da data de abertura do BA, escalonar Gerente de campo N5</p><p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p><p><b>2.1 – Fora do horário comercial das “20:01h até as 06:59h” + sábados, domingos e Feriados</b></p><p>Passados 4h da data de abertura do BA, escalonar Supervisor de Plantão</p><p>Passados 6h da data de abertura do BA, escalonar Gerente de Plantão</p><p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p><p>Obs: <b>BAs 98 com afetação de TX-LL</b>, não entram na regra (2º Escalonamento) acima.</p>"
    
}

function TXLLCOF(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<p>Estamos com o indicador de disponibilidade fora da meta e com isso, peço a gentileza de redobrar a atenção com os dois pontos abaixo:</p><p><b>1º Avisos de COF com afetação Móvel</b></p><p>BAs de COF com afetação > 13, avisar imediatamente o Gerente N4, 24hs x 7 dias da semana.</p><p><b>2º TX-LL</b></p><p>Vamos redobrar a atenção com a abertura dos chamados junto com os provedores, principalmente Vivo.</p><p>Para melhorar o tempo de abertura com os provedores, <b>vamos pedir ajuda entre nós</b>, assim entendo que vamos conseguir abrir os chamados mais rapidamente.</p><p>Tenho visto que a solicitação de ajuda entre nós já está acontecendo, isso é muito positivo.</p>" 

}

function preditiva(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<p><b>Vamos começar a apoiar campo nos BA´s de preventiva relacionado ao tema preditivo com causa de falha TX-LL.</b></p><p>Os supervisores de campo nos solicitarão abertura de chamado junto com o provedor de TX-LL.</p><p><b>1º</b> Sala COR abrirá o chamado com o BA e LP em mãos. </p><p><b>2º</b>  O número do chamado Oi a ser informado para o provedor será o número do BA de preventiva. </p><p><b>3º </b> Na abertura do chamado, informar que o tratamento será somente em horário comercial. </p><p><b>4º </b> O contato de retorno será o número do telefone do Supervisor da região. </p><p><b>5º </b> <b>Obs:</b> Não temos autorização para encerrar o chamado. Somente o supervisor pode encerrar o chamado com o provedor. </p>"
    
}

function chamadosLL(){
    let res = document.getElementById("flista")
    let img = document.createElement("img")
    img.src = "logerro.jpg"
    document.getElementById("imagem")
    
    
    res.style.textAlign = "center"
    res.innerHTML = `<p><b>Verificação de taxa de Erro na Rede Nokia (Somente para 2G, usando comando ZYMO)</p></b><p>Estamos com alto número de falhas reincidentes e o ofensor são os sites atendidos pela Vivo. Com isso vamos tratar os chamados da seguinte forma: Após a resolução da Vivo, vamos zerar as ET´s e monitorar por 3 horas a taxa de erro pelo comando ZYMO.</p><p>Ao termino das 3 horas, vamos verificar pelo comando ZYMO se existe taxa de erro e não havendo, vamos autorizar o encerramento do chamado vivo e enviar um e-mail com o nome do site e chamado, conforme exemplo abaixo: </p><p><b><i>Em caso de dúvidas ou falta de conhecimento, vamos acionar a equipe de TX para verificar e zerar as ET´s.</i></b></p><p>Para: LD-OI-CI-O&MSP </p><p>Assunto: Nome do Site, Número do Chamado. </p>`
    res.appendChild(img)
    
       
}

function vulto(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<b>Vulto Afetação > 5 e < 14. (Com ou Sem BA) </b><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora do Horário Comercial: Supervisor</p><b>Vulto Afetação a partir de 14. (Com ou Sem BA) </b><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora do Horário Comercial: Imediatamente Supervisor</p><p>Fora do Horário Comercial: Após 02h da falha escalonar o Gerente N5 independente do horário. </p><p>Fora do Horário Comercial: Após 04h da falha escalonar Ger. N4 independente do horário. </p><b>Sites 4G OI afetação >0 (Somente em horário Comercial) </b><p>No período da 07h até 20h, com exceção Sábados, Domingos e Feriados, vamos avisar imediatamente o Gerente N5 + Ger. N4 sobre a interrupção de um ou mais sites 4G. </p><b>Sites 4G OI afetação =< 2 (Fora do horário comercial) </b><p>Escalonar após 02h Supervisor / Supervisor de Plantão. </p><p>Após 04h da falha escalonar o Gerente N5 independente do horário. </p><p>Após 06h da falha escalonar Ger N4 independente do horário. </p><b>Sites 4G OI afetação >2 (Fora do horário comercial) </b><p>Escalonar imediatamente Supervisor / Supervisor de Plantão. </p><p>Após 02h da falha escalonar o Gerente N5 independente do horário. </p><p>Após 04h da falha escalonar Ger. N4 independente do horário. </p><b>Sites 4G Ransharing (BA COF SP / SUL / CO) </b><p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p><p>Fora Horário Comercial: </p><p>Após 02h da falha escalonar o Gerente Plantão</p><p>Após 04h da falha escalonar o Gerente N4</p>"
}

function encBA(){
    let res = document.getElementById("flista")
    res.style.textAlign = "center"
    res.innerHTML = "<p>Estamos com alto número de falhas reincidentes com BA 98 causados por TX-LL Vivo. </p><p>Vamos tratar os BAs 98 com afetação junto com os Supervisores de Campo para UF: SP. </p><p>Com isso, todo BA 98 com afetação, repetida > 1 (Maior que um) TX-LL VIVO, vamos solicitar a autorização <b>de acordo</b> do supervisor de campo para fechamento do BA. </p><p><b>Horário Comercial:</b> Supervisor da região. </p><p><b>Fora do Horário Comercial:</b> Supervisor de plantão.</p>"
}
