<template>
    <div>
		<div>
			Gia tu: <input type="text" v-model="filters.minPrice"><br>
			den: <input type="text" v-model="filters.maxPrice"><br>
			color: <select name="" id="" v-model="filters.color"><br>
				<option value="black">black</option>
				<option value="white">white</option>
			</select><br>
			size: <select name="" id="" v-model="filters.size">
				<option value="m">M</option>
				<option value="s">S</option>
			</select>

		</div>
		<hr>
		<div
			v-for="(product, index) in filteredProducts"
			:key="index"

		>
			{{product.name}}
		</div>
    </div>
</template>
<script>
export default {
	methods:{
		getProducts(){
			this.filteredProducts =  this.products.filter(product => {
				return product.price >= this.filters.minPrice;
			}).filter(product => {
				return product.price <= this.filters.maxPrice;
			}).filter(product => {
				return product.color == this.filters.color;
			}).filter(product => {
				return product.size == this.filters.size;
			})
		}
	},
   data(){
		return {
			products:[
				{name:'keyboard', price:1000000, color:'white', size:'m'},
				{name:'ao thun', price:2000000, color:'white', size:'s'},
				{name:'quan short', price:500000, color:'black', size:'m'},
				{name:'mouse', price:3000000, color:'black', size:'m'},
			],
			filters: {
				minPrice:0,
				maxPrice:0,
				color:'white',
				size:'s'
			},
			filteredProducts: [],
		}
	},
	watch: {
		// lang nghe filters thay doi
		filters: {
			deep:true,
			handler(){
				this.getProducts();
			}
		}
	}
}
</script>
<style scoped>

</style>