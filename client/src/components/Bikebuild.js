import React,{useState} from 'react'

function Bikebuild() {
    const [ bikebuild, setbikebuild] = useState ({ "fork": "", "brakes": "", "frame":""})


handleSubmit(event){
    setbikebuild({"fork": event.target.value})
    event.preventDefault();
}

  return (
    <div>Bikebuild</div>
  )
}

export default Bikebuild