app.component('kassalijst', {
    template:
        ` <div class="col-12 col-lg-6 offset-lg-3 d-flex flex-column justify-content-center align-items-center vh-100 text-white">
            
             <div v-for="product in producten" :class="[product.purchased ? checkedClass : uncheckedClass]">
                 <p class="my-0 fs-3">{{product.article}}</p>
                 <div class="d-flex align-items-center">
                    <p class="my-0 fs-3 pe-5">&euro; {{product.price}}</p>            
                    <input @change="togglePurchased(product)" class="form-check-input fs-3 border border-danger rounded-circle m-0" type="checkbox" v-model="selectedProducts" :value="product">
                </div>      
             </div>          
             <div class="shadow-lg p-3 mb-5 bg-dark rounded w-100 bg-opacity-75 border border-white border-5 d-flex justify-content-between">
                 <p class="my-0 fs-3">Total</p>
                 <p class="my-0 fs-3">&euro; {{totalPrice}}</p>
             </div>        
          </div>
    `,
    data() {
        return {
            producten: [{
                productId:1,
                article:'Brood',
                price: 3.00,
                purchased: false,
            },
                {
                    productId:2,
                    article:'Vlees',
                    price: 5.00,
                    purchased: false,
                },
                {
                    productId:3,
                    article:'Groenten',
                    price: 15.00,
                    purchased: false,
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
        }
    },
    computed: {
            totalPrice(){
                let total=0

                for(let p of this.selectedProducts) {
                    total += p.price
                }
                console.log(this.selectedProducts)
                return total;
        }
    }
})