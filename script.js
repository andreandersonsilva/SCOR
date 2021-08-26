function mensagem(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>Vultos por falta de AC / Copiar e colar a mensagem fazendo os devidos ajustes</b></p>"
    res.innerHTML += "<p>Segue para conhecimento estamos com um vulto na *LOCALIDADE*, devido a falta de energia no concentrador *SITE* devido programada emergencial da *CONCESSIONÁRIA* na região previsto término as 13:30, site é greenfield, técnico *NOME DO TÉCNICO* acionado antes do prazo dos 50% previsão de chegada às 12:10. </p>" 
    res.innerHTML += "<p>Concessionária está com a equipe próximo realizando tratativa. </p>" 
    res.innerHTML += "<p>*Sites 2G:* Quantitativo<br></p>"
    res.innerHTML += "<p>*Sites 3G:* Quantitativo<br><br></p>"
    res.innerHTML += "<p>*Início de falha:* xx:xx<br></p>"
    res.innerHTML += "<p>*Autonomia:* xxx<br></p>"
    res.innerHTML += "<p>*Horário acio. téc.:* xx:xx<br><br></p>"
    res.innerHTML += "<p><b>Vultos por queda direta TX OI ou TX LL / Copiar e colar a mensagem fazendo os devidos ajustes</b></p>"
    res.innerHTML += "<p><b>Vulto TX OI com único ponto comum</b></p>"
    res.innerHTML += "<p>Segue para conhecimento de estamos com um vulto na *LOCALIDADE*, acionado suporte de TX para análise, site concentrador *SITE*, técnico em deslocamento com previsão de chegada no local para às *horário*, verificado na gerência sem indícios de alarmes de infra. </p>"
    res.innerHTML += "<p>*Sites 2G:* Quantitativo<br></p>"
    res.innerHTML += "<p>*Sites 3G:* Quantitativo<br><br></p>"
    res.innerHTML += "<p>*Início de falha:* xx:xx<br></p>"
    res.innerHTML += "<p>*Horário acio. téc.:* xx:xx<br><br></p>" 
    res.innerHTML += "<p><b>Vulto TX LL sem ponto comum</b></p>"
    res.innerHTML += "<p>Segue para conhecimento de estamos com um vulto na *LOCALIDADE*, acionado suporte de TX para análise, sites afetados são TX LL, em processo de abertura dos chamados com o provedor. </p>"
    res.innerHTML += "<p>*Sites 2G:* Quantitativo<br></p>"
    res.innerHTML += "<p>*Sites 3G:* Quantitativo<br><br></p>"
    res.innerHTML += "<p>*Início de falha:* xx:xx<br></p>"
    res.innerHTML += "<p>*Horário acio. téc.:* xx:xx</p>"
    
}

function regra01(){

    let res = document.getElementById("flista")
    
    res.innerHTML = "<p><b>Reforçando:</b></p><p><b>1º Acionamento de BA 98 com Afetação</b></p>"
    res.innerHTML += "<p>BA 98 com afetação, independentemente da quantidade, precisa ser atendido ou escalonado <b>(Supervisor, Gerente N5 ou Gerente N4)</b></p>"
    res.innerHTML += "<p>Obs: Sempre descrevam dentro do BA o nome das pessoas escalonadas.</p>"
    res.innerHTML += "<p>Não temos autorização de segurar acionamentos para horário comercial por qualquer tipo de problema.</p>"
    res.innerHTML += "<p>Acionamentos de segunda a segunda. Agora é 0 ou 1, ou atende ou escalona.</p>"
    res.innerHTML += "<p><b>⚠️Importante qualquer impedimento no atendimento de campo para 100% dos casos devem ser escalonando o supervisor ou gerente N5 ou gerente N4. de forma a garantir o pronto atendimento!</b></p>"
    res.innerHTML += "<p><b>2º Escalonamento de BA 98 com Afetação</b></p>"
    res.innerHTML += "<p><b>2.1 – Dentro do horário comercial das “07h até as 20h”(Horário comercial: De segunda-feira até sexta-feira, fora  feriados)</b></p>"
    res.innerHTML += "<p>Passados 4h da data de abertura do BA, escalonar Supervisor de campo da região do BA com afetação</p>"
    res.innerHTML += "<p>Passados 6h da data de abertura do BA, escalonar Gerente de campo N5</p>"
    res.innerHTML += "<p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p>"
    res.innerHTML += "<p><b>2.1 – Fora do horário comercial das “20:01h até as 06:59h” + sábados, domingos e Feriados</b></p>"
    res.innerHTML += "<p>Passados 4h da data de abertura do BA, escalonar Supervisor de Plantão</p>"
    res.innerHTML += "<p>Passados 6h da data de abertura do BA, escalonar Gerente de Plantão</p><p>Passados 8h da data de abertura do BA, escalonar o gerente N4</p>"
    res.innerHTML += "<p>Obs: <b>BAs 98 com afetação de TX-LL</b>, não entram na regra (2º Escalonamento) acima.</p>"
    
}

