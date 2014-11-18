describe("Consulta",function(){
	var guilherme;

	//cria a classe antes de cada teste
	beforeEach(function(){
	 	//guilherme = new PacienteBuilder().constroi();
	 	guilherme = new PacienteBuilder().comIdade(34).comPeso(88).constroi();
	});
	describe("Consulta do tipo retorno",function(){
		it("nao deve cobrar nada se a consulta for um retorno", function() {
	        var consulta = new Consulta(guilherme, [], true, true);

	        expect(consulta.preco()).toEqual(0);
	    });

	    it("deve dobrar o preco da consulta particular", function() {
	        var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);

	        expect(consulta.preco()).toEqual(50 * 2);
	    });
	});
	describe("Consulta do tipo de procedimento",function(){

	   	it("deve cobrar 25 por cada procedimento comum", function() {
	        var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

	        expect(consulta.preco()).toEqual(50);
	    });
	   	
	   	it("deve cobrar preco especifico dependendo do procedimento", function() {
	        var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

	        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
	    });
	    it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
	        var consulta = new Consulta(guilherme, ["raio-x"], true, false);

	        expect(consulta.preco()).toEqual(55 * 2);
	    });

	});

});