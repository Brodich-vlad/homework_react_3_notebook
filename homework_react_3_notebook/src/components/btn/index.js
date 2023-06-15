function Btn({text, className='', click,id =''}){
    return(
        <button className={className} onClick={()=>{click(id)}} type="button">{text}</button>
    )
}

export default Btn;