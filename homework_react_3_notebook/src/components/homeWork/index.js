import {Component} from "react";
import Btn from "../btn";
import Input from "../input";
import List from "../list";

class HomeWork extends Component{
    state = {
        showInput:"show-input hide",
        id:1,
        flag:true,
        idProduct:'',
        inputInfo: '',
        products:[],
    }
     // Кнопка "Додати продукт".
    addListClick = ()=>{
        this.setState((state)=>{
            return{
                ...state,
                showInput:"show-input",
                id:state.products.length +1,
            }
        })
    }
     // Кнопка "Збегти зміни".
    saveСhangesСlick = ()=>{
        if(this.state.inputInfo !== ''){
            if(this.state.flag === true){
                this.setState((state)=>{
                    state.products.push({
                        name:state.inputInfo,
                        classCrossed:'product',
                        clickEdit: this.editProductClick,
                        clickDone: this.doneProductClick,
                        clickRemove: this.removeProductClick,
                    });
                    return{
                        ...state,
                        showInput:"show-input  hide",
                        inputInfo:'',
                        id:state.products.length +1,
                    }
                })
            }
            else if(this.state.flag === false){
                this.setState((state)=>{
                    state.products[state.idProduct].classCrossed = 'product'
                    state.products[state.idProduct].name = this.state.inputInfo
                    return{
                        ...state,
                        showInput:"show-input  hide",
                        idProduct:'',
                        inputInfo:'',
                        flag:true,
                    }
                })
            }

        }else {
            alert('Напишіть назву продукту.')
            return
        }
    }
    // Інпут додавання продукту.
    inputChange = (i)=>{
        this.setState((state)=>{
            return{
                ...state,
                inputInfo:i,
            }
        })
    }
    // Кнопка "Редагувати продукт".
    editProductClick = (i)=>{
        this.setState((state)=>{
            state.products[i].classCrossed = state.products[i].classCrossed + ' edit'

            return{
                ...state,
                idProduct:i,
                id:'',
                inputInfo:state.products[i].name,
                showInput:"show-input",
                flag:false,
            }
        })
    }
    // Кнопка "Продукт придбано."
    doneProductClick = (id)=>{
        this.setState((state)=>{
            state.products[id].classCrossed= state.products[id].classCrossed + " crossed"
            return{
                ...state,
            }
        })
    } 
    // Кнопка "Видалити продукт."
    removeProductClick = (id)=>{
        this.setState((state)=>{
            state.products.splice(id,1)
            return{
                ...state,
            }
        })
    }

    render(){
        return(
            <div className="home-work-box">
            <div className="home-work-btns">
                <div className={this.state.showInput}>  
                    <Input placeholder={this.state.id + "."} input={this.inputChange} value={this.state.inputInfo}/>
                    <Btn className="btn-add" text={<>Зберегти зміни <span>📀</span></>} click={this.saveСhangesСlick}/>
                </div>
            </div>
            <div className='list-product'>
                <h2>Список покупок : <Btn className="btn-add" text={<>Додати продукт <span>➕</span></>} click={this.addListClick}/></h2>
                <List arr={this.state.products}/>
            </div>
        </div>
        )
    }
};

export default HomeWork;