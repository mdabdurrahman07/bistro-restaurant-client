import { useEffect, useState } from "react"

const UseMenu = () => {
    const [loading , Setloading] = useState(true)
    const [Menu  ,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            Setloading(false)
        })
    },[Setloading])
    return [Menu , loading ]
}

export default UseMenu