import React, {useState} from 'react'

export const Family = ({familyTree}) => {

    const [isVisible, setIsVisible] = useState(false)
    const expand = ()=>{
        setIsVisible(!isVisible);
    };


  return (
    <div style={{paddingLeft: 10}}>
        <span onClick={expand}>{familyTree.name}</span>

        {isVisible ? (
            familyTree.children?.map((child) =>{
                return(
                    <div style={{paddingLeft: 10}}>
                        {/* the code below runs throught the object and whhenever it sees a selected object doesnt have an array it leaves it */}
                        <Family familyTree={child}/> 
                    </div>
                )
            })
        ):(<></>)}
    </div>
  )
}
