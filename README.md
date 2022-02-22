# 🍔Projeto Hamburgueria - Moti com Expo
> 🍔 Exemplo de UI em Expo com animações utilizando o Moti

Projeto utilizado nas aulas de Programação para Dispositivos Móveis na FATEC Itu. (Faculdade de Tecnologia Dom Amaury Castanho).  
A Fatec Itu é uma faculdade pública e gratuita do Centro Paula Souza, órgão pertencente ao Governo do Estado de São Paulo. 

![UI do Projeto](https://github.com/ricardoleme/hamburgueria/blob/main/assets/hamburgueria-fatec.png?raw=true)

## Criando o projeto do zero
```
expo init hamburgueria
cd hamburgueria
expo install react-native-reanimated
expo install expo-font @expo-google-fonts/roboto @expo-google-fonts/ubuntu
expo install expo-app-loading
yarn add moti **ou** npm i moti
```

## Clonando o projeto 
```
git clone https://github.com/ricardoleme/hamburgueria
cd hamburgueria
npm i
expo start
```

## Veja o projeto no seu celular
Instale o [Expo Go](https://expo.dev/client) e acesse o link abaixo para ler o QR-Code:

https://expo.dev/@ricardoleme-fatecitu/hamburgueria?serviceType=classicc&distribution=expo-go


## Erro no Powershell (Apenas no Windows)
Para corrigir o erro:
expo : O arquivo C:\Users\Usuário\AppData\Roaming\npm\expo.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em 
https://go.microsoft.com/fwlink/?LinkID=135170.

Informe no prompt do Powershell:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Meta
Prof. Ricardo Leme – [@ricardoleme](https://twitter.com/ricardorleme) – ricardo.leme@fatec.sp.gov.br
Distribuído sob a licença [MIT](https://opensource.org/licenses/MIT).



**Software Livre é vida! :brazil:🐧**