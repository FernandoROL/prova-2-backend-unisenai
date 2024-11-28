## Como fazer o setup

1. Clone o repositório e abra ele

``` bash
git clone https://github.com/FernandoROL/prova-2-backend-unisenai.git disciplina-rest

cd disciplina-rest
```

2. Faça a instalação dos pacotes necessários

```bash
npm install
```

3. inicie o servidor

``` bash
npm start
```

## Queries graphql

```
# Retorna todos os períodos e disciplinas
query {
  periodos {
    periodo
    disciplinas {
      id
      nome
      descricao
    }
  }
}

# Retorna todas as disciplinas
query {
  disciplinas {
    id
    nome
    descricao
  }
}

# Busca uma disciplina específica por ID
query {
  disciplina(id: "1") {
    nome
    descricao
  }
}

```

