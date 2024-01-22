# Overview

Stack de projetos para execução de testes de carga visando comparar a performance entre projetos tradicionais (bloqueantes) e reativos (não-bloqueantes) utilizando o tradicional Spring MVC e o Spring Webflux, ambos se beneficiando das facilidades providas pelo Spring Boot.

Projetos:

**springboot-api**

Projeto Spring Boot expondo dois endpoints, um bloqueante (Spring MVC) e outro não-bloqueante (Spring WebFlux). Esses endpoints invocarão uma API externa de previsão do tempo mockada pelo Wiremock.

**wiremock**

Contém o arquivo de response para simular o retorno da API externa. Retorna em 2 segundos.

**kubernetes**

Arquivos necessários para deploy no cluster.

**gatling**

Contém os cenários para execução dos testes de carga.

# Pré-requisitos

* Java JDK 17
* Maven 3x ou superior
* Docker
* Docker compose
* Minikube instalado com 4 VCores e 8Gb de Memória RAM

# Orientações para execução

* Em springboot-api, realizar o build do projeto:
```
mvn clean install
```

* Com o Minikube devidamente instalado, definir a VM provida pelo mesmo como Docker Registry:
```
minikube start --memory 8192 --cpus 4
eval $(minikube docker-env)
```

* Executar o build de springboot-api e wiremock:
```
$springboot-api> docker build -t springboot-api:latest .
$wiremock > docker build -t wiremock-local:latest .
```

* Realize o deploy dos projetos para o Minikube:
```
kubectl apply -f springboot-api-deployment.yaml
kubectl apply -f springboot-api-service.yaml
kubectl apply -f springboot-api-hpa.yaml
kubectl apply -f wiremock-deployment.yaml
kubectl apply -f wiremock-service.yaml
```

* Obtenha a URL do serviço springboot-api:
```
minikube service springboot-api
```

* Substitua a porta provida pelo Minikube nos cenários de teste carga (Arquivos presentes em: ./gatling/user-files/simulations/).

* Execute os testes de carga com:
```
./gatling/bin/gatling.sh -s BlockingApiLoadTest
./gatling/bin/gatling.sh -s ReactiveApiLoadTest
```
