function Mobiles({os}) {
    console.log(os)
    return <li style={ { textAlign:"justify",marginLeft:40}}> {os}</li>
  }

  function Headings({m}){
    return <h1 style={ { textAlign:"justify" ,marginLeft:20}}>{m}</h1>
  }

  export {Mobiles,Headings}