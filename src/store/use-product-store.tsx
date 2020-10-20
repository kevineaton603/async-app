import create from 'zustand';
import { getProductData, IProduct } from '../data-source';

type TProductStore = {
    products: IProduct[],
    error: string,
    fetch: () => Promise<void>,
    clear: () => void
}

const useProductStore = create<TProductStore>(set => ({
    products: [],
    error: '',
    fetch: async () => {
        try {
            const products = await getProductData();
            set(state => ({products, error: ''}));
        } catch (error) {
            set(state => ({...state, error: error}))
        }
    },
    clear: () => {
        set(state => ({products: [], error: ''}))
    }
}));

export default useProductStore;
