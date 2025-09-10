function dispenserimg() {
    // Obtém o elemento da imagem pelo ID
    var imagem = document.getElementById('dispenserimg');
    
    // Verifica qual imagem está atualmente sendo exibida e muda para a outra
    if (imagem.src.includes('imagens/dispenser.jpg')) {
        imagem.src = 'imagens/dispenser-cheio.png'; // Caminho para a nova imagem
    } else {
        imagem.src = 'imagens/dispenser.jpg'; // Volta para a primeira imagem
    }
}