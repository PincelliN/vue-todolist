 const{createApp} = Vue;


 createApp({
   data() {
     return {
       itemName: '',
       itemValue: '',
       ToDoList: [],
     }
   },
   methods: {
     AddItem() {
       let item = {
         Name: this.itemName,
         Value: this.itemValue,
       }
      this.ToDoList.unshift(item),
       this.itemName = ''
       this.itemValue = ''

     },
     RemoveItem(index){
        this.ToDoList.splice(index,1);
     }
   },
 }).mount('#container');

