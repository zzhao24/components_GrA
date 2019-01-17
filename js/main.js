(()=> { console.log('connected');

//create component first
const HomePageComponent = {
    template:"<h2>This is the home page</h2>"
}

const UserPageComponent = {
    template:"<h2>This is the user page</h2>"
}

const routes = [
    {path: '/', name: 'home', component: 'HomePageComponent' }, //root through the application
    {path: '/contact', name: 'contact',component: 'contactcomponent'},
    {path: '/users', name:'users', component: 'usercomponent'}
]

const router = new VueRouter({
routes
});
// then your vue instance
const vm = new Vue({
    el: '#app',

    data: {
        message: "sup?"
    },

methods: {
calledOnParent(){
     console.log("this method lives in the main VM and was called from a component");
}
},

created:function(){
     console.log("this is a main vuew unstance");
},

    components: {
        'homepagecomponent': HomePageComponent,
        'usercomponent': UserPageComponent,
        'contactpagecomponent': contactpagecomponent,
    }

})


})();