function TXLLCOF(){
    let res = document.getElementById("flista")
    
    res.innerHTML = "<p>Estamos com o indicador de disponibilidade fora da meta e com isso, peço a gentileza de redobrar a atenção com os dois pontos abaixo:</p>"
    res.innerHTML += "<p><b>1º Avisos de COF com afetação Móvel</b></p>"
    res.innerHTML += "<p>BAs de COF com afetação > 13, avisar imediatamente o Gerente N4, 24hs x 7 dias da semana.</p>"
    res.innerHTML += "<p><b>2º TX-LL</b></p>"
    res.innerHTML += "<p>Vamos redobrar a atenção com a abertura dos chamados junto com os provedores, principalmente Vivo.</p>"
    res.innerHTML += "<p>Para melhorar o tempo de abertura com os provedores, <b>vamos pedir ajuda entre nós</b>, assim entendo que vamos conseguir abrir os chamados mais rapidamente.</p>"
    res.innerHTML += "<p>Tenho visto que a solicitação de ajuda entre nós já está acontecendo, isso é muito positivo.</p>" 

}

function preditiva(){
    let res = document.getElementById("flista")
    
    res.innerHTML = "<p><b>Vamos começar a apoiar campo nos BA´s de preventiva relacionado ao tema preditivo com causa de falha TX-LL.</b></p>"
    res.innerHTML += "<p>Os supervisores de campo nos solicitarão abertura de chamado junto com o provedor de TX-LL.</p>"
    res.innerHTML += "<p><b>1º</b> Sala COR abrirá o chamado com o BA e LP em mãos. </p>"
    res.innerHTML += "<p><b>2º</b>  O número do chamado Oi a ser informado para o provedor será o número do BA de preventiva. </p>"
    res.innerHTML += "<p><b>3º </b> Na abertura do chamado, informar que o tratamento será somente em horário comercial. </p>"
    res.innerHTML += "<p><b>4º </b> O contato de retorno será o número do telefone do Supervisor da região. </p>"
    res.innerHTML += "<p><b>5º </b> <b>Obs:</b> Não temos autorização para encerrar o chamado. Somente o supervisor pode encerrar o chamado com o provedor. </p>"
    
}

function chamadosLL(){
    let res = document.getElementById("flista")
    let img = document.createElement("img")
    img.setAttribute('id', 'imagem')
    img.setAttribute('src', 'taxaerro.png')
    
    
    
    res.innerHTML = "<p><b>Verificação de taxa de Erro na Rede Nokia (Somente para 2G, usando comando ZYMO)</p></b>"
    res.innerHTML += "<p>Estamos com alto número de falhas reincidentes e o ofensor são os sites atendidos pela Vivo. Com isso vamos tratar os chamados da seguinte forma: Após a resolução da Vivo, vamos zerar as ET´s e monitorar por 3 horas a taxa de erro pelo comando ZYMO.</p>"
    res.innerHTML += "<p>Ao termino das 3 horas, vamos verificar pelo comando ZYMO se existe taxa de erro e não havendo, vamos autorizar o encerramento do chamado vivo e enviar um e-mail com o nome do site e chamado, conforme exemplo abaixo: </p>"
    res.innerHTML += "<p><b><i>Em caso de dúvidas ou falta de conhecimento, vamos acionar a equipe de TX para verificar e zerar as ET´s.</i></b></p>"
    res.innerHTML += "<p><b>Para:</b> LD-OI-CI-O&MSP </p>"
    res.innerHTML += "<p><b>Assunto:</b> Nome do Site, Número do Chamado. </p>"
    res.appendChild(img)
    
    
       
}

