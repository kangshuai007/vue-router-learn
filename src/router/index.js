import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      component:Error,
      name:'Error',
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      //正则 +表示匹配前面的字符一次或者多次
      path: '/params/:newsId(\\d+)/:newsTitle',  
      component:Params,
      beforeEnter:(to,from,next)=>{
          console.log('我进入了params模板');
          console.log(to);
          console.log(from);
          // flase为不跳转,true为跳转,还可以是(path:'/')跳转到根目录
          next(true);
      }
    },
    {
      path:'/gohome',
      redirect:'/'

    },
    {
      path:'/hi1',
      component:Hi1
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/KS'
    }
  ]
})
