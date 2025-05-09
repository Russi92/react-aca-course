

export default function Russi(){
    const x = 100;

    const person={
        name : 'Mohamed',
        email : 'mohamed@gmail.com'
    }

    const elmStyle={
      background : 'green',
      color : 'black',
      boxShadow : '0 20px 10px red'
    }

    return(
      <div>
        <h1 style={elmStyle}>{sayHello()} hello im russi {x - 90}</h1>
        <h5 style={{fontSize:'50px'}}>{person.name}</h5>
        <h5>{person.email}</h5>
        <div style={elmStyle}>nedved</div>
        <button onClick={clickBtn}>Log In</button>
      </div>
  
    )
  }

  function sayHello(){
    return('hey >>>')
  }

function clickBtn(){
  alert('i love gogo');
}




//   export default Russi;