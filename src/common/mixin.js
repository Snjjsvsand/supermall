//混入
import {debounce} from 'common/utils'

export const itemListenerMixin = {
    mounted(){
        let refresh;
        if(this.$refs.scroll){ 
            refresh = debounce(this.$refs.scroll.refresh , 100);
        }
        this.itemImgListener = refresh;
        this.$bus.$on('imgLoad' , this.itemImgListener);
    },
    // activated(){
    //     let refresh;
    //     if(this.$refs.scroll){ 
    //         refresh = debounce(this.$refs.scroll.refresh , 100);
    //     }
    //     this.itemImgListener = refresh;
    //     this.$bus.$on('imgLoad' , this.itemImgListener);
    // }
}

import BackTop from 'components/content/backTop/BackTop'

export const backTop = {
    components:{
        BackTop
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0 , 0 , 300);
        }
    }

}