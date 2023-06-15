function Input ({input, value='', placeholder}){
    return(
        <input placeholder={placeholder} type="text" value={value} onInput={(event) =>{ input(event.target.value)}}/>
    )
}

export default Input;