---
name: bella-landing-premium-funil
description: Reconcilia a landing bella.savinoteam.tech com a decisao de oferta de que o cliente-ancora e premium por padrao desde o primeiro case, para coletar atribuicao. A landing passa de atende-only para o funil completo (atrai, atende, mostra), com o premium entrando como elevacao numa narrativa unica, sem virar catalogo de planos. Conserta a caixa de video vazia e reserva slots de prova honestos.
status: approved-design
owner: Lucas Savino
created: 2026-05-29
supersedes: docs/superpowers/specs/2026-05-29-bella-landing-oferta-resultado-design.md (no repo agente-whatsapp-clinicas), no ponto em que aquele spec colocou a metade de atracao e a Thaiz fora de escopo
canonical_offer_spec: agente-whatsapp-clinicas/docs/superpowers/specs/2026-05-29-bella-oferta-resultado-design.md (secoes 2.1 e 4.4)
---

# Bella landing, premium como funil completo

## 0. Contexto e a contradicao que este spec resolve

A landing live (bella.savinoteam.tech) hoje conta meia historia. Do Hero ao rodape, a mensagem unica e "a gente nao deixa escapar a cliente que ja chamou". E a metade defensiva do funil, estancar o vazamento. A pagina nao diz que o negocio tambem traz cliente nova nem que mede de onde a cliente veio. O verbo da pagina e segurar, nunca encher.

Isso colide com a decisao de oferta. O spec canonico (secoes 2.1 e 4.4) define que o cliente-ancora e premium por padrao, Bella mais o pacote de video da Thaiz, com atribuicao rastreavel instrumentada desde o dia 1, porque e ai que se constroi a prova do funil completo. Lucas confirmou nesta sessao: premium desde o primeiro case, por padrao, para coletar os dados.

O spec anterior da landing colocou a metade de atracao, a Thaiz e o marketing explicitamente fora de escopo, com o argumento de nao construir marca de estudio antes do primeiro caixa. As duas coisas nao cabem juntas: se a primeira cliente que ve a pagina e premium por padrao, a pagina precisa representar o funil premium. A decisao de Lucas desempata a favor do premium. Este spec corrige a passada anterior, que saiu atende-only.

Restricao herdada que continua valendo: nao rebrandar para estudio de aquisicao agora, nao inventar resultado nem mostrar conteudo de exemplo que ainda nao existe. O premium entra pelo metodo, nao pela prova que ainda nao temos.

## 1. Para quem a pagina serve e o que ela precisa fazer

Publico primario: o cliente-ancora e o cliente 2, vistos numa visita presencial enquanto Lucas apresenta. A pagina e suporte de venda ao vivo, nao maquina de conversao de trafego frio. O trabalho dela e dar lastro visual a historia que Lucas conta, parecer um negocio premium e legitimo no nivel inconsciente, e nao contradizer o pitch. Uma caixa de video vazia contradiz o pitch na frente do cliente, por isso o conserto dela e prioridade.

## 2. Decisoes

1. Arquitetura aprovada: narrativa unica com o premium entrando como elevacao. A dor continua sendo a porta de entrada no Hero. O funil completo entra logo depois como a foto inteira do que o negocio faz, nao como uma segunda oferta concorrente nem como catalogo de tres planos lado a lado.
2. Premium por padrao na pagina: a landing representa o funil completo (atrai, atende, mostra) porque a ancora ja e premium. Nao ha toggle base versus premium na pagina.
3. Honestidade metodo versus resultado: a pagina afirma o metodo a vontade, porque e verdade hoje (a gente atrai, atende e mede). Resultado, numeros e conteudo de exemplo so entram quando existirem de fato. Misturar os dois derruba a confianca.
4. Caixa de video: o componente passa a nao renderizar nada enquanto nao houver NEXT_PUBLIC_VIDEO_ID. O mockup de chat animado ja mostra a Bella funcionando. Quando Lucas gravar e setar o ID, o video reaparece sozinho, fora da area nobre do topo.
5. Linguagem visual mantida: Fraunces no H1, Geist no corpo, verde do WhatsApp so nos CTAs e no mockup, coral living-coral como cor de acento. Nao e redesign visual, e recontar a historia e fechar buracos. O coral ganha um papel semantico novo: cor dos dois tempos de crescimento do funil (atrai e mostra), com o verde no tempo do meio (atende).
6. Regra de copy: sem travessoes, sem dois-pontos e sem asteriscos no texto da pagina, e sem os vicios de voz de IA (negar e afirmar em par, antitese paralela, fecho do tipo "quem X, quem Y").

