import './components/ProductItem.js'
import './components/VueModal.js'
const app = new Vue({
    data() {
        return {
            isLoading: true,
            products: [],
            isSorted: false,
            currentPage: 1,
            timeout: '',
            debouncedInput: '',
            selectedProducts: this.getProductsLocal(),
            selectAll: this.getProductsLocal().length ? true : false,
            visibleModal: false,
            searchedProducts: [],
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < Math.ceil(this.searchedProducts.length / 10))
                this.currentPage += 1;
        },
        prevPage() {
            if (this.currentPage > 1)
                this.currentPage -= 1;
        },
        insertSelectedProducts(id) {
            this.selectedProducts.push(id)
            this.selectAll = true;
        },
        removeSelectedProducts(id) {
            this.selectedProducts = this.selectedProducts.filter(item => item !== id);
            if (this.selectedProducts.length === 0)
                this.selectAll = false
        },
        handleSave() {
            localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts))
            this.openModal();

        },
        onSelectAll(event) {
            if (event.target.checked) {
                this.searchedProducts.forEach(item => !this.selectedProducts.includes(item.id) && this.selectedProducts.push(item.id))
            } else {
                this.selectedProducts = [];
            }
        },
        openModal() {
            this.visibleModal = true
        },
        getProductsLocal() {
            return JSON.parse(localStorage.getItem('selectedProducts')) || []
        }
    },

    computed: {
        productsShow() {
            let sortedProducts = this.isSorted ? [...this.products].reverse() : [...this.products]
            this.searchedProducts = sortedProducts
            if (this.inputSearch) {
                this.searchedProducts = sortedProducts.filter(item => item.name.toLowerCase().includes(this.inputSearch.toLowerCase()));
            }

            return this.searchedProducts.slice(10 * (this.currentPage - 1), 10 * this.currentPage)
        },
        inputSearch: {
            get() {
                return this.debouncedInput;
            },
            set(val) {
                if (this.timeout) clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    this.debouncedInput = val
                }, 300)
            }
        },
    },
    mounted() {
        //getData
        fetch('./api/products.json').then(res => res.json()).then(data => {
            setTimeout(() => {
                this.products = data.sort((a, b) => {
                    return a.name > b.name ? 1 : -1
                })

                this.isLoading = false
            }, 1000)

        }).catch((err) => {
            this.isLoading = false
            // console.log(err)
        })

    },
}).$mount('#main')