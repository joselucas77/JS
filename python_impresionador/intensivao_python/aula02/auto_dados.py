import pandas as pd
import plotly.express as px

# Passo 1 -Importar a basa de dados para o python
tabela = pd.read_csv(r"C:\Users\jose_\OneDrive\Documentos\Estudos\arquivos_pyton\telecom_users.csv")

# Passo 2 - Visualizar essa base de dados
# Entender as informações que você tem disponivel
# Descobrir as falhas da base de dados

# Axis = 0 -> linha
# Axis = 1 -> coluna
tabela = tabela.drop('Unnamed: 0', axis=1)
#print(tabela)

# Passo 3 - Tratamento de dados
# Analizar se o python tá lendo as informações no formato correto
tabela['TotalGasto'] = pd.to_numeric(tabela['TotalGasto'], errors='coerce')
# Será que existe alguma coluna completamente vazia?
tabela = tabela.dropna(how='all', axis=1)
# será que existe alguma informaçao em alguma linha vazia?
tabela = tabela.dropna(how='any', axis=0)
#print(tabela.info())

# Passo 4 - Análise inicial/ Análize global
# Quantos clientes cancelaram
print(tabela['Churn'].value_counts())
# O % de clientes que cancelaram e que não cancelaram
print(tabela['Churn'].value_counts(normalize=True).map('{:.2%}'.format))
print(tabela)

# Passo 5 - Análize detalhada (buscar a causa/ a solução dos cancelamentos)
# Criar o gráfico
grafico = px.histogram(tabela, x='MesesComoCliente', color='Churn')
# Exibir o gráfico
grafico.show()