## 3. Nova estrutura da pagina (ordem de cima para baixo)

1. Hero (mantido, ajuste minimo)
2. Funil completo (secao nova, ocupa o lugar onde hoje esta a caixa de video vazia)
3. Como a Bella atende, os 4 cards atuais (mantido, reposicionado como o detalhe do tempo atende)
4. A gente vai ate voce, fundadores (mantido, copy evoluida para mostrar os papeis)
5. FAQ (mantido, mais duas perguntas)
6. Pricing (mantido, mais uma linha de conteudo)
7. Video (self-hide, movido para perto do rodape, aparece so quando houver ID)
8. LiveDemo (mantido)
9. Footer (mantido, ajuste opcional de copy)

Slot de resultados e case: posicao reservada logo depois do funil. Componente ResultadosCase definido com contrato de dados claro, mantido fora de page.tsx ate haver case real. Nao renderiza nada agora, para nao repetir o erro da caixa vazia.

## 4. Mudancas por componente

### Hero (components/Hero.tsx)
Mudanca minima. O Hero continua sendo a porta de entrada pela dor, porque o premium entra como elevacao depois, nao no topo. Mantem H1, subhead, CTAs e mockup. Mantem a linha de confianca carioca. Nenhuma mudanca obrigatoria de copy aqui; se algo mudar, e so um polimento leve do subhead.

### Funil completo (componente novo, components/FunilCompleto.tsx)
O coracao do premium. Entra logo depois do Hero.

Eyebrow: "O funil completo"

H2 proposto: "Da primeira mensagem ate a agenda cheia."

Subtexto proposto: "A gente cuida das tres pontas. Traz cliente nova com conteudo, atende na hora pelo WhatsApp, e mostra de onde cada agendamento veio."

Tres tempos em cards ou faixa horizontal, com icone e cor:
- Atrai (coral). "Conteudo de video que faz cliente nova chamar a sua clinica."
- Atende (verde WhatsApp). "A Bella responde na hora e agenda, de dia e de noite."
- Mostra (coral). "A gente liga cada conteudo ao agendamento que ele trouxe."

O tempo "Mostra" e o moat, atribuicao rastreavel. E o que separa o negocio do chatbot de R$197. Visualmente, sugerir o fluxo entre os tres (seta, linha ou numeracao) para o cerebro ler funil, nao tres features soltas.

### Como a Bella atende (components/ValueBullets.tsx)
Mantem os 4 cards, que ja estao corrigidos (sem falar de profissionais ou equipe). Reposiciona como detalhe do tempo atende. Ajuste opcional do H2 atual "Atende, agenda, captura." para deixar claro que e o aprofundamento do tempo do meio do funil. Manter o card "PT BR sem alucinacao".

### A gente vai ate voce (components/ComoFunciona.tsx)
Mantem como o moat presencial, que e o ativo mais forte da pagina. Evolui a copy para deixar visivel a divisao de papeis, agora que o premium esta em escopo: a Thaiz produz o video que atrai, o Lucas constroi a IA que atende, e os dois vao ate a clinica. A foto passa a fazer dois trabalhos, confianca humana e a filmmaker que vai produzir o conteudo da clinica.

Legenda da foto proposta (substitui a atual): "A gente, no Rio. A Thaiz cuida do video que atrai, o Lucas da IA que atende, e os dois vao ate voce."

Os tres passos atuais (visita, no ar em um dia, acompanhamento mensal) continuam validos.

### FAQ (components/FAQ.tsx)
Mantem as 4 perguntas atuais e adiciona duas que o premium cria:
- "Voces tambem trazem cliente nova ou so atendem?" Resposta no metodo: alem da Bella atender e agendar, a gente produz conteudo de video pra trazer cliente nova, e mostra qual conteudo virou agendamento.
- "Como voces sabem que funcionou?" Resposta no moat de atribuicao: a gente liga cada peca de conteudo ao lead e ao agendamento que ela trouxe, entao da pra ver de onde veio cada cliente. Sem isso ninguem consegue provar resultado.

### Pricing (components/Pricing.tsx)
Mantem proposta sob medida, sem numero, e o modelo de risco invertido (entrada, parte amarrada a resultado, mensalidade). Adiciona na lista do que esta incluido uma linha de conteudo e atracao, para a pagina casar com o funil completo. O risco invertido continua sendo a resposta a objecao de preco.

