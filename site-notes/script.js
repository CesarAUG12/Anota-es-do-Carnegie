const quotes = [
  {
    text: "1. Você pode conquistar mais amigos em dois meses interessando-se pelas outras pessoas do que em dois anos tentando fazer com que as outras pessoas se interessem por você.",
    page: 45,
  },
  {
    text: "2. Lembre-se que o nome de uma pessoa é para ela o som mais doce e importante em qualquer idioma.",
    page: 55,
  },
  {
    text: "3. Se existe um segredo para o sucesso, ele consiste na capacidade de entender o ponto de vista do outro e enxergar não só com seus olhos, mas também com os olhos dele.",
    page: "",
  },
  {
    text: "4. Aqueles que conseguem se colocar no lugar dos outros, que conseguem compreender o funcionamento da mente alheia, não precisam se preocupar com o que o futuro lhes reserva.",
    page: "",
  },
  {
    text: "5. Um grande homem demonstra sua grandeza pela forma como trata os pequenos.",
    page: "",
  },
  {
    text: "6. O mais profundo princípio da natureza humana é a ânsia de obter reconhecimento.",
    page: "",
  },
  {
    text: "7. Existe uma lei fundamental na conduta humana. Se obedecermos a ela, raramente teremos problemas na vida, e teremos inúmeros amigos e uma felicidade constante. A lei é a seguinte: sempre faça com que o outro se sinta importante.",
    page: "",
  },
  {
    text: "8. Em geral passamos por cima do sentimento dos outros para conseguir o que queremos, encontrando defeitos, fazendo ameaças, criticando sem sequer considerar que estamos ferindo o orgulho de alguém. Para evitar o problema, bastariam alguns minutos de reflexão, consideração e uma compreensão genuína da atitude da outra pessoa.",
    page: "",
  },
  {
    text: "9. Primeiro, desperte no outro um desejo ardente. Quem consegue isso tem um mundo inteiro a seu lado; quem não consegue tem um caminho solitário.",
    page: 63,
  },
  {
    text: "10. É possível fazer mais amigos em dois meses, demonstrando interesse por eles, do que em dois anos tentando fazer com que os outros se interessem por você.",
    page: 70,
  },
];

const container = document.getElementById("quotesContainer");
const searchInput = document.getElementById("searchInput");

function displayQuotes(filteredQuotes) {
  container.innerHTML = "";
  filteredQuotes.forEach((quote) => {
    const card = document.createElement("div");
    card.className = "quote-card";
    card.innerHTML = `<p>"${quote.text}"</p><small>Página: ${quote.page}</small>`;
    container.appendChild(card);
  });
}

// Mostrar todas ao carregar
displayQuotes(quotes);

// Filtro de busca
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = quotes.filter((quote) =>
    quote.text.toLowerCase().includes(searchTerm),
  );
  displayQuotes(filtered);
});
