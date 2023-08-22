
import './App.css'

function App() {

  window.addEventListener('load',function(){


    const valores=fetch('https://restcountries.com/v2/all').then(res=>{
    
    res.json().then(dados=>{
    
        mostraDados(dados);
    });
    }).catch(erro=>{
    
        console.log(erro+" erro na requisição")
    
    });
    
    });
    
    0
    function mostraDados(dados){
        const paises=document.querySelector('#Video Games');
    
        dados.forEach(acesso =>{
            paises.innerHTML += `<tr> <td> <img src=${acesso.flag} width=90px height=50px> </td>
                                <td> ${acesso.name} </td> 
                                <td> ${acesso.capital} </td> 
                                <td> ${acesso.alpha3Code} </td>
                                
            `                                         
        })        
    }


  return (
    <>
        <table id='video games'>

<tr>
    <td> </td>    
    <td> Nome: </td>
    <td> Capital: </td>
    <td> Sigla: </td>



</tr>
</table>

    </>
  )
  mostraDados();

}



export default App