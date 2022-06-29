Vue.component('manual-input-tab', {
    data() {
        return {
            pixelName: "",
            pixelId: ""
        }
    },
    computed: {
        isContainNumber() {
            if (this.pixelName) {
                return this.$parent._data.firstSubmit && /[0-9]/i.test(this.pixelName);
            }
            return false; 
        }
    },
     
    template: `
        <div class="input-pixel">
            <div class="form--field">
                <label>Name this pixel</label>
                <input type="text"
                v-model="pixelName" placeholder="Input your pixel name" required/>
                <p v-show="isContainNumber" class="error-message">Please fill letter only</p>
            </div>
            <div class="form--field">
                <label>Enter Facebook Pixel ID</label>
                <input
                pattern="[0-9]+"
                type="number" v-model="pixelId" placeholder="Input your pixel id" min="1" required/>
            </div>
        </div>
    `
})