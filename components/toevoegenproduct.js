app.component('toevoegenproduct',{
    template:
        `        
                  <form @submit.prevent="toevoegenproduct" class="shadow-lg p-3 mb-5 bg-dark rounded w-100 bg-opacity-75 border border-white border-5">
                  
                   <p class="alert alert-danger" v-if="errors.length">
                        <strong>Gelieve de volgende errors op te lossen:</strong>
                        <ul>
                          <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="d-flex justify-content-between">
                    <p class="my-0 fs-3">Ingave</p>
                      <input class="form-control w-25" type="text" placeholder="Product ..." v-model="product">
                       <input class="form-control w-25" type="number" min="0.01" step="0.01" placeholder="Prijs ..." v-model="price">
                         <input class="form-control w-25" type="number" min="1" step="1" placeholder="Quantity ..." v-model="quantity">
                        <button class="btn btn-dark border border-5 border-white">Add</button>
                    </div>
                     
                 </form>  
              
                
        `,
    data() {
        return{
            count:0,
            product:"",
            price:"",
            quantity:"",
            errors:[],
        }
    },
    methods:{
        toevoegenproduct(){
            this.errors = []
            if(this.product ==""){
                this.errors.push("Gelieve alle velden in te vullen aub!");
            }else{
                let addProduct={
                    productId:this.counter,
                    article:this.product,
                    price:this.price,
                    quantity:this.quantity,
                    purchased:false,
                }
                this.$emit('addProductToList',addProduct)
                this.product=""
                this.price=0.01
                this.quantity=1
            }

        }
    }


})
