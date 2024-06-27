const { createApp } = Vue;

createApp({
  data() {
    return {
      itemName: "",
      itemValue: "",
      error: false,
      ToDoList: [
        {
          Name: "Spesa",
          Value: "0",
        },
        {
          Name: "Compiti",
          Value: "1",
        },
        {
          Name: "Colazione",
          Value: "0",
        }
      ],
    };
  },
  methods: {
    AddItem() {
      let item = {
        Name: this.itemName,
        Value: this.itemValue,
      };
      if (item.Name.length >4 && this.itemValue != "") {
        this.ToDoList.unshift(item);
        this.itemName = "";
        this.itemValue = "";
        this.error=false
      }else{
        this.error=true
      }
    },
    RemoveItem(index) {
      this.ToDoList.splice(index, 1);
    },
    ChangeValue(index) {
      if (this.ToDoList[index].Value == 0) {
        this.ToDoList[index].Value = parseInt(this.ToDoList[index].Value) + 1;
      } else {
        this.ToDoList[index].Value = parseInt(this.ToDoList[index].Value) - 1;
      }
    },
  },
}).mount("#container");
