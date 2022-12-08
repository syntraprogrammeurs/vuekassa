app.component('kassalijst', {
    template:
        ` <div class="col-12 col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center vh-100 text-white">
                <div class="shadow-lg p-3 mb-5 bg-dark rounded w-100 bg-opacity-75 border border-white border-5 d-flex justify-content-between">
                     <p class="my-0 fs-3">Ingave</p>
                      <input class="form-control w-50" type="text" placeholder="Product ...">
                       <input class="form-control w-25" type="number" min="1" step="0.01" placeholder="Prijs ...">
                        <button class="btn btn-dark border border-5 border-white">Add</button>
                 </div>    
                <div class="border border-5 border-dark border-opacity-75 w-100 mb-5"></div>
             <div v-for="product in producten" :class="[product.purchased ? checkedClass : uncheckedClass]">
                 <p class="my-0 fs-3 w-25">{{product.article}}</p>
                 <div class="d-flex align-items-center w-100">
                    <!--<p class="my-0 fs-3 pe-5">{{product.quantity}}</p>-->
                  
                       <input @change="checkPositiveNumber(product)" class="form-control w-50" type="number" min="1" step="0.01" v-model="product.quantity">
                  
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
            producten: [{
                productId:1,
                article:'Brood',
                price: 3.20,
                purchased: false,
                quantity:1
            },
                {
                    productId:2,
                    article:'Vlees',
                    price: 5.90,
                    purchased: false,
                    quantity:1
                },
                {
                    productId:3,
                    article:'Groenten',
                    price: 15.00,
                    purchased: false,
                    quantity:1
                },
            ],
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