function vulto(){
    let res = document.getElementById("flista")
    
    res.innerHTML = "<p><b>Vulto Afetação > 5 e < 14. (Com ou Sem BA) </b></p>"
    res.innerHTML += "<p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p>"
    res.innerHTML += "<p>Fora do Horário Comercial: Supervisor</p>"
    res.innerHTML += "<p><b>Vulto Afetação a partir de 14. (Com ou Sem BA) </b></p>"
    res.innerHTML += "<p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p>"
    res.innerHTML += "<p>Fora do Horário Comercial: Imediatamente Supervisor</p>"
    res.innerHTML += "<p>Fora do Horário Comercial: Após 02h da falha escalonar o Gerente N5 independente do horário. </p>"
    res.innerHTML += "<p>Fora do Horário Comercial: Após 04h da falha escalonar Ger. N4 independente do horário. </p>"
    res.innerHTML += "<p><b>Sites 4G OI afetação >0 (Somente em horário Comercial) </b></p>"
    res.innerHTML += "<p>No período da 07h até 20h, com exceção Sábados, Domingos e Feriados, vamos avisar imediatamente o Gerente N5 + Ger. N4 sobre a interrupção de um ou mais sites 4G. </p>"
    res.innerHTML += "<p><b>Sites 4G OI afetação =< 2 (Fora do horário comercial) </b></p>"
    res.innerHTML += "<p>Escalonar após 02h Supervisor / Supervisor de Plantão. </p>"
    res.innerHTML += "<p>Após 04h da falha escalonar o Gerente N5 independente do horário. </p>"
    res.innerHTML += "<p>Após 06h da falha escalonar Ger N4 independente do horário. </p>"
    res.innerHTML += "<p><b>Sites 4G OI afetação >2 (Fora do horário comercial) </b></p>"
    res.innerHTML += "<p>Escalonar imediatamente Supervisor / Supervisor de Plantão. </p>"
    res.innerHTML += "<p>Após 02h da falha escalonar o Gerente N5 independente do horário. </p>"
    res.innerHTML += "<p>Após 04h da falha escalonar Ger. N4 independente do horário. </p>"
    res.innerHTML += "<p><b>Sites 4G Ransharing (BA COF SP / SUL / CO) </b></p>"
    res.innerHTML += "<p>Horário Comercial: Supervisor + Gerente N5 + Gerente N4</p>"
    res.innerHTML += "<p>Fora Horário Comercial: </p>"
    res.innerHTML += "<p>Após 02h da falha escalonar o Gerente Plantão</p>"
    res.innerHTML += "<p>Após 04h da falha escalonar o Gerente N4</p>"
}

function encBA(){
    let res = document.getElementById("flista")
    
    res.innerHTML = "<p>Estamos com alto número de falhas reincidentes com BA 98 causados por TX-LL Vivo. </p>"
    res.innerHTML += "<p>Vamos tratar os BAs 98 com afetação junto com os Supervisores de Campo para UF: SP. </p>"
    res.innerHTML += "<p>Com isso, todo BA 98 com afetação, repetida > 1 (Maior que um) TX-LL VIVO, vamos solicitar a autorização <b>de acordo</b> do supervisor de campo para fechamento do BA. </p>"
    res.innerHTML += "<p><b>Horário Comercial:</b> Supervisor da região. </p>"
    res.innerHTML += "<p><b>Fora do Horário Comercial:</b> Supervisor de plantão.</p>"
}

function CofSULCO(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>WhatsApp Infra-Vultos R2/R3</p></b>"
    res.innerHTML += "<p> BAs com interrupções, afetação >= 14 sites.</p>"
    res.innerHTML += "<p>BAs com interrupções, Interrupções de Sites Ransharing >=14.</p>"
    
    res.innerHTML += "<p><b>WhatsApp Alinhamento COR + Campo</b></p>"
    res.innerHTML += "<p>BAs de Rotas Inter-As RanSharing SUL/CO/SP, reforçando, somente postar no <b>Alinhamento COR + Campo</b>, não precisa postar no grupo <b>Infra Vultos R2/R3</b>.</p>"
    
    res.innerHTML += "<p>BAs de Rotas de TX, sem afetação, mas que gere risco de afetação para rede móvel, somente para UF:SP. (Este cenário deve ser certificado/validado e confirmado pela equipe de TX, para postagem no grupo WhatsApp Alinhamento COR + Campo).</p>"
    
}

function BAFO(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p>Todo BA causa <b>FO OI</b> não deve ser fechado nos <b>COS (SPCN1, SPCH1, SPCBS, SPCNS, SPC02)</b>, sempre tramitar o BA para o <b>COS de FO.<br></p>"
    res.innerHTML += "<p><b>Obs:</b> Mesmo com afetação.</p>"

}

