import Cookies from '@/plugins/cookie'
export default async function Auth({ next, store }) {
    const token = Cookies.get('access_token');
    if (token) {
        const checkUser = store.state.auth.user;
        if (!checkUser) {
            const getUser = await store.dispatch('auth/fetchUser');
            console.log('fetch user')
            if (getUser) {
                return true
            } else {
                alert('Server Error')
                next({ name: 'login' })
                return false
            }
        } else {
            return true
        }

    } else {
        next({ name: 'login' });
        return false;
    }

}
