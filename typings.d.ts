interface Product {
    id: number;
    name: string;
    timeStamp: Date;
    price: number;
    description: string;
    image: string;
    likes: Array;
    likes: {
      id: number;
      email: string;
      password: number;
      name: string;
      token: string;
      timeStamp: Date;
    };
    image: Image[];
  }