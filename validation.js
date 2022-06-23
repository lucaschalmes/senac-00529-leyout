function validar(){
	/* cria variavel local recebendo valor do form user usando neme" s dos inputs*/
	var nome = formUser.nome.value;
	var email = formUser.email.value;
	var telefone= formUser.telefone.value;
	var endereco = formUser.endereco].value;
	var senhas = formUser.senha.value;
	
	if(nome =="" || nome.length <=3){
			alert("informe o nome completo:)");
			formUser.nome.focus();
			return false;
	}
	
}