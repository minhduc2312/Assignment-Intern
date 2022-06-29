Vue.component('manual-input-tab', {
    props: ["pixelName", "pixelId"],
    methods: {

    },

    computed: {
        checkNumber() {
            return this.$parent.isContainNumber(this.pixel_name)
        },
        pixel_name: {
            get() {
                return this.pixelName;
            },
            set(value) {
                this.$emit("update:pixelName", value)
            }
        },
        pixel_id: {
            get() {
                return this.pixelId;
            },
            set(value) {
                this.$emit("update:pixelId", value)
            }
        }
    },

    template: `
        <div class="input-pixel">
            <div class="form--field">
                <label>Name this pixel</label>
                <input type="text"
                v-model="pixel_name" placeholder="Input your pixel name" required/>
                <p v-show="checkNumber" class="error-message">Please fill letter only</p>
            </div>
            <div class="form--field">
                <label>Enter Facebook Pixel ID</label>
                <input
                pattern="[0-9]+"
                type="number" v-model="pixel_id" placeholder="Input your pixel id" min="1" required/>
            </div>
        </div>
    `,
    beforeDestroy() {
        this.pixel_name = "";
        this.pixel_id = ""
    },
})