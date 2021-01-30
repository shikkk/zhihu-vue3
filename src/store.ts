import { createStore } from 'vuex'
import { testData, testDetails, ColumnProps, DetailsProps} from './assets/testData'
interface UserProps{
    isLogin: boolean;
    name?: string;
    id?: number;
}
export interface CommonDataProps {
    columnList: ColumnProps[];
    detailList: DetailsProps[];
    userInfo: UserProps;
}
const store = createStore<CommonDataProps>({
    state: {
        columnList: testData,
        detailList: testDetails,
        userInfo: {
            isLogin: false
        }
    },
    mutations: {
        login (state) {
            state.userInfo = {
                ...state.userInfo,
                isLogin: true,
                name: 'shizhikai'
            }
        }
    }
})
export default store