function BAafetacao(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>1º) somente em horário comercial</b></p>"
    res.innerHTML += "<p>Todo BA 98 com afetação, repetido (>0) deve ser escalonado o supervisor responsável e depois colocar nota no grupo <b>Alinhamento+Campo</b>.</p>"
    res.innerHTML += "<p><b>Obs.: Somente para SP.</b></p>"
    res.innerHTML += "<p>Exemplo da nota: </p>"
    res.innerHTML += "<p>Numero BA, Site, REP: XX, Escalonado Supervisor Responsável XXXXX.</p>"
    res.innerHTML += "<p><b>Se a causa for TX-LL</b></p>"
    res.innerHTML += "<p>Exemplo da nota:</p>"
    res.innerHTML += "<p>Numero BA, Site, REP: XX, TX-LL, Supervisor Responsável XXXXX.</p>"
    res.innerHTML += "<p><b>2º) Fora do horário comercial</b></p>"
    res.innerHTML += "<p><b>Causa TX-LL repetida (>=3)</b></p>"
    res.innerHTML += "<p>Todo BA 98 com afetação, postamos nota no grupo <b>Alinhamento+Campo</b> e realizaremos o contato telefônico com o Supervisor da área ou Supervisor de Plantão.</p>"
    res.innerHTML += "<p><b>Obs.: Somente para SP.</b></p>"
    res.innerHTML += "<p>Exemplo da nota:</p>"
    res.innerHTML += "<p>Numero BA, Site, REP: XX, TX-LL, Supervisor Responsável XXXXX. </p>"
    res.innerHTML += "<p><b>Causa TX-LL repetida (<3) ou Site Sem BB repetida (>0) </b></p>"
    res.innerHTML += "<p>Todo BA 98 com afetação, somente postar nota no grupo <b>Alinhamento+Campo</b>.</p>"
    res.innerHTML += "<p><b>Obs.: Somente para SP. </b></p>"
    res.innerHTML += "<p>Exemplo da nota:</p>"
    res.innerHTML += "<p>Número BA, Site, REP: XX, TX-LL, Supervisor Responsável XXXXX. </p>"
    res.innerHTML += "<p><b>Repetida (=1) </b></p>"
    res.innerHTML += "<p>Todo BA 98 com afetação, somente postar nota no grupo <b>Alinhamento+Campo</b>.</p>"
    res.innerHTML += "<p><b>Obs.: Somente para SP. </b></p>"
    res.innerHTML += "<p>Exemplo da nota:</p>"
    res.innerHTML += "<p>Número BA, Site, REP: XX, Supervisor Responsável XXXXX.</p>"
    res.innerHTML += "<p><b>Repetidas (>=2), ou seja, causa não é TX-LL, site tem BB</b></p>"
    res.innerHTML += "<p>Todo BA 98 com afetação, postamos nota no grupo <b>Alinhamento+Campo</b> e realizaremos o contato telefônico com o Supervisor de Plantão. </p>"
    res.innerHTML += "<p><b>Obs.: Somente para SP. </b></p>"
    res.innerHTML += "<p>Exemplo da nota: </p>"
    res.innerHTML += "<p>Número BA, Site, REP:XX, Supervisor Responsável XXXXX. </p>"
    res.innerHTML += "<p><b>Obs.: Também colocar nota no BA</b></p>"

}

function ACrepetido(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p>Nosso indicador de reincidência na UF:SP aumentou e um dos pontos a ser melhorado é o tratamento do alarme de Falha de AC. Com isso, para tratamento do alarme de <b>Falha de AC</b>, até segunda ordem, vamos seguir a orientação abaixo:</p>"
    res.innerHTML += "<p><b>(Exceto Sábado, Domingo e Feriado)</p></b>"
    res.innerHTML += "<p>Após a identificação do <b>2º alarme de Falha de AC</b>, entrar em contato com Supervisor (Horário Comercial) / Supervisor de Plantão (Horário Fora do Comercial) para definir o atendimento.</p>"
    res.innerHTML += "<p><b>Importante o operador ter as informações das intermitências da Falha de AC para definição de atendimento em conjunta com o Supervisor</b></p>"

}

function semrecurso(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>1º )</b> Ao acionar o técnico campo e não havendo a disponibilidade do técnico, acionar o supervisor responsável em horário comercial e fora do horário comercial vamos acionar o supervisor de plantão.</p>"
    res.innerHTML += "<p><b>2º )</b> Se o técnico de campo está acionado e retornar a ligação para sala COR informando a impossibilidade de atender o acionamento, acionar o supervisor responsável em horário comercial e fora do horário comercial vamos acionar o supervisor de plantão</p>"

}

function acionamentoTEC(){
    let res = document.getElementById("flista")
    res.innerHTML = "<p><b>Conforme acordado gerencialmente</p></b>"
    res.innerHTML += "<p>Para todos os casos de Vulto a partir de 5 sites onde haja um concentrador enviar técnico imediatamente e após fazer acionamento de suporte de TX e de provedor se for o caso de TX LL com o técnico já em deslocamento</p>"

}


