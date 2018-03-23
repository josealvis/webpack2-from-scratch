let template  =  `

<v-content>
<v-container fluid>
<h1>{{message}}</h1>
<v-btn color="success" @click="backword" >Success</v-btn>
</v-container>
</v-content>

`

let data = ()=>{
    return {
      message: 'hello world'

    }
};

let methods = {
   backword(){
    this.message= 'hi';
   }   
}



Vue.component('main-app',{
    template,
    data, 
    methods
})