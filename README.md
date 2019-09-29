# GoBarber2.0

#Database:
##Dependencias:
1- sequelize
2- sequelize-cli -D (Fácilita na execuçãode migrations,criação de models...)
3- pg pg-hstore (Dependencias do BD postgres)

##Comandos:
Com BD de dados rodando (Docker) digitar executar os comandos:
yarn sequelize migration:create --name=create-users (Cria a migration, com nome users)
yanr sequelize db:migrate (Cria a tabela no banco de dados)

###Se for necessário fazer alguma alteração nas migrations:
yarn sequelize db:migrate:undo (Desfaz a última migration)
yarn sequelize db:migrate:undo:all(Desfaz todas as migrations)
Obs: É uma boa prática desfazer as migrations, alterar elas e depois executar ela novamente.
