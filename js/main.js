(() => {
//create a component first
const UserComponent = {
    props: ['name', 'role'],

    template: "#userstemplate"

}

// then your vue instance
const vm = new Vue({
el : "#app",

data: {
    message: "sup?"
},

methods: {
logParent(message){
    console.log('from the parent', message);
}
},

components: {
    'activeusers' : UserComponent
    }
},

});





})();