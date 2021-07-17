import react from 'react';
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, AlurakutStyles, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations/'
import React from 'react';

function ProfileSlidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: `8px`}}/>
      <hr/>

      <p>
      <a className="boxLink" href={`https://github.com.com/${propriedades.githubUser}`}>
      @{propriedades.githubUser}
      </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
      </Box>
  )
}

export default function Home() {
  const githubUser = 'cesar-nogueira';
  const [comunidades, setComunidades] = React.useState([{
    id: '123456',
    title: 'Eu odeio acordar cedo', 
    Image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades = comunidades[0]
  // cons alteradorDeComuidades/setComunidades = comunidades[1]
  console.log(comunidades)
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'allegretti', 'drianoaz', 'marcobrunodev', 'cesar-nogueira'];
  
  return (
  
  <>
    <AlurakutMenu githubUser={githubUser} />
  <MainGrid>
    <div className="profileArea" style={{gridArea: `profileArea` }}>
      <ProfileSlidebar githubUser={githubUser} />
    </div>
    <div className="welcomeArea" style={{gridArea: `welcomeArea` }}>
      <Box>
        <h1 className="title">
          Bem Vindo(a) {githubUser}
        </h1>

        <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O Que você deseja fazer?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);

            console.log('campo', dadosDoForm.get('title'))
            console.log('image', dadosDoForm.get('image'))

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              Image: dadosDoForm.get('image'),

            }
            
              //comunidades.push('Alura Stars');
              const comuninadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comuninadesAtualizadas)
              console.log(comunidades);

          }}>
          <div>
            <input
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
              />
          </div>
          <div>
            <input
              placeholder="Coloque uma URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa"
              />
          </div>
          <button>
            Criar comunidade
          </button>

          </form>

        </Box>
    </div>
    <div className="profileRelationsArea" style={{gridArea: `profileRelationsArea` }}>
    <ProfileRelationsBoxWrapper>
        <h2 className='smallTitle'>
          Pessoas da Comunidade ({pessoasFavoritas.length})
        </h2>
      
      
      <ul>
        {pessoasFavoritas.slice(0,6).map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`}>
            <img src={`https://github.com/${itemAtual}.png`} />
            <span>{itemAtual}</span>
          </a></li>
          )
        } )}
      </ul>
      </ProfileRelationsBoxWrapper>


      <ProfileRelationsBoxWrapper>
        <h2 className='smallTitle'>
          Comunidades ({comunidades.length})
        </h2>
        <ul>
        {comunidades.slice(0,6).map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
            <img src={itemAtual.Image} />
            <span>{itemAtual.title}</span>
          </a></li>
          )
        } )}
      </ul>  
      </ProfileRelationsBoxWrapper>
    </div>  
  </MainGrid>
  </>
  )
}
