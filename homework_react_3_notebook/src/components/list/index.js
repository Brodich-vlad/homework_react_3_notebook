import Btn from "../btn";

function List ({arr}){
    return(
        <ul>
            {
              Array.isArray(arr) && 0 < arr.length ? arr.map((e,i)=>{
                    return(
                        <li className={e.classCrossed} key={"product"+i}>
                            <p><span>{i+1}. </span> {e.name}</p>
                            <div>
                                <Btn text={<span className="ellow">✍️</span>} className="btn" click={e.clickEdit} id={i}/>
                                <Btn text={<span className="green">✅</span>} className="btn" click={e.clickDone} id={i}/>
                                <Btn text={<span className='red'>❌</span>} className="btn" click={e.clickRemove} id={i}/>
                            </div>
                        </li>
                    )
                }):  <li className={'product'} key={"product"}>
                   <p><span>1.</span></p>
               </li>
            }
        </ul>
    )
}

export default List;