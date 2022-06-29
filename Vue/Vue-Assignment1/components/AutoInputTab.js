
Vue.component('auto-input-tab', {
    data() {
        return {
            businessAccountId: "",
            pixelAccountId: "",
            listBusinessAccount: [
                {
                    id: 255697,
                    name: 'Account 1'
                },
                {
                    id: 582235,
                    name: 'Account 2'
                },
                {
                    id: 9789564,
                    name: 'Account 3'
                },
                {
                    id: 524756,
                    name: 'Account 4'
                }
            ],
            listPixelAccount: [
                {
                    id: 1,
                    parentId: 255697,
                    name: 'Pixel 1'
                },
                {
                    id: 2,
                    parentId: 582235,
                    name: 'Pixel 2'
                },
                {
                    id: 3,
                    parentId: 582235,
                    name: 'Pixel 3'
                },
                {
                    id: 4,
                    parentId: 255697,
                    name: 'Pixel 4'
                },
                {
                    id: 5,
                    parentId: 9789564,
                    name: 'Pixel 5'
                },
                {
                    id: 6,
                    parentId: 255697,
                    name: 'Pixel 6'
                },
                {
                    id: 7,
                    parentId: 582235,
                    name: 'Pixel 7'
                },
                {
                    id: 8,
                    parentId: 9789564,
                    name: 'Pixel 8'
                },
                {
                    id: 9,
                    parentId: 255697,
                    name: 'Pixel 9'
                },
                {
                    id: 10,
                    parentId: 582235,
                    name: 'Pixel 10'
                },
                {
                    id: 11,
                    parentId: 9789564,
                    name: 'Pixel 11'
                },
                {
                    id: 12,
                    parentId: 255697,
                    name: 'Pixel 12'
                }
            ]
        }
    },
    computed: {
        listPixelAccountFiltered: function () {
            this.pixelAccountId = ""
            return this.listPixelAccount.filter(item => item.parentId === this.businessAccountId)
        }
    },
    template: `
        <div class="input-pixel">
            <div class="card--info flex align-center">
                <div class="card--avatar">
                    <img src="./assets/images/avatar.png" alt="" class="info--avatar">
                    <img src="./assets/images/fb.svg" alt="" class="avatar--social">
                </div>
                <div class="card--title">
                    <h2>Lotusprayer Store</h2>
                    <p><img src="./assets/images/check.svg" alt=""> Connected</p>
                </div>
                <button class="card--button">
                    Change Account
                </button>
            </div>
            <div class="form--field">
                <label>Select Business Account</label>
                <select name="business-account" id="business-account" v-model="businessAccountId" required>
                    <option value="">Select your business account</option>
                    <option v-for="account in listBusinessAccount" :key="account.id" :value="account.id">{{account.id}} - {{account.name}}</option>
                </select>
            </div>
            <div class="form--field">
                <label>Select Pixel</label>
                <select name="pixel-account" id="pixel-account" v-model="pixelAccountId" :disabled="businessAccountId ? false : true" required>
                <option value="">Select your pixel</option>
                <option v-for="pixel in listPixelAccountFiltered" :key="pixel.id">{{pixel.name}}</option>
                </select>
            </div>
            <div class="error--alert"
             v-show="businessAccountId && listPixelAccountFiltered.length === 0">
                <img src="./assets/images/Badge.svg" alt="" />
                <div class="error--content">
                    <h1>Missing pixel</h1>
                    <p>You don't have any Facebook Pixels in this Business Account. Change Business Account or <a href="#">Create New Facebook Pixel</a> first.</p>
                </div>
            </div>
        </div>
    `,
    style: {

    }

})
