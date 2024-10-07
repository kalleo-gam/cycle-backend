/**
 * Banco de Dados em memória para POC
 * Para implementação futura seria escolhido um MySQL
 * Com a tabelas fornecedor, pecas e pecas_fornecedor
 */

const fornecedores = [
	{
		id: 1,
		nome: 'Jorge da Silva',
		endereco: 'Rua das Flores, 123, Bairro Jardim das Palmeiras, São Paulo - SP',
		email: 'jorge@honda.com.br',
		celular: '(11) 91234-5678',
		cnpj: '73.547.837/0001-92'
	},
	{
		id: 2,
		nome: 'João de Lima',
		endereco: 'Avenida das Américas, 456, Bairro Centro, Rio de Janeiro - RJ',
		email: 'joao.lima@yamaha.com.br',
		celular: '(21) 98765-4321',
		cnpj: '12.345.678/0001-00'
	},
	{
		id: 3,
		nome: 'Renan Alvares',
		endereco: 'Rua dos Sinos, 789, Bairro Vila Nova, Porto Alegre - RS',
		email: 'renan.alvares@kawazaky.com.br',
		celular: '(51) 99880-7791',
		cnpj: '34.567.890/0001-01'
	},
	{
		id: 4,
		nome: 'Carlos Eduardo',
		endereco: 'Travessa do Bosque, 321, Bairro Bosque, Belo Horizonte - MG',
		email: 'carlos@freiosbrasil.com.br',
		celular: '(31) 91234-8765',
		cnpj: '45.678.901/0001-02'
	},
	{
		id: 5,
		nome: 'Marcos Silva',
		endereco: 'Rua da Liberdade, 654, Bairro Liberdade, Curitiba - PR',
		email: 'marcos@acessoriosmoto.com.br',
		celular: '(41) 98123-4567',
		cnpj: '56.789.012/0001-03'
	},
	{
		id: 6,
		nome: 'Ana Paula',
		endereco: 'Avenida do Comércio, 987, Bairro Centro, Salvador - BA',
		email: 'ana@yuasa.com.br',
		celular: '(51) 99876-5432',
		cnpj: '67.890.123/0001-04'
	},
	{
		id: 7,
		nome: 'Ricardo Gomes',
		endereco: 'Rua do Sol, 135, Bairro Solar, Recife - PE',
		email: 'ricardo@michelin.com.br',
		celular: '(71) 91234-5670',
		cnpj: '78.901.234/0001-05'
	},
	{
		id: 8,
		nome: 'Felipe Santos',
		endereco: 'Avenida das Árvores, 246, Bairro Verde, Fortaleza - CE',
		email: 'felipe@motopecas.com.br',
		celular: '(21) 98123-4569',
		cnpj: '89.012.345/0001-06'
	},
	{
		id: 9,
		nome: 'Lucas Pereira',
		endereco: 'Rua do Mar, 369, Bairro Oceano, Natal - RN',
		email: 'lucas@harleyparts.com.br',
		celular: '(31) 96325-8790',
		cnpj: '90.123.456/0001-07'
	},
	{
		id: 10,
		nome: 'Mariana Costa',
		endereco: 'Rua da Esperança, 852, Bairro Esperança, Goiânia - GO',
		email: 'mariana@bmwmotorrad.com.br',
		celular: '(61) 93456-7890',
		cnpj: '01.234.567/0001-08'
	},
	{
		id: 11,
		nome: 'Julião Almeida',
		endereco: 'Avenida da Vitória, 753, Bairro Vitória, Brasília - DF',
		email: 'juliao@ducati.com.br',
		celular: '(81) 91234-6789',
		cnpj: '12.345.678/0001-09'
	},
	{
		id: 12,
		nome: 'Gabriel Martins',
		endereco: 'Rua da Amizade, 159, Bairro Amizade, Manaus - AM',
		email: 'gabriel@ktm.com.br',
		celular: '(91) 92345-6789',
		cnpj: '23.456.789/0001-10'
	},
	{
		id: 13,
		nome: 'Sofia Rocha',
		endereco: 'Travessa da Alegria, 951, Bairro Alegria, Florianópolis - SC',
		email: 'sofia@yamaha.com.br',
		celular: '(41) 91234-0987',
		cnpj: '34.567.890/0001-11'
	},
	{
		id: 14,
		nome: 'André Soares',
		endereco: 'Rua do Progresso, 159, Bairro Progresso, Campo Grande - MS',
		email: 'andre@polaris.com.br',
		celular: '(31) 96543-2109',
		cnpj: '45.678.901/0001-12'
	}
];

module.exports = fornecedores;
