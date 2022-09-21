<script>
export default {
  data() {
    return {
      filmes: [
        {
          id: 1,
          nome: "Orgulho E Preconceito",
          sinopse:
            "Inglaterra, 1797. As cinco irmãs Bennet - Elizabeth (Keira Knightley), Jane (Rosamund Pike), Lydia (Jena Malone), Mary (Talulah Riley) e Kitty (Carey Mulligan) - foram criadas por uma mãe (Brenda Blethyn) que tinha fixação em lhes encontrar maridos que garantissem seu futuro. Porém Elizabeth deseja ter uma vida mais ampla do que apenas se dedicar ao marido, sendo apoiada pelo pai (Donald Sutherland). Quando o sr. Bingley (Simon Woods), um solteiro rico, passa a morar em uma mansão vizinha, as irmãs logo ficam agitadas. Jane logo parece que conquistará o coração do novo vizinho, enquanto que Elizabeth conhece o bonito e esnobe sr. Darcy (Matthew Macfadyen). Os encontros entre Elizabeth e Darcy passam a ser cada vez mais constantes, apesar deles sempre discutirem.",
          imagem: new URL("@/assets/images/orgulho2.jpg", import.meta.url).href,
        },
        {
          id: 2,
          nome: "10 coisas que eu odeio em Você",
          sinopse:
            "A situação está tensa na casa dos Stratford. Bianca (Larisa Oleynik) não vê a hora de arranjar um namorado, mas seu pai (Larry Miller) não permite que ela saia com garotos. Após muita insistência, o pai toma uma resolução: Bianca pode namorar, desde que sua irmã, Katharina (Julia Stiles), namore também. Só que Katharina é uma verdadeira megera, que não tem amigos na escola nem em lugar algum. Para resolver a questão, Cameron (Joseph Gordon-Levitt), apaixonado por Bianca, resolve contratar o misterioso Patrick Verona (Heath Ledger) para seduzir a futura cunhada.",
          imagem: new URL("@/assets/images/20.jpg", import.meta.url).href,
        },
        {
          id: 3,
          nome: "Divergente",
          sinopse:
            "Divergente acompanha a adolescente Beatrice (Shailene Woodley) na futurística Chicago. Ao completar 16 anos, a jovem terá que escolher entre as diferentes facções em que a cidade está dividida. Elas são cinco e cada uma representa um valor diferente, como honestidade, generosidade e coragem. Beatrice surpreende a todos e até a si mesma quando decide pela facção dos destemidos, diferente da família. Ao entrar para a Audácia ela torna-se Tris e entra numa jornada para afastar seus medos e descobrir quem é de verdade. Além disso conhece Quatro (Theo James), rapaz experiente que consegue intrigá-la e encantá-la ao mesmo tempo.",
          imagem: new URL("@/assets/images/jv.jpg", import.meta.url).href,
        },
        {
          id: 4,
          nome: "O Morro dos Ventos Uivantes",
          sinopse:
            "Heathcliff. É o protagonista de O morro dos ventos uivantes. Tem um passado trágico marcado pelo abandono, pelo preconceito. ",
          imagem: new URL("../assets/images/morro.jpeg", import.meta.url).href,
        },
        {
          id: 5,
          nome: "Fallen Angels",
          sinopse:
            "Na noite de Hong Kong, um matador de aluguel determinado a mudar de vida, decide, antes de completar sua última missão, encarar de frente os sentimentos que tem por sua parceira, uma mulher que o ajuda em seus contratos. Vagando pela noite da cidade, ele cruza no caminho com um homem mudo, determinado a chamar a atenção do mundo e a lidar com o amor da sua própria maneira.",
          imagem: new URL("@/assets/images/fallen1.jpg", import.meta.url).href,
        },
      ],
      series: [
        {
          id: 1,
          nome: "Breaking Bad",
          sinopse:
            "Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família após sua morte, Walter usa seu conhecimento de química para fazer e vender metanfetamina, uma droga sintética. Ele conta com a ajuda do ex-aluno e pequeno traficante Jesse (Aaron Paul) e enfrenta vários desafios, incluindo o fato de seu concunhado ser um importante nome dentro da Agência Anti-Drogas da região.",
          imagem: new URL("@/assets/images/bb1.jpg", import.meta.url).href,
        },
        {
          id: 7,
          nome: "Jogos Vorazes",
          sinopse:
            "Jogos Vorazes se passa num futuro pós-apocalítico, onde os Estados Unidos já não existem mais. Katniss vai ter que tomar novas decisões, muito complicadas",
          imagem: new URL("../assets/images/jogos.png", import.meta.url).href,
        },
        {
          id: 8,
          nome: "O Diário de Anne Frank",
          sinopse:
            "Anne Frank relatou em seu diário os conflitos de uma adolescente e a tensão de se viver escondida sobrevivendo com a comida armazenada.",
          imagem: new URL("../assets/images/frank.jpg", import.meta.url).href,
        },
        {
          id: 9,
          nome: "Anne of Green Gables",
          sinopse:
            " Quando os irmãos Marilla e Matthew Cuthbert, de Green Gables, na Prince Edward Island, no Canadá, decidem adotar um órfão. para ajudá-los nos trabalhos da fazenda",
          imagem: new URL("../assets/images/anne.png", import.meta.url).href,
        },
        {
          id: 10,
          nome: "A Culpa é das Estrelas",
          sinopse:
            "Trata do amor de dois jovens aprendendo desde cedo a lidar com o fato de que poderão ser afastados um do outro a qualquer momento por uma triste razão. ",
          imagem: new URL("../assets/images/culpa.jpeg", import.meta.url).href,
        },
      ],
    };
  },
  methods: {
    comprarLivro(livro) {
      alert("Você adicionou " + livro.nome + " na sacola");
    },
  },
};
</script>

