# Combustível App

Este é um aplicativo simples desenvolvido em React Native. Este projeto foi criado como um desafio para praticar conceitos de navegação, estados e componentes do React Native.

## Funcionalidades
- O usuário insere os preços do álcool e da gasolina.
- O aplicativo calcula qual é a melhor opção para abastecer:
  - Se o resultado da divisão do preço do álcool pelo da gasolina for menor que 0.7, compensa abastecer com álcool.
  - Caso contrário, compensa abastecer com gasolina.
- Exibe o resultado em uma tela separada.

## Componentes Utilizados

### Principais Componentes do React Native:
- **`TextInput`**: Usado para capturar os preços digitados pelo usuário.
- **`Button`**: Para executar a ação de calcular e navegar para a próxima tela.
- **`View`**: Contêiner para organizar e alinhar os elementos na tela.
- **`Text`**: Para exibir mensagens e títulos.

### Navegação:
- **React Navigation**:
  - Configurado para alternar entre a tela inicial e a tela de resultado.
  - Passagem de parâmetros entre telas (preços de álcool e gasolina).

### Hooks:
- **`useState`**: Para armazenar e gerenciar os valores digitados nos campos de entrada.

## Estrutura do Projeto
- **Tela Inicial (`HomeScreen`)**:
  - Inputs para os preços do álcool e gasolina.
  - Botão "Calcular" que leva para a tela de resultados.
- **Tela de Resultado (`ResultScreen`)**:
  - Exibe os preços inseridos.
  - Mostra se compensa mais álcool ou gasolina.
  - Possui um botão para recalcular.

## Tecnologias Utilizadas
- **React Native**
- **React Navigation**

