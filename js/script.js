const { createApp } = Vue

createApp({

    data() {
        return{
            emailList: []
        }
    },

    methods: {
        generateEmail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp)=> {

                        console.log(resp.data.response);
                        this.email= resp.data.response
                        this.emailList.push(this.email);

                    });
            } 
        }
    }
    
}).mount('#app')