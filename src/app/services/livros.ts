import { Injectable, signal, computed } from '@angular/core';
import {Livro} from '../core/models/livro.model';

@Injectable({
  providedIn: 'root',
})
export class Livros {
  livros = signal<Livro[]>([
    {
      id: 1,
      titulo: 'O Pequeno Principe',
      autor: 'Antoine de Sain-Exupery',
      genero: 'Fantasia',
      descricao: 'Uma historia sobre amizade, amor e a importancia de enxergar alem das aparencias.',
      capa: 'https://covers.openlibrary.org/b/title/The%20Little%20Prince-L.jpg',
      favorito: false
    },
    {
       id: 2,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      genero: 'Romance',
      descricao: 'Um classico da literatura brasileira narrado por Bentinho.',
      capa: 'https://covers.openlibrary.org/b/title/Dom%20Casmurro-L.jpg',
      favorito: false
    },
    {
       id: 3,
      titulo: 'Harry Potter e a Pedra Filosofal',
      autor: 'J. K. Rowling',
      genero: 'Fantasia',
      descricao: 'Harry descobre que e um bruxo e comeca a jornada em Hogwarts.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg',
      favorito: false
    },
    {
     id: 4,
      titulo: 'O Hobbit',
      autor: 'J. R. R. Tolkien',
      genero: 'Aventura',
      descricao: 'Bilbo Bolseiro embarca em uma aventura pela Terra Média.',
      capa: 'https://covers.openlibrary.org/b/title/The%20Hobbit-L.jpg',
      favorito: false
    },
    {
     id: 5,
      titulo: 'JavaScript: O Guia Definitivo',
      autor: 'David Flanagan',
      genero: 'Programação',
      descricao: 'Um Guia completo para aprender JavaScript e desenvolver aplicaçoões para a web.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780596805524-M.jpg',
      favorito: false
    },
    {
     id: 6,
      titulo: 'Clean Code',
      autor: 'Robert C. Martin',
      genero: 'Programação',
      descricao: 'Um livro sobre boas práticas para escrever códigos mais limpos, organizados e fáceis de manter.',
      capa: 'https://covers.openlibrary.org/b/title/Clean%20Code-L.jpg',
      favorito: false
    },
    {
     id: 7,
      titulo: 'Introdução á Algoritmos',
      autor: 'Thomas H. Cormen',
      genero: 'Programação',
      descricao: 'Uma introdução aos principais conceitos e técnicas de algoritmos e estruturas de dados.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg',
      favorito: false
    },
    {
     id: 8,
      titulo: 'Sapiens',
      autor: 'Yuval Noah Harari',
      genero: 'História',
      descricao: 'Uma visão da história da humanidade desde os primeiros seres humanos até os tempos modernos .',
      capa: 'https://covers.openlibrary.org/b/title/Sapiens-L.jpg',
      favorito: false
    },
    {
     id: 9,
      titulo: 'Uma Breve História do Tempo',
      autor: 'Stephen Hawking',
      genero: 'História',
      descricao: 'Uma introdução e grandes questões sobre o universo, o tempo e a origem do cosmos.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg',
      favorito: false
    },
     {
     id: 10,
      titulo: 'História do Brasil',
      autor: 'Boris  Fausto',
      genero: 'História',
      descricao: 'Uma visão geral dos principais acontecimentos da história brasileira.',
      capa: 'https://covers.openlibrary.org/b/title/Historia%20do%20Brasil-L.jpg',
      favorito: false
    },

    {
    id: 11,
    titulo: 'Poesias',
    autor: 'Fernando Pessoa',
    genero: 'Poesia',
    descricao: 'Coletânea essencial que reúne os principais poemas ortônimos e heterônimos do autor (como Álvaro de Campos, Alberto Caeiro e Ricardo Reis), explorando a pluralidade de vozes que marcou a literatura portuguesa.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfMcZtQhb4u0ra40zHsIEBhbIAvBWu6xMveULGkD1BkflnVcHHe-KpBI&s=10.jpg',
    favorito: false
  },
  {
    id: 12,
    titulo: 'Livro do Desassossego',
    autor: 'Fernando Pessoa',
    genero: 'Romance/Prosa Poética',
    descricao: 'Escrita sob o semi-heterônimo Bernardo Soares, esta obra é um compilado de fragmentos reflexivos e intimistas que formam uma autobiografia sem fatos e um marco incontestável da prosa modernista.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfe9yH7yjzeSKt6Rfal1P7YTJiBV7gPPKveAhkx9ETw&s=10.jpg',
    favorito: false
  },
  {
    id: 13,
    titulo: 'O Retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    genero: 'Romance Gótico',
    descricao: 'Um belo e jovem aristocrata faz um pacto para permanecer eternamente jovem, enquanto um retrato seu mantido escondido envelhece e absorve as marcas de sua vida amoral e de sua degradação moral.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl2Sx6WeVZVxaPOEXu-wQ8SWrcbGSfSctMEyjyaLYNg&s=10.jpg',
    favorito: false
  },
  {
    id: 14,
    titulo: 'O Morro dos Ventos Uivantes',
    autor: 'Emily Brontë',
    genero: 'Romance Gótico',
    descricao: 'A intensa, sombria e trágica história de amor, obsessão e vingança entre o órfão Heathcliff e Catherine Earnshaw, ambientada nas inóspitas e isoladas charnecas inglesas.',
    capa: 'https://m.media-amazon.com/images/I/9154Q7fv5UL._AC_UF1000,1000_QL80_.jpg',
    favorito: false
  },
  {
    id: 15,
    titulo: 'Pais e Filhos',
    autor: 'Ivan Turguêniev',
    genero: 'Romance Clássico',
    descricao: 'Clássico da literatura russa que explora de forma brilhante e atemporal o conflito de gerações e de ideologias entre a aristocracia tradicional e os jovens niilistas da Rússia do século XIX.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFzOYgkFUXb-qgQAnWVC9xcA_jS_pCjoXiQVi3Q62gA&s.jpg',
    favorito: false
  },
  {
    id: 16,
    titulo: 'Pedro Páramo',
    autor: 'Juan Rulfo',
    genero: 'Realismo Mágico',
    descricao: 'O protagonista Juan Preciado viaja à cidade fantasma de Comala em busca de seu pai, Pedro Páramo, encontrando um lugar habitado apenas por ecos, memórias e almas atormentadas. Um marco central do realismo mágico.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHzivOLxiGF9cUVTJRl2lWhkZrqQphRMs9hT-xMAR_Q&s=10.jpg',
    favorito: false
  },
  {
    id: 17,
    titulo: 'Anna Kariênina',
    autor: 'Liev Tolstói',
    genero: 'Romance Clássico',
    descricao: 'Uma vasta e profunda tapeçaria da sociedade russa do século XIX, centrada no trágico romance extraconjugal da aristocrata Anna Kariênina e contrastada com a vida pacata e as buscas morais no campo.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKfZeCsB-JM36dg1tI8nZpnlAHiKeeBlNA3suYMd1Oa0Wcxh6vYu3igI-&s=10.jpg',
    favorito: false
  },
  {
    id: 18,
    titulo: 'O Diabo e Outras Histórias',
    autor: 'Liev Tolstói',
    genero: 'Contos',
    descricao: 'Reunião de contos e novelas maduras do autor russo que mergulham em profundos dilemas morais, explorando temas como a tentação, o desejo, a crise de fé e a imensa complexidade da alma humana.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGXeGDKKq5WHWLYnBVeNXgMgXgs-M7GxKfAj3cS1ZlA&s=10.jpg',
    favorito: false
  },
  {
    id: 19,
    titulo: 'Cem Anos de Solidão',
    autor: 'Gabriel García Márquez',
    genero: 'Realismo Mágico',
    descricao: 'A mágica, trágica e mítica saga da família Buendía e da cidade de Macondo, desde a sua fundação até a sua queda inevitável. É a obra máxima do realismo mágico latino-americano.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTgBdo5gSmw-aAVRZ-IbrffCTF4zS2NcbgifyuKZxoQ&s=10.jpg',
    favorito: false
  },
  {
    id: 20,
    titulo: 'The Outsider',
    autor: 'Stephen King',
    genero: 'Terror/Suspense',
    descricao: 'O detetive Ralph Anderson investiga o assassinato brutal de uma criança. O principal suspeito tem um álibi perfeito, levando a investigação a desdobramentos cada vez mais sombrios e de natureza sobrenatural.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9VVNeMvlOSlub9IvxJUGscHbUbxeqLJdF6jOWNA7xA&s=10.jpg',
    favorito: false
  },
  {
    id: 21,
    titulo: 'Carrie a Estranha',
    autor: 'Stephen King',
    genero: 'Terror',
    descricao: 'A história de uma jovem oprimida pela mãe fanática religiosa e humilhada pelos colegas, que descobre possuir poderes telecinéticos, culminando em uma terrível vingança no baile de formatura.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGT5gLoMljRIzMzOsjGUQYF2_hVfKjQaHdgaPrPCVsxQ&s=10.jpg',
    favorito: false
  },
  {
    id: 22,
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    genero: 'Romance Clássico',
    descricao: 'A clássica história de Elizabeth Bennet e do orgulhoso Sr. Darcy, explorando as complexidades do amor, classe social e mal-entendidos na Inglaterra do século XIX.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZEn7Fcqm4wDKWoPO4YBKdfWiODjEHGVxDI3a_RE5pQ&s=10.jpg',
    favorito: false
  },
  {
    id: 23,
    titulo: 'Persuasão',
    autor: 'Jane Austen',
    genero: 'Romance Clássico',
    descricao: 'Anne Elliot encontra novamente o Capitão Wentworth, de quem foi persuadida a se separar anos antes, e tem uma segunda chance de viver um grande amor.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj9zmhSZeX3VRf8bc4q2sH3h0NWgMo-g87xi7Yqzkvw&s.jpg',
    favorito: false
  },
  {
    id: 24,
    titulo: 'Razão e Sensibilidade',
    autor: 'Jane Austen',
    genero: 'Romance Clássico',
    descricao: 'Acompanha as irmãs Dashwood, Elinor e Marianne, enquanto navegam pelas convenções sociais e pelas provações do amor e da perda na sociedade inglesa.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9k5Eq80tBVnzxK9fq1iONro0NdRkBslezepykzwluBg&s=10.jpg',
    favorito: false
  },
  {
    id: 25,
    titulo: 'O Iluminado',
    autor: 'Stephen King',
    genero: 'Terror',
    descricao: 'Jack Torrance aceita um emprego como zelador no isolado Hotel Overlook. Enquanto o inverno os isola, forças malignas do hotel começam a enlouquecê-lo, ameaçando sua esposa e seu filho Danny, que possui poderes telepáticos.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvd-LUKoxLy2mnd9e4go7cONowFHrBdRBaT2mZNHcUlA&s=10.jpg',
    favorito: false
  },
  {
    id: 26,
    titulo: 'Conto de Fadas',
    autor: 'Stephen King',
    genero: 'Fantasia Sombria',
    descricao: 'Um jovem herda as chaves para um mundo paralelo aterrorizante e maravilhoso, onde o bem e o mal estão em guerra, e ele se vê no centro de uma batalha épica.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdRcBvaVIdmm-ZWc3pjdgFF4UPoISqOimZ5gROCtoWA&s=10.jpg',
    favorito: false
  },
  {
    id: 27,
    titulo: 'O Cemitério',
    autor: 'Stephen King',
    genero: 'Terror',
    descricao: 'Uma família se muda para uma casa próxima a um antigo cemitério de animais. Quando uma tragédia os atinge, o luto leva o pai a descobrir o poder macabro de ressurreição que o solo daquele local possui.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquFeNLa1Nr8_9eEnr1YhR7QX_NQ5EHS0IizxzK00UFA&s=10.jpg',
    favorito: false
  },
  {
    id: 28,
    titulo: 'Joyland',
    autor: 'Stephen King',
    genero: 'Mistério/Suspense',
    descricao: 'Um universitário consegue um emprego de verão em um parque de diversões na Carolina do Norte em 1973, onde se envolve com o mistério de um assassinato não resolvido e um fantasma.',
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk3TOj03QFB7pVhBouVpoCNa0yW6EugyEuX4HP80MSg&s=10.jpg',
    favorito: false
  },
  {
    id: 29,
    titulo: 'A Incendiária',
    autor: 'Stephen King',
    genero: 'Ficção Científica/Terror',
    descricao: 'Uma menina com a capacidade de criar fogo com a mente é perseguida incansavelmente por uma agência governamental sombria que deseja usá-la como arma.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.12.jpeg',
    favorito: false
  },
  {
    id: 30,
    titulo: 'Doutor Sono',
    autor: 'Stephen King',
    genero: 'Terror',
    descricao: 'A continuação de O Iluminado, acompanhando um adulto Danny Torrance, que luta contra seus próprios demônios enquanto tenta proteger uma jovem com um dom semelhante de um grupo que se alimenta dessa energia.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.13.jpeg',
    favorito: false
  },
  {
    id: 31,
    titulo: 'A Mansão Hollow',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Hercule Poirot é convidado para um almoço na Mansão Hollow e se depara com uma cena de assassinato à beira da piscina que parecia encenada, mas que revela um crime real e intrincado.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.49 (1).jpeg',
    favorito: false
  },
  {
    id: 32,
    titulo: 'Cacau',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'Um romance de cunho social que retrata a dura realidade, a exploração e as condições de trabalho precárias dos operários nas fazendas de cacau do sul da Bahia.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.02 (2).jpeg',
    favorito: false
  },
  {
    id: 33,
    titulo: 'Terras do Sem-Fim',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'A épica e sangrenta saga das lutas entre coronéis pelo domínio das férteis terras cacaueiras na região de Ilhéus, um marco da literatura regionalista brasileira.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.04 (1).jpeg',
    favorito: false
  },
  {
    id: 34,
    titulo: 'Dona Flor e Seus Dois Maridos',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'A vida de Dona Flor, que se vê dividida entre a estabilidade pacata de seu segundo marido, o farmacêutico Teodoro, e o espírito ardente e boêmio de Vadinho, seu falecido primeiro esposo.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.03.jpeg',
    favorito: false
  },
  {
    id: 35,
    titulo: 'Assassinato no Expresso do Oriente',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Durante uma viagem no luxuoso Expresso do Oriente, um passageiro é brutalmente assassinado. Presos pela neve, Poirot precisa descobrir quem é o culpado em um trem onde todos os passageiros são suspeitos.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.50 (1).jpeg',
    favorito: false
  },
  {
    id: 36,
    titulo: 'O Misterioso Caso de Styles',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'O romance de estreia de Agatha Christie que introduz o detetive Hercule Poirot, chamado para desvendar o envenenamento da rica matriarca Emily Inglethorp em sua propriedade rural.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.51 (1).jpeg',
    favorito: false
  },
  {
    id: 37,
    titulo: 'Nêmesis',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Miss Marple recebe uma carta póstuma e uma herança do Sr. Rafiel com um desafio singular: investigar um crime não especificado do passado, guiando-se apenas por sua intuição implacável.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.49.jpeg',
    favorito: false
  },
  {
    id: 38,
    titulo: 'Os Crimes ABC',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Poirot enfrenta um serial killer audacioso que o desafia assinando suas cartas como \'ABC\' e assassinando suas vítimas seguindo a ordem alfabética do guia ferroviário inglês.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.51 (2).jpeg',
    favorito: false
  },
  {
    id: 39,
    titulo: 'A Morte no Nilo',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'A paz de um cruzeiro glamouroso pelo rio Nilo é destruída quando uma jovem e rica herdeira é assassinada. Cabe a Poirot desvendar uma complexa teia de ciúme e vingança.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.50.jpeg',
    favorito: false
  },
  {
    id: 40,
    titulo: 'O Assassinato de Roger Ackroyd',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Um dos romances policiais mais inovadores e surpreendentes já escritos. Aposentado em uma pacata vila, Poirot é obrigado a voltar à ativa para investigar a morte do homem mais rico da região.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.50 (2).jpeg',
    favorito: false
  },
  {
    id: 41,
    titulo: 'A Bela e a Fera',
    autor: 'Clarice Lispector',
    genero: 'Contos',
    descricao: 'Coletânea de contos que explora as inquietações existenciais, os mistérios do cotidiano e a complexidade da alma humana, características marcantes da autora.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.52 (2).jpeg',
    favorito: false
  },
  {
    id: 42,
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    genero: 'Romance Realista',
    descricao: 'Narrado por um defunto autor, este clássico revolucionou a literatura brasileira com seu tom irônico e pessimista, relatando as memórias e desilusões de Brás Cubas.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.10.jpeg',
    favorito: false
  },
  {
    id: 43,
    titulo: 'Quincas Borba',
    autor: 'Machado de Assis',
    genero: 'Romance Realista',
    descricao: 'Acompanha a trajetória do ingênuo professor Rubião, que herda a fortuna de seu amigo Quincas Borba (e também seu cachorro homônimo), tornando-se alvo de parasitas sociais na corte carioca.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.10 (2).jpeg',
    favorito: false
  },
  {
    id: 44,
    titulo: 'Memorial de Aires',
    autor: 'Machado de Assis',
    genero: 'Romance Realista',
    descricao: 'O último romance de Machado de Assis, escrito em forma de diário pelo Conselheiro Aires, trazendo reflexões melancólicas sobre a velhice, o tempo, a solidão e o amor.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.09 (2).jpeg',
    favorito: false
  },
  {
    id: 45,
    titulo: 'Esaú e Jacó',
    autor: 'Machado de Assis',
    genero: 'Romance Realista',
    descricao: 'A rivalidade entre os irmãos gêmeos Pedro e Paulo, que divergem em tudo, inclusive na política, servindo de alegoria para os conflitos do Brasil na transição do Império para a República.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.09.jpeg',
    favorito: false
  },
  {
    id: 46,
    titulo: 'A Hora da Estrela',
    autor: 'Clarice Lispector',
    genero: 'Romance',
    descricao: 'A trágica e poética história de Macabéa, uma datilógrafa nordestina ingênua e invisível na cidade do Rio de Janeiro, narrada pelo complexo escritor Rodrigo S.M.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.53.jpeg',
    favorito: false
  },
  {
    id: 47,
    titulo: 'Perto do Coração Selvagem',
    autor: 'Clarice Lispector',
    genero: 'Romance Introspectivo',
    descricao: 'Romance de estreia da autora, focado na intensa e introspectiva jornada interior de Joana, desafiando a moralidade e mergulhando fundo no fluxo de consciência.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.54 (1).jpeg',
    favorito: false
  },
  {
    id: 48,
    titulo: 'Um Sopro de Vida',
    autor: 'Clarice Lispector',
    genero: 'Romance Existencial',
    descricao: 'Um diálogo denso e existencial entre o \'Autor\' e sua criação, Angela Pralini, discutindo os limites da ficção, a vida, a morte e o próprio ato de escrever.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.54 (2).jpeg',
    favorito: false
  },
  {
    id: 49,
    titulo: 'Laços de Família',
    autor: 'Clarice Lispector',
    genero: 'Contos',
    descricao: 'Livro de contos que retrata a opressão e as rupturas nas relações familiares e cotidianas, revelando abismos psicológicos sob a aparente normalidade burguesa.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.54.jpeg',
    favorito: false
  },
  {
    id: 50,
    titulo: 'Água Viva',
    autor: 'Clarice Lispector',
    genero: 'Ficção/Romance Experimental',
    descricao: 'Uma obra de ficção inclassificável, onde uma pintora reflete sobre o tempo, a existência e o estado puro do ser, criando uma meditação poética e fragmentada sobre o \'instante-já\'.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.53 (2).jpeg',
    favorito: false
  },
  {
    id: 51,
    titulo: 'Dom Quixote - Volume II',
    autor: 'Miguel de Cervantes',
    genero: 'Romance/Sátira',
    descricao: 'A segunda parte das aventuras do engenhoso fidalgo Dom Quixote de La Mancha e seu fiel escudeiro Sancho Panza, aprofundando as brilhantes reflexões sobre ilusão, realidade e o poder da literatura.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.11.jpeg',
    favorito: false
  },
  {
    id: 52,
    titulo: 'O Homem Duplicado',
    autor: 'José Saramago',
    genero: 'Romance/Ficção',
    descricao: 'O professor de história Tertuliano Máximo Afonso descobre a existência de um sósia perfeito, desencadeando uma busca obsessiva que ameaça sua própria identidade e sanidade.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.06 (2).jpeg',
    favorito: false
  },
  {
    id: 53,
    titulo: 'Todos os Nomes',
    autor: 'José Saramago',
    genero: 'Romance',
    descricao: 'O Sr. José, um modesto escriturário obcecado por colecionar recortes sobre pessoas famosas, decide iniciar uma busca frenética por uma mulher desconhecida cujo registro de nascimento ele encontrou por acaso.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.07.jpeg',
    favorito: false
  },
  {
    id: 54,
    titulo: 'Ensaio sobre a Lucidez',
    autor: 'José Saramago',
    genero: 'Romance/Ficção Política',
    descricao: 'Durante as eleições em uma capital não nomeada, a grande maioria dos eleitores decide votar em branco, desencadeando uma crise institucional e uma reação autoritária do governo.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.06 (1).jpeg',
    favorito: false
  },
  {
    id: 55,
    titulo: 'As Pequenas Memórias',
    autor: 'José Saramago',
    genero: 'Autobiografia',
    descricao: 'Neste livro autobiográfico, o Prêmio Nobel português resgata as lembranças e sentimentos de sua infância e adolescência, revelando as raízes de sua visão de mundo.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.05 (1).jpeg',
    favorito: false
  },
  {
    id: 56,
    titulo: 'Claraboia',
    autor: 'José Saramago',
    genero: 'Romance',
    descricao: 'Romance da juventude de Saramago, perdido por décadas, que retrata a vida cotidiana, os segredos ocultos e as frustrações dos moradores de um modesto prédio em Lisboa.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.05 (2).jpeg',
    favorito: false
  },
  {
    id: 57,
    titulo: 'Belos e Malditos',
    autor: 'F. Scott Fitzgerald',
    genero: 'Romance',
    descricao: 'Acompanha a vida de Anthony Patch e sua bela esposa Gloria, herdeiros presuntivos de uma grande fortuna, enquanto desperdiçam seus anos de juventude em excessos na Nova York da Era do Jazz.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.56 (2).jpeg',
    favorito: false
  },
  {
    id: 58,
    titulo: 'O Grande Gatsby',
    autor: 'F. Scott Fitzgerald',
    genero: 'Romance Clássico',
    descricao: 'A trágica e deslumbrante história do misterioso milionário Jay Gatsby e sua paixão obsessiva pela inatingível Daisy Buchanan, um retrato definitivo da decadência do sonho americano nos anos 1920.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.57.jpeg',
    favorito: false
  },
  {
    id: 59,
    titulo: 'Este Lado do Paraíso',
    autor: 'F. Scott Fitzgerald',
    genero: 'Romance',
    descricao: 'O romance de estreia do autor segue o jovem e ambicioso Amory Blaine em sua jornada de autodescoberta, capturando os anseios e a desilusão da nova geração pós-Primeira Guerra Mundial.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.56 (1).jpeg',
    favorito: false
  },
  {
    id: 60,
    titulo: 'Dom Quixote - Volume I',
    autor: 'Miguel de Cervantes',
    genero: 'Romance/Sátira',
    descricao: 'O fidalgo Alonso Quijano enlouquece após ler muitos romances de cavalaria e decide se tornar um cavaleiro andante, partindo em busca de grandes aventuras com seu cavalo Rocinante e seu fiel escudeiro.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.11 (1).jpeg',
    favorito: false
  },
  {
    id: 61,
    titulo: 'Passeio ao Farol',
    autor: 'Virginia Woolf',
    genero: 'Romance Modernista',
    descricao: 'Romance modernista focado na família Ramsay e suas visitas à Ilha de Skye, explorando a passagem do tempo, a percepção e as complexidades das relações humanas.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.16.jpeg',
    favorito: false
  },
  {
    id: 62,
    titulo: 'Guerra e Paz',
    autor: 'Liev Tolstói',
    genero: 'Romance Histórico',
    descricao: 'Épico monumental que entrelaça as vidas de diversas famílias aristocráticas russas com o pano de fundo histórico da invasão napoleônica na Rússia.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.08.jpeg',
    favorito: false
  },
  {
    id: 63,
    titulo: 'O Processo',
    autor: 'Franz Kafka',
    genero: 'Ficção Absurda',
    descricao: 'Josef K. é subitamente preso e processado por uma autoridade inacessível, por um crime que não lhe é revelado, em uma crítica à burocracia absurda.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.58 (2).jpeg',
    favorito: false
  },
  {
    id: 64,
    titulo: 'A Metamorfose',
    autor: 'Franz Kafka',
    genero: 'Novela/Ficção Absurda',
    descricao: 'O caixeiro-viajante Gregor Samsa acorda certa manhã transformado em um inseto monstruoso, lidando com a repulsa e a alienação de sua própria família.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.58 (1).jpeg',
    favorito: false
  },
  {
    id: 65,
    titulo: 'Os Miseráveis',
    autor: 'Victor Hugo',
    genero: 'Romance Histórico',
    descricao: 'A emocionante jornada de redenção do ex-prisioneiro Jean Valjean, que tenta reconstruir sua vida na França do século XIX, enquanto é perseguido pelo implacável inspetor Javert.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.14 (2).jpeg',
    favorito: false
  },
  {
    id: 66,
    titulo: 'Admirável Mundo Novo',
    autor: 'Aldous Huxley',
    genero: 'Ficção Científica/Distopia',
    descricao: 'Uma distopia assustadora onde a humanidade é geneticamente condicionada e controlada pelo consumo e prazer, sacrificando a liberdade individual em prol da estabilidade.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.52.jpeg',
    favorito: false
  },
  {
    id: 67,
    titulo: 'Mrs Dalloway',
    autor: 'Virginia Woolf',
    genero: 'Romance Modernista',
    descricao: 'A narrativa acompanha um único dia na vida da socialite Clarissa Dalloway em Londres pós-Primeira Guerra, mesclando memórias, fluxos de pensamento e preparativos para uma festa.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.15 (1).jpeg',
    favorito: false
  },
  {
    id: 68,
    titulo: 'Orlando',
    autor: 'Virginia Woolf',
    genero: 'Ficção Histórica/Sátira',
    descricao: 'Uma biografia fantástica e satírica de um nobre inglês que vive por séculos sem envelhecer e, de forma poética, muda de sexo ao longo do tempo.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.16 (1).jpeg',
    favorito: false
  },
  {
    id: 69,
    titulo: 'As Ondas',
    autor: 'Virginia Woolf',
    genero: 'Romance Experimental',
    descricao: 'Uma obra poética e experimental que acompanha as vozes entrelaçadas e os fluxos de consciência de seis personagens desde a infância até a velhice.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.14 (3).jpeg',
    favorito: false
  },
  {
    id: 70,
    titulo: 'Entre os Atos',
    autor: 'Virginia Woolf',
    genero: 'Romance Modernista',
    descricao: 'O último romance da autora desenrola-se em uma casa de campo na Inglaterra, pouco antes do início da Segunda Guerra Mundial, em torno da encenação de uma peça teatral comunitária.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.15.jpeg',
    favorito: false
  },
  {
    id: 71,
    titulo: 'Viagens de Gulliver',
    autor: 'Jonathan Swift',
    genero: 'Sátira/Aventura',
    descricao: 'A clássica sátira em que o cirurgião naval Lemuel Gulliver viaja para mundos fantásticos, como Lilliput e Brobdingnag, criticando a natureza humana e a sociedade da época.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.02 (1).jpeg',
    favorito: false
  },
  {
    id: 72,
    titulo: 'Ensaio sobre a Cegueira',
    autor: 'José Saramago',
    genero: 'Ficção Distópica',
    descricao: 'Uma inexplicável epidemia de \'cegueira branca\' se espalha incontrolavelmente. Em quarentena, as pessoas são levadas aos limites de sua humanidade, revelando instintos cruéis e solidários em meio ao caos.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.06.jpeg',
    favorito: false
  },
  {
    id: 73,
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'Romance de Aventura',
    descricao: 'A obsessiva e trágica caçada do Capitão Ahab à monstruosa baleia branca, narrada pelo marinheiro Ishmael, explorando temas como vingança, religião e os limites do homem contra a natureza.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.00.jpeg',
    favorito: false
  },
  {
    id: 74,
    titulo: 'O Corvo',
    autor: 'Edgar Allan Poe',
    genero: 'Poema/Terror',
    descricao: 'O célebre poema narrativo que descreve a visita noturna de um corvo falante a um homem enlutado que sofre pela perda de sua amada Lenore, levando-o à loucura com seu refrão \'Nunca mais\'.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.55 (2).jpeg',
    favorito: false
  },
  {
    id: 75,
    titulo: 'Histórias Extraordinárias',
    autor: 'Edgar Allan Poe',
    genero: 'Contos/Terror',
    descricao: 'Coletânea de contos que reúne obras-primas do mistério e do terror psicológico, estabelecendo os pilares fundamentais da literatura policial e do horror moderno.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.55 (1).jpeg',
    favorito: false
  },
  {
    id: 76,
    titulo: 'Jubiabá',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'A história de Antônio Balduíno, um jovem negro criado no morro do Capa-Negro, na Bahia, que se torna lutador, trabalhador e símbolo de resistência popular.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.03 (2).jpeg',
    favorito: false
  },
  {
    id: 77,
    titulo: 'O Mistério dos Sete Relógios',
    autor: 'Agatha Christie',
    genero: 'Ficção Policial',
    descricao: 'Após uma brincadeira com despertadores terminar em tragédia em uma mansão, Lady Eileen \'Bundle\' Brent decide investigar uma rede secreta de conspirações e assassinatos.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.51.jpeg',
    favorito: false
  },
  {
    id: 78,
    titulo: 'Helena',
    autor: 'Machado de Assis',
    genero: 'Romance Romântico',
    descricao: 'A chegada de Helena, filha ilegítima reconhecida em testamento pelo Conselheiro Vale, transforma a rotina da família e desperta sentimentos conflitantes e proibidos em seu meio-irmão Estácio.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.09 (1).jpeg',
    favorito: false
  },
  {
    id: 80,
    titulo: 'O Alienista',
    autor: 'Machado de Assis',
    genero: 'Conto/Sátira',
    descricao: 'O respeitado médico Simão Bacamarte funda a Casa Verde, um asilo em Itaguaí, e passa a internar grande parte da população sob alegações científicas de loucura, questionando os limites da sanidade.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.10 (1).jpeg',
    favorito: false
  },
  {
    id: 81,
    titulo: 'Mar Morto',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'A dura e lírica vida dos marinheiros do cais de Salvador, centrada no romance épico entre o corajoso mestre de saveiro Guma e a apaixonada Lívia, sob as bênçãos e os perigos de Iemanjá.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.04.jpeg',
    favorito: false
  },
  {
    id: 82,
    titulo: 'Capitães da Areia',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'A vida, os sonhos e os delitos de um grupo de meninos de rua abandonados em Salvador, liderados por Pedro Bala, escancarando a dura e comovente realidade social da época.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.02 (3).jpeg',
    favorito: false
  },
  {
    id: 83,
    titulo: 'Gabriela, Cravo e Canela',
    autor: 'Jorge Amado',
    genero: 'Romance Regionalista',
    descricao: 'Na Ilhéus dos anos 1920, o romance entre o sírio Nacib e a bela e sensual retirante Gabriela se desenrola em meio às intensas transformações políticas e sociais da era dos coronéis do cacau.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.03 (1).jpeg',
    favorito: false
  },
  {
    id: 84,
    titulo: 'Emma',
    autor: 'Jane Austen',
    genero: 'Romance',
    descricao: 'Emma Woodhouse, uma jovem rica, inteligente e mimada, dedica-se a brincar de casamenteira em sua pequena vila, provocando uma série de mal-entendidos e confusões românticas.',
    capa: 'WhatsApp Image 2026-09-08 at 16.23.01.jpeg',
    favorito: false
  },
  {
    id: 85,
    titulo: 'Os Três Mosqueteiros',
    autor: 'Alexandre Dumas',
    genero: 'Romance Histórico/Aventura',
    descricao: 'O jovem d\'Artagnan viaja a Paris para se juntar à guarda de elite do rei, os Mosqueteiros, e acaba se unindo a Athos, Porthos e Aramis em aventuras heroicas e intrigas políticas na França do século XVII.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.52 (1).jpeg',
    favorito: false
  },
  {
    id: 86,
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    genero: 'Sátira Política',
    descricao: 'Uma sátira política em forma de fábula onde os animais de uma fazenda se rebelam contra seus donos humanos, apenas para criar uma nova tirania opressiva liderada pelos porcos.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.59 (2).jpeg',
    favorito: false
  },
  {
    id: 87,
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Ficção Científica/Distopia',
    descricao: 'O magistral romance distópico que acompanha Winston Smith em um regime totalitário de vigilância extrema governado pelo onipresente Grande Irmão, onde a verdade é manipulada e o pensamento livre é crime.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.59 (1).jpeg',
    favorito: false
  },
  {
    id: 88,
    titulo: 'Crime e Castigo',
    autor: 'Fiódor Dostoiévski',
    genero: 'Romance Psicológico',
    descricao: 'O ex-estudante Raskólnikov comete um duplo assassinato impulsionado por uma teoria de superioridade moral. A obra é um profundo mergulho psicológico na culpa, na paranoia e na busca por redenção.',
    capa: 'WhatsApp Image 2026-09-08 at 16.22.58.jpeg',
    favorito: false
  }
      
  ]);
  emprestimos = signal<Livro[]>([]);
  favoritos = computed(() =>
  this.livros().filter(livro => livro.favorito)
);
adicionarLivro(livro: Livro) {
  this.livros.update(lista => [
    ...lista,
    {
      ...livro,
      id: Date.now()
    }
  ]);
  }
  removerLivro(id: number) {
    this.livros.update(lista =>
      lista.filter(livro => livro.id !== id)
    );
  }
  alternaFavorito(id: number) {
    this.livros.update(lista =>
      lista.map(livro =>
        livro.id === id
        ? { ...livro, favorito: !livro.favorito}
        : livro
      )
    );
  }
  adicionarEmprestimo(livro: Livro) {
    this.emprestimos.update(lista => {
      const jaExiste = lista.some(item => item.id === livro.id);
      if (jaExiste) {
        return lista;
      }
      return [...lista, livro];
    });
  }
  removerEmprestimo(id: number) {
    this.emprestimos.update(lista =>
      lista.filter(livro => livro.id !== id)
    );
  }
}

