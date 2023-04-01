
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Para o desenvolvimento do projeto, estamos fazendo uso de diversas plataformas que nos permitem produzir documentos, imagens e controlar o código. Com o objetivo de criar esses aplicação, adotamos as seguintes ferramentas:

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito são apresentados na tabela que se segue:

|  |  |  |
| :---         |     :---:      |          ---: |
| Repositório de código fonte | GitHub     |https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-fitness-control    |
| Documentos do projeto     | Google Docs       |https://docs.google.com/document/d/1vizBZeFyAiDnVGJ43c5mHQJUYLd2k-Ng-bjBssBXYbg/edit#heading=h.dezya3dc79sz      |
| Projetos de interface e Wireframes     | Figma       | https://www.figma.com/     |
| Gerenciamento do Projeto     | GitHub Projects       |https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-fitness-control      |


## Controle de Versão

Para gestão do código fonte do software, é utilizado um processo de controle de fluxo com base no Git Flow apresentado por Vincent Driessen (2010), mostrado na figura na seguir.

![Fluxo de Controle](https://user-images.githubusercontent.com/108990294/229297232-5b199c55-be4e-46df-a4f8-301468c6d0e8.PNG)


O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

A branch Master só receberá alterações testadas na Develop, ou seja, trabalharemos os testes e o desenvolvimento na Develop e daremos merge com a master sempre que tiver uma nova versão.

Para o desenvolvimento de features específicas serão criadas branches temporárias, que surgirão da Develop. Posteriormente faremos merge entre a feature e a develop, para que possamos testar e por fim, dar uma nova versão do projeto na master.


## Gerenciamento de Projeto

### Divisão de Papéis

O projeto será guiado pelo scrum como metodologia de desenvolvimento, onde as sprints são a base das entregas que serão realizadas ao longo do período de realização do projeto.  

A equipe será organizada da seguinte maneira: 

- Scrum Master: Gabriel Puddo;
- Product Owner: Guilherme Oliveira;
- Equipe de Desenvolvimento: João Victor, Carlos Marques, Guilherme Oliveira, Gabriel Puddo;
- Equipe de Design:Carlos Marques.

### Processo

As tarefas estarão distribuídas no GitHub projects, que estará estruturado da seguinte maneira: 

 

- Backlog: todas as atividades que devem ser realizadas no projeto, desde a documentação até o desenvolvimento do e-commerce;
- To-do (O todo sempre tem que der a data alterada para o dia inicial daquela sprint semanal): o que está precisa ser feito e que foi definido previamente para aquela sprint. 
- In progress: O que está sendo feito durante a sprint;
- Sprint (aqui a sprint possui a data de fim, também deve ser alterada): Nessa coluna ficam os artefatos produzidos durante a sprint em questão; 
- Test: O que precisa ser testado;
- Done: Tudo o que está pronto independente da sprint. 
 

O quadro que estamos utilizando está na URL: 

https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/324 

![Projeto Fitness Control](https://user-images.githubusercontent.com/108990294/229297711-d99d60f9-6eec-4b6b-880e-fc9479ceb7ee.PNG)

 

É importante saber que a data do To-do e da Sprint estarão diferentes do print porque são alteradas semanalmente 

### Ferramentas

Editor de código: Visual Studio Code 

Ferramentas de comunicação: Whatsapp 

Ferramentas de desenho de tela (wireframing): Figma 

Ferramentas de gerenciamento do projeto: Github 

O Visual Studio Code foi escolhido porque ele possui uma integração com o sistema de versão e seu suporte ao desenvolvimento com react. O Whatsapp foi escolhido como ferramenta de comunicação por ser mais prática. Para criar diagramas utilizamos o Figma por melhor captar as necessidades da nossa solução. Por fim, para gerenciar o projeto foi escolhido o Github, por sua integração com o sistema de versão.