function vultoCN19(){
    let resLL = document.getElementById("flistaLL")

    resLL.innerHTML = "<h4>LPs de 155M</b></h4><br/>"

    resLL.innerHTML += "<p><b>Concentrador / SPSNG5546 - RUA ANTONIO NOVAES, 230 / SERRA NEGRA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> 3GSPSNG6014 / SPSNG5547 / SPSNG3199 / SPSNG5548 / 3GSPSNG6015 / 3GSPSNG3420 / 3GSPSNG6016</p>" 
    resLL.innerHTML += "<p><b>SPSNG5546</b> / LP (155M) 115973892007298</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador / RFD3150 - RUA OSVALDO RICOMINI,350-MARIA TERESA A GIMENES / RAFARD</b></p>" 
    resLL.innerHTML += "<p><b>Cascata:</b> 3GSPRFD1523 / SPCPR4905 / 3GSPCPR1184</p>" 
    resLL.innerHTML += "<p><b>SPRFD3150</b> / LP (155M) 115163496201492</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador / SPSJV5432 - PRAÇA CORONEL JOAQUIM JOSÉ, 176 / SÃO JOÃO DA BOA VISTA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> SPSJV5430 / SPSJV5431 / SPSJV1213 / SPAGT2249 / 3GSPSJV1690 / 3GSPSJV1691 / 3GSPSJV1689</p>"
    resLL.innerHTML += "<p><b>SPSJV5432</b> / LP (155M) 115533622023199</p><br/>"
 
    resLL.innerHTML += "<p><b>Concentrador SPMOC5162 - AV. SENADOR JOSÉ ERMIRIO DE MORAES, Nº 852-JARDIM LAVINIA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> SPMOC5161 / SPMOC1124 / SPMOC1123 / 3GSPMOC1650 / 3GSPMOC1651</p>"
    resLL.innerHTML += "<p><b>SPMOC5162</b> / LP (155M) 113803656000694</p><br/>"
 
    resLL.innerHTML += "<p><b>Concentrador SPPAG5170 - RUA DUQUE DE CAXIAS, 1288 / PIRASSUNUNGA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> SPPAG5257 / SPPTF5267 / SPSRQ5371 / SPSRQ5372 / SPPAG5254 / SPPAG5258 / SPPAG5256 / SPSZX2551 / SPPAG5255 / SPSRQ5373 / 3GSPPAG5893 / 3GSPPAG5892 / 3GSPPAG5890 / 3GSPPTF1731 / 3GSPPAG5891</p>"
    resLL.innerHTML += "<p><b>SPPAG5170</b> / LPs (155M) 114833561017295 / 114833561023896</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador PDA5207 - FAZENDA SÃO JOÃO DA BOA VISTA - MORRO DO CRISTO REDENTOR / PEDREIRA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> 3GSPPDA1857 / SPPDA5206 / 3GSPPDA1856</p>"
    resLL.innerHTML += "<p><b>SPPDA5207</b> / LP (155M) 114573893011794</p><br/>"


    resLL.innerHTML += "<h4>LPs de 2M</b></h4><br/>"

    resLL.innerHTML += "<p><b>SPAGL4671 / RUA SALVADOR,410-MORRO DO MIRANTE, PRÓXIMO À CAIXA D'ÁGUA DA PREFEITURA – ÁGUAS DE LINDÓIA</b></p>"
    resLL.innerHTML += "<p><b>SPAGL4671</b> / LP 110063824010392</p>"
    resLL.innerHTML += "<p><b>SPAGL4671</b> / LP 110063824010490</p>"
    resLL.innerHTML += "<p><b>3GSPAGL5699</b> / LP (10M) 110063824010295</p>"
    resLL.innerHTML += "<p><b>3GSPAGL5699</b> / LP 110063824010597</p>"
    resLL.innerHTML += "<p><b>3GSPAGL5699</b> / LP 110063824010694</p><br/>"


    resLL.innerHTML += "<p><b>ARO4687 - RUA ALCIDES BARASSA,499 CA B-JARDIM SILVANA - SÃO JUDAS / AMPARO</p></p>"
    resLL.innerHTML += "<p><b>3GSPARO5707</b> / LP 110233807237091</p>"
    resLL.innerHTML += "<p><b>3GSPARO5707</b> / LP 110233807237296</p>"
    resLL.innerHTML += "<p><b>SPARO4687</b> / LP 110233807236494</p>"
    resLL.innerHTML += "<p><b>SPARO4687</b> / LP 110233807237393</p>"
    resLL.innerHTML += "<p><b>SPARO4687</b> / LP 111533671014392</p><br/>"

    resLL.innerHTML += "<p><b>SPARO4689 - RODOVIA JOÃO BATISTA BEIRA, KM 50,5 - SP-095/R. JOÃO MITIDIERI, 10 - AX 1 - BELA VISTA / AMPARO</b></p>"
    resLL.innerHTML += "<p><b>Cascata: </b> SPARO4686 / 3GSPARO4839</p>"
    resLL.innerHTML += "<p><b>SPARO4689</b> / LP 110233807100797</p>"
    resLL.innerHTML += "<p><b>SPARO4686</b> / LP 110233807129094</p>"
    resLL.innerHTML += "<p><b>3GSPARO4839</b> / SEM LP NAS PLANILHAS</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador: SPCBC4919 - RUA MARIO BENI,32 CENTRO / CASA BRANCA</b></p>"
    resLL.innerHTML += "<p><b>Cascata:</b> 3GSPCBC1560 / SPCBC4919 / CBC1122</p>"
    resLL.innerHTML += "<p><b>3GSPCBC1560</b> / LP 111533671011091</p>"
    resLL.innerHTML += "<p><b>3GSPCBC1560</b> / LP 111533671011296</p>"
    resLL.innerHTML += "<p><b>SPCBC4919</b> / LP 111533671017197</p>"
    resLL.innerHTML += "<p><b>CBC1122</b> / LP 111533671017090</p><br/>"

    resLL.innerHTML += "<p><b>SPDVN2327 / RUA JOAQUIM GARCIA, 160 – DIVINOLÂNDIA</b></p>"
    resLL.innerHTML += "<p><b>SPDVN2327</b>  / LP 111883663105193</p><br/>"

    resLL.innerHTML += "<p><b>SPIOI2386 / RUA ANDRE DE SANTIS, 392 – ITOBI</b></p>"
    resLL.innerHTML += "<p><b>SPIOI2386</b>  / LP 113073647102099</p><br/>"



    resLL.innerHTML += "<p><b>SPMEG2415 / AVENIDA VEREADOR APARECIDO MANO FERNALI, S/N/CRT ALVES, 1156 – MONTE ALEGRE DO SUL</b></p>"
    resLL.innerHTML += "<p><b>SPMEG2415</b> / LP 113873899004998</p>"
    resLL.innerHTML += "<p><b>SPMEG2415</b> / LP 113873899005099</p>"
    resLL.innerHTML += "<p><b>3GSPMEG1521</b> / LP 113873899003096</p>"
    resLL.innerHTML += "<p><b>3GSPMEG1521 / LP 113873899004491</p><p><b>3GSPMEG1521 / LP (10M) 113873899002693</p><br/> "
    
    resLL.innerHTML += "<p><b>SPMEG1526 / RUA ELENIR BELLAGAMBA ORLANDI, S/N - FRENTE AO N°271 - MONTE ALEGRE DO SUL</b></p>"
    resLL.innerHTML += "<p><b>SPMEG1526</b> / LP 110233807236990</p>"
    resLL.innerHTML += "<p><b>3GSPMEG1497</b> / LP 110233807227592</p>"
    resLL.innerHTML += "<p><b>3GSPMEG1497</b> / LP 110233807231590</p><br/>"


    resLL.innerHTML += "<p><b>MMU2414 - RUA AMADEU AMARAL, S/N / MOMBUCA</b></p>"
    resLL.innerHTML += "<p><b>SPMMU2414</b> / LP 113843488001594</p>"
    resLL.innerHTML += "<p><b>SPMMU2414</b> / LP 113843488001799</p><br/>"

    resLL.innerHTML += "<p><b>SPSDJ2499 / AVENIDA/RUA DA SAUDADE,540 – SANTO ANTONIO DO JARDIM</b></p>"
    resLL.innerHTML += "<p><b>SPSDJ2499</b>  / LP 116363654001594</p><br/>"


    resLL.innerHTML += "<p><b>SPSSG2506 / RUA TOMAZ DE MESQUITA, 112 / SÃO SEBASTIÃO DA GRAMA</p></b>"
    resLL.innerHTML += "<p><b>SPSSG2506</b> / LP 115743646102099</p><br/>"


    resLL.innerHTML += "<p><b>SOR0030 - LAVRAS DE BAIXO, 760 / SOCORRO</b></p>"
    resLL.innerHTML += "<p><b>3GSPSOR0031</b> / LP 116073895019694</p>"
    resLL.innerHTML += "<p><b>3GSPSOR0031</b> / LP 116073895019791</p>"
    resLL.innerHTML += "<p><b>3GSPSOR0031</b> / LP 116073895019899</p>"
    resLL.innerHTML += "<p><b>3GSPSOR0031</b> / LP 116073895017594</p>"
    resLL.innerHTML += "<p><b>SPSOR0030</b> / LP 116073895019996</p><br/>"

    resLL.innerHTML += "<p><b>SPSOR5555 - RUA PADRE FRANCISCO PAIVA, 280 / SOCORRO</b></p>"
    resLL.innerHTML += "<p><b>SPSOR5555</b> / LP 116073895018892</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP 116073895017292</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP 116073895017799</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP 116073895018795</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP 116073895017497</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP (10M) 116073895009397</p>"
    resLL.innerHTML += "<p><b>3GSPSOR1891</b> / LP 10(M) 116073895000390</p><br/>"
    
    resLL.innerHTML += "<p><b>Concentrador: SPSJR5436 / RUA SÃO VICENTE, S/N - AO LADO DO Nº 395 – SÃO JOSÉ DO RIO PARDO</b></p>"
    resLL.innerHTML += "<p><b>Cascata: </b> 3GSPSJR1885 / SPSJR5435 / SPSJR5437 / 3GSPSJR1887</p>"
    resLL.innerHTML += "<p><b>SPSJR5436</b> / LP 115613608017790</p>"
    resLL.innerHTML += "<p><b>SPSJR5435</b> / LP 115613608017898</p>"
    resLL.innerHTML += "<p><b>SPSJR5437</b> / LP 115613608018398</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1885</b> / LP 115613608023499</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1885</b> / LP 115613608023596</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1885</b> / LP 115613608023693</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1885</b> / LP 115613608023391</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1887</b> / LP 115613608023898</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1887</b> / LP 115613608023995</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1887</b> / LP 115613608024096</p>"
    resLL.innerHTML += "<p><b>3GSPSJR1887</b> / LP 115613608024193</p><br/>"


      
    resLL.innerHTML += "<p><b>SMY2490 - RUA FRANCISCO DE ANGELO, S/N /RUA JOÃO BATISTA GRAVENA, 1380 / SANTA MARIA DA SERRA</b></p>"
    resLL.innerHTML += "<p><b>SPSMY2490</b> / LP 116263487002190</p>"
    resLL.innerHTML += "<p><b>SPSMY2490</b> / LP 116263487002298</p><br/>"
 
    
 

    resLL.innerHTML += "<p><b>SPSPD5505 / RUA JOSÉ E. DE OLIVEIRA,1160 / SÃO PEDRO</b></p>"
    resLL.innerHTML += "<p><b>SPSPD5505</b> / LP 115703481009897</p>"
    resLL.innerHTML += "<p><b>SPSPD0891</b> / LP 115703481004291</p>"
    resLL.innerHTML += "<p><b>SPSPD0891</b> / LP 115703481010690</p>"
    resLL.innerHTML += "<p><b>SPSPD0893</b> / LP 115703481009099</p>"
    resLL.innerHTML += "<p><b>SPSPD0893</b> / LP 115703481010496</p><br/>"

    resLL.innerHTML += "<p><b>SPTBU2519 / RUA CAMPOS SALES, 240 – TAMBAU</b></p>"
    resLL.innerHTML += "<p><b>SPTBU2519</b> / LP 116493673111497</p>"
    resLL.innerHTML += "<p><b>SPTBU2519</b> / LP 116493673111094</p>"
    resLL.innerHTML += "<p><b>SPTBU2519</b> / LP 116493673110095</p><br/>"


}   

