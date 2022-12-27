# CADASTRO DE CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar um novo carro. OK!


**REGRAS DE NEGÓCIO**
- Não deve ser possível cadastrar um carro com uma placa já existente. OK!
- O carro deve ser cadastrado com disponibilidade por padrão. OK!
- O usuário responsável deve ser administrador.



# LISTAGEM DE CARROS

**REQUISITOS FUNCIONAIS**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**REGRAS DE NEGÓCIO**
- O usuário não precisa estar logado no sistema.


# CADASTRO DE ESPECIFICAÇÃO NO CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**REGRAS DE NEGÓCIO**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável deve ser administrador.



# CADASTRO DE IMAGEM DO CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**REQUISITOS NÃO FUNCIONAIS**
- Utilizar o multer para upload dos arquivos.

**REGRAS DE NEGÓCIO**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável deve ser administrador.



# ALUGUEL DE CARRO

**REQUISITOS FUNCIONAIS**
- Deve ser possível cadastrar um aluguel.

**REGRAS DE NEGÓCIO**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