### Video (components/VideoSection.tsx)
Quando nao houver NEXT_PUBLIC_VIDEO_ID, o componente retorna null (nao renderiza secao nenhuma). Hoje ele renderiza uma caixa aspect-video cinza que parece quebrada. Quando o ID existir, mantem o LiteYouTubeEmbed. Mover a secao para perto do rodape, antes do LiveDemo, para que o video, quando existir, fique na area de demonstracao e nao no topo nobre.

### Footer (components/Footer.tsx)
Ajuste opcional de copy para refletir que e mais do que so atendimento, sem rebrandar para estudio. Baixa prioridade.

### Meta (app/layout.tsx)
Revisar title, description e og para incluir a ideia de trazer e atender, nao so atender. Hoje a meta diz so atendimento. Sem inventar resultado.

## 5. Componentes novos e contrato

- FunilCompleto.tsx: server component puro, sem estado, segue o padrao de ValueBullets e ComoFunciona (Eyebrow mais grid de cards). Recebe nada, dados internos. Coral nos tempos atrai e mostra, verde no atende.
- ResultadosCase.tsx: definido com um contrato de dados (por exemplo lista de metricas com rotulo e valor, e um depoimento opcional com nome e cargo). Mantido fora de page.tsx ate haver case real. Documentar o shape no proprio arquivo para o drop-in futuro ser trivial.

## 6. Guardrail de honestidade (criterio duro)

A pagina pode afirmar o metodo, porque e verdade hoje. Nao pode afirmar resultado nem mostrar conteudo ou numeros que ainda nao existem. Em concreto:
- Pode dizer: a gente atrai com conteudo, atende com a Bella, e mede a atribuicao.
- Nao pode dizer: clinica X aumentou Y por cento, nem mostrar depoimento ou peca de conteudo inventada.
- Nenhuma caixa vazia que pareca conteudo que deveria estar la (regra que mata a caixa de video e o slot de resultados ate terem dado real).

## 7. Fora de escopo (YAGNI)

Rebrand completo para estudio de aquisicao, paginas internas, blog, formulario proprio (o CTA continua sendo WhatsApp), depoimentos e numeros de case (nao existem ainda), galeria de conteudo da Thaiz (nao existe ainda), multi-tenant de landing por cliente, dark mode. Tudo isso e fase posterior.

## 8. Notas tecnicas

- Next nao-padrao: ler node_modules/next/dist/docs/ no repo da landing antes de escrever codigo, conforme o AGENTS.md.
- shadcn novo (base-ui), nao Radix. Accordion sem type="single". Button sem asChild, usar a com buttonVariants. Conferir node_modules/@base-ui/react antes de assumir API.
- Trabalhar num branch novo no repo bella-landing. Nao tocar na main (producao) antes de Lucas aprovar.
- Revisao visual antes de qualquer merge: build local mais screenshot via Playwright do crawl4ai-env apontando para localhost (preview Vercel e auth-gated). Lucas aprova por screenshot.
- Deploy de producao so via Vercel CLI com token vcp_ (auto-deploy GitHub esta quebrada). Passos em reference_bella_landing.md. Deploy so depois da aprovacao.
- Manter componentes pequenos e com proposito unico, seguindo o padrao atual.

## 9. Criterios de sucesso

- A pagina conta o funil completo (atrai, atende, mostra), nao so atende.
- O premium aparece como elevacao numa narrativa unica, sem catalogo de planos.
- Atribuicao rastreavel visivel como o diferencial, nao escondida.
- Nenhuma caixa vazia nem afirmacao de resultado que nao existe.
- Papeis de Lucas e Thaiz visiveis na secao dos fundadores.
- Build passa, screenshot renderiza sem erro, Lucas aprova o visual antes de qualquer merge ou deploy.

## 10. Pendencias

1. Copy final do Hero (manter ou polir o subhead), a decidir na implementacao.
2. Layout exato do funil (tres cards versus faixa com setas), a decidir com screenshot.
3. Se o componente ResultadosCase e construido ja agora (fora de page.tsx) ou so documentado, a decidir no plano.
4. Ajuste de copy do Footer e da meta, a confirmar no preview.

## 11. Proximo passo

Self-review deste spec, review do Lucas, e entao invocar writing-plans para o plano de implementacao no repo bella-landing.
