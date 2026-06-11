// DARK AND LIGHT MODE SWITCH
//Modifica os temas da página
const lightModes = document.getElementById('light-dark')//Seleciona o ID dos modos
lightModes.addEventListener('click',()=>{//Espera o click para dar o callback
    const currentMode = lightModes.getAttribute('alt')
    const modeSwitch = document.getElementById('mode')

    if (currentMode == 'darkMode'){ //Dark para light
        lightModes.setAttribute('alt','lightMode')
        lightModes.setAttribute('src','images/light-dark/lightMode.svg')
        modeSwitch.setAttribute('href','css/lightStyles.css')

    }else if(currentMode == 'lightMode'){ //Light para galaxy
        lightModes.setAttribute('alt','galaxyMode')
        lightModes.setAttribute('src','images/light-dark/galaxyMode.svg')
        modeSwitch.setAttribute('href','css/galaxyStyles.css')

    }else{ //Galaxy para dark
        lightModes.setAttribute('alt','darkMode')
        lightModes.setAttribute('src','images/light-dark/darkMode.svg')
        modeSwitch.setAttribute('href','css/darkStyles.css')
    }
})
// DARK AND LIGHT MODE SWITCH

//SECTION VISIBILITY
//Mostra em qual section o usuario está
const links = document.querySelectorAll('a') //Seleciona todos os links anchor
const sections = document.querySelectorAll('.sections section')// Seleciona todas as section

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
            if (!entry.isIntersecting){//Se a section não mudar, ignora
                return
            }
            
        const entrySelect = entry.target.id //seleciona o id de cada section

        links.forEach(link =>{
            if (link.getAttribute('href')==`#${entrySelect}`){ 
                link.classList.add('active')//deixa apenas o ID correspondente habilitado
            }else{
                link.classList.remove('active')
            }
        })
    })
},{
    root: null,
    rootMargin: "-30% 0px -70% 0px", //onde e como o observador vai observar
    threshold: 0
})
sections.forEach(section=>observer.observe(section))//verifica cada section com o .observe()
//SECTION VISIBILITY

//SLIDESHOW

const slideshowImages = {
    'img1': '/images/slideshow/slideshow1.jpg',
    'img2': '/images/slideshow/slideshow2.webp',//endereço das imgs
    'img3': '/images/slideshow/slideshow3.jpg'
}
    
const nextImg = document.querySelector('#proximo')
const lastImg = document.querySelector('#anterior')//seleciona os ids dos elementos
const counter = document.querySelector('#contador')

nextImg.addEventListener('click',()=>{//evento de click

    const slideBox = document.querySelector('.slide img') //seleciona a imagem atual
    const currentImage = slideBox.getAttribute('alt') //pega o valor de alt da imagem atual

    switch (currentImage){//encontra o comando da imagem atual e finaliza
        case 'img1':
            slideBox.setAttribute('src',`${slideshowImages['img2']}`)
            slideBox.setAttribute('alt','img2')
            counter.textContent = '2 / 3'
            break
        case 'img2':
            slideBox.setAttribute('src',`${slideshowImages['img3']}`)
            slideBox.setAttribute('alt','img3')
            counter.textContent = '3 / 3'
            break
        default:
            slideBox.setAttribute('src',`${slideshowImages['img1']}`)
            slideBox.setAttribute('alt','img1')
            counter.textContent = '1 / 3'
            break
        }    
})

//Igual só que ao contrário
lastImg.addEventListener('click',()=>{

    const slideBox = document.querySelector('.slide img')
    const currentImage = slideBox.getAttribute('alt')

    switch (currentImage){
        case 'img1':
            slideBox.setAttribute('src',`${slideshowImages['img3']}`)
            slideBox.setAttribute('alt','img3')
            counter.textContent = '3 / 3'
            break
        case 'img2':
            slideBox.setAttribute('src',`${slideshowImages['img1']}`)
            slideBox.setAttribute('alt','img1')
            counter.textContent = '1 / 3'
            break
        default:
            slideBox.setAttribute('src',`${slideshowImages['img2']}`)
            slideBox.setAttribute('alt','img2')
            counter.textContent = '2 / 3'
            break
        }    
})

//SLIDESHOW

//QUIZ
//Faz o Quiz funcionar
const form = document.getElementById('quiz') //Seleciona o formulário
const result = document.getElementById('resultado')//Seleciona o campo de resultado 

form.addEventListener('submit',(standard)=>{//Espera a submissão do formulário para iniciar o callback
    standard.preventDefault()//Impede a página de recarregar

    const questions = document.querySelectorAll('fieldset')//Seleciona todas as questões 
    let grade = 0

    questions.forEach(answer =>{//Para cada fieldset/questão

        const correct = answer.dataset.resposta //Seleciona o atributo 'data' do fieldset
        const checkedAnswer = answer.querySelector("input[type='radio']:checked")//Seleciona a opção marcada
        
        if(checkedAnswer && checkedAnswer.value == correct){//Se não houver opção marcada, ou errado ele não aceita o valor.
            grade++ //Essa chave lógica depende de dois trues, já que se fosse apenas a opção correta ele
        }           //tentaria acessar o valor de null, o que da erro e quebra o codigo
    })

    result.textContent = `Resultado: ${grade} acertos.`

})
//QUIZ

