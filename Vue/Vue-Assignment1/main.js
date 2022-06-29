import './components/AutoInputTab.js'
import './components/ManualInputTab.js'

const app = new Vue({
    el: '#main',
    data: {
        conversion: false,
        currentTab: 1,
        firstSubmit: false,
        target: "entire page",
        conversion: false
    },
    mounted() {

    },
    methods: {
        submitForm() {
            this.firstSubmit = true;
            //get data from child component
            const chooseInputPixelData = this.$refs[Object.keys(this.$refs)[this.currentTab - 1]]._data
            const { listPixelAccount, listBusinessAccount, ...dataFromChild } = chooseInputPixelData

            const dataSave = Object.assign({}, {
                ...dataFromChild,
                conversion: this.conversion,
                target: this.target
            })

            //check valid input pixel name contain only letter
            if (this.currentTab == 2) {
                const checkPixelNameNumber = /[0-9]/i.test(dataFromChild.pixelName)
                if (checkPixelNameNumber) {
                    return false
                }
            }
            //if valid will do 
            console.log(dataSave)

        }
    },
    computed: {

    }
})