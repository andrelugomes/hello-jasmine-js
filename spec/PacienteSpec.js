describe("Paciente", function(){
	
	//um unico teste por Classe de Equivalência

	it("Deve calcular o IMC", function(){
		var andre =  new Paciente("André", 29, 99, 1.87);
		var imc = andre.imc();

		expect(imc).toEqual(99/(1.87*1.87));
	});

	it("Deve calcular os batimentos", function(){
		var andre =  new Paciente("André", 29, 100, 1.87);
		var batimentos = andre.batimentos();

		expect(batimentos).toEqual(29*365*24*60*80));
	});
});