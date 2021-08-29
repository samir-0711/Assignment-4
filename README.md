# Assignment-4
REST APIs

## 1. Get All Products

* **URL**

  `/products`

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "1 Product(s) Delivered", data: { _id : 6074fb9d7e8466001570e7db, id: "1", name: "chocolate", email: "chocolate@gmail.com", location: "India", createdAt: "2021-08-29T19:29:33.231Z", updatedAt: "2021-08-29T19:29:33.231Z" }}`

* **Sample Call:**

```javascript
    axios.get(
    "https://assignment-4-group-19.herokuapp.com/products");
  ```
  
## 2. Get Product by Id

* **URL**

  `/products/:id`

* **Method:**

  `GET`
  
*  **URL Params**

   id

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "1 Product Found", data: { _id : 6074fb9d7e8466001570e7db, id: "1", name: "chocolate", email: "chocolate@gmail.com", location: "India", createdAt: "2021-08-29T19:29:33.231Z", updatedAt: "2021-08-29T19:29:33.231Z" }}`

* **Code:** 405 <br />
    **Content:** `{ error : "Id is Missing" }`

* **Sample Call:**

```javascript
    axios.get(
    "https://assignment-4-group-19.herokuapp.com/products/1");
  ```
  
## 3. Add Product

* **URL**

  `/products`

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

   **Required:**
 
   `id=[String]`
   
   `name=[String]`
   
   **Optional**
   
   `email=[String]`
   
   `location=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "Product Added", data: { _id : 6074fb9d7e8466001570e7db, id: "2", name: "chocolate", email: "chocolate@gmail.com", location: "India", createdAt: "2021-08-29T19:29:33.231Z", updatedAt: "2021-08-29T19:29:33.231Z" }}`

* **Code:** 405 <br />
    **Content:** `{ error : "Id or Name is Missing" }`

* **Sample Call:**

```javascript
    axios.post(
    "https://assignment-4-group-19.herokuapp.com/products",
    {
      "id": "2",
      "name": "chocolate",
      "email": "chocolate@gmail.com",
      "location": "India"
    });
  ```
  
## 4. Update Product

* **URL**

  `/products`

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

   **Required:**
 
   `id=[String]`
   
   **Optional**
   
   `name=[String]`
   
   `email=[String]`
   
   `location=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "Product Updated", data: { _id : 6074fb9d7e8466001570e7db, id: "2", name: "chocolate", email: "chocolate@gmail.com", location: "India", createdAt: "2021-08-29T19:29:33.231Z", updatedAt: "2021-08-29T19:29:33.231Z" }}`

* **Code:** 405 <br />
    **Content:** `{ error : "Id is Missing" }`

* **Sample Call:**

```javascript
    axios.put(
    "https://assignment-4-group-19.herokuapp.com/products",
    {
      "id": "2",
      "name": "chocolate",
      "email": "chocolate@gmail.com",
      "location": "India"
    });
  ```
  
## 5. Delete Product by Id

* **URL**

  `/products/:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

   id

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "Product Deleted", data: { _id : 6074fb9d7e8466001570e7db, id: "1", name: "chocolate", email: "chocolate@gmail.com", location: "India", createdAt: "2021-08-29T19:29:33.231Z", updatedAt: "2021-08-29T19:29:33.231Z" }}`

* **Code:** 405 <br />
    **Content:** `{ error : "Id is Missing" }`

* **Sample Call:**

```javascript
    axios.delete(
    "https://assignment-4-group-19.herokuapp.com/products/1");
  ```
