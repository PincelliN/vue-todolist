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
       if (this.itemName.lenght !="" && this.itemValue !="") {
         this.ToDoList.unshift(item);  
          this.itemName = '';
        this.itemValue = '';
       }

      
     },
     RemoveItem(index){
        this.ToDoList.splice(index,1);
     },
      ChangeValue(index){
      if (this.ToDoList[index].Value==0) {
        this.ToDoList[index].Value = (parseInt(this.ToDoList[index].Value)) + 1;
      } else {
         this.ToDoList[index].Value = (parseInt(this.ToDoList[index].Value)) - 1;
      }
      
     } 
   },
 }).mount('#container');

  