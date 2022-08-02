// class Todo {
//   id: string;
//   text: string;
//   constructor(todoText: string) {
//     this.text = todoText;
//     this.id = Math.random().toString();
//   }
// }

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount: number;
};

// export default Todo;
export default Product;