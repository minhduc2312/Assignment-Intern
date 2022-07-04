Vue.component('product-item', {
    props: ["id", "name", "image", "price", "checked"],

    template: `
        <label class="product-item">
            <input type="checkbox" :checked="checked" @click="handleChecked" />
            <div class="detail-item">
                <img :src="image" class="item-img" alt="" />
                <div class="item-title">
                    <div class="item-name">{{name}}</div>
                    <div class="item-id">{{id}}</div>
                </div>
                <div class="item-price">\${{price}}</div>
            </div>
        </label>
    `,
    methods: {
        handleChecked(event) {
            if (event.target.checked) {
                this.$emit('insert', this.id)
            } else {
                this.$emit('remove', this.id)
            }
        }
    }
})