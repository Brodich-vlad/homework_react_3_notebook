import Btn from "../btn";

function Table ({arr}){
    return(
        <table>
        <thead>
            <tr>
                <th colSpan={'5'}>Список продуктів.</th>
            </tr>
        </thead>
        <tbody>
            {
         
                Array.isArray(arr) ? arr.map((e,i)=>{
                    return(
                        <tr key={"product"+i}>
                        <td>{i+1}</td>
                        <td  className={e.classCrossed}>{e.name}</td>
                        <td><Btn text={<span className="ellow">✍️</span>} className="btn" click={e.clickEdit} id={i}/></td>
                        <td><Btn text={<span className="green">✅</span>} className="btn" click={e.clickDone} id={i}/></td>
                        <td><Btn text={<span className='red'>❌</span>} className="btn" click={e.clickRemove} id={i}/></td>
                    </tr>
                    )
                })
                : console.log('-')
            }


        </tbody>
    </table>
    )
}

export default Table;