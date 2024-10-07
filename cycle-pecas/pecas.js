/**
 * Banco de Dados em memória para POC
 * Para implementação futura seria escolhido um MySQL
 * Com a tabelas fornecedor, pecas e pecas_fornecedor
 */
const pecas = [
	{
		id: '1',
		nome: 'Radiador Yamaha R1',
		codigoDeSerie: 'TTB-01762102',
		fabricante: 'Moto Precision',
		fornecedores: [
			{
				id: 1,
				nome: 'Jorge da Silva',
				email: 'jorge@honda.com.br',
				celular: '(11) 91234-5678'
			},
			{
				id: 2,
				nome: 'João de Lima',
				email: 'joao.lima@yamaha.com.br',
				celular: '(21) 98765-4321',
			}
		]
	},
	{
		id: '2',
		nome: 'Amortecedor Traseiro Kawasaki Ninja 600',
		codigoDeSerie: 'JQF-89422283',
		fabricante: 'Torque X Automotive',
		fornecedores: [
			{
				id: 3,
				nome: 'Renan Alvares',
				email: 'renan.alvares@kawazaky.com.br',
				celular: '(51) 99880-7791',
			}
		]
	},
	{
		id: '3',
		nome: 'Disco de Freio Honda CBR 1000RR',
		codigoDeSerie: 'DFR-58293874',
		fabricante: 'Freios do Brasil',
		fornecedores: [
			{
				id: 4,
				nome: 'Carlos Eduardo',
				email: 'carlos@freiosbrasil.com.br',
				celular: '(31) 91234-8765',
			}
		]
	},
	{
		id: '4',
		nome: 'Escapamento Esportivo Suzuki GSX-R1000',
		codigoDeSerie: 'ESC-77482912',
		fabricante: 'Acessórios Moto',
		fornecedores: [
			{
				id: 5,
				nome: 'Marcos Silva',
				email: 'marcos@acessoriosmoto.com.br',
				celular: '(41) 98123-4567',
			}
		]
	},
	{
		id: '5',
		nome: 'Bateria Yuasa YTX12-BS',
		codigoDeSerie: 'BAT-99911002',
		fabricante: 'Yuasa',
		fornecedores: [
			{
				id: 6,
				nome: 'Ana Paula',
				email: 'ana@yuasa.com.br',
				celular: '(51) 99876-5432',
			}
		]
	},
	{
		id: '6',
		nome: 'Pneu Michelin Pilot Road 4',
		codigoDeSerie: 'PNE-17893929',
		fabricante: 'Michelin',
		fornecedores: [
			{
				id: 7,
				nome: 'Ricardo Gomes',
				email: 'ricardo@michelin.com.br',
				celular: '(71) 91234-5670',
			}
		]
	},
	{
		id: '7',
		nome: 'Filtro de Óleo Honda CB 500F',
		codigoDeSerie: 'FOL-67583929',
		fabricante: 'MotoPeças',
		fornecedores: [
			{
				id: 8,
				nome: 'Felipe Santos',
				email: 'felipe@motopecas.com.br',
				celular: '(21) 98123-4569',
			}
		]
	},
	{
		id: '8',
		nome: 'Câmbio Automático Harley Davidson',
		codigoDeSerie: 'CAM-58623948',
		fabricante: 'Harley Parts',
		fornecedores: [
			{
				id: 9,
				nome: 'Lucas Pereira',
				email: 'lucas@harleyparts.com.br',
				celular: '(31) 96325-8790',
			}
		]
	},
	{
		id: '9',
		nome: 'Retrovisor Esportivo BMW S1000RR',
		codigoDeSerie: 'RET-38472834',
		fabricante: 'BMW Motorrad',
		fornecedores: [
			{
				id: 10,
				nome: 'Mariana Costa',
				email: 'mariana@bmwmotorrad.com.br',
				celular: '(61) 93456-7890',
			}
		]
	},
	{
		id: '10',
		nome: 'Lanterna LED Ducati Panigale V4',
		codigoDeSerie: 'LAN-93718234',
		fabricante: 'Ducati',
		fornecedores: [
			{
				id: 11,
				nome: 'Julião Almeida',
				email: 'juliao@ducati.com.br',
				celular: '(81) 91234-6789',
			}
		]
	},
	{
		id: '11',
		nome: 'Assento Conforto KTM 390 Duke',
		codigoDeSerie: 'ASS-18273645',
		fabricante: 'KTM',
		fornecedores: [
			{
				id: 12,
				nome: 'Gabriel Martins',
				email: 'gabriel@ktm.com.br',
				celular: '(91) 92345-6789',
			}
		]
	},
	{
		id: '12',
		nome: 'Paralama Dianteiro Yamaha MT-09',
		codigoDeSerie: 'PAR-98765432',
		fabricante: 'Yamaha',
		fornecedores: [
			{
				id: 13,
				nome: 'Sofia Rocha',
				email: 'sofia@yamaha.com.br',
				celular: '(41) 91234-0987',
			}
		]
	},
	{
		id: '13',
		nome: 'Correia de Transmissão Polaris',
		codigoDeSerie: 'COR-12345678',
		fabricante: 'Polaris',
		fornecedores: [
			{
				id: 14,
				nome: 'André Soares',
				email: 'andre@polaris.com.br',
				celular: '(31) 96543-2109',
			}
		]
	}
];

module.exports = pecas;