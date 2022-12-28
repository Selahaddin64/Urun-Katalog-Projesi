
export const fetchProducts = async () => {
    const res = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`,{
        headers:{
          "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
        }
      });

    const data = await res.json();
    const products: Product[] = data.products;
  
    return products;
  };