Vue.component('vue-modal', {
    props: ['value'],
    template: `
        <div class="vue-modal" v-if="showModal" @click.self="handleClose">
            <div class="vue-modal-wrapper">
                <div class="vue-modal-header">
                    Notification
                </div>
                <div class="vue-modal-body">
                    <slot></slot>
                </div>
                <div class="vue-modal-footer">
                    <button @click="handleClose">OK</button>
                </div>
            </div>
        </div>
    `,
    methods: {
        handleClose() {
            this.showModal = false
        }
    },
    computed: {
        showModal: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    },
    mounted() {
        console.log(this.value)
    },

})