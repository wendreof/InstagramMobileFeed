import axios from 'axios'
import { YellowBox} from 'react-native'

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

const api = axios.create({
    baseURL: 'http://192.168.0.103:3333'
})

export default api;