<template>
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/images/bb.jpg"
          class="d-block w-100"
          alt="Foto 1"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/pb.jpg"
          class="d-block w-100"
          alt="Foto 2"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/bcs.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Próxima</span>
    </button>
  </div>
  <main>
  <div class="container" id="filmes">
    <h2>FILMES</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <img
          src="@/assets/images/orgulho2.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/20.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/jv.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/fallen1.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <br /><br />

      <br />
      <div class="container" id="series">
        <h2>SÉRIES</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              src="@/assets/images/bb1.jpg"
              class="d-block w-100"
              alt="Foto 3"
              style="width: 100%"
            />
          </div>
          <div class="col-md-3">
            <img
              src="@/assets/images/peaky.jpg"
              class="d-block w-100"
              alt="Foto 3"
              style="width: 100%"
            />
          </div>
          <div class="col-md-3">
            <img
              src="@/assets/images/better.jpg"
              class="d-block w-100"
              alt="Foto 3"
              style="width: 100%"
            />
          </div>
          <div class="col-md-3">
            <img
              src="@/assets/images/atypical.jpeg"
              class="d-block w-100"
              alt="Foto 3"
              style="width: 100%"
            />
          </div>
          <br /><br />

          <div class="container" id="documentarios">
            <h2>DOCUMENTÁRIOS</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  src="@/assets/images/doc1.jpg"
                  class="d-block w-100"
                  alt="Foto 3"
                  style="width: 100%"
                />
              </div>
              <div class="col-md-3">
                <img
                  src="@/assets/images/doc2.jpeg"
                  class="d-block w-100"
                  alt="Foto 3"
                  style="width: 100%"
                />
              </div>
              <div class="col-md-3">
                <img
                  src="@/assets/images/doc3.jpg"
                  class="d-block w-100"
                  alt="Foto 3"
                  style="width: 100%"
                />
              </div>
              <div class="col-md-3">
                <img
                  src="@/assets/images/doc4.jpg"
                  class="d-block w-100"
                  alt="Foto 3"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>
