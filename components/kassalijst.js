app.component('kassalijst', {
    template:
        ` <div class="col-12 col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center vh-100 text-white">
            <div class="position-relative w-100">
                    <p class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{producten.length}}</p>
                        <toevoegenproduct @addProductToList="toevoegenLijst"></toevoegenproduct>
                         <div class="border border-5 border-dark border-opacity-75 w-100 mb-5"></div>
            </div>
             <div v-for="product in producten" :class="[product.purchased ? checkedClass : uncheckedClass]">
                 <p class="my-0 fs-3 w-25">{{product.article}}</p>
                 <div class="d-flex align-items-center w-100">
                    <input @change="checkPositiveNumber(product)" class="form-control w-50" type="number" min="1" step="1" v-model="product.quantity">
                    <p class="my-0 ms-auto fs-3 pe-5">&euro; {{product.price.toFixed(2)}}</p>   
                    <p class="my-0 fs-3 pe-5">&euro; {{(product.quantity * product.price).toFixed(2)}}</p>      
                    <input @change="togglePurchased(product)" class="form-check-input fs-3 border border-danger rounded-circle m-0" type="checkbox" v-model="selectedProducts" :value="product">
                </div>      
             </div>          
             <div class="shadow-lg p-3 mb-5 bg-dark rounded w-100 bg-opacity-75 border border-white border-5 d-flex justify-content-between">
                 <p class="my-0 fs-3">Total</p>
                 <p class="my-0 fs-3">&euro; {{totalPrice.toFixed(2)}}</p>
             </div>        
          </div>
    `,
    data() {
        return {
            producten: [],
            selectedProducts:[],
            checkedClass: 'bg-success shadow-lg p-3 mb-5 rounded w-100 bg-opacity-75 border border-white border-5 d-flex justify-content-between',
            uncheckedClass:'bg-danger shadow-lg p-3 mb-5 rounded w-100 bg-opacity-75 border border-white border-5' +
                ' d-flex justify-content-between',
        }
    },
    methods:{
        togglePurchased(product){
            product.purchased = !product.purchased
        },
        checkPositiveNumber(product){
            if(product.quantity < 1){
                product.quantity = 1
            }
        },
        toevoegenLijst(addProduct){
            this.producten.push(addProduct)
        }
    },
    computed: {
            totalPrice(){
                let total=0
                for(let p of this.selectedProducts) {
                    total += (p.price * p.quantity)
                }
                console.log(this.selectedProducts)
                return total;
        },


    }
})
