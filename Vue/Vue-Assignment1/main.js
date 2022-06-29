import './components/AutoInputTab.js'
import './components/ManualInputTab.js'

const app = new Vue({
    el: '#main',
    data: {
        currentTab: 1,
        firstSubmit: false,
        businessAccountId: "",
        pixelAccountId: "",
        pixelName: "",
        pixelId: "",
        target: "entire page",
        conversion: false,
    },

    methods: {
        submitForm() {
            this.firstSubmit = true;

            if (this.isContainNumber(this.pixelName)) {
                return false
            }
            const dataSave = {
                businessAccountId: this.businessAccountId,
                pixelAccountId: this.pixelAccountId,
                pixelName: this.pixelName,
                pixelId: this.pixelId,
                target: this.target,
                conversion: this.conversion,
            }
            alert(JSON.stringify(dataSave), null, 4)
            console.log(dataSave)
            this.clearForm();
        },
        clearForm() {
            document.querySelector('form').reset();
        },
        isContainNumber(value) {
            if (value) {
                return this.firstSubmit && /[0-9]/i.test(value);
            }
            return false;
        }
    },
    
})