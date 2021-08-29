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
  
  ![g](https://user-images.githubusercontent.com/68433936/131260618-b49cb240-c08c-43e6-8094-f500f67e2bef.png)

  
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

![f](https://user-images.githubusercontent.com/68433936/131260622-93f2d088-6965-40fa-98dd-c33521e33f1c.png)

  
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

![e](https://user-images.githubusercontent.com/68433936/131260630-777e3a3e-bfa6-467f-90fd-8d30d2dd0ce5.png)

![d](https://user-images.githubusercontent.com/68433936/131260628-d0fa1d5a-7ec4-4491-805e-c03daa701234.png)

  
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

![c](https://user-images.githubusercontent.com/68433936/131260632-7d0dbecc-1d96-4991-a360-8ce0141e17b7.png)

  
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
  
  ![b](https://user-images.githubusercontent.com/68433936/131260636-cf21ac39-334a-4898-8f63-e21a06388e0a.png)
  
  ![a](https://user-images.githubusercontent.com/68433936/131260529-68157b40-32a1-4a99-995d-5efc3519b1bf.png)


