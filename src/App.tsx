import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Acredite, você é capaz de conquistar seus sonhos.',
        'Encare os desafios como oportunidades para crescer.',
        'Persistência é a chave para alcançar o sucesso.',
        'Cada dia é uma nova chance para fazer a diferença.',
        'Acredite no seu potencial, você é extraordinário.',
        'O sucesso vem para aqueles que não desistem.',
        'Seja a mudança que você quer ver no mundo.',
        'O único jeito de fazer um excelente trabalho é amar o que você faz.',
        'Pequenas atitudes podem fazer grandes diferenças.',
        'Você é mais forte do que imagina.',
        'Aprenda com os erros e siga em frente.',
        'Mantenha o foco e a determinação nos seus objetivos.',
        'A persistência leva à conquista dos objetivos.',
        'A atitude determina a altitude.',
        'Cada passo dado é um passo mais perto do seu objetivo.',
        'Acredite na sua capacidade de superar desafios.',
        'Sua jornada é única, valorize cada momento.',
        'Seja grato pelo que você tem enquanto busca pelo que deseja.',
        'O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria.',
        'Nunca é tarde para começar a trilhar um novo caminho.',
        'Acredite no poder dos seus sonhos e lute por eles.',
        'O segredo do sucesso é começar.',
        'O otimismo é a chave para transformar desafios em oportunidades.',
        'Não limite seus desafios, desafie seus limites.',
        'Cada novo dia é uma nova chance para ser melhor.',
        'A determinação é a chave para vencer obstáculos.',
        'A persistência transforma sonhos em realidade.',
        'Você é mais capaz do que imagina.',
        'As dificuldades preparam pessoas comuns para destinos extraordinários.',
        'Acredite na sua capacidade de alcançar o impossível.',
        'Faça o seu melhor e o sucesso virá como recompensa.',
        'Acredite na jornada, não apenas no destino final.',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
        'Grandes conquistas demandam grande dedicação.',
        'A determinação é a diferença entre quem desiste e quem alcança o sucesso.',
        'Sua atitude determina sua altitude.',
        'A vitória só vem para aqueles que nunca desistem.',
        'O primeiro passo para o sucesso é acreditar que é possível.',
        'A persistência torna o impossível em possível.',
        'Mantenha-se focado nos seus objetivos, mesmo diante dos obstáculos.',
        'Você é mais resiliente do que imagina.',
        'O sucesso está na persistência e na dedicação contínua.',
        'Não desista só porque as coisas estão difíceis.',
        'Acredite na sua força e capacidade de superar adversidades.',
        'A motivação é o combustível para alcançar seus objetivos.',
        'Enxergue os obstáculos como oportunidades de crescimento.',
        'A determinação supera talento quando talento não tem determinação.',
        'Sua mentalidade determina sua realidade.',
        'Acredite na jornada, não apenas no destino final.',
        'Seja a mudança que você deseja ver no mundo.',
        'Você é capaz de coisas incríveis quando acredita em si mesmo.',
      ],
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Bom dia! Aproveite cada momento deste novo dia.',
        'Que o seu dia seja repleto de sorrisos e realizações.',
        'Levante com o pé direito e tenha um excelente dia!',
        'Bom dia! Lembre-se de que cada novo dia é uma nova chance para ser feliz.',
        'Comece o dia com pensamentos positivos e tudo fluirá melhor.',
        'Desejo que seu dia seja tão radiante quanto o sol que nasce pela manhã.',
        'Que seu dia seja abençoado e cheio de conquistas.',
        'Aproveite cada segundo deste novo amanhecer para fazer o dia valer a pena.',
        'Bom dia! Acredite nas infinitas possibilidades que este dia oferece.',
        'Que a luz deste dia ilumine o seu caminho e traga muitas alegrias.',
        'Comece o dia agradecendo pela oportunidade de viver mais um dia.',
        'Bom dia! Que as boas energias te acompanhem durante todo o dia.',
        'Que o seu dia seja produtivo e cheio de realizações.',
        'Dê o seu melhor hoje e colherá os frutos amanhã. Bom dia!',
        'Que este dia seja abençoado e cheio de coisas boas para você.',
        'Bom dia! A vida nos presenteia com mais 24 horas para sermos felizes.',
        'Comece o dia com entusiasmo e determinação.',
        'Que seu dia seja leve e cheio de paz interior. Bom dia!',
        'Acorde com a certeza de que hoje será um dia incrível.',
        'Bom dia! Aproveite cada momento como se fosse o mais importante.',
        'Que a alegria deste novo dia contagie todos ao seu redor.',
        'Comece o dia com um sorriso no rosto e o coração cheio de esperança.',
        'Que seu dia seja colorido com os tons mais belos da felicidade.',
        'Bom dia! Acredite no poder das pequenas coisas para fazer a diferença.',
        'Que a luz do dia ilumine seu caminho e traga serenidade ao seu coração.',
        'Aproveite cada minuto deste novo dia para espalhar amor e bondade.',
        'Bom dia! A vida é um presente, faça valer a pena cada segundo.',
        'Que seu dia seja tão especial quanto a pessoa maravilhosa que você é.',
        'Comece o dia com gratidão e tudo fluirá melhor ao seu redor.',
        'Bom dia! Que este dia seja o início de grandes conquistas.',
        'Que a felicidade acompanhe seus passos durante todo o dia.',
        'A cada amanhecer renove suas energias para enfrentar novos desafios. Bom dia!',
        'Que a paz e a tranquilidade dominem o seu dia. Bom dia!',
        'Comece o dia com fé e determinação, e verá grandes coisas acontecerem.',
        'Bom dia! A vida é uma dádiva, aproveite cada instante.',
        'Que seu dia seja regado com muita positividade e realizações.',
        'Aproveite cada amanhecer como uma nova chance para ser feliz. Bom dia!',
        'Que a sua jornada hoje seja de aprendizado e crescimento pessoal.',
        'Bom dia! Levante com a certeza de que coisas boas estão por vir.',
        'Que este novo dia seja preenchido com alegrias e surpresas incríveis.',
        'Que a luz do sol ilumine seus pensamentos e traga boas ideias. Bom dia!',
        'Comece o dia com um coração grato e tudo se tornará mais belo ao seu redor.',
        'Bom dia! Que a serenidade acompanhe você em cada passo dado hoje.',
        'Que seu dia seja tão especial quanto a pessoa maravilhosa que você é.',
        'Comece o dia com energia positiva e acredite no seu potencial.',
        'Bom dia! A vida é feita de novas oportunidades, aproveite cada uma delas.',
        'Que seu dia seja abençoado e cheio de momentos memoráveis.',
        'Que as bênçãos deste novo dia sejam multiplicadas em sua vida. Bom dia!',
        'Acorde e vá em busca dos seus sonhos com determinação. Bom dia!',
      ],
    },
    {
      id: 3,
      nome: 'Boa noite',
      frases: [
        'Boa noite! Que os seus sonhos sejam repletos de paz e tranquilidade.',
        'Que a noite traga descanso e prepare você para um novo dia.',
        'Tenha uma noite tranquila e revigorante.',
        'Boa noite! Que as estrelas iluminem seus sonhos.',
        'Que a noite traga consigo apenas bons pensamentos e serenidade.',
        'Tenha uma noite abençoada e repleta de boas energias.',
        'Que a noite traga descanso profundo e renove suas energias.',
        'Boa noite! Que seus sonhos sejam tão doces quanto a paz que a noite traz.',
        'Que a paz da noite envolva seu coração e traga serenidade à sua alma.',
        'Tenha uma noite de descanso e recuperação para um novo amanhecer.',
        'Boa noite! Que sua mente descanse e se prepare para um novo dia.',
        'Que a noite traga a tranquilidade necessária para um sono reparador.',
        'Tenha uma noite calma e relaxante.',
        'Boa noite! Que os anjos protejam seu sono e seus sonhos.',
        'Que a noite proporcione um merecido descanso e preparação para o futuro.',
        'Tenha uma noite iluminada pela lua e repleta de serenidade.',
        'Boa noite! Que os pensamentos positivos guiem seus sonhos.',
        'Que a noite traga paz ao seu coração e renove suas esperanças.',
        'Tenha uma noite tranquila e cheia de bons momentos.',
        'Boa noite! Que seus sonhos sejam preenchidos com alegria e positividade.',
        'Que a noite traga conforto e renovação para o seu ser.',
        'Tenha uma noite repleta de sonhos lindos e inspiradores.',
        'Boa noite! Que a escuridão da noite seja iluminada por bons pensamentos.',
        'Que a noite traga o merecido descanso e prepare você para um novo dia.',
        'Tenha uma noite de paz e harmonia.',
        'Boa noite! Que o silêncio da noite acalme sua alma.',
        'Que a noite traga sonhos incríveis e revigorantes.',
        'Tenha uma noite de descanso e relaxamento profundo.',
        'Boa noite! Que a quietude da noite traga serenidade ao seu coração.',
        'Que a noite seja uma oportunidade para recarregar suas energias.',
        'Tenha uma noite tranquila e revigorante para um novo dia.',
        'Boa noite! Que seus sonhos sejam tão belos quanto a noite estrelada.',
        'Que a noite traga a serenidade necessária para um sono reparador.',
        'Tenha uma noite de paz e renovação.',
        'Boa noite! Que a escuridão da noite prepare um lindo amanhecer.',
        'Que a noite traga tranquilidade e preparo para um novo dia de realizações.',
        'Tenha uma noite calma e cheia de bons pensamentos.',
        'Boa noite! Que a paz da noite envolva seu ser por completo.',
        'Que a noite seja um refúgio para um descanso merecido.',
        'Tenha uma noite de sono profundo e restaurador.',
        'Boa noite! Que seus sonhos sejam repletos de esperança e alegria.',
        'Que a noite traga um descanso revigorante e renovador.',
        'Tenha uma noite de tranquilidade e serenidade para recarregar as energias.',
        'Boa noite! Que a beleza da noite inspire sonhos maravilhosos.',
        'Que a noite traga a paz necessária para um sono reparador.',
        'Tenha uma noite de descanso e renovação para enfrentar um novo dia.',
        'Boa noite! Que a quietude da noite prepare você para um amanhã brilhante.',
      ],
    },
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    )
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img alt='Logo frases' src={logoImg} className='logo' />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: '#1fa4db',
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>
        Gerar frase
      </button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App
