class CounterModel {
    #count;
    constructor(){
        this.#count = 0;
    }

    getCount(){
        return this.#count;
    }

    add(){
        this.#count = this.#count + 1;
    }

    minus(){
        this.#count = this.#count - 1;
    }

    reset(){
        this.#count = 0;
    }
}

class CounterView {
    constructor(){
        this.countUI = document.querySelector(".counter__count");
        this.addBtn = document.querySelector(".counter__add");
        this.minusBtn = document.querySelector(".counter__minus");
        this.resetBtn = document.querySelector(".counter__reset");
    }

    updateCount(newCount){
        this.countUI.textContent = newCount;
    }
}


class CounterController {
    constructor(view,model){
        this.view = view;
        this.model = model;
        this.setUpEvents();
    }

    setUpEvents(){
        this.handleAdd();
        this.handleMinus();
        this.handleReset();
    }

    handleAdd(){
        this.view.addBtn.addEventListener("click",e=>{
            this.model.add();
            this.view.updateCount(this.model.getCount());
        })
    }
    handleMinus(){
        this.view.minusBtn.addEventListener("click",e=>{
            this.model.minus();
            this.view.updateCount(this.model.getCount());
        })
    }
    handleReset(){
        this.view.resetBtn.addEventListener("click",e=>{
            this.model.reset();
            this.view.updateCount(this.model.getCount());
        })
    }
}



const counterView = new CounterView();
const counterModel = new CounterModel();
const counterController = new CounterController(counterView,counterModel);
console.log(counterModel)