function vultoCN12(){
    let resLL = document.getElementById("flistaLL")

    resLL.innerHTML = "<h4>LPs de 2M e 10M</b></h4>"

    resLL.innerHTML += "<p><b>SST5518 - AVENIDA/VIA PRESTES MAIA, 810 (PARALELA À RODOVIA RIO X SANTOS, KM166) – SÃO SEBTASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>Obs.:</b> Não há informação de qual é a LP de 2M para o 3G</p>"
    resLL.innerHTML += "<p><b>3GSPSST2133</b> / LP (10M) 115733862611195</p>"
    resLL.innerHTML += "<p><b>SPSST5518</b> / LP 115733862611292</p>"
    resLL.innerHTML += "<p><b>SPSST5518</b> / LP 115733862611390</p>"
    resLL.innerHTML += "<p><b>SPSST5518</b> / LP 115733862611594</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador: SST5513 – ALAMEDA TORRES, 10 - TOQUE TOQUE PEQUENO - SÃO SEBTASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>Cascata: </b>  3GSPSST3377 / SPSST3458</p>"
    resLL.innerHTML += "<p><b>Obs.:</b>  Não há informação de qual é a LP de 2M para o 3G</p>"
    resLL.innerHTML += "<p><b>3GSPSST3377</b> / LP (10M) 115733864914390</p>"
    resLL.innerHTML += "<p><b>SPSST5513</b> / LP 115733864914594</p>"
    resLL.innerHTML += "<p><b>SPSST5513</b> / LP 115733864914691</p>"
    resLL.innerHTML += "<p><b>SPSST3458</b> / LP 120743867021196</p><br/>"

    resLL.innerHTML += "<p><b>SST5527 - RODOVIA SP 55 (RIO-SANTOS), KM184+813,2 (SENT. NORTE) BORACEIA / RDV MANOEL H DO REGO SP 55 – SÃO SEBASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>3GSPSST3339</b> / LP (10M) 120743867021099</p>"
    resLL.innerHTML += "<p><b>3GSPSST3339</b> / LP 120743867021390</p>"
    resLL.innerHTML += "<p><b>3GSPSST3339</b> / LP 120743867021498</p>"
    resLL.innerHTML += "<p><b>SPSST5527</b> / LP 120743867021196</p>"
    resLL.innerHTML += "<p><b>SPSST5527</b> / LP 120743867021293</p><br/>"

    resLL.innerHTML += "<p><b>Concentrador: SST5521 - AV. MÃE BERNARDA, 4035 / AV MANOEL HIPOLITO DO REGO,DR – SÃO SEBASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>Cascata: </b>  3GSPSST3329 / SPSST5520 / 3GSPSST5938</p>"
    resLL.innerHTML += "<p><b>Obs.: </b>  Não há informação de LP para o 3GSPSST3329</p>"
    resLL.innerHTML += "<p><b>SPSST5521</b>  / LP 115733864913997</p>"
    resLL.innerHTML += "<p><b>SPSST5521</b>  / LP 115733864914098</p>"
 
    resLL.innerHTML += "<p><b>Obs.: </b>  Não há informação de qual é a LP de 2M para o 3G</p>"
    resLL.innerHTML += "<p><b>SPSST5520</b>  / LP 115733864912796</p>"
    resLL.innerHTML += "<p><b>SPSST5520</b>  / LP 115733864912699</p>"
    resLL.innerHTML += "<p><b>3GSPSST5938</b>  / LP (10M) 115733864912290</p><br/>"

    resLL.innerHTML += "<p><b>SST5517 - RUA DAS PEDRAS,48/60 – SÃO SEBASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>Obs.: </b>   Não há informação de qual é a LP de 2M para o 3G</p>"
    resLL.innerHTML += "<p><b>SPSST5517</b>   / LP 120743865020290</p>"
    resLL.innerHTML += "<p><b>SPSST5517</b>   / LP 120743865020494</p>"
    resLL.innerHTML += "<p><b>3GSPSST2982</b>   / LP (10M) 120743865021091</p><br/>"
 
    resLL.innerHTML += "<p><b>SST5512 - RUA BERNADINO DE MATOS,400 – SÃO SEBASTIÃO</b></p>"
    resLL.innerHTML += "<p><b>Obs.: </b>  Não há informação de qual é a LP de 2M para o 3G</p>"
    resLL.innerHTML += "<p><b>SPSST5512</b>   / LP 115733864913091</p>"
    resLL.innerHTML += "<p><b>3GSPSST3327</b>   / LP (10M) 115733864913890</p><br/>"

    resLL.innerHTML += "<p><b>UTB5645 - RODOVIA MANUEL HIPOLITO REGO (SP 55), KM 68.5, N°700 - HOTEL ÁGUA DOCE - UBATUBA<br/></p>"
    resLL.innerHTML += "<p><b>SPUTB5645</b>    / LP 116773848206496</p>"
    resLL.innerHTML += "<p><b>SPUTB5645</b>    / LP 116773848206895</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3368</b>    / LP 116773848206992</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3368</b>    / LP 116773848207093</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3368</b>    / LP (10M) 116773848206399</p><br/>"
    
    resLL.innerHTML += "<p><b>UTB5639 – RUA 37, 191 - UBATUBA<br/></p>"
    resLL.innerHTML += "<p><b>SPUTB5639</b>    / LP 116773845012895</p>"
    resLL.innerHTML += "<p><b>SPUTB5639</b>    / LP 116773845012992</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3343</b>    / LP 116773845012593</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3343</b>    / LP 116773845013395</p>"
    resLL.innerHTML += "<p><b>3GSPUTB3343</b>    / LP (10M) 116773845013492</p><br/>"


}